import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '../types/Post';

export const getPost = (fileName: string): Post => {
  const fileContent = fs.readFileSync(fileName, 'utf-8');

  const {
    data: { createdAt, ...rest },
    content
  } = matter(fileContent);

  return {
    content,
    createdAt: (createdAt as Date).getTime(),
    ...rest
  } as Post;
};

export const getPosts = (category?: string): Post[] => {
  const files = fs.readdirSync('posts');
  const allPosts = files
    .map((fileName) => getPost(`posts/${fileName}`))
    .sort((a, b) => b.createdAt - a.createdAt);

  return category
    ? allPosts.filter((post) => post.categories.includes(category))
    : allPosts;
};
