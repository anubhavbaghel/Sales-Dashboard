export default function Label({ children, className = '' }) {
    return (
        <label className={`text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block ${className}`}>
            {children}
        </label>
    );
}
