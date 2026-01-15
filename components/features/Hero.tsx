import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6 animate-slide-up">
                    Invest in India's Real Estate <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                        Without the Hassle
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-slide-up [animation-delay:200ms]">
                    Track, analyze, and invest in top-performing REITs and EITs.
                    Real-time data, advanced charts, and portfolio management in one place.
                </p>

                <div className="w-full max-w-md relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                    <div className="relative flex bg-background rounded-lg shadow-xl">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                                placeholder="Search for REITs, EITs, or Tickers..."
                                className="pl-10 border-0 focus-visible:ring-0 h-12 text-base"
                            />
                        </div>
                        <Button size="lg" className="rounded-l-none h-12 px-8">
                            Search
                        </Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-muted rounded-full">Trending:</span>
                    <span className="cursor-pointer hover:text-primary">INDSHOP</span>
                    <span className="cursor-pointer hover:text-primary">OFFICER</span>
                    <span className="cursor-pointer hover:text-primary">LOGEIT</span>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-100/30 blur-3xl"></div>
                <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl"></div>
            </div>
        </section>
    )
}
