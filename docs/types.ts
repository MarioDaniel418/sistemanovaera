
export enum UserRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  DIRECTOR = 'DIRECTOR',
  SECRETARY = 'SECRETARY',
  FINANCE = 'FINANCE'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface Course {
  id: string;
  name: string;
  category: 'Petróleo' | 'Gás' | 'Mecânica' | 'Informática' | 'Eletricidade';
  studentsCount: number;
}

export interface PBLProject {
  id: string;
  title: string;
  student: string;
  status: 'Draft' | 'Submitted' | 'Reviewed' | 'Approved';
  grade?: number;
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: 'Propina' | 'Matrícula' | 'Taxa' | 'Outro';
  status: 'Pendente' | 'Pago' | 'Atrasado';
}
