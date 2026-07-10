import { useState, useMemo, useEffect } from 'react';
import { employees, type Employee } from './data/employees';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import EmployeeCard from './components/EmployeeCard';
import EmployeeModal from './components/EmployeeModal';
import StatsSidebar from './components/StatsSidebar';
import './index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  
  // Theme state
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const filteredEmployees = useMemo(() => {
    let result = employees;

    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(emp => 
        emp.name.toLowerCase().includes(lowerQuery) ||
        emp.id.toLowerCase().includes(lowerQuery) ||
        emp.designation.toLowerCase().includes(lowerQuery)
      );
    }

    // Department filter
    if (departmentFilter !== 'All Departments') {
      result = result.filter(emp => emp.department === departmentFilter);
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortOrder === 'A-Z') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return result;
  }, [searchQuery, departmentFilter, sortOrder]);

  const uniqueDepartments = ['All Departments', ...new Set(employees.map(e => e.department))];

  return (
    <div className="app-container">
      <Sidebar />
      
      <main className="main-content">
        <Topbar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        
        <div className="page-content">
          <div className="dashboard-main">
            
            <div className="welcome-banner">
              <h1>Welcome back, Sarah!</h1>
              <p>Your directory is up to date. You have <strong style={{ color: 'var(--primary)' }}>2 new joiners</strong> to welcome this week across all departments.</p>
              <button className="btn-primary">View Announcements</button>
              
              <div style={{ position: 'absolute', right: '48px', top: '50%', transform: 'translateY(-50%)', opacity: 0.9 }}>
                <svg width="180" height="150" viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="40" width="140" height="90" rx="12" fill="var(--bg-color)" stroke="var(--border-color)" strokeWidth="2"/>
                  <circle cx="90" cy="85" r="24" fill="var(--primary)" fillOpacity="0.1" stroke="var(--primary)" strokeWidth="2"/>
                  <path d="M90 73C85.5817 73 82 76.5817 82 81C82 85.4183 85.5817 89 90 89C94.4183 89 98 85.4183 98 81C98 76.5817 94.4183 73 90 73ZM90 89C81.1634 89 74 96.1634 74 105H106C106 96.1634 98.8366 89 90 89Z" fill="var(--primary)"/>
                  <rect x="40" y="20" width="32" height="12" rx="6" fill="var(--dept-legal-text)" fillOpacity="0.2"/>
                  <rect x="108" y="20" width="32" height="12" rx="6" fill="var(--dept-hr-text)" fillOpacity="0.2"/>
                  <circle cx="30" cy="115" r="4" fill="var(--primary)"/>
                  <circle cx="150" cy="65" r="6" fill="var(--dept-finance-text)"/>
                </svg>
              </div>
            </div>

            <div className="controls">
              <div className="filters">
                <select 
                  className="select-filter" 
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  {uniqueDepartments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>

                <select 
                  className="select-filter"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="A-Z">Sort: A-Z</option>
                  <option value="Z-A">Sort: Z-A</option>
                </select>
              </div>

              <div className="showing-text">
                Showing {filteredEmployees.length} of {employees.length}
              </div>
            </div>

            <div className="employee-grid">
              {filteredEmployees.map(employee => (
                <EmployeeCard 
                  key={employee.id} 
                  employee={employee} 
                  onClick={setSelectedEmployee} 
                />
              ))}
              
              {filteredEmployees.length === 0 && (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '64px', color: 'var(--text-secondary)' }}>
                  No employees found matching your criteria.
                </div>
              )}
            </div>
            
          </div>
          
          <StatsSidebar employees={employees} />
        </div>
      </main>

      {selectedEmployee && (
        <EmployeeModal 
          employee={selectedEmployee} 
          onClose={() => setSelectedEmployee(null)} 
        />
      )}
    </div>
  );
}

export default App;
