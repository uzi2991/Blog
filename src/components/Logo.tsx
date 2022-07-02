import cn from 'classnames';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a
        className={cn(
          'font-semibold text-2xl tracking-wider',
          'bg-gradient-to-r bg-clip-text from-primary to-primaryDark text-transparent'
        )}
      >
        Minh Nghia
      </a>
    </Link>
  );
};

export default Logo;
