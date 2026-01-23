import { forwardRef } from 'react';

const Select = forwardRef(({
    value,
    onChange,
    options = [],
    placeholder = 'Select...',
    className = '',
    ...props
}, ref) => {
    return (
        <select
            ref={ref}
            value={value}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-foreground focus:outline-none focus:border-white/20 transition-colors ${className}`}
            {...props}
        >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
                // Allow simplified array of strings or object with value/label
                <option key={opt.value || opt} value={opt.value || opt}>
                    {opt.label || opt}
                </option>
            ))}
        </select>
    );
});

Select.displayName = 'Select';

export default Select;
