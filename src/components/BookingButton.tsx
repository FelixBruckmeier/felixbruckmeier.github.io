import { config } from '../content/config';

interface Props {
  label: string;
  variant?: 'primary' | 'small';
  openCalendar?: boolean;
}

// Hauptaktion. Ohne Kalender-Link springt sie zum Kontaktbereich.
export default function BookingButton({ label, variant = 'primary', openCalendar = false }: Props) {
  const external = openCalendar && Boolean(config.calendarUrl);
  return (
    <a
      className={`btn ${variant === 'small' ? 'btn--small' : ''}`}
      href={external ? config.calendarUrl : '/#kontakt'}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
      {external && <span className="visually-hidden"> (öffnet in neuem Tab)</span>}
    </a>
  );
}
