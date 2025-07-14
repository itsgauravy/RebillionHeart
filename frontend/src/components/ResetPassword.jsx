// src/pages/ResetPassword.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("The stanzas do not match.");
      return;
    }

    try {
      const res = await axios.post(`/api/reset-password/${token}`, { password });
      if (res.data.success) {
        setSuccess("Your verse has been renewed.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(res.data.message || "Link may have expired.");
      }
    } catch (err) {
      setError("Server failed to reset stanza.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-text text-center mb-6">
          Reset Your Stanza
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-text mb-1">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-text2"
              placeholder="Enter new stanza"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-text mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-text2"
              placeholder="Repeat stanza"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-text2 text-white py-2 rounded hover:bg-text transition-colors"
          >
            Renew the Verse
          </button>
        </form>
      </div>
    </section>
  );
}
