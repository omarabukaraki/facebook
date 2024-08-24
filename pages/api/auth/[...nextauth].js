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
    async signIn({ account,user }) {
      if(account.provider === 'google'){
        user.name =  JSON.stringify({
          "name": "mohammad ahmad",
          "email": "abukarakiomar@gmail.com",
          "image": "https://i.ibb.co/D4T8mLX/test.jpg",
          "coverImage": "https://images.pexels.com/photos/4492046/pexels-photo-4492046.jpeg",
          "description": "Photographer and nature lover.",
          "posts": [
            {
              "id": 1,
              "caption": "Advice for budding entrepreneurs.",
              "image": "https://images.pexels.com/photos/7176368/pexels-photo-7176368.jpeg",
              "time": "2024-08-14T09:30:00Z"
          },
          {
              "id": 2,
              "caption": "Startup success stories.",
              "image": "https://images.pexels.com/photos/6892934/pexels-photo-6892934.jpeg",
              "time": "2024-08-13T17:45:00Z"
          },
            {
              "id": 3,
              "caption": "Fun DIY craft project for kids.",
              "image": "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
              "time": "2024-08-14T15:00:00Z"
            },
          ]
        })
      }else if(account.provider === 'credentials'){
        user.name = JSON.stringify({
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
        });
      }
      return true; 
    },
    async session({ session}) {
      return session;
    },
  },
  secret:process.env.SECRET,
};


export default NextAuth(authOptions);




