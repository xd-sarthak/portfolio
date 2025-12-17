export function parseLongDescription(text: string) {
  if (!text) return [];

  const sections = [];
  const raw = text.split(/\*\*([^*]+)\*\*/g); // Split by **Section Title**

  for (let i = 1; i < raw.length; i += 2) {
    const title = raw[i].trim();
    const content = raw[i + 1]?.trim() || "";

    // Convert "- item" into an array
    const bulletPoints = content
      .split("\n")
      .filter((line) => line.trim().startsWith("-"))
      .map((line) => line.replace("-", "").trim());

    sections.push({
      title,
      content,
      bullets: bulletPoints.length > 0 ? bulletPoints : null,
    });
  }

  return sections;
}
