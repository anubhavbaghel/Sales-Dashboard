'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import Label from '@/components/atoms/Label';

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
        <Card>
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
                        <Label>Year</Label>
                        <Select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            placeholder="All Years"
                            options={years.map(y => ({ value: y, label: y }))}
                        />
                    </div>
                )}

                {/* Month Filter */}
                {months.length > 0 && (
                    <div>
                        <Label>Month</Label>
                        <Select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            placeholder="All Months"
                            options={months.map(m => ({ value: m, label: m }))}
                        />
                    </div>
                )}

                {/* Order Value Range */}
                <div>
                    <Label>Order Value</Label>
                    <div className="flex flex-col gap-2">
                        <Input
                            type="number"
                            placeholder="Min"
                            value={minValue}
                            onChange={(e) => setMinValue(e.target.value)}
                        />
                        <Input
                            type="number"
                            placeholder="Max"
                            value={maxValue}
                            onChange={(e) => setMaxValue(e.target.value)}
                        />
                    </div>
                </div>

                {/* Product Filter */}
                {products.length > 0 && (
                    <div>
                        <Label>Product</Label>
                        <Select
                            value={selectedProduct}
                            onChange={(e) => setSelectedProduct(e.target.value)}
                            placeholder="All Products"
                            options={products.map(p => ({ value: p, label: p }))}
                        />
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                    <Button
                        onClick={handleApplyFilters}
                        variant="primary"
                        className="w-full"
                    >
                        Apply Filters
                    </Button>
                    <Button
                        onClick={handleReset}
                        variant="secondary"
                        className="w-full"
                        icon={X}
                    >
                        Reset
                    </Button>
                </div>
            </div>
        </Card>
    );
}
