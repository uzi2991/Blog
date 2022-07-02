import MainLayout from '../src/components/layouts/MainLayout';
import { FaGithub } from 'react-icons/fa';
import Button from '@src/components/Button';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1 className="title mb-8">About</h1>
      <p className="text-lg mb-4">Yet another blog about Web development</p>
      <h1 className="mb-2">Contact me on</h1>
      <a href="https://github.com/uzi2991">
        <Button className="gap-1">
          <FaGithub />
          Github
        </Button>
      </a>
    </>
  );
};

AboutPage.Layout = MainLayout;

export default AboutPage;
