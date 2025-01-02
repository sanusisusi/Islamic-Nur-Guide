import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AdhanButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const AdhanButton: React.FC<AdhanButtonProps> = ({ isPlaying, onToggle }) => (
  <button
    onClick={onToggle}
    className="flex items-center space-x-2 text-white hover:text-yellow-200 transition-colors"
    title={isPlaying ? "Stop Adhan" : "Play Adhan"}
  >
    {isPlaying ? (
      <VolumeX className="w-6 h-6" />
    ) : (
      <Volume2 className="w-6 h-6" />
    )}
  </button>
);