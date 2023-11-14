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
    callbacks: { //  =====> Add Below Callbacks <=====
        jwt: async ({ token, user, account }) => {
          return { ...token, ...user, ...account };
        },
        session: async ({ session, token }) => {
          session.user = token;
          return session;
        },
      },
} satisfies NextAuthOptions


// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}