import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
            authorization: `https://www.facebook.com/v11.0/dialog/oauth?scope=email&config_id=${process.env.FACEBOOK_CONFIG_ID}`,
        })
      ],
    secret: process.env.SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            debugger;
            return true;
        },
        async session({ session, token, user }) {
            debugger;
        //   session.user.id = token.id;
        //   session.accessToken = token.accessToken;
          return session;
        },
        async jwt({ token, user, account, profile }) {
            debugger;
          if (user) {
            token.id = user.id;
          }
          if (account) {
            token.accessToken = account.access_token;
          }
          return token;
        },
      },
} satisfies NextAuthOptions


// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}