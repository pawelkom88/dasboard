export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}

export function formatTime(date: string): string {
  return new Date(date).toLocaleTimeString();
}
