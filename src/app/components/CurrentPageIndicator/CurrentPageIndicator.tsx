import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Styles } from './Styles';

interface IndicatorProps {
  text: string;
}

export default function CurrentPageIndicator({ text }: IndicatorProps): JSX.Element {
  return (
    <Styles>
      <FiChevronRight />
      <span>{text}</span>
    </Styles>
  );
}
