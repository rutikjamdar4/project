import React from 'react';
import { TrendingUp, AlertOctagon, ShieldCheck } from 'lucide-react';

interface MetricProps {
  title: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
}

function Metric({ title, value, trend, icon }: MetricProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="p-3 bg-blue-50 rounded-full">{icon}</div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="flex items-center space-x-2">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <span className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        </div>
      </div>
    </div>
  );
}

export function RiskMetricsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Metric
        title="Risk Score"
        value="85/100"
        trend={-2.5}
        icon={<AlertOctagon className="w-6 h-6 text-blue-600" />}
      />
      <Metric
        title="Detection Rate"
        value="97.8%"
        trend={1.2}
        icon={<ShieldCheck className="w-6 h-6 text-blue-600" />}
      />
      <Metric
        title="False Positives"
        value="0.3%"
        trend={-0.8}
        icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
      />
    </div>
  );
}