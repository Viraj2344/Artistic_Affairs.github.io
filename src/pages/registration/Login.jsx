import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';

function Login() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/');
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700">
       <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">Artistic Affairs</h1>
      </div>
      {loading && <Loader />}
     
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Login</h1>
        </div>
        <div className="mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 transition duration-300"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-gray-500 transition duration-300"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <button
            onClick={login}
            className="w-full bg-purple-500 text-white font-bold py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Login
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-gray-700">
            Don't have an account?{' '}
            <Link className="text-purple-500 font-bold" to={'/signup'}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
