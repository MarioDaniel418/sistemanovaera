
import React, { useState } from 'react';
import { UserRole, User } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StudentPortal from './portals/StudentPortal';
import TeacherPortal from './portals/TeacherPortal';
import DirectorPortal from './portals/DirectorPortal';
import SecretaryPortal from './portals/SecretaryPortal';
import FinancePortal from './portals/FinancePortal';

const mockUser: User = {
  id: '1',
  name: 'Eng. Domingos Zaire',
  role: UserRole.DIRECTOR,
  avatar: 'https://picsum.photos/seed/zaire/200'
};

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User>(mockUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderPortal = () => {
    switch (currentUser.role) {
      case UserRole.STUDENT: return <StudentPortal />;
      case UserRole.TEACHER: return <TeacherPortal />;
      case UserRole.DIRECTOR: return <DirectorPortal />;
      case UserRole.SECRETARY: return <SecretaryPortal />;
      case UserRole.FINANCE: return <FinancePortal />;
      default: return <div className="p-8">Selecione um portal válido.</div>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Role Switcher for Demo Purposes */}
      <div className="fixed bottom-4 right-4 z-50 bg-white p-2 rounded-lg shadow-xl border border-slate-200 flex flex-col gap-2">
        <p className="text-xs font-bold text-slate-500 uppercase px-2 mb-1">Demo Role Switcher</p>
        {Object.values(UserRole).map((role) => (
          <button
            key={role}
            onClick={() => setCurrentUser({ ...currentUser, role })}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              currentUser.role === role ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      <Sidebar 
        role={currentUser.role} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={currentUser} />
        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderPortal()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
