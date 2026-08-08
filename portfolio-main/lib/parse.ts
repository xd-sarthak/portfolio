export interface ParsedImage {
  alt: string;
  src: string;
}

export interface ParsedSection {
  title: string;
  /** Prose that appears before the bullet list (or the whole body when there are no bullets). */
  intro: string;
  /** Full body text minus the image, kept for backwards compatibility. */
  content: string;
  bullets: string[] | null;
  image: ParsedImage | null;
}

export interface ParsedLongDescription {
  /** Opening paragraphs that appear before the first section heading. */
  lead: string;
  sections: ParsedSection[];
}

const IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/;
const HEADING_RE = /^\*\*(.+?)\*\*$/;

function buildSection(title: string, bodyLines: string[]): ParsedSection {
  const body = bodyLines.join("\n");

  const imageMatch = body.match(IMAGE_RE);
  const image = imageMatch ? { alt: imageMatch[1], src: imageMatch[2] } : null;

  const withoutImage = bodyLines.filter((line) => !IMAGE_RE.test(line));

  const bullets = withoutImage
    .filter((line) => line.trim().startsWith("-"))
    .map((line) => line.trim().replace(/^-\s*/, ""));

  const intro = withoutImage
    .filter((line) => !line.trim().startsWith("-"))
    .join("\n")
    .trim();

  return {
    title,
    intro,
    content: withoutImage.join("\n").trim(),
    bullets: bullets.length > 0 ? bullets : null,
    image,
  };
}

/**
 * Splits a project's longDescription into a lead paragraph plus sections.
 *
 * A section heading is a line consisting only of `**Title**`. Bold and `code`
 * used inline within a paragraph or bullet are left intact for the renderer.
 */
export function parseLongDescription(text: string): ParsedSection[] {
  return parseLongDescriptionFull(text).sections;
}

export function parseLongDescriptionFull(text: string): ParsedLongDescription {
  if (!text) return { lead: "", sections: [] };

  const leadLines: string[] = [];
  const sections: { title: string; lines: string[] }[] = [];

  for (const line of text.split("\n")) {
    const heading = line.trim().match(HEADING_RE);

    if (heading) {
      sections.push({ title: heading[1].trim(), lines: [] });
      continue;
    }

    if (sections.length === 0) {
      leadLines.push(line);
    } else {
      sections[sections.length - 1].lines.push(line);
    }
  }

  return {
    lead: leadLines.join("\n").trim(),
    sections: sections.map((s) => buildSection(s.title, s.lines)),
  };
}
