import { useRef } from 'react';

class AudioService {
  private static instance: AudioService;
  private adhan: HTMLAudioElement | null = null;

  private constructor() {
    // Initialize adhan audio
    this.adhan = new Audio('/assets/adhan.mp3');
    this.adhan.preload = 'auto';
  }

  public static getInstance(): AudioService {
    if (!AudioService.instance) {
      AudioService.instance = new AudioService();
    }
    return AudioService.instance;
  }

  public playAdhan(): void {
    if (this.adhan) {
      // Reset to beginning if already playing
      this.adhan.currentTime = 0;
      
      // Play the adhan
      this.adhan.play().catch(error => {
        console.error('Error playing adhan:', error);
      });
    }
  }

  public stopAdhan(): void {
    if (this.adhan) {
      this.adhan.pause();
      this.adhan.currentTime = 0;
    }
  }
}

export const audioService = AudioService.getInstance();