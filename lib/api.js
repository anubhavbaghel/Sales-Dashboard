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

        // 1. Bar Chart: Revenue per Cart
        const barData = carts.map((cart) => ({
            name: `Order #${cart.id}`,
            value: cart.total,
        }));

        // 2. Line Chart: Cumulative Revenue over "time" (simulated by sequence)
        let cumulative = 0;
        const lineData = carts.map((cart) => {
            cumulative += cart.total;
            return {
                name: `Order #${cart.id}`,
                value: cumulative,
            };
        });

        // 3. Pie Chart: Top 5 Products by Revenue
        const productMap = {};
        carts.forEach((cart) => {
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

        return {
            totalRevenue,
            totalOrders,
            averageOrderValue,
            barData,
            lineData,
            pieData,
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
        };
    }
}
