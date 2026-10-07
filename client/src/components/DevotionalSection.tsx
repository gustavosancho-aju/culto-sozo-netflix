import { BookOpen, CircleHelp, Footprints, Heart, Quote, Sunrise } from 'lucide-react';
import type { DocumentDevotional } from '../data/weeklyDevotionals';
import './DevotionalSection.css';

export type DevotionalSectionContent = DocumentDevotional['sections'][number];

const sectionIcons = {
  'PARA COMEÇAR': Sunrise,
  'PERGUNTE AO SEU CORAÇÃO': CircleHelp,
  'PRÁTICA DO DIA': Footprints,
  'COLOQUE EM PRÁTICA': Footprints,
  'ORAÇÃO': Heart,
};

interface Props {
  section: DevotionalSectionContent;
  index: number;
  id: string;
}

export default function DevotionalSection({ section, index, id }: Props) {
  const title = section.title.toUpperCase();
  const Icon = sectionIcons[title as keyof typeof sectionIcons]
    ?? (section.kind === 'takeaway' ? Quote : BookOpen);
  const variant = title === 'ORAÇÃO' ? 'prayer' : section.kind;

  return (
    <section id={id} className={`devotional-panel devotional-panel--${variant}`} aria-labelledby={`${id}-heading`}>
      <h4 id={`${id}-heading`} className="devotional-title-plate">
        <span className="devotional-section-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>{section.title}</span>
      </h4>
      <div className="devotional-panel-body">
        {section.kind === 'questions' ? (
          <ol className="devotional-questions">
            {section.paragraphs.map((paragraph, questionIndex) => (
              <li key={paragraph}>
                <span className="devotional-question-number" aria-hidden="true">{questionIndex + 1}</span>
                <p>{paragraph}</p>
              </li>
            ))}
          </ol>
        ) : section.kind === 'verse' ? (
          <blockquote className="devotional-verse">
            <Quote className="mb-3 h-7 w-7 text-[#b79e68]" aria-hidden="true" />
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </blockquote>
        ) : (
          section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)
        )}
      </div>
    </section>
  );
}
