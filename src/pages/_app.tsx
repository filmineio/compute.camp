import { FC } from 'react';
import { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import localFont from '@next/font/local';
import SeoHeader from 'components/Common/SeoHeader/SeoHeader';
import AppWrapper from 'components/AppWrapper/AppWrapper';
import Footer from 'components/Common/Footer/Footer';
import dynamic from 'next/dynamic';

import '../styles/style.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const conthrax = localFont({
  src: '../../public/font/conthrax-sb.woff',
  variable: '--font-conthrax',
  display: 'swap',
});

const PostHog = dynamic(() => import('components/PostHog/PostHog'), {
  ssr: false,
});

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const title = 'Compute Camp 2025 — Web3 Computing Conference in Belgrade';
  const description =
    'Join the annual gathering of computing enthusiasts building the future of decentralized infrastructure. Belgrade, Serbia — 2025.';
  const link = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <AppWrapper className={`${inter.variable} ${conthrax.variable}`}>
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
