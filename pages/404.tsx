import Button from '@src/components/Button';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <Head>
        <title>404</title>
      </Head>
      <div className="max-w-[600px] w-full px-4">
        <Image
          src="/404.svg"
          alt="404"
          width={860}
          height={571}
          layout="responsive"
        />
      </div>
      <Link href="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
