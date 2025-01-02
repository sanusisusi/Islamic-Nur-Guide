import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
    aria-label={label || 'Social media link'}
  >
    <Icon className="w-6 h-6" />
  </a>
);