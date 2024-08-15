// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
//   session:{
//     strategy: 'jwt',
//     maxAge: 1* 24 * 60 * 60,
//     updateAge: 24 * 60 * 60,
//   },
//   jwt:{
//   },
// }

// export default NextAuth(authOptions)







import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
      },
      async authorize(credentials) {
        const {email, password} = credentials;
        
        if(email !== 'abukarakiomar@gmail.com' || password !=='omar2002'){
          throw('error')
        }

        return {id:'101',name:'omar abdulaziz',email:'abukarakiomar@gmail.com',image:'https://i.ibb.co/2vvff1F/111639963.jpg'}
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, 
    updateAge: 24 * 60 * 60, 
  },
  jwt: {
  },
  // pages: {
  //   signIn: '/auth/signin',  
  //   error: '/auth/error',    
  //   verifyRequest: '/auth/verify-request', 
  //   newAccount: '/auth/new-account', 
  // },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
      };
      return session;
    },
  },
};

export default NextAuth(authOptions);
