import { User } from "@/app/models/user";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../libs/mongoConnect"

export const authOptions = {
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            id: 'credentials',
            credentials: {
                username: {
                    label: "Email",
                    type: "emil",
                    placeholder: "text@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const email = credentials?.email
                const password = credentials?.password

                mongoose.connect(process.env.MONGO_URL)
                const user = await User.findOne({ email })
                const passwordOK = user && bcrypt.compareSync(password, user.password)
                console.log({ passwordOK });
                if (passwordOK) {
                    return user
                }
                return null;
            },
        }),
    ],
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
