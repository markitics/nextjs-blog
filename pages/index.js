import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/getStaticPosts";
// import { getLivePosts } from "../lib/getLivePosts";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Mark is in Cork</p>
        <p>My phone is charging.</p>
        <Link href="/posts/cead-post">
          <a>Read summat</a>
        </Link>
        <ul className="utilStyles.list">
          {allPostsData.slice(0, 5).map(({ id, date, title }) => (
            <li className="utilStyles.listItem" key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                {title}
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const allPostsData = await getLivePosts();
  return {
    props: { allPostsData },
  };
}
