// AdminDashboard.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import '../css/GlassRadio.css';
import axios from 'axios';
import { Trash2, Reply, Eye, EyeOff } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('newsletter');
  const [newsletterData, setNewsletterData] = useState([]);
  const [waitlistData, setWaitlistData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/hidden-Soul');
    window.location.reload();
  };

  const fetchNewsletter = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/newsletter');
      setNewsletterData(res.data);
    } catch (err) {
      console.error('Failed to fetch newsletter:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchWaitlist = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/waitlist');
      setWaitlistData(res.data);
    } catch (err) {
      console.error('Failed to fetch waitlist:', err.message);
    }
  };

  const fetchContact = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contact');
      setContactData(res.data);
    } catch (err) {
      console.error('Failed to fetch contact messages:', err.message);
    }
  };

  const handleDelete = async (id, type) => {
    const confirm = window.confirm('Are you sure you want to delete this item?');
    if (!confirm) return;

    const endpoint = `http://localhost:5000/api/${type}/${id}`;
    try {
      await axios.delete(endpoint);
      if (type === 'newsletter') {
        setNewsletterData(prev => prev.filter(item => item._id !== id));
      } else if (type === 'waitlist') {
        setWaitlistData(prev => prev.filter(item => item._id !== id));
      } else if (type === 'contact') {
        setContactData(prev => prev.filter(item => item._id !== id));
      }
    } catch (err) {
      console.error('Delete error:', err.message);
    }
  };

  const handleToggleRead = async (id, currentRead) => {
    try {
      await axios.patch(`http://localhost:5000/api/contact/${id}`, { read: !currentRead });
      setContactData(prev => prev.map(msg => msg._id === id ? { ...msg, read: !currentRead } : msg));
    } catch (err) {
      console.error('Toggle read error:', err.message);
    }
  };

  const handleReplyContact = async (item) => {
    if (!item.read) {
      await handleToggleRead(item._id, false);
    }
    window.location.href = `mailto:${item.email}?subject=Re: ${item.subject}`;
  };

  useEffect(() => {
    if (view === 'newsletter') fetchNewsletter();
    else if (view === 'waitlist') fetchWaitlist();
    else if (view === 'contact') fetchContact();
  }, [view]);

  const renderTable = () => {
    if (view === 'newsletter') {
      return (
        <table className="w-full mt-4 border text-sm sm:text-base">
          <thead>
            <tr className="bg-[#69aa83] text-left">
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsletterData.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-2">{item.email}</td>
                <td className="p-2 flex gap-2">
                  <a
                    href={`mailto:${item.email}?subject=Newsletter`}
                    title="Reply"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Reply size={18} />
                  </a>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(item._id, 'newsletter')}
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (view === 'waitlist') {
      return (
        <table className="w-full mt-4 border text-sm sm:text-base">
          <thead>
            <tr className="bg-[#d2b8fc] text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {waitlistData.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.email}</td>
                <td className="p-2 flex gap-2">
                  <a
                    href={`mailto:${item.email}?subject=Waitlist`}
                    title="Reply"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Reply size={18} />
                  </a>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(item._id, 'waitlist')}
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (view === 'contact') {
      return (
        <table className="w-full mt-4 border text-sm sm:text-base">
          <thead>
            <tr className="bg-[#c5e4fa] text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Message</th>
              <th className="p-2">Status</th>
              <th className="p-2">Date</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactData.length > 0 ? (
              contactData.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2 break-all">{item.email}</td>
                  <td className="p-2">{item.subject}</td>
                  <td className="p-2">{item.message}</td>
                  <td className="p-2">{item.read ? 'Read' : 'Unread'}</td>
                  <td className="p-2">{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td className="p-2 flex flex-col gap-2">
                    <button
                      onClick={() => handleToggleRead(item._id, item.read)}
                      title={item.read ? 'Mark as Unread' : 'Mark as Read'}
                      className="text-green-600 hover:text-green-800"
                    >
                      {item.read ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <button
                      onClick={() => handleReplyContact(item)}
                      title="Reply"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Reply size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id, 'contact')}
                      title="Delete"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No contact messages yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      );
    }
  };

  return (
    <section className="container min-h-[calc(100vh-8.5rem)] px-3 mt-[5rem]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[var(--text)]">Admin Dashboard</h1>
        <LogoutButton onClick={handleLogout} />
      </div>

      <div className="glass-radio-group">
        <input type="radio" name="view" id="newsletter" value="newsletter" checked={view === 'newsletter'} onChange={() => setView('newsletter')} />
        <label htmlFor="newsletter">Newsletter</label>

        <input type="radio" name="view" id="waitlist" value="waitlist" checked={view === 'waitlist'} onChange={() => setView('waitlist')} />
        <label htmlFor="waitlist">Waitlist</label>

        <input type="radio" name="view" id="contact" value="contact" checked={view === 'contact'} onChange={() => setView('contact')} />
        <label htmlFor="contact">Contact</label>

        <div className="glass-glider" />
      </div>

      {renderTable()}
    </section>
  );
};

export default AdminDashboard;
