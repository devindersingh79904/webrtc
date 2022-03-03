import React from 'react';

const SubmitButton = ({ text, onSubmitButtonClick, ...props }) => {
  return (
    <div>
      <button onClick={onSubmitButtonClick}>{text}</button>
    </div>
  );
};

export default SubmitButton;
