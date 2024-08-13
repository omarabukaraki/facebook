import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  session:{
    strategy: 'jwt',
    maxAge: 1* 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  jwt:{
  },
}

export default NextAuth(authOptions)



// import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//     maxAge: 1 * 60 * 60,
//     updateAge: 24 * 60 * 60,
//     generateSessionToken: () => {
//       return crypto.randomUUID?.() ?? crypto.randomBytes(32).toString('hex');
//     },
//   },
//   jwt: {
//   },
//   callbacks: {
//     async session({ session, token }) {
//       if (token?.image) {
//         session.user.image = token.image;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       console.log(user)
//       if (user) {
//         token.image = user.image; 
//       }
//       return token;
//     },
//   },
// }

// export default NextAuth(authOptions)
