import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Great post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>First Post</h1>
        <p>Loads of text.</p>
        <p>Loads of text.</p>
        <p>Loads of text.</p>
        <p>Loads of text.</p>
      </Layout>
    </>
  );
}
