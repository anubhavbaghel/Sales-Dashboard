import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export default function StatsCard({ title, value, icon: Icon, trend }) {
    const isPositive = trend > 0;
    const isNeutral = trend === 0;

    return (
        <div className="glass-panel p-6 flex flex-col justify-between gap-4 transition-all duration-300 hover:scale-[1.02] hover:border-white/20">
            <div className="flex items-start justify-between">
                <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                    <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                </div>
                {trend !== undefined && (
                    <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${isPositive ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        isNeutral ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                        {isPositive ? <ArrowUpRight size={14} /> : isNeutral ? <Minus size={14} /> : <ArrowDownRight size={14} />}
                        <span>{Math.abs(trend)}%</span>
                    </div>
                )}
            </div>
            <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{title}</h3>
                <p className="text-3xl font-bold mt-2 text-foreground">{value}</p>
            </div>
        </div>
    );
}
