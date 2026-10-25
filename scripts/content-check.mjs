import { createServer } from 'vite';

const server = await createServer({
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const [home, caseContent, configuration, cv, legal] = await Promise.all([
    server.ssrLoadModule('/src/content/home.ts'),
    server.ssrLoadModule('/src/content/cases.ts'),
    server.ssrLoadModule('/src/content/config.ts'),
    server.ssrLoadModule('/src/content/cv.ts'),
    server.ssrLoadModule('/src/content/legal.ts'),
  ]);

  const publishedCases = caseContent.cases.filter((item) => !item.draft);
  const renderedCases = publishedCases.map(({ openItems, ...item }) => item);
  const casesWithOpenItems = caseContent.cases.filter((item) => item.openItems?.length);
  const draftCases = caseContent.cases.filter((item) => item.draft);
  const publicContent = {
    ...home,
    cases: renderedCases,
    sectionLabels: caseContent.sectionLabels,
    ...configuration,
    ...cv,
    ...legal,
  };
  const issues = [];
  const markerPattern = /\[(BELEG FEHLT|FREIGABE PRÜFEN)\b/;

  function inspect(value, path) {
    if (typeof value === 'string') {
      const match = value.match(markerPattern);
      if (match) issues.push(`${path}: [${match[1]}]`);
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((item, index) => inspect(item, `${path}[${index}]`));
      return;
    }
    if (value && typeof value === 'object') {
      Object.entries(value).forEach(([key, item]) => inspect(item, `${path}.${key}`));
    }
  }

  console.log(`Production sichtbar (${publishedCases.length}): ${publishedCases.map((item) => item.slug).join(', ')}`);
  const openItemCount = casesWithOpenItems.reduce((count, item) => count + item.openItems.length, 0);
  console.warn(`Warnung: ${openItemCount} offene Punkte in ${casesWithOpenItems.length} Fallstudien:`);
  casesWithOpenItems.forEach((item) => {
    console.warn(`- ${item.slug}: ${item.openItems.length} offene Punkte`);
    item.openItems.forEach((openItem) => console.warn(`  - ${openItem}`));
  });
  console.warn(`Warnung: ${draftCases.length} Fallstudien mit draft: true (in Production ausgeblendet): ${draftCases.map((item) => item.slug).join(', ')}`);

  inspect(publicContent, 'content');
  if (issues.length) {
    console.error(`Content-Check fehlgeschlagen: ${issues.length} ungeklärte Markierung(en) in veröffentlichten Inhalten.`);
    issues.forEach((issue) => console.error(`- ${issue}`));
    process.exitCode = 1;
  } else {
    console.log('Content-Check erfolgreich: Keine ungeklärten Markierungen in veröffentlichten Inhalten.');
  }
} catch (error) {
  console.error('Content-Check konnte nicht ausgeführt werden:', error);
  process.exitCode = 1;
} finally {
  await server.close();
}
