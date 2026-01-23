export default function Card({ children, className = '' }) {
    return (
        <div className={`glass-panel p-3 ${className}`}>
            {children}
        </div>
    );
}
