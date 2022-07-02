import React from 'react';
import { Post } from '../../types/Post';
import Link from 'next/link';
import { FaArrowRight, FaCalendar } from 'react-icons/fa';
import CategoryList from '../CategoryList';
import Button from '../Button';
import moment from 'moment';
import PostDate from './PostDate';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const date = moment(post.createdAt);

  return (
    <div className="flex flex-col">
      <Link href={`/posts/${post.slug}`} passHref>
        <a className="text-2xl font-semibold hover:text-primary mb-2">
          {post.title}
        </a>
      </Link>

      <PostDate className="mb-4" post={post} />

      <p className="mb-2">{post.description}</p>

      <CategoryList categories={post.categories} className="self-end mb-4" />

      <Link href={`/posts/${post.slug}`} passHref>
        <a>
          <Button className="self-start gap-1">
            Read more
            <FaArrowRight />
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
