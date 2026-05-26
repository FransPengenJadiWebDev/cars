import NextAuth from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { mockUsersDatabase } from "@/lib/mockDb"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const user = mockUsersDatabase.find(
                    (u) => u.email === credentials.email
                )

                if (!user){
                    return null
                }

                const isPasswordCorrect = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if (!isPasswordCorrect) {
                    return null
                }

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            } 
        })
    ],
    pages: {
        signIn: '/signin',
        error: '/signin'
    },
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.role = (user as any).role
                token.id = user.id
            }
            return token
        },
        async session({session, token}) {
            if (session.user) {
                (session.user as any).role= token.role;
                (session.user as any).id= token.id
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST}