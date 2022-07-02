import { Post } from '../../types/Post';
import cn from 'classnames';
import PostCard from './PostCard';

type Props = React.HTMLProps<HTMLDivElement> & {
  posts: Post[];
};

const PostGrid = ({ posts, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn('grid grid-cols-1 md:grid-cols-2 gap-8', className)}
    >
      {posts.map((post) => (
        <div key={post.slug} className="shadow-sm p-4 bg-white rounded-md">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
