import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { defaultMeta } from './constants/defaultMeta';
import { favicons } from './constants/favicons';
import { SeoProps } from './types/seoProps';

const Seo = (props: SeoProps): JSX.Element => {
  const router = useRouter();

  const meta = {
    ...defaultMeta,
    ...props
  };

  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <>
      <NextSeo
        title={meta.title}
        titleTemplate={meta.title}
        defaultTitle={meta.title}
        description={meta.description}
        canonical={meta.url}
        openGraph={{
          type: 'website',
          locale: 'en_US', //  Default is en_US
          url: meta.url,
          title: meta.title,
          description: meta.description,
          images: [
            {
              url: '/public/images/bein_logo.png',
              width: 1200,
              height: 630,
              alt: 'Data'
            }
          ],
          site_name: meta.title
        }}
        twitter={{
          handle: meta.title,
          site: meta.url,
          cardType: 'summary_large_image'
        }}
        additionalMetaTags={[
          {
            property: 'author',
            content: meta.description
          }
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `${meta.url}/favicon.ico`
          }
        ]}
      />

      {/* TODO delete this section after review next-seo */}
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content={meta.robots} />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`${meta.url}${router.asPath}`} />
        <link rel='canonical' href={`${meta.url}${router.asPath}`} />

        {/* Open Graph */}
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content={meta.siteName} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta name='image' property='og:image' content={meta.image} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@th_clarence' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />

        {meta.date && (
          <>
            <meta property='article:published_time' content={meta.date} />
            <meta
              name='publish_date'
              property='og:publish_date'
              content={meta.date}
            />
            <meta
              name='author'
              property='article:author'
              content='Bein Company'
            />
          </>
        )}

        {favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-TileImage'
          content='/favicon/ms-icon-144x144.png'
        />
        <meta name='theme-color' content='#ffffff' />
      </Head>
    </>
  );
};

export default Seo;
