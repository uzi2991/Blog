import CategoryList from '@src/components/CategoryList';
import { MainLayout } from '@src/components/layouts';
import { allCategories } from '@src/utils/categories';
import Head from 'next/head';

const CategoriesPage = () => {
  return (
    <div>
      <Head>
        <title>Categories</title>
      </Head>
      <h1 className="title mb-8">Categories</h1>
      <CategoryList categories={allCategories} variant="medium" />
    </div>
  );
};

CategoriesPage.Layout = MainLayout;

export default CategoriesPage;
