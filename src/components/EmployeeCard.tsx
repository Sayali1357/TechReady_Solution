import { Mail, MapPin } from 'lucide-react';
import type { Employee } from '../data/employees';

interface EmployeeCardProps {
  employee: Employee;
  onClick: (employee: Employee) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onClick }) => {
  const getDeptClass = (dept: string) => {
    switch (dept.toLowerCase()) {
      case 'it': return 'dept-it';
      case 'hr': return 'dept-hr';
      case 'finance': return 'dept-finance';
      case 'marketing': return 'dept-marketing';
      case 'legal': return 'dept-legal';
      case 'engineering': return 'dept-engineering';
      default: return 'dept-it';
    }
  };

  return (
    <div className="employee-card" onClick={() => onClick(employee)}>
      <img src={employee.avatarUrl} alt={employee.name} className="emp-avatar" />
      <h3 className="emp-name">{employee.name}</h3>
      <p className="emp-id">{employee.id}</p>
      
      <div className={`dept-badge ${getDeptClass(employee.department)}`}>
        {employee.department} Department
      </div>
      
      <div className="emp-designation">{employee.designation}</div>
      
      <div className="emp-contact">
        <div className="contact-item">
          <Mail size={14} />
          <span>{employee.email}</span>
        </div>
        <div className="contact-item">
          <MapPin size={14} />
          <span>{employee.location}</span>
        </div>
      </div>
      
      <button className="btn-outline" style={{ width: '100%' }}>View Details</button>
    </div>
  );
};

export default EmployeeCard;
