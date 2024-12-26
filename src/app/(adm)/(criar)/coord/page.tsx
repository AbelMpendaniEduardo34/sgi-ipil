import { Metadata } from "next";
import Image from "next/image";
import { BellDot, Users2, School, ShoppingBag } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Tabela from "@/components/table/dashboard/page";

export const metadata: Metadata = {
  title: "Sig-IPIL | Coordenação",
  description: "Sig-IPIL coordenação",
};

export default function Coord() {
  return (
    <>
      <main className="lg:ml-[218px] p-2 flex flex-col space-y-2 max-w-screen lg:min-h-screem lg:ovwe">
        <header className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:bg-white lg:w-[83vw] lg:h-14 lg:rounded-lg shadow-lg">
          <h1 className="pl-2 font-bold text-xl text-violet-600">Coordenação</h1>
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
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:h-full ">
            <Card className="bg-orange-500 text-white shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg lg:text-xl text-white select-none">
                    Total de Alunos
                  </CardTitle>
                  <Users2 className="ml-auto w-4 h-4 "></Users2>
                </div>
                <CardDescription className="text-gray-300">
                  Registrados
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white text-base lg:text-3xl font-bold">
                +3600
              </CardContent>
            </Card>
            <Card className="bg-violet-500 text-white shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg lg:text-xl lect-none">
                    Total de Professores
                  </CardTitle>
                  <Users2 className="ml-auto w-4 h-4 "></Users2>
                </div>
                <CardDescription className="text-gray-300">
                  Registrados
                </CardDescription>
              </CardHeader>
              <CardContent className="text-base lg:text-3xl font-bold">
                +3600
              </CardContent>
            </Card>
            <Card className="bg-blue-500 text-white shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg lg:text-xl select-none">
                    Total de Turmas
                  </CardTitle>
                  <School className="ml-auto w-4 h-4 "></School>
                </div>
                <CardDescription className="text-gray-300">
                  Registrados
                </CardDescription>
              </CardHeader>
              <CardContent className="text-base lg:text-3xl font-bold">
                +3600
              </CardContent>
            </Card>
            <Card className="bg-green-500 text-white shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg lg:text-xl select-none">
                    Total de Pedidos
                  </CardTitle>
                  <ShoppingBag className="ml-auto w-4 h-4 "></ShoppingBag>
                </div>
                <CardDescription className="text-gray-300">
                  Pedidos no mês
                </CardDescription>
              </CardHeader>
              <CardContent className="text-base lg:text-3xl font-bold">
                +360
              </CardContent>
            </Card>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full lg:h-full">
          <div className="rounded-lg overflow-hidden sm:flex sm:flex-col">
              <Card className="bg-white p-2 w-full h-80 sm:h-[58vh]">
                
              </Card>
            </div>
            <div className="rounded-lg overflow-hidden sm:flex sm:flex-col">
              <Card className="bg-white p-2 w-full h-80 sm:h-[58vh]">
                <Tabela></Tabela>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
