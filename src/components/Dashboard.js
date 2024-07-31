import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        {user && (
          <div className="text-center">
            <p className="text-xl mb-4">Welcome, {user.firstName} {user.lastName}</p>
            <button onClick={logout} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
