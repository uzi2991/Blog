import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { FaHome, FaCode, FaUser, FaList } from 'react-icons/fa';

type Props = {
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  onLinkClick?: () => void;
};

const links = [
  {
    label: 'Home',
    href: '/',
    icon: FaHome
  },
  {
    label: 'Posts',
    href: '/posts',
    icon: FaCode
  },
  {
    label: 'Categories',
    href: '/categories',
    icon: FaList
  },
  {
    label: 'About',
    href: '/about',
    icon: FaUser
  }
];

const NavLinks = ({
  className,
  linkClassName,
  onLinkClick,
  activeLinkClassName
}: Props) => {
  const router = useRouter();

  return (
    <div className={className}>
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          <a
            className={cn(linkClassName, {
              [activeLinkClassName || '']: router.pathname === link.href
            })}
            onClick={onLinkClick}
          >
            <link.icon />
            {link.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
