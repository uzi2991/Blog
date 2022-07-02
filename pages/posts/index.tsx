import MainLayout from '@src/components/layouts/MainLayout';
import { getPosts } from '@src/utils/posts';
import { Post } from '@src/types/Post';
import PostGrid from '@src/components/post/PostGrid';
import Head from 'next/head';

const PostsPage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1 className="title mb-8">All Posts</h1>

      <PostGrid posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts()
    }
  };
};

PostsPage.Layout = MainLayout;

export default PostsPage;
