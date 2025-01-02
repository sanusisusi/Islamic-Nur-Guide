import { format } from 'date-fns';
import { showPrayerNotification } from './notification';
import { audioService } from '../services/audioService';

let lastNotificationTime: string | null = null;

export const checkPrayerTime = (
  prayerTimes: { name: string; time: string }[]
) => {
  const currentTime = format(new Date(), 'HH:mm');
  
  // Check if we've already sent a notification for this minute
  if (lastNotificationTime === currentTime) {
    return;
  }
  
  prayerTimes.forEach(prayer => {
    if (prayer.time === currentTime) {
      showPrayerNotification(prayer.name);
      lastNotificationTime = currentTime;
      
      // Play Adhan
      audioService.playAdhan();
    }
  });
};