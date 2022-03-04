import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SubmitButton from '../components/SubmitButton';
import UserNameInput from '../components/UserNameInput';
import { SET_USERNAME } from '../store/constant/dashboarbConstant';
import { setUserName } from '../store/actions/dashboardAction';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const onSubmitButtonClick = () => {
    dispatch(setUserName(username));
    navigate('/dashboard');
  };
  return (
    <div>
      <div>
        <div>
          <h1>I am login</h1>
          <UserNameInput
            username={username}
            onUserNameChange={onUserNameChange}
          />
          <SubmitButton
            text={`Click me`}
            onSubmitButtonClick={onSubmitButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
