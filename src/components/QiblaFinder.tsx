import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export const QiblaFinder: React.FC = () => {
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null);
  const [deviceDirection, setDeviceDirection] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const qibla = calculateQiblaDirection(latitude, longitude);
          setQiblaDirection(qibla);
          
          if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientationabsolute', handleOrientation);
            // Fallback to non-absolute orientation
            window.addEventListener('deviceorientation', handleOrientation);
          } else {
            setError('Compass not available on this device');
          }
        },
        () => setError('Unable to get location')
      );
    } else {
      setError('Geolocation not supported');
    }

    return () => {
      window.removeEventListener('deviceorientationabsolute', handleOrientation);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const handleOrientation = (event: DeviceOrientationEvent) => {
    let direction = event.alpha || 0;
    if (event.webkitCompassHeading) {
      // iOS devices
      direction = event.webkitCompassHeading;
    }
    setDeviceDirection(direction);
  };

  const calculateQiblaDirection = (lat1: number, lon1: number): number => {
    const lat2 = 21.4225; // Kaaba latitude
    const lon2 = 39.8262; // Kaaba longitude
    
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;
    
    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1)*Math.sin(φ2) - Math.sin(φ1)*Math.cos(φ2)*Math.cos(Δλ);
    const θ = Math.atan2(y, x);
    
    return (θ*180/Math.PI + 360) % 360;
  };

  const getRelativeQiblaDirection = (): number => {
    if (qiblaDirection === null) return 0;
    return (qiblaDirection - deviceDirection + 360) % 360;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
        <Compass className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Qibla Finder</h2>
      </div>

      <div className="text-center">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="space-y-4">
            <motion.div
              style={{ transform: `rotate(${deviceDirection}deg)` }}
              className="w-48 h-48 mx-auto relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Compass className="w-full h-full text-blue-600" />
                <div 
                  className="absolute w-2 h-16 bg-green-500"
                  style={{ 
                    transform: `rotate(${getRelativeQiblaDirection()}deg)`,
                    transformOrigin: 'center bottom'
                  }}
                />
              </div>
            </motion.div>
            
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>Rotate your device to find Qibla direction</p>
              <p>The green arrow points to the Qibla</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};