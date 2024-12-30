import React from 'react';
import { Shield, Bell, Settings } from 'lucide-react';
import { TransactionCard } from './components/TransactionCard';
import { RiskMetricsCard } from './components/RiskMetricsCard';

const recentTransactions = [
  {
    amount: 1299.99,
    merchant: "Tech Galaxy Electronics",
    timestamp: "2024-03-15 14:23",
    riskLevel: "high",
    status: "flagged"
  },
  {
    amount: 85.50,
    merchant: "Daily Grocers Market",
    timestamp: "2024-03-15 12:45",
    riskLevel: "low",
    status: "approved"
  },
  {
    amount: 499.99,
    merchant: "Fashion Forward",
    timestamp: "2024-03-15 10:30",
    riskLevel: "medium",
    status: "pending"
  }
] as const;

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">FraudGuard AI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Risk Metrics Overview</h2>
          <RiskMetricsCard />
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View All
            </button>
          </div>
          <div className="grid gap-4">
            {recentTransactions.map((transaction, index) => (
              <TransactionCard key={index} {...transaction} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;