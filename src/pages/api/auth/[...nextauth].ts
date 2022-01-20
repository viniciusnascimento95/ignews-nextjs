import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENTE_ID,
            clientSecret: process.env.GITHUB_CLIENTE_SECRET,
            authorization: {
                params: {
                    scope: 'read:user',
                },
            },
        }),
        // ...add more providers here
    ],
})