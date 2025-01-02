import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, X, ExternalLink, Twitter, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { SocialLink } from './common/SocialLink';

interface DeveloperProfileProps {
  onClose: () => void;
}

export const DeveloperProfile: React.FC<DeveloperProfileProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-2xl w-full relative"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center gap-6">
          <p className="text-2xl font-arabic text-gray-800 dark:text-gray-200">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
          
          <div className="w-48 h-48 relative">
            <img
              src="https://i.postimg.cc/G2mSz5P0/eqw.jpg"
              alt="Sanusi Abdulkadir"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Sanusi Abdulkadir
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Software Engineer passionate about building & innovating meaningful applications.
            </p>
            
            <div className="flex justify-center space-x-4 mb-6">
              <SocialLink href="https://twitter.com/sanusisusee" icon={Twitter} label="Twitter" />
              <SocialLink href="https://facebook.com/sanusi.bello.18294" icon={Facebook} label="Facebook" />
              <SocialLink href="https://instagram.com/sanusisusee" icon={Instagram} label="Instagram" />
              <SocialLink href="https://wa.me/+2348162844475" icon={MessageSquare} label="WhatsApp" />
              <SocialLink href="https://linkedin.com/in/sanusi-abdulkadir-7791b3169" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="mailto:sanusiabdulkadir000@gmail.com" icon={Mail} label="Email" />
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">About This Project</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Islamic Nur Guide is a comprehensive Islamic companion app developed to help Muslims track prayer times, fasting schedules, access spiritual content and more.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Go To App
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};