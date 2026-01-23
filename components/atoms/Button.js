import { forwardRef } from 'react';

const Button = forwardRef(({
    children,
    onClick,
    variant = 'primary',
    className = '',
    icon: Icon,
    type = 'button',
    ...props
}, ref) => {
    const baseStyles = "px-4 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-white text-black hover:bg-white/90",
        secondary: "bg-white/5 border border-white/10 text-foreground hover:bg-white/10",
        ghost: "text-gray-400 hover:text-foreground hover:bg-white/5",
        active: "bg-white text-black shadow-sm" // For toggle states like in charts
    };

    return (
        <button
            ref={ref}
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {Icon && <Icon size={14} />}
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
