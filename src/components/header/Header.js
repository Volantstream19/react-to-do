import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import { signOut } from '../../services/authentication.js';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleLogOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <>
      {!user && (
        <>
          <div>
            <Link to="/auth/sign-in">
              <h2>Sign in</h2>
            </Link>

            <Link to="/auth/sign-up">
              <h2>Sign up</h2>
            </Link>
          </div>
        </>
      )}
      {user && (
        <>
          <h1>Hello User</h1>
          <Link onClick={handleLogOut} to="/auth/sign-in">
            <h3>Log Out</h3>
          </Link>
        </>
      )}
    </>
  );
}
