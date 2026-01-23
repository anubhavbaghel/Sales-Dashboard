import { forwardRef } from 'react';

const Input = forwardRef(({
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
    ...props
}, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/20 transition-colors ${className}`}
            {...props}
        />
    );
});

Input.displayName = 'Input';

export default Input;
