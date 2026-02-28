"use client"

import { useState } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleGoogleLogin = () => {
        signIn("google", { callbackUrl: "/" })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: (e.target as any).email.value,
                    password: (e.target as any).password.value,
                }),
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || "Registration failed")
            }

            // Login immediately after signup
            const result = await signIn("credentials", {
                email: (e.target as any).email.value,
                password: (e.target as any).password.value,
                redirect: false,
            })

            if (result?.ok) {
                window.location.href = "/"
            } else {
                alert("Registration successful! Please log in.")
            }
        } catch (error: any) {
            console.error("Registration error:", error)
            alert(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex-1 container mx-auto flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                    <CardDescription className="text-center">
                        Sign up to start your journey
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input name="email" placeholder="Email" type="email" required />
                        <Input name="password" placeholder="Password" type="password" required />
                        <Button className="w-full" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Sign Up"}
                        </Button>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
                        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Continue with Google
                    </Button>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <div className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary hover:underline">
                            Login
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
