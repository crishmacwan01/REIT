import { WatchlistCard } from "@/components/features/WatchlistCard"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { getWatchlists } from "@/app/actions/watchlist"
import { getMarketData } from "@/app/actions/market"

// Define interface for display item
interface WatchlistDisplayItem {
    symbol: string
    name: string
    lastPrice: number
    change: number
    changePercent: number
}

export default async function WatchlistPage() {
    const watchlists = await getWatchlists()

    // Flatten items and fetch market data
    const displayItems: WatchlistDisplayItem[] = []

    for (const list of watchlists) {
        for (const item of list.items) {
            const marketData = await getMarketData(item.instrument.symbol)
            displayItems.push({
                symbol: item.instrument.symbol,
                name: item.instrument.name,
                lastPrice: marketData.price,
                change: marketData.change,
                changePercent: marketData.changePercent
            })
        }
    }

    return (
        <div className="container mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">My Watchlist</h1>
                    <p className="text-muted-foreground">
                        Monitor your favorite instruments.
                    </p>
                </div>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Symbol
                </Button>
            </div>

            {displayItems.length === 0 ? (
                <div className="text-center py-12 border rounded-lg bg-muted/10">
                    <p className="text-muted-foreground mb-4">Your watchlist is empty.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayItems.map((item, index) => (
                        <WatchlistCard
                            // Use index as key fallback if symbol repeats across lists (though ideally unique)
                            key={`${item.symbol}-${index}`}
                            symbol={item.symbol}
                            name={item.name}
                            price={item.lastPrice}
                            change={item.change}
                            changePercent={item.changePercent}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
