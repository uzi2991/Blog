import { LayoutType } from './index';
import Navbar from '../navbar';
import Footer from '../Footer';

const PostLayout: LayoutType = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default PostLayout;
