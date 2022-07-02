import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute bg-primaryLight top-0 left-0 h-[20rem] w-full"></div>

      <div className="wrapper">
        <div className="w-full max-w-[400px] pt-[4rem] ml-auto">
          <Image
            src="/hero.svg"
            alt="Web development"
            layout="responsive"
            width={406}
            height={306}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
