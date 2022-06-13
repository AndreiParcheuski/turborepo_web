import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

const fontsConfig: { href: string; type: string }[] = [
  {
    href: '/fonts/FiraSans-Medium.ttf',
    type: 'font/ttf'
  },
  {
    href: '/fonts/Gotham-Black.otf',
    type: 'font/otf'
  },
  {
    href: '/fonts/Gotham-Bold.otf',
    type: 'font/otf'
  },
  {
    href: '/fonts/Gotham-Book.otf',
    type: 'font/otf'
  },
  {
    href: '/fonts/Gotham-Light.otf',
    type: 'font/otf'
  },
  {
    href: '/fonts/Gotham-Medium.otf',
    type: 'font/otf'
  },
  {
    href: '/fonts/SFPro-Bold.ttf',
    type: 'font/otf'
  },
  {
    href: '/fonts/SFPro-Medium.ttf',
    type: 'font/otf'
  }
];

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {fontsConfig.map((item, index) => (
            <link
              key={index}
              rel='preload'
              href={item.href}
              as='font'
              type={item.type}
              crossOrigin='anonymous'
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
