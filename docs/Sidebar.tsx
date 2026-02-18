
import React from 'react';
import { UserRole } from '../types';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  ClipboardList, 
  Users, 
  BarChart3, 
  CreditCard, 
  Settings,
  FileText,
  Briefcase,
  Layers,
  ChevronLeft,
  Menu
} from 'lucide-react';

interface SidebarProps {
  role: UserRole;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// Added interface to ensure consistent types for navigation items
interface NavItem {
  icon: any;
  label: string;
  active?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ role, isOpen, setIsOpen }) => {
  // Explicitly typing the return of getNavItems to include optional active property
  const getNavItems = (): NavItem[] => {
    const common: NavItem[] = [
      { icon: LayoutDashboard, label: 'Painel Geral', active: true },
    ];

    switch (role) {
      case UserRole.STUDENT:
        return [
          ...common,
          { icon: BookOpen, label: 'Minhas Aulas' },
          { icon: Layers, label: 'Projetos PBL' },
          { icon: GraduationCap, label: 'Notas e Faltas' },
          { icon: CreditCard, label: 'Pagamentos' },
          { icon: FileText, label: 'Secretaria Digital' },
        ];
      case UserRole.TEACHER:
        return [
          ...common,
          { icon: BookOpen, label: 'Gerir Turmas' },
          { icon: ClipboardList, label: 'Avaliações PBL' },
          { icon: Layers, label: 'Conteúdo E-learning' },
          { icon: Briefcase, label: 'Apoio a Estágios' },
        ];
      case UserRole.DIRECTOR:
        return [
          ...common,
          { icon: BarChart3, label: 'Estatísticas' },
          { icon: Users, label: 'Recursos Humanos' },
          { icon: BookOpen, label: 'Cursos e Matrículas' },
          { icon: CreditCard, label: 'Finanças' },
        ];
      case UserRole.SECRETARY:
        return [
          ...common,
          { icon: Users, label: 'Matrículas' },
          { icon: FileText, label: 'Certificados' },
          { icon: ClipboardList, label: 'Mapas de Notas' },
        ];
      case UserRole.FINANCE:
        return [
          ...common,
          { icon: CreditCard, label: 'Receitas (RUPE)' },
          { icon: BarChart3, label: 'Fluxo de Caixa' },
          { icon: Users, label: 'Inadimplência' },
        ];
      default:
        return common;
    }
  };

  const navItems = getNavItems();

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} h-full bg-slate-900 text-white transition-all duration-300 relative flex flex-col`}>
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-lg shrink-0">N</div>
        {isOpen && <h1 className="font-bold text-lg truncate">Nova Era</h1>}
      </div>

      <nav className="flex-1 px-4 space-y-2 py-4">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              item.active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            {isOpen && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white">
          <Settings size={20} />
          {isOpen && <span className="text-sm font-medium">Configurações</span>}
        </button>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-20 bg-blue-600 text-white p-1 rounded-full shadow-lg hover:bg-blue-500 transition-colors"
      >
        {isOpen ? <ChevronLeft size={16} /> : <Menu size={16} />}
      </button>
    </div>
  );
};

export default Sidebar;
