import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Sales Dashboard',
  description: 'Premium Sales Analytics Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
