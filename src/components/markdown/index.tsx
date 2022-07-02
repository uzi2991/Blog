import React from 'react';
import ReactMarkdown from 'react-markdown';
import Code from './Code';
import styles from './Markdown.module.css';
import cn from 'classnames';

type Props = {
  children: string;
};

const Markdown = ({ children }: Props) => {
  return (
    <ReactMarkdown
      className={cn("wrapper", styles.markdown)}
      components={{
        code: Code
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
