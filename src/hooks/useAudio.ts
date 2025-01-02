import { useRef } from 'react';

export const useAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAdhan = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/adhan.mp3');
    }
    audioRef.current.play();
  };

  const stopAdhan = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return { playAdhan, stopAdhan };
};