import { Users, Building2, UserCheck, UserPlus } from 'lucide-react';
import type { Employee } from '../data/employees';

interface StatsSidebarProps {
  employees: Employee[];
}

const StatsSidebar: React.FC<StatsSidebarProps> = ({ employees }) => {
  const departments = new Set(employees.map(e => e.department)).size;

  return (
    <div className="stats-sidebar">
      <div className="stat-card" style={{ borderLeft: '4px solid var(--primary)' }}>
        <Users className="stat-icon" size={24} />
        <div className="stat-label">Total Employees</div>
        <div className="stat-value">{employees.length}</div>
      </div>
      
      <div className="stat-card" style={{ borderLeft: '4px solid var(--dept-hr-text)' }}>
        <Building2 className="stat-icon" size={24} style={{ color: 'var(--dept-hr-text)' }} />
        <div className="stat-label">Departments</div>
        <div className="stat-value">{departments}</div>
      </div>
      
      <div className="stat-card" style={{ borderLeft: '4px solid var(--dept-legal-text)' }}>
        <UserCheck className="stat-icon" size={24} style={{ color: 'var(--dept-legal-text)' }} />
        <div className="stat-label">Active</div>
        <div className="stat-value">{employees.length}</div>
      </div>
      
      <div className="stat-card" style={{ borderLeft: '4px solid var(--dept-finance-text)' }}>
        <UserPlus className="stat-icon" size={24} style={{ color: 'var(--dept-finance-text)' }} />
        <div className="stat-label">New Joiners</div>
        <div className="stat-value">2</div>
      </div>
    </div>
  );
};

export default StatsSidebar;
