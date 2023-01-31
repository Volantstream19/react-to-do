import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import { signOut } from '../../services/authentication.js';
import './Header.css';

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
          <div className="sign-container">
            <Link to="/auth/sign-in">
              <h2 className="sign-in">Sign in</h2>
            </Link>

            <Link to="/auth/sign-up">
              <h2 className="sign-up">Sign up</h2>
            </Link>
          </div>
        </>
      )}
      {user && (
        <>
          <div className="logout-container">
            <h1 className="todo-title">Welcome To Your List</h1>
            <Link onClick={handleLogOut} to="/auth/sign-in">
              <h3 className="log-out">Log Out</h3>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
