import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // This is where you would usually check against your database
                // For now, we'll return a mock user if the credentials are valid
                if (credentials?.email === "m@example.com" && credentials?.password === "password") {
                    return { id: "1", name: "Test User", email: "m@example.com" }
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/login',
    }
})

export { handler as GET, handler as POST }
