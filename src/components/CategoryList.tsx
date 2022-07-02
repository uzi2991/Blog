import cn from 'classnames';
import Category from './Category';

type Props = React.HTMLProps<HTMLDivElement> & {
  categories: string[];
  variant?: 'light' | 'medium';
};

const CategoryList = ({ categories, className, variant, ...props }: Props) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)} {...props}>
      {categories.map((category) => (
        <Category category={category} key={category} variant={variant} />
      ))}
    </div>
  );
};

export default CategoryList;
