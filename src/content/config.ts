// Zentrale Einstellungen.
// Neue Metadaten-Felder sind begründet: Die Rollenbezeichnung soll Website, CV,
// Suchmaschinen-Snippet und LinkedIn konsistent verbinden.

export const config = {
  name: 'Felix Bruckmeier',
  role: 'UX Manager für Human-AI Work Design',
  positioning: 'Ich gestalte Arbeitssysteme aus Menschen, Teams und KI-Agenten so, dass Entscheidungen belastbar, Übergaben klar und Wirkung messbar werden.',
  siteTitle: 'Felix Bruckmeier – UX Manager für Human-AI Work Design',
  siteDescription: 'UX Management, Research und Human-AI Work Design: von der Problemklärung über klare Mensch-Agent-Workflows und testbare Prototypen bis zum Wirkungsnachweis.',
  linkedinHeadline: 'UX Manager für Human-AI Work Design | Research, Entscheidungsqualität und verantwortungsvolle Mensch-Agent-Workflows',

  /**
   * Kalender-Link für Erstgespräch / Projektbesprechung.
   * Der Button nutzt diesen Link direkt und öffnet ihn in einem neuen Tab.
   */
  calendarUrl: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0oPGXHnWXdq3-zK6GQhHm2ESA4SVlsx5ziYevEBxKE7MXlGBWgUN9yuCUp9TsirOrT9kR459cC',

  /**
   * [BELEG FEHLT] Endpoint und Anbieter des Formulardienstes bestätigen.
   * Leer = E-Mail-Fallback.
   */
  formAction: '',

  email: 'felixbruckmeier@googlemail.com',
  linkedinUrl: 'https://www.linkedin.com/in/felix-bruckmeier-89a00a1bb',
  githubUrl: 'https://github.com/FelixBruckmeier/',
  responseTime: '',
};

/*
Checkliste vor Livegang
[ ] Rollenbezeichnung in useTitle, index.html, Open-Graph-Daten und CV auf config.role vereinheitlichen.
[ ] Kalender-URL und Anbieter aus der alten Seite übernehmen oder Buchungsfunktion deaktiviert lassen.
[ ] Formular-Endpoint, Anbieter, Empfänger und Aufbewahrungsdauer bestätigen.
[ ] E-Mail, LinkedIn und GitHub im Browser testen.
[ ] Verbindliche Antwortzeit festlegen oder responseTime nicht ausgeben.
[ ] Nebentätigkeit und öffentlich kommunizierbare Verfügbarkeit klären.
*/
