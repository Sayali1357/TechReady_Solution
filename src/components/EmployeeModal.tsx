import { X, Mail, Phone, MapPin, Calendar, Briefcase, Send } from 'lucide-react';
import type { Employee } from '../data/employees';

interface EmployeeModalProps {
  employee: Employee;
  onClose: () => void;
}

const EmployeeModal: React.FC<EmployeeModalProps> = ({ employee, onClose }) => {
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-left">
          <img src={employee.avatarUrl} alt={employee.name} className="emp-avatar" />
          <h2 className="emp-name" style={{ fontSize: '24px', marginBottom: '8px' }}>{employee.name}</h2>
          <div className="emp-designation" style={{ marginBottom: '16px' }}>{employee.designation}</div>
          <div className={`dept-badge ${getDeptClass(employee.department)}`}>
            {employee.department} Department
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={18} />
            </div>
            <div className="contact-text">
              <span className="contact-label">Email Address</span>
              <span className="contact-val">{employee.email}</span>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <Phone size={18} />
            </div>
            <div className="contact-text">
              <span className="contact-label">Phone Number</span>
              <span className="contact-val">{employee.phone}</span>
            </div>
          </div>
        </div>
        
        <div className="modal-right">
          <div className="modal-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>About</h3>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Employee ID: {employee.id}</span>
            </div>
            <p>{employee.about}</p>
          </div>
          
          <div className="modal-section">
            <h3>Core Skills</h3>
            <div className="skills-container">
              {employee.skills.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="meta-grid">
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <div className="meta-val">
                <MapPin size={16} style={{ color: 'var(--primary)' }} />
                {employee.location}
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-label">Joining Date</span>
              <div className="meta-val">
                <Calendar size={16} style={{ color: 'var(--primary)' }} />
                {employee.joiningDate}
              </div>
            </div>
          </div>
          
          <div className="modal-section" style={{ marginBottom: 0 }}>
            <h3>Recent Experience</h3>
            {employee.experience.map((exp, idx) => (
              <div key={idx} className="exp-item">
                <div className="exp-icon">
                  <Briefcase size={20} />
                </div>
                <div className="exp-content">
                  <h4>{exp.title}</h4>
                  <div className="exp-meta">{exp.company} • {exp.duration}</div>
                  <p className="exp-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="modal-actions">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex' }}>
                <img src="https://i.pravatar.cc/150?u=1" alt="" style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--surface-color)', zIndex: 2 }} />
                <img src="https://i.pravatar.cc/150?u=2" alt="" style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid var(--surface-color)', marginLeft: -8, zIndex: 1 }} />
              </div>
              Collaborates with the Platform Team
            </div>
            <button className="btn-primary">
              <Send size={18} />
              Message {employee.name.split(' ')[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
