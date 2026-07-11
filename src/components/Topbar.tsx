import React from 'react';
import { Search, Bell, Moon, Sun } from 'lucide-react';

interface TopbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ searchQuery, setSearchQuery, isDark, toggleTheme }) => {
  return (
    <header className="topbar">
      <div className="search-bar">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder="Search by name, ID or role..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <nav className="top-nav">
        <div className="top-nav-item active">Dashboard</div>
        <div className="top-nav-item">Directory</div>
        <div className="top-nav-item">Departments</div>
        <div className="top-nav-item">Settings</div>
      </nav>

      <div className="top-actions">
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <button className="icon-btn" onClick={toggleTheme} title="Toggle Theme">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <img
          src="/avatar.png"
          alt="User Profile"
          className="avatar"
        />
      </div>
    </header>
  );
};

export default Topbar;
