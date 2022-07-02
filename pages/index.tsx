import Hero from '@src/components/Hero';
import { HomeLayout } from '@src/components/layouts';
import PostCard from '@src/components/post/PostCard';
import { getPosts } from '@src/utils/posts';
import { allCategories } from '@src/utils/categories';
import CategoryList from '@src/components/CategoryList';
import { Post } from '@src/types/Post';
import Head from 'next/head';

const HomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <Head>
        <title>Minh Nghia&apos;s Blog</title>
      </Head>
      <Hero />
      <div className="wrapper mt-4 mb-8 grid grid-cols-1 gap-12 md:grid-cols-[minmax(auto,600px)_auto]">
        <div>
          <h1 className="title mb-8">Recently Published</h1>
          <div>
            {posts.map((post) => (
              <div key={post.slug} className="border-b border-b-primary py-4">
                <PostCard key={post.slug} post={post} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="title mb-8">Categories</h1>
          <CategoryList categories={allCategories} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts().slice(0, 6)
    }
  };
};

HomePage.Layout = HomeLayout;

export default HomePage;
