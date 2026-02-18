
import React, { useState } from 'react';
import { CreditCard, ArrowUpRight, ArrowDownRight, Printer, Search, Filter } from 'lucide-react';
import { Transaction } from '../types';

const mockTransactions: Transaction[] = [
  { id: 'TX001', date: '2024-05-12', amount: 45000, type: 'Propina', status: 'Pago' },
  { id: 'TX002', date: '2024-05-11', amount: 12500, type: 'Matrícula', status: 'Pago' },
  { id: 'TX003', date: '2024-05-10', amount: 45000, type: 'Propina', status: 'Pendente' },
  { id: 'TX004', date: '2024-05-09', amount: 5000, type: 'Taxa', status: 'Atrasado' },
];

const FinancePortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'rupe'>('overview');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Módulo Financeiro</h2>
          <p className="text-slate-500">Gestão de Arrecadação e Fluxo de Caixa</p>
        </div>
        <div className="flex gap-2 p-1 bg-slate-200 rounded-lg">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-600'}`}
          >
            Visão Geral
          </button>
          <button 
            onClick={() => setActiveTab('rupe')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'rupe' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-600'}`}
          >
            Simulador RUPE
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 -mr-12 -mt-12 rounded-full opacity-50"></div>
              <p className="text-sm font-medium text-slate-500">Saldo Disponível</p>
              <h4 className="text-3xl font-bold text-slate-900 mt-2">Kz 4.850.000,00</h4>
              <div className="flex items-center gap-1 text-emerald-600 text-xs mt-3 font-medium">
                <ArrowUpRight size={14} />
                <span>+8.4% vs mês passado</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Receita Prevista (Junho)</p>
              <h4 className="text-3xl font-bold text-slate-900 mt-2">Kz 12.200.000,00</h4>
              <div className="mt-4 bg-slate-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-[65%]"></div>
              </div>
              <p className="text-xs text-slate-500 mt-2">65% arrecadado até o momento</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Inadimplência Crítica</p>
              <h4 className="text-3xl font-bold text-rose-600 mt-2">84 Alunos</h4>
              <button className="text-xs text-blue-600 font-medium mt-3 hover:underline">Ver lista de devedores &rarr;</button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Transações Recentes</h3>
              <div className="flex gap-2">
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"><Search size={18} /></button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"><Filter size={18} /></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Data</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Serviço</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Valor</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{tx.id}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{tx.date}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{tx.type}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">Kz {tx.amount.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          tx.status === 'Pago' ? 'bg-emerald-100 text-emerald-700' :
                          tx.status === 'Pendente' ? 'bg-amber-100 text-amber-700' :
                          'bg-rose-100 text-rose-700'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <Printer size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard size={32} />
            </div>
            <h3 className="text-xl font-bold">Gerar Referência RUPE</h3>
            <p className="text-slate-500 mt-2">Sistema integrado com o Ministério das Finanças de Angola</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Serviço</label>
              <select className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                <option>Propina Mensal</option>
                <option>Matrícula / Reconfirmação</option>
                <option>Emissão de Certificado</option>
                <option>Exame Especial</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">NIF do Aluno</label>
                <input type="text" placeholder="001234567LA012" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ano Lectivo</label>
                <input type="text" value="2024/2025" readOnly className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-lg outline-none cursor-not-allowed" />
              </div>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
              Emitir Referência Única
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest font-semibold">
              Soberania Tecnológica - Zaire Industrial
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancePortal;
