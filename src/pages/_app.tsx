import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "./components/Navbar";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

interface MyAppProps extends AppProps {
  pageProps: {
    session: Session | null;
    [key: string]: any; // Any other pageprop
  };
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) {
  return (
    <SessionProvider session={session}>
      <div>
        <Head>
            <title>Task Manager | Ericão dev</title>
            <meta name="description" content="Generated by Task Manager" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
        <Component {...pageProps} />
      </div>
  </SessionProvider>
  );
}
