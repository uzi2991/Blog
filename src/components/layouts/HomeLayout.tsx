import { LayoutType } from './index';
import Navbar from '../navbar';
import Footer from '../Footer';

const HomeLayout: LayoutType = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default HomeLayout;
