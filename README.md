# Sales Dashboard

A premium, minimalistic sales dashboard built with Next.js featuring interactive data visualization and real-time filtering.

![Dashboard Preview](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Recharts](https://img.shields.io/badge/Recharts-2.15-purple?style=flat-square)

## Features

- **📊 Multiple Chart Types**: Switch between Bar, Pie, and Line charts
- **🎨 Premium Black & White Theme**: Industry-grade minimalistic design
- **🔄 Real-time Data**: Fetches sales data from DummyJSON API
- **🎯 Interactive Filtering**: Filter by date ranges and categories
- **📱 Responsive Design**: Clean, modern layout optimized for all screens
- **📈 Key Metrics**: Display total sales, average order value, and more

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18
- **Charts**: Recharts 2.15
- **Styling**: CSS Modules with custom design system
- **Data Source**: DummyJSON API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sales_dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
sales_dashboard/
├── app/
│   ├── layout.js          # Root layout with theme support
│   ├── page.js            # Main dashboard page
│   └── globals.css        # Global styles and design system
├── components/
│   ├── Header.js          # Dashboard header
│   └── FilterPanel.js     # Sidebar filtering panel
├── lib/
│   └── api.js             # API data fetching utilities
└── public/                # Static assets
```

## Features in Detail

### Chart Types
- **Bar Chart**: Compare sales across different categories
- **Pie Chart**: View sales distribution by category
- **Line Chart**: Track sales trends over time

### Filtering Options
- Date range selection
- Category filtering
- Real-time chart updates

### Design Philosophy
- Strict black and white color scheme for UI elements
- Colorful data visualization for clarity
- No scrolling required - everything fits on one screen
- Smooth transitions and micro-animations

## API Integration

The dashboard fetches data from the [DummyJSON API](https://dummyjson.com/), specifically:
- `/carts` endpoint for sales data
- Data is transformed and aggregated for visualization

## Build for Production

```bash
npm run build
npm start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Charts powered by [Recharts](https://recharts.org/)
- Data from [DummyJSON](https://dummyjson.com/)
