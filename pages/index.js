import Head from "next/head";
import { Dashboard, Loader } from "../components";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Spotify Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  );
}
