import { useState } from 'react';
import Login from '../Components/auth/Login';
import SignUp from '../Components/auth/SignUp';

type Props = {};

const LoginPage = (props: Props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen m-5">
      {!showLogin && !showSignUp && (
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
            onClick={handleSignUpClick}
          >
            SignUp
          </button>
        </>
      )}
      {showLogin && <Login />}
      {showSignUp && <SignUp />}
    </div>
  );
};

export default LoginPage;
