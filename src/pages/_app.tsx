import { FC } from 'react';
import { AppProps } from 'next/app';
import SeoHeader from 'components/Common/SeoHeader/SeoHeader';
import AppWrapper from 'components/AppWrapper/AppWrapper';
import Footer from 'components/Common/Footer/Footer';

import '../styles/style.scss';

// TODO remove this comment

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const title = 'Stake with web3mine';
  const description =
    'Earn the highest yields by staking into the best storage providers in Filecoin ecosystem.';
  const link = `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <AppWrapper>
      <>
        <SeoHeader title={title} description={description} link={link} />
        <Component {...pageProps} />
        <Footer />
      </>
    </AppWrapper>
  );
};

export default MyApp;
