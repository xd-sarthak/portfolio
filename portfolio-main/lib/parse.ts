export function parseLongDescription(text: string) {
  if (!text) return [];

  const sections = [];
  const raw = text.split(/\*\*([^*]+)\*\*/g); // Split by **Section Title**

  for (let i = 1; i < raw.length; i += 2) {
    const title = raw[i].trim();
    const content = raw[i + 1]?.trim() || "";

    // Extract image markdown: ![alt](src)
    const imageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    const image = imageMatch ? { alt: imageMatch[1], src: imageMatch[2] } : null;

    // Remove image line from content for bullet/text parsing
    const cleanedContent = content.replace(/!\[[^\]]*\]\([^)]+\)\s*/g, "").trim();

    // Convert "- item" into an array
    const bulletPoints = cleanedContent
      .split("\n")
      .filter((line) => line.trim().startsWith("-"))
      .map((line) => line.replace("-", "").trim());

    sections.push({
      title,
      content: cleanedContent,
      bullets: bulletPoints.length > 0 ? bulletPoints : null,
      image,
    });
  }

  return sections;
}
