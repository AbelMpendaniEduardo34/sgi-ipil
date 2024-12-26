"use client";

import { useState } from "react";
import Profs from "@/components/popup/prof/popup-profs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BellDot, List, UserPlus2, Users2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Tabela from "@/components/table/prof/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Prof() {
  const [isProfsOpen, setIsProfsOpen] = useState(false);

  const handleOpenProfs = () => setIsProfsOpen(true);
  const handleCloseProfs = () => setIsProfsOpen(false);
  return (
    <>
      <main className="lg:ml-[218px] p-2 flex flex-col space-y-2 max-w-screen lg:min-h-screem lg:ovwe">
        <header className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:bg-white lg:w-[83vw] lg:h-14 lg:rounded-lg shadow-lg">
          <h1 className="pl-2 font-bold text-xl text-violet-600">
            Professores
          </h1>
          <div className="pr-2 flex flex-row items-center space-x-4">
            <BellDot className="text-violet-600"></BellDot>
            <Image
              src={"/images/user/user-01.png"}
              width={35}
              height={35}
              style={{
                width: "auto",
                height: "auto",
              }}
              alt="user"
              className="w-full"
            />
          </div>
        </header>
        <div className="flex flex-col w-full space-y-2 mb-2 lg:max-h-screen">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:h-full ">
            <Card className="bg-blue-500 text-white shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg lg:text-xl select-none">
                    Novos Professores
                  </CardTitle>
                  <UserPlus2 className="ml-auto w-4 h-4 "></UserPlus2>
                </div>
                <CardDescription className="text-gray-300">
                  Registrar Professores
                </CardDescription>
              </CardHeader>
              <CardContent className="text-base  font-bold">
                <Button
                  className="bg-white text-blue-600 font-bold hover:bg-gray-100"
                  onClick={handleOpenProfs}
                >
                  Cadastrar
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-green-500 text-white shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg lg:text-xl select-none">
                    Total de Professores
                  </CardTitle>
                  <Users2 className="ml-auto w-4 h-4 "></Users2>
                </div>
                <CardDescription className="text-gray-300">
                  Registrados
                </CardDescription>
              </CardHeader>
              <CardContent className="text-base lg:text-3xl font-bold">
                +360
              </CardContent>
            </Card>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-1 gap-3 w-full lg:h-full">
            <div className="rounded-lg overflow-hidden sm:flex sm:flex-col">
              <Card className="bg-white p-2 w-full h-80 sm:h-[58vh]">
                <CardHeader>
                  <div className="flex items-center justify-center">
                    <CardTitle className="text-lg lg:text-xl select-none text-violet-600">
                      Lista de Professores
                    </CardTitle>
                    <List className="ml-auto w-4 h-4 text-violet-600"></List>
                  </div>
                  <CardDescription className="text-gray-500">
                    Professores Registrados
                    <div className="flex flex-row pr-2 pt-2 space-x-1 justify-between">
                      <div className="flex flex-row space-x-2">
                        <div className="hidden sm:flex">
                          <Select>
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Disciplina"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="L. Portuguesa">LP</SelectItem>
                              <SelectItem value="Química">Quí</SelectItem>
                              <SelectItem value="FAI">FAI</SelectItem>
                              <SelectItem value="TIC">TIC</SelectItem>
                              <SelectItem value="SEAC/Redes">
                                SEAC/Redes
                              </SelectItem>
                              <SelectItem value="Mat">Mat</SelectItem>
                              <SelectItem value="Fis">Fis</SelectItem>
                              <SelectItem value="EMP">EMP</SelectItem>
                              <SelectItem value="Ed. Física">
                                Ed. Fis
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="hidden sm:flex">
                          <Select>
                            <SelectTrigger className="w-36">
                              <SelectValue placeholder="Cargo"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Orientador/a">
                                Orientador/a
                              </SelectItem>
                              <SelectItem value="Coordenador/a">
                                Coordenador/a
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <input
                        type="search"
                        name="pesquisar"
                        id="pesquisar"
                        placeholder="pesquisar"
                        className="bg-gray-200 rounded-lg pl-2 outline-violet-600 w-40 sm:w-52 h-10"
                      />
                    </div>
                  </CardDescription>
                </CardHeader>
                <Tabela></Tabela>
              </Card>
            </div>
          </section>
          {/* Modal de Prof */}
          {isProfsOpen && <Profs onClose={handleCloseProfs} />}
        </div>
      </main>
    </>
  );
}
