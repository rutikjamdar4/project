import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

type RiskLevel = 'high' | 'medium' | 'low';

interface TransactionCardProps {
  amount: number;
  merchant: string;
  timestamp: string;
  riskLevel: RiskLevel;
  status: 'approved' | 'pending' | 'flagged';
}

const getRiskColor = (risk: RiskLevel) => {
  switch (risk) {
    case 'high':
      return 'text-red-600';
    case 'medium':
      return 'text-yellow-600';
    case 'low':
      return 'text-green-600';
    default:
      return 'text-gray-600';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'approved':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'pending':
      return <Clock className="w-5 h-5 text-yellow-500" />;
    case 'flagged':
      return <AlertTriangle className="w-5 h-5 text-red-500" />;
    default:
      return null;
  }
};

export function TransactionCard({ amount, merchant, timestamp, riskLevel, status }: TransactionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-gray-800">{merchant}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon(status)}
          <span className={`text-sm font-medium ${getRiskColor(riskLevel)}`}>
            {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">${amount.toFixed(2)}</span>
        <span className="text-sm font-medium capitalize text-gray-600">{status}</span>
      </div>
    </div>
  );
}