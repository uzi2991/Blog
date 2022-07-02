import { Post } from '../../types/Post';
import cn from 'classnames';
import moment from 'moment';
import { FaCalendar } from 'react-icons/fa';

type Props = React.HTMLProps<HTMLDivElement> & {
  post: Post;
};

const PostDate = ({ post, className }: Props) => {
  const date = moment(post.createdAt);

  return (
    <div className={cn('flex items-center gap-1 text-gray mb-4', className)}>
      <FaCalendar />
      {date.format('MMM Do, YYYY')}
    </div>
  );
};

export default PostDate;
