"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { CheckCircle2, FileText, Building, CreditCard } from "lucide-react"

export default function OpenDematPage() {
    const [step, setStep] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setStep(step + 1)
        }, 1500)
    }

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Open Your Demat Account</h1>
                    <p className="text-xl text-muted-foreground">
                        Start your investment journey with zero brokerage on equity delivery.
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-between relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10" />
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`flex flex-col items-center gap-2 bg-background px-2 ${step >= i ? "text-primary" : "text-muted-foreground"}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold transition-colors ${step >= i ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background"}`}>
                                {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                            </div>
                            <span className="text-xs font-medium hidden sm:block">
                                {i === 1 && "Basic Info"}
                                {i === 2 && "KYC Details"}
                                {i === 3 && "Bank Info"}
                                {i === 4 && "Verification"}
                            </span>
                        </div>
                    ))}
                </div>

                <Card className="border-2">
                    <CardHeader>
                        <CardTitle>
                            {step === 1 && "Let's get started"}
                            {step === 2 && "Complete your KYC"}
                            {step === 3 && "Link your Bank Account"}
                            {step === 4 && "Account Created!"}
                        </CardTitle>
                        <CardDescription>
                            {step === 1 && "Enter your basic details to proceed."}
                            {step === 2 && "We need your PAN and Aadhaar for verification."}
                            {step === 3 && "Add your bank account for seamless transactions."}
                            {step === 4 && "Congratulations! You can now start investing."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {step === 1 && (
                            <form id="step1" onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">First Name</label>
                                        <Input placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Last Name</label>
                                        <Input placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Mobile Number</label>
                                    <Input type="tel" placeholder="+91 98765 43210" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <Input type="email" placeholder="john@example.com" required />
                                </div>
                            </form>
                        )}

                        {step === 2 && (
                            <form id="step2" onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">PAN Number</label>
                                    <Input placeholder="ABCDE1234F" className="uppercase" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Aadhaar Number</label>
                                    <Input placeholder="1234 5678 9012" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Date of Birth</label>
                                    <Input type="date" required />
                                </div>
                            </form>
                        )}

                        {step === 3 && (
                            <form id="step3" onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Account Number</label>
                                    <Input placeholder="1234567890" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">IFSC Code</label>
                                    <Input placeholder="HDFC0001234" className="uppercase" required />
                                </div>
                                <div className="p-4 bg-muted/50 rounded-lg flex items-start gap-3">
                                    <CreditCard className="w-5 h-5 text-primary mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-medium">Verification Deposit</p>
                                        <p className="text-muted-foreground">We will deposit ₹1 to verify your bank account.</p>
                                    </div>
                                </div>
                            </form>
                        )}

                        {step === 4 && (
                            <div className="text-center py-8 space-y-4">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Application Submitted!</h3>
                                    <p className="text-muted-foreground max-w-md mx-auto">
                                        Your Demat account application is under review. You will receive an email confirmation shortly.
                                    </p>
                                </div>
                                <Button className="mt-4" onClick={() => window.location.href = '/portfolio'}>
                                    Go to Portfolio
                                </Button>
                            </div>
                        )}
                    </CardContent>
                    {step < 4 && (
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1 || isLoading}>
                                Back
                            </Button>
                            <Button type="submit" form={`step${step}`} disabled={isLoading}>
                                {isLoading ? "Processing..." : step === 3 ? "Submit Application" : "Continue"}
                            </Button>
                        </CardFooter>
                    )}
                </Card>

                <div className="grid md:grid-cols-3 gap-6 pt-8">
                    <FeatureCard
                        icon={<FileText className="w-6 h-6" />}
                        title="100% Paperless"
                        description="Complete digital onboarding with Aadhaar eSign."
                    />
                    <FeatureCard
                        icon={<Building className="w-6 h-6" />}
                        title="Zero AMC"
                        description="Free account maintenance for the first year."
                    />
                    <FeatureCard
                        icon={<CheckCircle2 className="w-6 h-6" />}
                        title="Instant Activation"
                        description="Start trading within 24 hours of submission."
                    />
                </div>
            </div>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center text-center p-4 space-y-2">
            <div className="p-3 bg-primary/10 text-primary rounded-full">
                {icon}
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}
