'use client';

import { useState, useEffect } from 'react';
import { fetchSalesData } from '@/lib/api';
import StatsCard from '@/components/StatsCard';
import ChartContainer from '@/components/ChartContainer';
import FilterPanel from '@/components/FilterPanel';
import { DollarSign, ShoppingBag, CreditCard, TrendingUp } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [productList, setProductList] = useState([]);
  const [filters, setFilters] = useState({
    minValue: null,
    maxValue: null,
    product: null
  });
  const [loading, setLoading] = useState(true);

  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    async function loadData() {
      const salesData = await fetchSalesData();
      setData(salesData);
      setFilteredData(salesData);

      // Extract unique product names from pieData
      const products = salesData.pieData.map(item => item.name);
      setProductList(products);

      setLoading(false);
    }
    loadData();
  }, []);

  useEffect(() => {
    if (!data) return;

    let filtered = { ...data };

    // Filter by order value
    if (filters.minValue !== null || filters.maxValue !== null) {
      const min = filters.minValue || 0;
      const max = filters.maxValue || Infinity;

      filtered.barData = data.barData.filter(item => item.value >= min && item.value <= max);
      filtered.lineData = data.lineData.filter(item => {
        const originalIndex = data.lineData.indexOf(item);
        const originalValue = data.barData[originalIndex]?.value || 0;
        return originalValue >= min && originalValue <= max;
      });

      // Recalculate cumulative for line chart
      let cumulative = 0;
      filtered.lineData = filtered.barData.map(item => {
        cumulative += item.value;
        return { name: item.name, value: cumulative };
      });
    }

    // Filter by product
    if (filters.product) {
      filtered.pieData = data.pieData.filter(item => item.name === filters.product);
    }

    // Recalculate metrics
    const totalRevenue = filtered.barData.reduce((acc, item) => acc + item.value, 0);
    const totalOrders = filtered.barData.length;
    const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    filtered.totalRevenue = totalRevenue;
    filtered.totalOrders = totalOrders;
    filtered.averageOrderValue = averageOrderValue;

    setFilteredData(filtered);
  }, [filters, data]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (loading || !filteredData) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
        <div className="text-foreground">Loading...</div>
      </div>
    );
  }

  const { totalRevenue, totalOrders, averageOrderValue, barData, lineData, pieData } = filteredData;

  return (
    <div className="h-screen flex text-foreground overflow-hidden" style={{ background: 'var(--background)' }}>
      {/* Left Sidebar */}
      <aside className="w-64 flex flex-col border-r border-white/5 bg-white/[0.02] flex-shrink-0">
        {/* Header in Sidebar */}
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
            <button
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={14} className="text-white" />
              ) : (
                <Moon size={14} className="text-foreground" />
              )}
            </button>
          </div>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">JD</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex-1 overflow-auto p-4">
          <FilterPanel
            onFilterChange={handleFilterChange}
            activeFilters={filters}
            products={productList}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        <div className="flex-1 overflow-auto">
          <div className="h-full flex flex-col p-3 w-full">
            {/* Stats Grid - Using Flexbox */}
            <div className="flex gap-3 w-full mb-3">
              <div className="flex-1 min-w-0">
                <StatsCard
                  title="Total Revenue"
                  value={`$${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                  icon={DollarSign}
                  trend={12.5}
                />
              </div>
              <div className="flex-1 min-w-0">
                <StatsCard
                  title="Total Orders"
                  value={totalOrders.toLocaleString()}
                  icon={ShoppingBag}
                  trend={-2.4}
                />
              </div>
              <div className="flex-1 min-w-0">
                <StatsCard
                  title="Avg. Order Value"
                  value={`$${averageOrderValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                  icon={CreditCard}
                  trend={5.1}
                />
              </div>
              <div className="flex-1 min-w-0">
                <StatsCard
                  title="Conversion Rate"
                  value="3.24%"
                  icon={TrendingUp}
                  trend={0.8}
                />
              </div>
            </div>

            {/* Charts Section - Full Width and Height */}
            <div className="flex-1 min-h-0 w-full">
              <ChartContainer
                barData={barData}
                lineData={lineData}
                pieData={pieData}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
