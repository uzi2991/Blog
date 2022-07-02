import { MainLayout } from '@src/components/layouts';
import { allCategories } from '../../src/utils/categories';
import { getPosts } from '../../src/utils/posts';
import { Post } from '../../src/types/Post';
import PostGrid from '@src/components/post/PostGrid';
import Head from 'next/head';

const CategoryPage = ({ posts, slug }: { posts: Post[]; slug: string }) => {
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <h1 className="title mb-8">{slug}</h1>
      <PostGrid posts={posts} />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allCategories.map((category) => ({
      params: {
        slug: category
      }
    })),
    fallback: false
  };
};

export const getStaticProps = async ({
  params: { slug }
}: {
  params: { slug: string };
}) => {
  return {
    props: {
      posts: getPosts(slug),
      slug
    }
  };
};

CategoryPage.Layout = MainLayout;
export default CategoryPage;
