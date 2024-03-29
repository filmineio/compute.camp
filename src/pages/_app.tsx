import { FC } from 'react';
import { AppProps } from 'next/app';
import SeoHeader from 'components/Common/SeoHeader/SeoHeader';
import AppWrapper from 'components/AppWrapper/AppWrapper';
import Footer from 'components/Common/Footer/Footer';
import dynamic from 'next/dynamic';
// import PostHog from 'components/PostHog/PostHog';

import '../styles/style.scss';

const PostHog = dynamic(() => import('components/PostHog/PostHog'), {
  ssr: false,
});

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const title = 'Compute Camp';
  const description = 'Yearly gathering of web3 compute enthusiasts';
  const link = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <AppWrapper>
      <>
        <SeoHeader title={title} description={description} link={link} />
        <PostHog />
        <Component {...pageProps} />
        <Footer />
      </>
    </AppWrapper>
  );
};

export default MyApp;
