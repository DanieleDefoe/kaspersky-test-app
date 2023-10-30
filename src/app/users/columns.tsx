'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { type ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';

export const columns: Array<ColumnDef<User>> = [
  {
    id: 'select',
    header({ table }) {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      );
    },
    cell({ row }) {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: 'name',
    header({ column }) {
      return (
        <Button
          variant="ghost"
          className="text-gray-100 font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Полное имя
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'login',
    header({ column }) {
      return (
        <Button
          variant="ghost"
          className="text-gray-100 font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Учетная запись
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'email',
    header({ column }) {
      return (
        <Button
          variant="ghost"
          className="text-gray-100 font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Электронаая почта
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'group',
    header() {
      return <p className="text-gray-100 font-bold">Группа</p>;
    },
  },
  {
    accessorKey: 'phone',
    header() {
      return <p className="text-gray-100 font-bold">Номер телефона</p>;
    },
  },
  {
    id: 'actions',
    cell() {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
