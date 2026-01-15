"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function OrderCard({ symbol, price }: { symbol: string, price: number }) {
    const [quantity, setQuantity] = useState(1)

    return (
        <Card>
            <CardHeader>
                <CardTitle>Place Order</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="buy" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="buy" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Buy</TabsTrigger>
                        <TabsTrigger value="sell" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Sell</TabsTrigger>
                    </TabsList>

                    <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Available Margin</span>
                            <span className="font-medium">₹10,000.00</span>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Quantity</label>
                            <Input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Price</label>
                            <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground">
                                Market Order (₹{price.toFixed(2)})
                            </div>
                        </div>

                        <div className="pt-4 border-t flex justify-between items-center">
                            <span className="text-sm font-medium">Estimated Cost</span>
                            <span className="text-lg font-bold">₹{(price * quantity).toFixed(2)}</span>
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90">
                            Buy {symbol}
                        </Button>
                    </div>
                </Tabs>
            </CardContent>
        </Card>
    )
}
