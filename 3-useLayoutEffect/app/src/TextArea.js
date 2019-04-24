import React, { useRef, useLayoutEffect } from 'react';
import calculateNodeHeight from './calculateNodeHeight';

function TextArea(props) {
  const textareaElement = useRef(null);

  useLayoutEffect(() => {
    console.log('run effect');
    console.log('TCL: TextArea -> textareaElement', textareaElement);
    const height = calculateNodeHeight(textareaElement.current);
    console.log('TCL: TextArea -> height', height);
    textareaElement.current.style.height = `${height}px`;
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
