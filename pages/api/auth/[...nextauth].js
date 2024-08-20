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
        const { email, password } = credentials;

        if (email !== 'abukarakiomar@gmail.com' || password !== 'omar2002') {
          throw ('error')
        }

        return {
          "id": 0,
          "name": JSON.stringify({
            "name": "omar abdulaziz",
            "email": "abukarakiomar@gmail.com",
            "image": "https://i.ibb.co/2vvff1F/111639963.jpg",
            "coverImage": "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
            "description": "Photographer and nature lover.",
            "posts": [
              {
                "id": 1,
                "caption": "Fun DIY craft project for kids.",
                "image": "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
                "time": "2024-08-14T15:00:00Z"
              },
              {
                "id": 2,
                "caption": "Creative home decor ideas.",
                "image": "https://images.pexels.com/photos/1118664/pexels-photo-1118664.jpeg",
                "time": "2024-08-13T13:30:00Z"
              }
            ]
          }),
        }
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
