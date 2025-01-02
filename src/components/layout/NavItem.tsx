import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  active: boolean;
  mobile?: boolean;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  href,
  active,
  mobile,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerHeight = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      onClick?.();
    }
  };

  if (mobile) {
    return (
      <motion.li whileHover={{ x: 10 }} className="block">
        <a
          href={href}
          onClick={handleClick}
          className={`flex items-center w-full py-2 px-4 rounded-lg transition-colors ${
            active
              ? 'text-white bg-indigo-700/50'
              : 'text-white/80 hover:text-white hover:bg-indigo-700/30'
          }`}
        >
          <Icon className="w-4 h-4 mr-3" />
          <span>{label}</span>
        </a>
      </motion.li>
    );
  }

  return (
    <motion.li whileHover={{ y: -2 }} className="relative">
      <a
        href={href}
        onClick={handleClick}
        className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
          active
            ? 'text-white bg-indigo-700/50'
            : 'text-white/80 hover:text-white hover:bg-indigo-700/30'
        }`}
      >
        <Icon className="w-4 h-4 mr-1" />
        <span>{label}</span>
      </a>
      {active && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-300"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.li>
  );
};