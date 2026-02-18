
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Users, GraduationCap, TrendingUp, AlertTriangle } from 'lucide-react';

const enrollmentData = [
  { month: 'Jan', students: 400 },
  { month: 'Fev', students: 600 },
  { month: 'Mar', students: 880 },
  { month: 'Abr', students: 875 },
  { month: 'Mai', students: 860 },
  { month: 'Jun', students: 855 },
];

const courseStats = [
  { name: 'Petróleo', value: 35 },
  { name: 'Mecânica', value: 25 },
  { name: 'Informática', value: 20 },
  { name: 'Gás', value: 15 },
  { name: 'Eletricidade', value: 5 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const DirectorPortal: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Dashboard Estratégico</h2>
          <p className="text-slate-500">Escola Técnica Zaire Industrial - Soyo</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">Exportar Relatório</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Novas Ações</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Alunos Ativos" value="855" subValue="+12% vs 2023" icon={Users} color="bg-blue-500" />
        <KPICard title="Retenção Escolar" value="94.2%" subValue="-0.5% este mês" icon={TrendingUp} color="bg-emerald-500" />
        <KPICard title="Aproveitamento" value="78.5%" subValue="+3.2% vs trim anterior" icon={GraduationCap} color="bg-amber-500" />
        <KPICard title="Inadimplência" value="12.8%" subValue="+1.5% alerta" icon={AlertTriangle} color="bg-rose-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Enrollment Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Crescimento de Matrículas (2024)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentData}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="students" stroke="#3b82f6" fillOpacity={1} fill="url(#colorStudents)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Course Distribution */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Distribuição por Curso</h3>
          <div className="h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={courseStats}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {courseStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {courseStats.map((stat, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                  <span className="text-slate-600">{stat.name}</span>
                </div>
                <span className="font-semibold">{stat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const KPICard: React.FC<{ title: string; value: string; subValue: string; icon: any; color: string }> = ({ title, value, subValue, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
    <div className={`w-12 h-12 rounded-lg ${color} text-white flex items-center justify-center shrink-0`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h4 className="text-2xl font-bold text-slate-900 mt-1">{value}</h4>
      <p className={`text-xs mt-1 ${subValue.includes('-') ? 'text-rose-600' : 'text-emerald-600'}`}>{subValue}</p>
    </div>
  </div>
);

export default DirectorPortal;
