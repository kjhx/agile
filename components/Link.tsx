import Link from 'next/link';

interface LinkProps {
  href?: string,
  to?: string,
  styling?: boolean,
  children?: any
}

const Page = ({ href, to, styling = true, children }: LinkProps): JSX.Element => {
  const anchorClasses = styling ? 'link-std' : 'no-underline';

  if (to) {
    return (
      <Link href={to as string}>
        <a className={anchorClasses}>
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <a href={href as string} className={anchorClasses}>
        {children}
      </a>
    );
  }
};

export default Page;