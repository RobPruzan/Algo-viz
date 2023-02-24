import "@total-typescript/ts-reset";
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import GroupAlgosInfo from "~/components/AlgosInfo/GroupAlgosInfo";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Algorithm visualization " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-800 ">
        <div className="h-screen w-screen bg-slate-800">
          <AuthShowcase />
          <GroupAlgosInfo />
        </div>
        <div className="h-screen w-screen bg-slate-700">hello!</div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <p className="text-center text-2xl text-slate-800">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className=" rounded-full bg-slate-400 px-10 py-3 font-semibold text-slate-800 no-underline transition duration-200 ease-in-out hover:bg-slate-500"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
