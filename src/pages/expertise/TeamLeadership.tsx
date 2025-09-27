import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "@/components/expertise/Section";
import InfoCard from "@/components/expertise/InfoCard";
import RolesSpider from "@/components/expertise/TeamLeadership/RolesSpider"; // <--- NEU importiert

export default function TeamLeadership() {
  return (
    <div className="flex flex-col gap-20 px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6">Leadership & Mentoring</h1>
        <h2 className="text-xl text-muted-foreground mb-8">
          Building and Leading High-Performing UX Research Teams
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Als UX Research Lead messe ich meinen Erfolg nicht nur an den Insights,
          die wir liefern, sondern auch an der Stärke und Entwicklung meines
          Teams. Mein Führungsstil ist geprägt von Transparenz, Empowerment und
          der Überzeugung, dass individuelle Entwicklung der Schlüssel zu
          kollektiver Exzellenz ist.
        </p>
      </section>

      {/* Leadership Philosophy */}
      <Section title="Meine Leadership-Philosophie">
        <p className="max-w-3xl mb-6">
          Für mich bedeutet Leadership nicht Kontrolle, sondern Enablement:
          Strukturen schaffen, in denen andere ihre Stärken entfalten können.
          Mentoring und Coaching sind zentrale Werkzeuge, ebenso wie der Aufbau
          einer Kultur der Exzellenz, Offenheit und gegenseitigen Unterstützung.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title="Enablement statt Kontrolle">
            Ich gebe Orientierung und Rahmenbedingungen, statt Mikro-Management
            zu betreiben.
          </InfoCard>
          <InfoCard title="Mentoring & Coaching">
            Individuelle 1:1-Entwicklung und Peer-Learning fördern kontinuierliches Wachstum.
          </InfoCard>
          <InfoCard title="Kultur der Exzellenz">
            Qualität und Zusammenarbeit stehen im Mittelpunkt – jeder Beitrag zählt.
          </InfoCard>
        </div>
      </Section>

      {/* Rollen & Verantwortlichkeiten mit Spider-Chart */}
      <Section title="Rollen & Verantwortlichkeiten">
        <p className="max-w-3xl mb-6 text-center">
          Je nach Auftrag, Unternehmenskontext und Team-Struktur nehme ich
          unterschiedliche Rollen wahr – oft auch mehrere gleichzeitig. 
          Das folgende Spider-Diagramm zeigt die Ausprägung dieser Rollen 
          (Skala 1 = gering, 5 = hoch).
        </p>
        <RolesSpider />
      </Section>

      {/* Skill Development */}
      <Section title="Skill Assessment & Entwicklung">
        <p className="max-w-3xl mb-6">
          Ich nutze Skill Maps und Frameworks, um Talente sichtbar zu machen, 
          Entwicklungspfade zu definieren und das Team systematisch wachsen zu lassen. 
          Für ein interaktives Assessment mit einer{" "}
          <strong>Skill Progression Map</strong> findest du alles auf einer eigenen Seite.
        </p>
        <div className="flex justify-center">
          <Link
            to="/expertise/Skillmap"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Zur Skill Assessment Seite <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </div>
  );
}
