import HomeLayout from './HomeLayout';
import MainLayout from './MainLayout';
import PostLayout from './PostLayout';

export type LayoutType = ({
  children
}: {
  children: React.ReactNode;
}) => JSX.Element;

export const DefaultLayout: LayoutType = ({ children }) => {
  return <>{children}</>;
};

export { HomeLayout, MainLayout, PostLayout };
