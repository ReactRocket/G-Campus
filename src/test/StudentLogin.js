// StudentLogin.js
import { useDispatch } from 'react-redux';
import { setSession, clearSession } from '../path-to-your-session-slice-file';

const StudentLogin = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Perform authentication logic here
    // Assuming successful login, dispatch the setSession action
    dispatch(setSession({ sessionID: 'student123', sessionType: 'student' }));
  };

  const handleLogout = () => {
    // Perform logout logic here
    // Dispatch the clearSession action
    dispatch(clearSession());
  };

  return (
    <div>
      <button onClick={handleLogin}>Student Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default StudentLogin;
