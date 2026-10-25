import { config } from '../content/config';
import { type Language, translations } from '../content/i18n';

interface ContactFormProps {
  language?: Language;
}

// Mit config.formAction: POST an den Formulardienst. Ohne: E-Mail-Link als Fallback.
export default function ContactForm({ language = 'de' }: ContactFormProps) {
  const t = translations[language];

  if (!config.formAction) {
    return (
      <p className="contact__fallback">
        {t.form.fallback}<a href={`mailto:${config.email}`}>{config.email}</a>.
      </p>
    );
  }

  return (
    <form className="form" action={config.formAction} method="POST">
      <div className="form__row">
        <label htmlFor="name">{t.form.name}</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="form__row">
        <label htmlFor="email">{t.form.email}</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form__row">
        <label htmlFor="message">{t.form.message}</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <p className="form__hint">
        {t.form.privacy} <a href="/datenschutz">{t.form.privacyLink}</a>.
      </p>
      <button type="submit" className="btn btn--secondary">{t.form.submit}</button>
    </form>
  );
}
