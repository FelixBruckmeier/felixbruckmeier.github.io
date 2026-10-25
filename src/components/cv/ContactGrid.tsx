import type { Contact } from '../../content/cv';

type ContactGridProps = {
  contacts: readonly Contact[];
  label: string;
};

export default function ContactGrid({ contacts, label }: ContactGridProps) {
  return (
    <address className="cv-contacts" aria-label={label}>
      {contacts.map((contact) => (
        <div className="cv-contact" key={contact.label}>
          <span>{contact.label}</span>
          <a
            className={contact.nowrap ? 'cv-contact-value cv-contact-value--nowrap' : 'cv-contact-value'}
            href={contact.href}
          >
            {contact.value}
          </a>
        </div>
      ))}
    </address>
  );
}
