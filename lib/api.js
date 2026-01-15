export async function fetchSalesData() {
    try {
        const res = await fetch('https://dummyjson.com/carts?limit=20');
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        const carts = data.carts;

        // Aggregate key metrics
        const totalRevenue = carts.reduce((acc, cart) => acc + cart.total, 0);
        const totalOrders = carts.length;
        const averageOrderValue = totalRevenue / totalOrders;

        // Charts Data

        // Generate realistic dates and sort data chronologically
        const availableYears = [2023, 2024, 2025];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Assign random dates to carts
        const cartsWithDates = carts.map(cart => {
            const year = availableYears[Math.floor(Math.random() * availableYears.length)];
            const monthIndex = Math.floor(Math.random() * 12);
            const day = Math.floor(Math.random() * 28) + 1; // 1-28 to be safe
            const date = new Date(year, monthIndex, day);
            return {
                ...cart,
                dateObj: date,
                year: year,
                month: months[monthIndex],
                day: day,
                formattedDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) // e.g., "Jan 15"
            };
        });

        // Sort carts chronologically
        cartsWithDates.sort((a, b) => a.dateObj - b.dateObj);

        // 1. Bar Chart: Revenue per Cart (Chronological)
        const barData = cartsWithDates.map((cart) => ({
            name: cart.formattedDate, // Display Date on X-Axis
            fullName: `Order #${cart.id} (${cart.formattedDate}, ${cart.year})`, // For Tooltip
            value: cart.total,
            year: cart.year,
            month: cart.month
        }));

        // 2. Line Chart: Cumulative Revenue over time
        let cumulative = 0;
        const lineData = barData.map((item) => {
            cumulative += item.value;
            return {
                name: item.name,
                value: cumulative,
                year: item.year,
                month: item.month,
                fullName: item.fullName
            };
        });

        // 3. Pie Chart: Top 5 Products by Revenue
        const productMap = {};
        cartsWithDates.forEach((cart) => {
            cart.products.forEach((product) => {
                if (!productMap[product.title]) {
                    productMap[product.title] = 0;
                }
                productMap[product.title] += product.total;
            });
        });

        const pieData = Object.entries(productMap)
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value)
            .slice(0, 5);

        // Extract available options for filters (sorted)
        const uniqueYears = [...new Set(cartsWithDates.map(c => c.year))].sort((a, b) => a - b);

        // Return months that actually have data, in calendar order
        const uniqueMonths = months.filter(m => cartsWithDates.some(c => c.month === m));

        return {
            totalRevenue,
            totalOrders,
            averageOrderValue,
            barData,
            lineData,
            pieData,
            years: uniqueYears,
            months: uniqueMonths
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            totalRevenue: 0,
            totalOrders: 0,
            averageOrderValue: 0,
            barData: [],
            lineData: [],
            pieData: [],
            years: [],
            months: []
        };
    }
}
