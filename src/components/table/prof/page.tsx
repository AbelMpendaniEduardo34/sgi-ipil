"use client";

import {
  TableBody,
  Table,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import Profs from "@/components/popup/prof/popup-alterar";


export default function Tabela() {
  const [isProfsOpen, setIsProfsOpen] = useState(false);
  const handleOpenProfs = () => setIsProfsOpen(true);
  const handleCloseProfs = () => setIsProfsOpen(false);
  return (
    <>
      <div className="h-full lg:h-full lg:overflow-y-auto overflow-y-auto">
        <div className="hidden sm:flex sm:flex-row mt-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome:</TableHead>
                <TableHead>Disciplina:</TableHead>
                <TableHead>Email:</TableHead>
                <TableHead>Tel:</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                className="hover:bg-violet-400 hover:text-white"
                onClick={handleOpenProfs}
              >
                <TableCell>Uveli Afonso</TableCell>
                <TableCell>TLP</TableCell>
                <TableCell>uveliafonso@gmail.com</TableCell>
                <TableCell>938294016</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Table className="sm:hidden">
          <TableHeader>
            <TableRow>
              <TableHead>Nome:</TableHead>
              <TableHead>Disciplina:</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              className="hover:bg-violet-400 hover:text-white"
              onClick={handleOpenProfs}
            >
              <TableCell>Uveli Afonso</TableCell>
              <TableCell>TLP</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {/* Modal de Pedidos */}
      {isProfsOpen && <Profs onClose={handleCloseProfs} />}
    </>
  );
}
