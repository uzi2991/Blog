import Link from 'next/link';
import cn from 'classnames';

type Props = {
  category: string;
  variant?: 'light' | 'medium';
};

const Category = ({ category, variant }: Props) => {
  const config = {
    light: 'bg-primaryLight text-black',
    medium: 'bg-primary text-white'
  };

  return (
    <Link href={`/categories/${category}`} passHref>
      <a
        className={cn(
          'px-2 py-1 rounded-md shadow-sm text-sm font-medium capitalize',
          config[variant || 'light']
        )}
      >
        {category}
      </a>
    </Link>
  );
};

export default Category;
