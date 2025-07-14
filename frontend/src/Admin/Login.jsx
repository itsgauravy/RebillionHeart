import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const correctPassword = '123'; // Replace with secure auth logic

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password === correctPassword) {
      localStorage.setItem('isAdmin', 'true');
      navigate('/soulDashboard');
    } else {
      setError('Incorrect password.');
    }
  };

  return (
    <section className="container min-h-[calc(100vh-10.5rem)] flex items-center justify-center  px-3">
      <div className="w-full max-w-md p-8 @apply shadow-[rgba(0,0,0,0.15)_0px_5px_15px_0px] rounded-xl ">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--text)]"> Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="floating-input w-full relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-style"
              autoComplete="email"
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="floating-input w-full relative">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-style"
              autoComplete="current-password"
            />
            <label htmlFor="password">Password</label>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="bg-gradient-to-r from-[#64cf8b] to-[#2daf7d] text-white py-2 px-4 rounded-full shadow-lg hover:scale-105 
              transition-all duration-300 text-sm tracking-wide"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
