import fs from 'fs';
import { getPost } from '@src/utils/posts';
import { Post } from '@src/types/Post';
import Markdown from '@src/components/markdown';
import CategoryList from '@src/components/CategoryList';
import { PostLayout } from '@src/components/layouts';
import PostDate from '../../src/components/post/PostDate';
import Head from 'next/head';

const PostDetailPage = ({ post }: { post: Post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="bg-primaryLight h-[20rem] flex flex-col justify-end">
        <div className="wrapper">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <PostDate post={post} className="mb-2" />
          <p className="text-gray mb-4">{post.description}</p>
          <CategoryList
            categories={post.categories}
            variant="medium"
            className="mb-8"
          />
        </div>
      </div>

      <Markdown>{post.content}</Markdown>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts');

  return {
    paths: files.map((file) => ({
      params: {
        slug: file.replace('.md', '')
      }
    })),
    fallback: false
  };
};

export const getStaticProps = async ({
  params: { slug }
}: {
  params: {
    slug: string;
  };
}) => {
  const post = getPost(`posts/${slug}.md`);

  return {
    props: {
      post
    }
  };
};

PostDetailPage.Layout = PostLayout;

export default PostDetailPage;
