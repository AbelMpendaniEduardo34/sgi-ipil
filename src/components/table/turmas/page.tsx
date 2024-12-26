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
import Turmas from "@/components/popup/turmas/popup-alterar";

import { Button } from "@/components/ui/button";

export default function Tabela() {
  const [isTurmasOpen, setIsTurmasOpen] = useState(false);
  const handleOpenTurmas = () => setIsTurmasOpen(true);
  const handleCloseTurmas = () => setIsTurmasOpen(false);

  const [formData, setFormData] = useState({
    mac: "",
    pp: "",
    pt: "",
    mt: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const formErrors: { [key: string]: string } = {};
    let isValid = true;

    // Validação do Mac
    if (!formData.mac || formData.mac.length !== 5) {
      formErrors.mac = "Telefone deve ter exatamente 5 dígitos.";
      isValid = false;
    }
    // Validação do telefone
    if (!formData.pp || formData.pp.length !== 5) {
      formErrors.pp = "Telefone deve ter exatamente 5 dígitos.";
      isValid = false;
    }
    // Validação do telefone
    if (!formData.pt || formData.pt.length !== 5) {
      formErrors.pt = "Telefone deve ter exatamente 5 dígitos.";
      isValid = false;
    }
    // Validação do telefone
    if (!formData.mt || formData.mt.length !== 5) {
      formErrors.mt = "Telefone deve ter exatamente 5 dígitos.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Formulário válido!", formData);
    } else {
      console.log("Existem erros no formulário.");
    }
  };

  return (
    <>
      <div className="h-full lg:h-full lg:overflow-y-auto overflow-y-auto">
        <div className="hidden sm:flex sm:flex-row">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nº:</TableHead>
                <TableHead>Nº Proc:</TableHead>
                <TableHead>Nome:</TableHead>
                <TableHead>Idade:</TableHead>
                <TableHead>Sexo:</TableHead>
                <TableHead>Classe:</TableHead>
                <TableHead>Nota:</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell> 
                <TableCell>68407</TableCell> 
                <TableCell
                  className="hover:text-violet-600 hover:cursor-pointer"
                  onClick={handleOpenTurmas}
                >
                  Uveli Afonso
                </TableCell>
                <TableCell>17</TableCell>
                <TableCell>M</TableCell>
                <TableCell>10ª Classe</TableCell>
                <TableCell>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-row h-8 space-x-2 items-center"
                  >
                    <input
                      type="text"
                      name="mac"
                      id="mac"
                      placeholder="MAC"
                      value={formData.mac}
                      onChange={handleChange}
                      required
                      maxLength={5}
                      className="flex-1 border-2 w-4 h-8 rounded-md pl-1"
                    />
                    {errors.mac && (
                      <span className="text-red-500">{errors.mac}</span>
                    )}
                    <input
                      type="text"
                      name="pp"
                      id="pp"
                      placeholder="PP"
                      value={formData.pp}
                      onChange={handleChange}
                      required
                      maxLength={5}
                      className="flex-1 border-2 w-4 h-8 rounded-md pl-1"
                    />
                    {errors.pp && (
                      <span className="text-red-500">{errors.pp}</span>
                    )}
                    <input
                      type="text"
                      name="pt"
                      id="pt"
                      placeholder="PT"
                      value={formData.pt}
                      onChange={handleChange}
                      required
                      maxLength={5}
                      className="flex-1 border-2 w-4 h-8 rounded-md pl-1"
                    />
                    {errors.pt && (
                      <span className="text-red-500">{errors.pt}</span>
                    )}
                    <input
                      type="text"
                      name="mt"
                      id="mt"
                      placeholder="MT"
                      value={formData.mt}
                      onChange={handleChange}
                      required
                      maxLength={5}
                      className="flex-1 border-2 w-4 h-8 rounded-md pl-1"
                    />
                    {errors.mt && (
                      <span className="text-red-500">{errors.mt}</span>
                    )}
                    <Button
                      type="submit"
                      className="bg-violet-800 w-12 h-6 hover:bg-violet-600 text-sm"
                    >
                      Enviar
                    </Button>
                  </form>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Table className="sm:hidden">
          <TableHeader>
            <TableRow>
            <TableHead>Nº:</TableHead>
            <TableHead>Nº Proc:</TableHead>
            <TableHead>Nome:</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              className="hover:bg-violet-400 hover:text-white"
              onClick={handleOpenTurmas}
            >
              <TableCell>1</TableCell>
              <TableCell>68407</TableCell>
              <TableCell>Uveli Afonso</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {/* Modal de Pedidos */}
      {isTurmasOpen && <Turmas onClose={handleCloseTurmas} />}
    </>
  );
}
