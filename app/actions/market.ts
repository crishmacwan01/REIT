"use server"

// Mock market data for now
// In a real app, this would fetch from an external API (e.g., Yahoo Finance, Alpha Vantage)

export async function getMarketData(symbol: string) {
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return {
        symbol,
        price: Math.random() * 100 + 100, // Random price between 100 and 200
        change: Math.random() * 10 - 5,   // Random change between -5 and 5
        changePercent: Math.random() * 5 - 2.5,
        lastUpdated: new Date()
    }
}

export async function searchInstruments(query: string) {
    // This would search the local database or external API
    return [
        { symbol: "REIT1", name: "Example REIT 1", type: "REIT" },
        { symbol: "INVIT1", name: "Example InvIT 1", type: "INVIT" },
    ].filter(i => i.name.toLowerCase().includes(query.toLowerCase()) || i.symbol.toLowerCase().includes(query.toLowerCase()))
}
