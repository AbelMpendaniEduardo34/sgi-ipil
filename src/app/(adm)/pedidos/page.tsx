import { Metadata } from "next";
import Image from "next/image";
import {
  BellDot,
  ShoppingBag,
  RefreshCcw,
  Percent,
  Send,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Tabela from "@/components/table/pedidos/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Sig-IPIL | Pedidos",
  description: "Sig-IPIL pedidos",
};

export default function Pedidos() {
  return (
    <>
      <main className="lg:ml-[218px] p-2 flex flex-col space-y-2 max-w-screen lg:min-h-screem lg:ovwe">
        <header className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:bg-white lg:w-[83vw] lg:h-14 lg:rounded-lg shadow-lg">
          <h1 className="pl-2 font-bold text-xl text-violet-600">Pedidos</h1>
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
                    Pedidos Recentes
                  </CardTitle>
                  <RefreshCcw className="ml-auto w-4 h-4"></RefreshCcw>
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
                    Total de Pedidos
                  </CardTitle>
                  <ShoppingBag className="ml-auto w-4 h-4 "></ShoppingBag>
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
                    Pedidos no Mês
                  </CardTitle>
                  <Percent className="ml-auto w-4 h-4 "></Percent>
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
                    Pedidos no Ano
                  </CardTitle>
                  <Percent className="ml-auto w-4 h-4 "></Percent>
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
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full lg:h-full">
            <div className="rounded-lg overflow-hidden sm:flex sm:flex-col">
              <Card className="bg-white p-2 w-full h-80 sm:h-[58vh]">
                <CardHeader>
                  <div className="flex items-center justify-center">
                    <CardTitle className="text-lg lg:text-xl select-none text-violet-600">
                      Enviar Pedidos
                    </CardTitle>
                    <Send className="ml-auto w-4 h-4 text-violet-600"></Send>
                  </div>
                  <CardDescription className="text-gray-500">
                    Para Coordenações ou Secretaria
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-base">
                  <form className="space-y-2 w-full">
                    <div className="flex flex-row space-x-2 w-full">
                      <select
                        name="coord"
                        id="coord"
                        className="w-full bg-violet-200 py-2 pl-2 rounded-lg outline-violet-600"
                      >
                        <option value="">Selecionar Entidade</option>
                        <option value="">Coord. Construção Civil</option>
                        <option value="">Coord. Electricidade</option>
                        <option value="">Coord. Informática</option>
                        <option value="">Coord. Mecânica</option>
                        <option value="">Coord. Química</option>
                        <option value="">Secretaria</option>
                      </select>
                      <select
                        name="coord"
                        id="coord"
                        className="w-full bg-violet-200 py-2 pl-2 rounded-lg outline-violet-600"
                      >
                        <option value="">Assunto</option>
                        <option value="">Certificado</option>
                        <option value="">Declaração</option>
                        <option value="">Tranferência</option>
                        <option value="">Outros</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <h3>
                        Se selecionou Outros/Tem alguma coisa a realçar no
                        pedido
                      </h3>
                      <textarea
                        name="testo"
                        id="testo"
                        className="w-full bg-violet-200 rounded-lg outline-violet-600"
                      ></textarea>
                    </div>
                    <div className="flex justify-center gap-4 mt-4 pb-4">
                      <Button
                        type="submit"
                        className="bg-violet-800 hover:bg-violet-600"
                      >
                        Enviar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-lg overflow-hidden sm:flex sm:flex-col">
              <Card className="bg-white p-2 w-full h-80 sm:h-[58vh]">
                <CardHeader>
                  <div className="flex items-center justify-center">
                    <CardTitle className="text-lg lg:text-xl select-none text-violet-600">
                      Lista de Pedidos
                    </CardTitle>
                    <List className="ml-auto w-4 h-4 text-violet-600"></List>
                  </div>
                  <CardDescription className="text-gray-500 w-full flex flex-col">
                    Pedidos feitos
                    <div className="flex flex-row justify-between pr-2 pt-2 space-x-1">
                      <div className="hidden sm:flex">
                        <Select>
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="Filtro"></SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hoje">Hoje</SelectItem>
                            <SelectItem value="ontem">Ontem</SelectItem>
                            <SelectItem value="Semana">Semana</SelectItem>
                            <SelectItem value="mês">Mês</SelectItem>
                            <SelectItem value="ano">Ano</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <input
                        type="search"
                        name="pesquisar"
                        id="pesquisar"
                        placeholder="pesquisar"
                        className="bg-gray-200 rounded-lg pl-2 outline-violet-600 w-40 h-8 sm:w-52 sm:h-auto"
                      />
                    </div>
                  </CardDescription>
                </CardHeader>
                <Tabela></Tabela>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
