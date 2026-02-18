
import React from 'react';
import { BookOpen, GraduationCap, FileText, Send, Download, CheckCircle } from 'lucide-react';

const StudentPortal: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold">Bem-vindo, André!</h2>
          <p className="text-blue-100 mt-1">Curso de Engenharia de Petróleo & Gás • 3º Ano</p>
          <div className="flex gap-4 mt-6">
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-center">
              <p className="text-xs opacity-80 uppercase font-bold tracking-wider">Frequência</p>
              <p className="text-lg font-bold">92%</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-center">
              <p className="text-xs opacity-80 uppercase font-bold tracking-wider">Média Atual</p>
              <p className="text-lg font-bold">16.4</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 hidden lg:block">
          <div className="bg-white p-4 rounded-xl text-slate-900 max-w-xs shadow-2xl animate-bounce-slow">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Próxima Aula</p>
            <p className="font-bold text-sm">Geologia de Reservatórios</p>
            <p className="text-xs text-slate-500 mt-1">Sala 12 • 14:30 - 16:00</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Learning Materials */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-500" />
              Materiais Didáticos
            </h3>
            <button className="text-sm text-blue-600 font-semibold hover:underline">Ver todos</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MaterialCard title="Princípios de Perfuração" type="PDF" size="4.2MB" date="Hoje" />
            <MaterialCard title="Simulação de Fluidos v3" type="ZIP" size="128MB" date="Ontem" />
            <MaterialCard title="Workshop Segurança Soyo" type="VIDEO" size="1.5GB" date="12 Mai" />
            <MaterialCard title="Manual de Normas Técnicas" type="PDF" size="1.1MB" date="10 Mai" />
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-blue-500" />
              Meus Projetos PBL
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-800">Desenvolvimento de Broca Diamantada</h4>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full uppercase">Em Revisão</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-4">
                  <div className="bg-amber-500 h-1.5 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secretariat Actions */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FileText size={20} className="text-blue-500" />
              Secretaria Digital
            </h3>
            <div className="space-y-3">
              <ActionItem icon={Send} label="Solicitar Declaração" description="Com e sem notas" />
              <ActionItem icon={CheckCircle} label="Certificado de Conclusão" description="Via digital autenticada" />
              <ActionItem icon={Download} label="Recibo de Propinas" description="Histórico completo" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-xl text-white shadow-lg">
            <h4 className="font-bold text-lg mb-2">Canal de Estágios</h4>
            <p className="text-sm text-blue-100 leading-relaxed">Conecte-se com as indústrias locais do Soyo e Zaire. Novas vagas para estágio profissional abertas!</p>
            <button className="w-full py-2.5 bg-white text-blue-700 font-bold rounded-lg mt-6 hover:bg-blue-50 transition-colors">Ver Oportunidades</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MaterialCard: React.FC<{ title: string; type: string; size: string; date: string }> = ({ title, type, size, date }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-blue-300 transition-colors group cursor-pointer">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
      type === 'PDF' ? 'bg-rose-50 text-rose-500' : 
      type === 'VIDEO' ? 'bg-indigo-50 text-indigo-500' : 'bg-slate-50 text-slate-500'
    }`}>
      <FileText size={24} />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-bold text-sm text-slate-900 truncate">{title}</h4>
      <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">{type} • {size} • {date}</p>
    </div>
    <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors group-hover:bg-blue-50 rounded-lg">
      <Download size={18} />
    </button>
  </div>
);

const ActionItem: React.FC<{ icon: any; label: string; description: string }> = ({ icon: Icon, label, description }) => (
  <button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group text-left">
    <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
      <Icon size={20} />
    </div>
    <div>
      <p className="font-semibold text-sm text-slate-900 leading-none">{label}</p>
      <p className="text-xs text-slate-400 mt-1">{description}</p>
    </div>
  </button>
);

export default StudentPortal;
