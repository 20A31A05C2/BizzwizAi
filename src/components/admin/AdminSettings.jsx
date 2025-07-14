import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Bell, Globe } from 'lucide-react';

function AdminSettings() {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('fr');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 sm:space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-6">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
          <span>Paramètres Administrateur</span>
        </h1>
      </div>

      {/* Settings Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 max-w-lg mx-auto"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-600" />
          <span>Préférences</span>
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {/* Notifications Toggle */}
          <div className="flex items-center justify-between bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 sm:gap-3">
              <Bell className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-800 text-sm sm:text-base">Notifications</span>
            </div>
            <button
              onClick={() => setNotifications((n) => !n)}
              className={`w-10 sm:w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${notifications ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              <span
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${notifications ? 'translate-x-4 sm:translate-x-6' : 'translate-x-0'}`}
              />
            </button>
          </div>

          {/* Language Select */}
          <div className="flex items-center justify-between bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2 sm:gap-3">
              <Globe className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-purple-800 text-sm sm:text-base">Langue</span>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 sm:px-4 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-base"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 flex justify-end">
          <button
            className="px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow text-xs sm:text-base"
          >
            Sauvegarder
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AdminSettings;
