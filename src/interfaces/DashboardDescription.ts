import { TableBody } from '@/interfaces/TableBody';

export interface DashboardDescription {
    id: number;
    title: string;
    header: string[];
    content: TableBody[]
}