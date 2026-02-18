
import React from 'react';
import { Users, FilePlus, Map, CheckCircle, Search, Filter } from 'lucide-react';

const SecretaryPortal: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Secretaria Escolar</h2>
          <p className="text-slate-500">Gestão de Matrículas e Documentação</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 shadow-sm transition-all">
            <FilePlus size={18} />
            <span>Nova Matrícula</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            <Map size={18} />
            <span>Mapas Estatísticos</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg mb-4">Pedidos Pendentes</h3>
          <div className="space-y-4">
            <RequestItem student="Marta José" type="Certificado" date="1h atrás" />
            <RequestItem student="Mateus Ndala" type="Declaração" date="3h atrás" />
            <RequestItem student="Cátia Bento" type="Matrícula Online" date="Ontem" />
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">Alunos por Curso</h3>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                <input type="text" placeholder="Procurar aluno..." className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none w-48" />
              </div>
              <button className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-lg"><Filter size={18} /></button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Nº Processo</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Nome do Aluno</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Curso</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Ano</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <StudentRow id="2024.0012" name="Carlos Alberto" course="Mecânica" year="2º Ano" status="Ativo" />
                <StudentRow id="2024.0344" name="Mariana Luís" course="Petróleo" year="3º Ano" status="Ativo" />
                <StudentRow id="2024.0089" name="Sebastião João" course="Gás" year="1º Ano" status="Ativo" />
                <StudentRow id="2024.1123" name="Filomena Paiva" course="Informática" year="2º Ano" status="Pendente" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const RequestItem: React.FC<{ student: string; type: string; date: string }> = ({ student, type, date }) => (
  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
    <div className="flex-1">
      <p className="text-sm font-semibold leading-none">{student}</p>
      <p className="text-xs text-slate-500 mt-1">{type}</p>
    </div>
    <span className="text-[10px] text-slate-400">{date}</span>
  </div>
);

const StudentRow: React.FC<{ id: string; name: string; course: string; year: string; status: string }> = ({ id, name, course, year, status }) => (
  <tr className="hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 font-medium text-slate-900">{id}</td>
    <td className="px-6 py-4">{name}</td>
    <td className="px-6 py-4 text-slate-500">{course}</td>
    <td className="px-6 py-4 text-slate-500">{year}</td>
    <td className="px-6 py-4 text-right">
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${status === 'Ativo' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>{status}</span>
    </td>
  </tr>
);

export default SecretaryPortal;
