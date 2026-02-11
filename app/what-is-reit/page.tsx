import { Building2, TrendingUp, Coins, ShieldCheck, PieChart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhatIsReitPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 overflow-hidden bg-muted/30">
                <div className="container px-4 md:px-6 relative z-10 w-full">
                    <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                            Education Series
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                            What is a <span className="text-primary">REIT</span>?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Real Estate Investment Trusts (REITs) allow you to invest in large-scale, income-producing real estate without buying a property yourself.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Button size="lg" asChild>
                                <Link href="/market">Start Investing</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#how-it-works">How it Works</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Abstract background elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
            </section>

            {/* Definition Section */}
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center gap-12 text-center w-full">
                        <div className="space-y-6 max-w-3xl mx-auto flex flex-col items-center">
                            <h2 className="text-3xl font-bold tracking-tighter">The Basics</h2>
                            <p className="text-lg text-muted-foreground">
                                A REIT is a company that owns, operates, or finances income-generating real estate. Modeled after mutual funds, REITs pool the capital of numerous investors.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                This makes it possible for individual investors to earn dividends from real estate investments—without having to buy, manage, or finance any properties themselves.
                            </p>
                            <div className="flex items-center justify-center gap-4 pt-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold">
                                            <Users className="w-5 h-5 text-muted-foreground" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Joined by millions of investors worldwide
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] w-full max-w-2xl rounded-2xl bg-gradient-to-br from-muted to-muted/50 border p-8 flex items-center justify-center shadow-sm">
                            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                                <div className="bg-background p-6 rounded-xl shadow-sm border flex flex-col items-center text-center gap-2 hover-scale hover-glow">
                                    <Building2 className="h-8 w-8 text-primary" />
                                    <span className="font-semibold">Properties</span>
                                </div>
                                <div className="bg-background p-6 rounded-xl shadow-sm border flex flex-col items-center text-center gap-2 hover-scale hover-glow">
                                    <Coins className="h-8 w-8 text-primary" />
                                    <span className="font-semibold">Dividends</span>
                                </div>
                                <div className="bg-background p-6 rounded-xl shadow-sm border flex flex-col items-center text-center gap-2 hover-scale hover-glow">
                                    <TrendingUp className="h-8 w-8 text-primary" />
                                    <span className="font-semibold">Growth</span>
                                </div>
                                <div className="bg-background p-6 rounded-xl shadow-sm border flex flex-col items-center text-center gap-2 hover-scale hover-glow">
                                    <PieChart className="h-8 w-8 text-primary" />
                                    <span className="font-semibold">Liquidity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter mb-4">Why Invest in REITs?</h2>
                        <p className="text-muted-foreground">
                            REITs offer a unique combination of benefits that make them an attractive addition to any investment portfolio.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card title="Steady Income" icon={<Coins className="h-10 w-10 text-primary mb-4" />}>
                            REITs are required to distribute at least 90% of their taxable income to shareholders as dividends, providing a reliable income stream.
                        </Card>
                        <Card title="Liquidity" icon={<TrendingUp className="h-10 w-10 text-primary mb-4" />}>
                            Unlike physical real estate, publicly traded REITs can be bought and sold on stock exchanges instantly during market hours.
                        </Card>
                        <Card title="Diversification" icon={<PieChart className="h-10 w-10 text-primary mb-4" />}>
                            Invest in a diverse portfolio of properties across different sectors (office, retail, residential) and geographies.
                        </Card>
                        <Card title="Professional Management" icon={<ShieldCheck className="h-10 w-10 text-primary mb-4" />}>
                            Properties are managed by experienced professionals, handling tenant relations, maintenance, and improvements.
                        </Card>
                        <Card title="Transparency" icon={<Building2 className="h-10 w-10 text-primary mb-4" />}>
                            Publicly traded REITs are regulated and must disclose financial information, providing transparency to investors.
                        </Card>
                        <Card title="Inflation Hedge" icon={<TrendingUp className="h-10 w-10 text-primary mb-4" />}>
                            Real estate values and rents typically rise with inflation, helping to protect your purchasing power over time.
                        </Card>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section id="how-it-works" className="py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter text-center mb-16">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        <Step number="1" title="You Invest" description="You buy shares of a REIT on the stock exchange, just like any other stock." />
                        <Step number="2" title="REIT Buys" description="The REIT uses the pooled capital to purchase and manage income-generating properties." />
                        <Step number="3" title="Tenants Pay" description="Tenants pay rent for using the properties owned by the REIT." />
                        <Step number="4" title="You Earn" description="The REIT distributes the majority of the income back to you as dividends." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Explore the top performing REITs in the market and start building your real estate portfolio today.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/signup">Create Free Account</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}

function Card({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <div className="bg-background rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow flex flex-col items-center text-center">
            {icon}
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
                {children}
            </p>
        </div>
    )
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                {number}
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">
                {description}
            </p>
        </div>
    )
}
