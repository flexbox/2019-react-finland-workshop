import React, { useRef, useLayoutEffect } from 'react';
import calculateNodeHeight from './calculateNodeHeight';
import { slowCalculation } from './calculations';

function TextArea(props) {
  const textareaElement = useRef(null);

  useLayoutEffect(() => {
    const height = calculateNodeHeight(textareaElement.current);
    textareaElement.current.style.height = `${height}px`;

    slowCalculation();
    const t0 = performance.now();
    const t1 = performance.now();
    console.log(`useLayoutEffect: ${t1 - t0} ms`);
  });

  return (
    <textarea
      ref={textareaElement}
      value={props.value}
      onChange={event => {
        props.onChange(event.target.value);
      }}
    />
  );
}

export default TextArea;
