import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto max-w-screen-2xl py-8 px-4 md:py-12">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">REITWatch</h3>
                        <p className="text-sm text-muted-foreground">
                            Real-time tracking and analysis for Indian REITs and EITs.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/market" className="hover:text-foreground">Market</Link></li>
                            <li><Link href="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
                            <li><Link href="/watchlist" className="hover:text-foreground">Watchlist</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                            <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t bg-muted/40 py-8 text-center text-sm text-muted-foreground">
                <div className="container mx-auto max-w-screen-2xl px-4">
                    © {new Date().getFullYear()} REITWatch. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
