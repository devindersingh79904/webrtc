import React, { useState } from 'react';

const UserNameInput = ({username, onUserNameChange, ...props }) => {

  return (
    <div>
      <input
        placeholder='Enter your name'
        type='text'
        value={username}
        onChange={(e) => onUserNameChange(e)}
      />
    </div>
  );
}

export default UserNameInput;
