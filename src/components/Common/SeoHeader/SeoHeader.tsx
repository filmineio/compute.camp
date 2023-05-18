import { FC } from 'react';
import Head from 'next/head';
import { META_IMAGE_LINK_FILMINE } from 'constants/general';

type Props = {
  title: string;
  description: string;
  link?: string;
  metaImageLink?: string;
};

const SeoHeader: FC<Props> = ({ title, description, link, metaImageLink }) => {
  const siteName = 'web3mine staking pool';

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="web3mine" />
      <meta
        name="keywords"
        content="blockchain, crypto, cryptocurrency, explorer, filecoin, filecoin ecosystem, filecoin mining, filecoin sealing, filecoin storage, fil, filmine, liquid staking, proof of work, staking, sealing as a service, storage providers, smart contracts, tokenomics, tvl, total value locked, wallet, web3mine, Yield farming"
      />
      <meta name="theme-color" content="#000000" />
      <meta name="title" content={title} key="metaTitle" />
      <meta name="description" content={description} key="metaDescription" />
      <link rel="canonical" href={link} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={link} key="metaOGUrl" />
      <meta property="og:title" content={title} key="metaOGTitle" />
      <meta property="og:description" content={description} key="metaOGDescription" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:site_name" content={siteName} />
      <meta
        property="og:image"
        content={metaImageLink || META_IMAGE_LINK_FILMINE}
        key="metaOGImage"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={link} key="metaTwitterUrl" />
      <meta property="twitter:title" content={title} key="metaTwitterTitle" />
      <meta
        property="twitter:image"
        content={metaImageLink || META_IMAGE_LINK_FILMINE}
        key="metaTwitterImage"
      />
      <meta
        property="twitter:description"
        content={description}
        key="metaTwitterDescription"
      />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta
        property="linkedin:image"
        content={metaImageLink || META_IMAGE_LINK_FILMINE}
      />
      <meta property="linkedin:site_name" content={siteName} />
      <meta property="linkedin:type" content="website" />
    </Head>
  );
};

export default SeoHeader;
