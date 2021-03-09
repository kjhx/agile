import Footer from './Footer';
import Head from './Head';
import Header from './Header';

interface PageProps {
  title?: string,
  desc?: string,
  ogImage?: string,
  header?: boolean,
  footer?: boolean,
  children?: any
}

const Page = ({ title, desc, ogImage, header = true, footer = false, children }: PageProps) => {
  return (
    <>
      <Head
        title={`${title ? `${title} – ` : ''}Agile`}
        desc={desc}
        ogImage={ogImage}
      />
      <div className='flex flex-col min-h-full'>
        {header && <Header />}
        {children}
        {footer && <Footer />}
      </div>
    </>
  );
}

export default Page;