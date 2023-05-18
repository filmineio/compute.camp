import { FC, JSX } from 'react';
import Link, { LinkProps } from 'next/link';

type Props = {
  linkProps: LinkProps;
  className?: string;
  targetBlank?: boolean;
  children: JSX.Element;
  stopPropagation?: boolean;
};
const CustomLink: FC<Props> = ({
  linkProps,
  className = '',
  targetBlank = false,
  children,
  stopPropagation = false,
}) => (
  <Link {...linkProps}>
    <a
      className={className}
      target={targetBlank ? '_blank' : ''}
      onClick={(e) => stopPropagation && e.stopPropagation()}
    >
      {children}
    </a>
  </Link>
);

export default CustomLink;
