import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import crypto from 'crypto';

// 비밀번호 암호화 함수
export async function hashPassword(password: string): Promise<string> {
   const hashedPassword = await hash(password, 12);
   return hashedPassword;
}

// 비밀번호 검증 함수
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
   const isValid = await compare(password, hashedPassword);
   return isValid;
}

export default NextAuth({
   providers: [
      CredentialsProvider({
         id: 'user-credentials',
         name: 'Credentials',
         credentials: {
            nick: { label: 'Nick', type: 'text', placeholder: '아이디를 입력하세요' },
            password: { label: 'Password', type: 'password' },
         },
         async authorize(credentials) {
            const { nick, password } = credentials!;
            // 기타 사용자 검증 로직 코드 ...
            const user = await prisma.admin.findUnique({
               where: {
                  nick,
               },
            });

            if (!user) return null;

            const verifyPw = await verifyPassword(password, user.password);
            if (!verifyPw) return null;

            return user;
         },
      }),
   ],
   secret: 'test',
   pages: {
      error: '/admin/error',
      signOut: '/admin',
   },
   session: {
      strategy: 'jwt',
      maxAge: 24 * 60 * 60,
      updateAge: 2 * 24 * 60 * 60,
   },
   callbacks: {
      async jwt({ token, account }) {
         if (account) {
            token.accessToken = account.access_token;
         }
         return token;
      },
      async session({ session, token, user }) {
         return session;
      },
      async redirect({ url, baseUrl }) {
         if (url.startsWith('/')) {
            return `${baseUrl}${url}`;
         } else if (new URL(url).origin === baseUrl) {
            return `${baseUrl}`;
         }
         return baseUrl;
      },
   },
});
