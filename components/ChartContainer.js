'use client';

import { useState } from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';
import { BarChart3, LineChart as LucideLineChart, PieChart as LucidePieChart } from 'lucide-react';

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];

export default function ChartContainer({ barData, lineData, pieData }) {
    const [activeTab, setActiveTab] = useState('bar');

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="glass-panel p-3 text-sm border border-white/20">
                    <p className="font-bold mb-1 text-white">{label}</p>
                    <p className="text-white">{`Revenue: $${payload[0].value.toFixed(2)}`}</p>
                </div>
            );
        }
        return null;
    };

    const PieTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="glass-panel p-3 text-sm border border-white/20">
                    <p className="font-bold mb-1 text-white">{payload[0].name}</p>
                    <p className="text-white">{`Revenue: $${payload[0].value.toFixed(2)}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="glass-panel p-4 flex flex-col h-full">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-foreground">Sales Analytics</h2>
                <div className="flex bg-white/5 rounded-lg p-1 gap-1 border border-white/10">
                    <button
                        onClick={() => setActiveTab('bar')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'bar'
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-400 hover:text-foreground hover:bg-white/5'
                            }`}
                    >
                        <BarChart3 size={14} />
                        <span className="hidden md:inline">Bar</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('line')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'line'
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-400 hover:text-foreground hover:bg-white/5'
                            }`}
                    >
                        <LucideLineChart size={14} />
                        <span className="hidden md:inline">Line</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('pie')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'pie'
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-400 hover:text-foreground hover:bg-white/5'
                            }`}
                    >
                        <LucidePieChart size={14} />
                        <span className="hidden md:inline">Pie</span>
                    </button>
                </div>
            </div>

            <div className="w-full flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    {activeTab === 'bar' ? (
                        <BarChart data={barData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" vertical={false} />
                            <XAxis
                                dataKey="name"
                                stroke="var(--chart-axis)"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => value.replace('Order #', '#')}
                            />
                            <YAxis
                                stroke="var(--chart-axis)"
                                fontSize={11}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                            <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} animationDuration={800} />
                        </BarChart>
                    ) : activeTab === 'line' ? (
                        <LineChart data={lineData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" vertical={false} />
                            <XAxis
                                dataKey="name"
                                stroke="var(--chart-axis)"
                                fontSize={10}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => value.replace('Order #', '#')}
                            />
                            <YAxis
                                stroke="var(--chart-axis)"
                                fontSize={11}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#8b5cf6"
                                strokeWidth={3}
                                dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 0 }}
                                activeDot={{ r: 6, fill: '#8b5cf6' }}
                                animationDuration={800}
                            />
                        </LineChart>
                    ) : (
                        <PieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={80}
                                outerRadius={140}
                                paddingAngle={2}
                                dataKey="value"
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                labelLine={{ stroke: 'var(--chart-axis)', strokeWidth: 1 }}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(0,0,0,0.5)" strokeWidth={2} />
                                ))}
                            </Pie>
                            <Tooltip content={<PieTooltip />} />
                        </PieChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
}
