
import React from 'react';
import { Layers, CheckCircle2, Clock, MessageSquare, Plus } from 'lucide-react';
import { PBLProject } from '../types';

const mockPBLProjects: PBLProject[] = [
  { id: 'P001', title: 'Manutenção de Bombas de Poço', student: 'André Manuel', status: 'Submitted' },
  { id: 'P002', title: 'Automação de Refinaria (PLC)', student: 'Isabel Costa', status: 'Reviewed', grade: 18 },
  { id: 'P003', title: 'Relatório de Segurança Onshore', student: 'João Baptista', status: 'Draft' },
];

const TeacherPortal: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Espaço do Professor</h2>
          <p className="text-slate-500">Gestão Pedagógica e Metodologia PBL</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-md transition-all">
          <Plus size={18} />
          <span>Novo Conteúdo</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PBL Tracking */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="text-blue-500" size={20} />
              <h3 className="font-semibold text-slate-900">Projetos Técnicos (PBL)</h3>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">8 pendentes</span>
          </div>
          <div className="p-0">
            {mockPBLProjects.map((project) => (
              <div key={project.id} className="p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                  <StatusBadge status={project.status} />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-slate-500">Aluno: {project.student}</p>
                  {project.grade && <span className="text-sm font-bold text-emerald-600">{project.grade}/20</span>}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 text-sm text-slate-500 hover:bg-slate-50 transition-colors border-t border-slate-100">
            Ver todos os projetos
          </button>
        </div>

        {/* Classes Overview */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">Minhas Turmas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ClassCard name="Petróleo A" students={32} schedule="Seg/Qua - 08:00" />
            <ClassCard name="Gás B" students={28} schedule="Ter/Qui - 10:30" />
            <ClassCard name="Mecânica C" students={40} schedule="Qua/Sex - 14:00" />
            <ClassCard name="Informática D" students={25} schedule="Seg/Ter - 16:30" />
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-amber-900">Lembrete: Lançamento de Notas</h4>
              <p className="text-sm text-amber-700 mt-1">O prazo para lançamento das notas do 2º trimestre encerra em 3 dias.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const styles: Record<string, string> = {
    Draft: 'bg-slate-100 text-slate-600',
    Submitted: 'bg-blue-100 text-blue-600',
    Reviewed: 'bg-amber-100 text-amber-600',
    Approved: 'bg-emerald-100 text-emerald-600',
  };
  return <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${styles[status] || styles.Draft}`}>{status}</span>;
};

const ClassCard: React.FC<{ name: string; students: number; schedule: string }> = ({ name, students, schedule }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-400 transition-colors cursor-pointer">
    <div className="flex justify-between items-start mb-3">
      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
        <Layers size={20} />
      </div>
      <button className="text-slate-400 hover:text-slate-600"><MessageSquare size={16} /></button>
    </div>
    <h4 className="font-bold text-slate-900">{name}</h4>
    <p className="text-xs text-slate-500 mt-1">{students} alunos inscritos</p>
    <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
      <Clock size={12} />
      <span>{schedule}</span>
    </div>
  </div>
);

export default TeacherPortal;
