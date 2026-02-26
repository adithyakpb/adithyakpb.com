// Google Sheets published CSV URL for timeline data
// Uses the TimelineJS template format: Year, Month, Day, ..., Headline, Text, ...
// Edit the sheet directly — rebuild to update the site.
export const TIMELINE_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQWJmBkZT6ZrnVI8KOoqq6zuIIEKevii00WAxKgZmxx4wyClAlkR3_zfeSp2TiTVJFUqYbLNCIdQVAB/pub?output=csv';

export interface TimelineEntry {
  year: number;
  endYear?: number;
  displayDate?: string;
  headline: string;
  text: string;
  group?: string;
}

function parseCSVRow(row: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (inQuotes) {
      if (ch === '"' && row[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        fields.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
  }
  fields.push(current.trim());
  return fields;
}

export async function fetchTimeline(): Promise<TimelineEntry[]> {
  try {
    const res = await fetch(TIMELINE_CSV_URL);
    if (!res.ok) return [];

    const csv = await res.text();
    const lines = csv.split('\n').filter((l) => l.trim());
    if (lines.length < 2) return [];

    // Skip header row (line 0)
    const entries: TimelineEntry[] = [];

    for (let i = 1; i < lines.length; i++) {
      const cols = parseCSVRow(lines[i]);
      // TimelineJS columns: Year(0), Month(1), Day(2), Time(3), End Year(4),
      // End Month(5), End Day(6), End Time(7), Display Date(8), Headline(9),
      // Text(10), Media(11), ..., Type(16), Group(17)

      const year = parseInt(cols[0], 10);
      const headline = cols[9] || '';
      const text = cols[10] || '';
      const type = cols[16] || '';

      // Skip title slides and rows without a year
      if (type === 'title' || isNaN(year) || !headline) continue;

      const endYear = parseInt(cols[4], 10);
      const displayDate = cols[8] || '';
      const group = cols[17] || '';

      entries.push({
        year,
        endYear: isNaN(endYear) ? undefined : endYear,
        displayDate: displayDate || undefined,
        headline,
        text: text.replace(/<[^>]*>/g, ''), // strip HTML tags
        group: group || undefined,
      });
    }

    // Sort by year descending (most recent first)
    entries.sort((a, b) => b.year - a.year);
    return entries;
  } catch {
    return [];
  }
}
