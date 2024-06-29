import MarkdownPreview from '@uiw/react-markdown-preview';
import React from 'react';
import { formatTextToMarkdown } from '@/utils';

interface Props {
  content: string;
  className?: string;
  mode?: 'light' | 'dark';
}


const Preview: React.FC<Props> = ({ content, className, mode = 'light' }) => {
  return (
    <div data-color-mode={mode} className={className}>
      <MarkdownPreview source={formatTextToMarkdown(content)} />
    </div>
  );
};

export default Preview;
