'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';

export default function FilterPanel({ onFilterChange, activeFilters, products = [], years = [], months = [] }) {
    const [minValue, setMinValue] = useState(activeFilters.minValue || '');
    const [maxValue, setMaxValue] = useState(activeFilters.maxValue || '');
    const [selectedProduct, setSelectedProduct] = useState(activeFilters.product || '');
    const [selectedYear, setSelectedYear] = useState(activeFilters.year || '');
    const [selectedMonth, setSelectedMonth] = useState(activeFilters.month || '');

    const handleApplyFilters = () => {
        onFilterChange({
            minValue: minValue ? parseFloat(minValue) : null,
            maxValue: maxValue ? parseFloat(maxValue) : null,
            product: selectedProduct === 'All Products' ? null : selectedProduct,
            year: selectedYear ? parseInt(selectedYear) : null,
            month: selectedMonth === 'All Months' || selectedMonth === '' ? null : selectedMonth
        });
    };

    const handleReset = () => {
        setMinValue('');
        setMaxValue('');
        setSelectedProduct('');
        setSelectedYear('');
        setSelectedMonth('');
        onFilterChange({
            minValue: null,
            maxValue: null,
            product: null,
            year: null,
            month: null
        });
    };

    const hasActiveFilters = minValue || maxValue || selectedProduct || selectedYear || selectedMonth;

    return (
        <div className="glass-panel p-3">
            <div className="flex items-center gap-2 mb-3">
                <Filter size={16} className="text-foreground" />
                <h3 className="text-sm font-bold text-foreground">Filters</h3>
                {hasActiveFilters && (
                    <span className="text-xs bg-white/10 text-foreground px-2 py-0.5 rounded-full ml-auto">
                        Active
                    </span>
                )}
            </div>

            <div className="space-y-3">
                {/* Year Filter */}
                {years.length > 0 && (
                    <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                            Year
                        </label>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-foreground focus:outline-none focus:border-white/20 transition-colors"
                        >
                            <option value="">All Years</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Month Filter */}
                {months.length > 0 && (
                    <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                            Month
                        </label>
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-foreground focus:outline-none focus:border-white/20 transition-colors"
                        >
                            <option value="">All Months</option>
                            {months.map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Order Value Range */}
                <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                        Order Value
                    </label>
                    <div className="flex flex-col gap-2">
                        <input
                            type="number"
                            placeholder="Min"
                            value={minValue}
                            onChange={(e) => setMinValue(e.target.value)}
                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/20 transition-colors"
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={maxValue}
                            onChange={(e) => setMaxValue(e.target.value)}
                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/20 transition-colors"
                        />
                    </div>
                </div>

                {/* Product Filter */}
                {products.length > 0 && (
                    <div>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                            Product
                        </label>
                        <select
                            value={selectedProduct}
                            onChange={(e) => setSelectedProduct(e.target.value)}
                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-foreground focus:outline-none focus:border-white/20 transition-colors"
                        >
                            <option value="">All Products</option>
                            {products.map((product) => (
                                <option key={product} value={product}>
                                    {product}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                    <button
                        onClick={handleApplyFilters}
                        className="w-full px-4 py-2 bg-white text-black rounded text-sm font-medium hover:bg-white/90 transition-colors"
                    >
                        Apply Filters
                    </button>
                    <button
                        onClick={handleReset}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 text-foreground rounded text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                        <X size={14} />
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}
