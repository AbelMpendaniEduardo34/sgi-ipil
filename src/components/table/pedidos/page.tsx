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
import Pedidos from "@/components/popup/pedido/popup-detalhes";


export default function Tabela() {
  const [isPedidosOpen, setIsPedidosOpen] = useState(false);
  const handleOpenPedidos = () => setIsPedidosOpen(true);
  const handleClosePedidos = () => setIsPedidosOpen(false);
  return (
    <>
      <div className="h-full lg:h-full lg:overflow-y-auto overflow-y-auto">
        <div className="hidden sm:flex sm:flex-row">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome:</TableHead>
                <TableHead>Pedido:</TableHead>
                <TableHead>Email:</TableHead>
                <TableHead>Data:</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                className="hover:bg-violet-400 hover:text-white"
                onClick={handleOpenPedidos}
              >
                <TableCell>Uveli Afonso</TableCell>
                <TableCell>Certificado</TableCell>
                <TableCell>uveliafonso@gmail.com</TableCell>
                <TableCell>12/12/2024</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Table className="sm:hidden">
          <TableHeader>
            <TableRow>
              <TableHead>Nome:</TableHead>
              <TableHead>Pedido:</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              className="hover:bg-violet-400 hover:text-white"
              onClick={handleOpenPedidos}
            >
              <TableCell>Uveli Afonso</TableCell>
              <TableCell>Certificado</TableCell>
            </TableRow>
            <TableRow
              className="hover:bg-violet-400 hover:text-white"
              onClick={handleOpenPedidos}
            >
              <TableCell>Uveli Afonso</TableCell>
              <TableCell>Certificado</TableCell>
            </TableRow>
            <TableRow
              className="hover:bg-violet-400 hover:text-white"
              onClick={handleOpenPedidos}
            >
              <TableCell>Uveli Afonso</TableCell>
              <TableCell>Certificado</TableCell>
            </TableRow>
            <TableRow
              className="hover:bg-violet-400 hover:text-white"
              onClick={handleOpenPedidos}
            >
              <TableCell>Uveli Afonso</TableCell>
              <TableCell>Certificado</TableCell>
            </TableRow>
            <TableRow
              className="hover:bg-violet-400 hover:text-white"
              onClick={handleOpenPedidos}
            >
              <TableCell>Uveli Afonso</TableCell>
              <TableCell>Certificado</TableCell>
            </TableRow>
            <TableRow
              className="hover:bg-violet-400 hover:text-white"
              onClick={handleOpenPedidos}
            >
              <TableCell>Uveli Afonso</TableCell>
              <TableCell>Certificado</TableCell>
            </TableRow>
            <TableRow
              className="hover:bg-violet-400 hover:text-white"
              onClick={handleOpenPedidos}
            >
              <TableCell>Uveli Afonso</TableCell>
              <TableCell>Certificado</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {/* Modal de Pedidos */}
      {isPedidosOpen && <Pedidos onClose={handleClosePedidos} />}
    </>
  );
}
