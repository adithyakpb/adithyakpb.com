// Google Sheets ID for TimelineJS
// Create a sheet from the TimelineJS template: https://timeline.knightlab.com/
// Publish the sheet to the web, then paste the sheet ID here.
export const TIMELINE_SHEET_ID = '';

// TimelineJS embed URL (leave empty if no sheet ID yet)
export function getTimelineUrl(): string | null {
  if (!TIMELINE_SHEET_ID) return null;
  return `https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=${TIMELINE_SHEET_ID}&font=Default&lang=en&initial_zoom=2&height=650`;
}
