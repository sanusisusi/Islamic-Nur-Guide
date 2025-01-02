export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const calculateTimeRemaining = (): TimeRemaining => {
  const ramadanStart = new Date('2025-03-01T00:00:00');
  const now = new Date();
  const difference = ramadanStart.getTime() - now.getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};