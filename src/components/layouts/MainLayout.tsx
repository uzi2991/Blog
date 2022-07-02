import { LayoutType } from './index';
import Navbar from '../navbar';
import Footer from '../Footer';

const MainLayout: LayoutType = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="bg-grayLight flex-1 pt-24 pb-16">
        <div className="wrapper">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
