import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const messages = [
  'Booting environment...',
  'Compiling AI models...',
  'Resolving neural networks...',
  'Fetching project databases...',
  'Santhosh Naik Portfolio Active.'
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    // Progress counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small buffer before fade out
          return 100;
        }
        // Increment randomly for natural feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    // Message rotation
    const msgTimer = setInterval(() => {
      setMsgIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 550);

    return () => {
      clearInterval(timer);
      clearInterval(msgTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 bg-[#030712] z-[9999] flex flex-col items-center justify-center font-mono text-white p-4"
    >
      <div className="w-full max-w-md space-y-6">
        {/* Futuristic Icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{
              rotate: 360,
              borderRadius: ["25% 75% 70% 30% / 30% 62% 38% 70%", "50% 50% 50% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-16 bg-gradient-to-tr from-white via-gray-400 to-gray-700 opacity-80"
          />
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold font-display tracking-wider bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            SANTHOSH NAIK
          </h2>
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            AI & Software Developer
          </p>
        </div>

        {/* Loading Bar Container */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span className="animate-pulse">{messages[msgIndex]}</span>
            <span>{progress}%</span>
          </div>
          
          <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              className="h-full bg-gradient-to-r from-white via-gray-400 to-gray-600 rounded-full"
            />
          </div>
        </div>

        {/* Additional Status Info */}
        <div className="flex items-center justify-between text-[10px] text-gray-600 border-t border-gray-900 pt-4 font-mono">
          <span>LOC: KARNATAKA, IN</span>
          <span>SYS: REACT_VITE_SYS</span>
          <span>VER: 4.3.0</span>
        </div>
      </div>
    </motion.div>
  );
}
