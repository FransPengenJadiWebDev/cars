import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import { mockUsersDatabase } from "@/lib/mockDb"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { firstName, lastName, email, password } = body

        if (!email || !password || !firstName) {
            return new NextResponse("Informasi tidak lengkap", { status: 400 })
        }

        const existingUser = mockUsersDatabase.find(u => u.email === email)
        if (existingUser) {
            return new NextResponse("Email sudah terdaftar", { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = {
            id: Math.random().toString(),
            name: `${firstName} ${lastName}`.trim(),
            email,
            hashedPassword,
        }

        mockUsersDatabase.push(newUser)
        console.log("Database saat ini: ", mockUsersDatabase)

        return NextResponse.json({message: "User sukses didaftarkan!"}, { status: 201 })
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}