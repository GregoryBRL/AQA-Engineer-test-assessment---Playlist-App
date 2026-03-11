export function parseDurationToSeconds(duration: string): number {
  const [mm, ss] = duration.split(':').map(Number);
  return mm * 60 + ss;
}