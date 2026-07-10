import React from 'react';
import { LayoutDashboard, Users, Building2, Settings, Sparkles } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Sparkles size={28} />
        <div>
          Techredy IT Solution
          <div style={{ fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 500 }}>PREMIUM DIRECTORY</div>
        </div>
      </div>

      <nav className="nav-menu">
        <div className="nav-item active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <Users size={20} />
          <span>Directory</span>
        </div>
        <div className="nav-item">
          <Building2 size={20} />
          <span>Departments</span>
        </div>
        <div className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
