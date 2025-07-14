import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  FolderOpen, 
  UserPlus, 
  Target,
  BarChart3,
  Globe,
  Calendar,
  Award,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const AdminDashboard = () => {
  const kpiData = [
    { title: 'Projets Actifs', value: '12', icon: FolderOpen, trend: '+15%', color: 'from-blue-500 to-cyan-500' },
    { title: 'Revenus Mensuels', value: '€45,200', icon: DollarSign, trend: '+23%', color: 'from-green-500 to-emerald-500' },
    { title: 'Clients Actifs', value: '28', icon: Users, trend: '+8%', color: 'from-purple-500 to-pink-500' },
    { title: 'Taux de Satisfaction', value: '96%', icon: Award, trend: '+2%', color: 'from-orange-500 to-red-500' },
    { title: 'Nouvelles Inscriptions', value: '7', icon: UserPlus, trend: '+12%', color: 'from-indigo-500 to-purple-500' },
    { title: 'Projets Terminés', value: '34', icon: CheckCircle, trend: '+18%', color: 'from-teal-500 to-green-500' }
  ];

  const recentProjects = [
    { name: 'EYVO AI', client: 'TechCorp', status: 'En cours', progress: 45, budget: '€85,000' },
    { name: 'FinanceApp Pro', client: 'BankCorp', status: 'Terminé', progress: 100, budget: '€65,000' },
    { name: 'E-commerce Plus', client: 'ShopTech', status: 'En cours', progress: 78, budget: '€42,000' },
    { name: 'Analytics Dashboard', client: 'DataCorp', status: 'Planification', progress: 15, budget: '€38,000' }
  ];

  const teamPerformance = [
    { name: 'SHANKAR', role: 'Chef d\'équipe', projets: 8, satisfaction: 98, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'VINEL', role: 'Développeur', projets: 12, satisfaction: 95, avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' }
  ];

  const marketingMetrics = [
    { metric: 'Taux de Conversion', value: '12.5%', change: '+3.2%' },
    { metric: 'Coût d\'Acquisition', value: '€245', change: '-8%' },
    { metric: 'Valeur Vie Client', value: '€15,400', change: '+15%' },
    { metric: 'Taux de Rétention', value: '89%', change: '+5%' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard Admin - SIMO</h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">Vue 360° de BIZZ PLACE - Gestion & Marketing</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${kpi.color} rounded-xl flex items-center justify-center`}>
                <kpi.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-green-600">
                {kpi.trend}
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{kpi.value}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{kpi.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vue d'ensemble des projets et équipes */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {/* Projets Récents */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 overflow-x-auto"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 flex items-center space-x-2">
            <FolderOpen className="w-5 h-5 text-blue-600" />
            <span>Projets Récents</span>
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2 sm:gap-0">
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm sm:text-base">{project.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Terminé' ? 'bg-green-100 text-green-800' :
                      project.status === 'En cours' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-gray-800 mt-1">{project.budget}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Métriques Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-4 sm:p-6"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <Target className="w-5 h-5 text-purple-600" />
          <span>Métriques Marketing & Business</span>
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {marketingMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4 rounded-lg border border-gray-200"
            >
              <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">{metric.metric}</h3>
              <div className="flex items-center justify-between">
                <span className="text-base sm:text-xl font-bold text-gray-800">{metric.value}</span>
                <span className={`text-xs sm:text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Nouvelles Inscriptions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-4 sm:p-6"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 flex items-center space-x-2">
          <UserPlus className="w-5 h-5 text-orange-600" />
          <span>Nouvelles Inscriptions</span>
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {[
            { name: 'Jean Dupont', company: 'TechStart SAS', project: 'E-commerce Platform', budget: '€50,000' },
            { name: 'Marie Martin', company: 'FinTech Solutions', project: 'Banking App', budget: '€75,000' },
            { name: 'Pierre Durand', company: 'RetailCorp', project: 'Inventory System', budget: '€35,000' }
          ].map((inscription, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <h3 className="font-medium text-gray-800 text-sm sm:text-base">{inscription.name}</h3>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                  Nouveau
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">{inscription.company}</p>
              <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2">{inscription.project}</p>
              <p className="text-xs sm:text-sm font-medium text-green-600">{inscription.budget}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboard;