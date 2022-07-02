import cn from 'classnames';

type Props = React.HTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children, ...props }: Props) => {
  return (
    <button
      className={cn(
        'px-3 py-1',
        'flex items-center',
        'bg-white hover:bg-primary',
        'border border-primary',
        'font-semibold text-primary hover:text-white',
        'transition-[background-color]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
