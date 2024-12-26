"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package2,
  Home,
  ShoppingBag,
  Settings2,
  LogOut,
  User,
  Notebook,
  School2,
  SidebarOpen,
  Users2,
  GalleryVerticalEnd,
  Archive,
} from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

export default function SideBar() {
  const pathname = usePathname(); // Hook para obter a rota atual

  const getLinkClasses = (href: string) =>
    pathname === href
      ? "flex items-center gap-4 px-2.5 py-2 rounded-lg text-violet-600 bg-white font-bold"
      : "flex items-center gap-4 px-2.5 py-2 rounded-lg text-white font-bold hover:bg-white hover:text-violet-600";

  return (
    <>
      <aside className="hidden fixed inset-y-0 left-0 z-10 w-[218px] border-r bg-violet-700 lg:flex lg:flex-col justify-between">
        <nav className="flex flex-col gap-2 pl-2 pr-2 py-5">
          <TooltipProvider>
            <div className="flex flex-row items-center space-x-4">
              <Link
                href={"#"}
                className="flex w-12 h-12 shrink-0 items-center justify-center text-white bg-violet-600 rounded-full"
              >
                <GalleryVerticalEnd className="w-7 h-7"></GalleryVerticalEnd>
              </Link>
              <div className="text-white">
                <p className="font-bold text-white">SIG-IPIL</p>
                <span>v1.1</span>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/dashboard"}
                  className={getLinkClasses("/dashboard")}
                  prefetch={false}
                >
                  <Home className="w-5 h-5 transition-all"></Home>
                  Ínicio
                </Link>
              </TooltipTrigger>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/pedidos"}
                  className={getLinkClasses("/pedidos")}
                  prefetch={false}
                >
                  <ShoppingBag className="w-5 h-5 transition-all"></ShoppingBag>
                  Pedidos
                </Link>
              </TooltipTrigger>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/turmas"}
                  className={getLinkClasses("/turmas")}
                  prefetch={false}
                >
                  <Notebook className="w-5 h-5 transition-all"></Notebook>
                  Turmas
                </Link>
              </TooltipTrigger>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/docs"}
                  className={getLinkClasses("/docs")}
                  prefetch={false}
                >
                  <Archive className="w-5 h-5 transition-all"></Archive>
                  Documentos
                </Link>
              </TooltipTrigger>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/prof"}
                  className={getLinkClasses("/prof")}
                  prefetch={false}
                >
                  <Users2 className="w-5 h-5 transition-all"></Users2>
                  Professores
                </Link>
              </TooltipTrigger>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/coord"}
                  className={getLinkClasses("/coord")}
                  prefetch={false}
                >
                  <School2 className="w-5 h-5 transition-all"></School2>
                  Coordenação
                </Link>
              </TooltipTrigger>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/perfil"}
                  className={getLinkClasses("/perfil")}
                  prefetch={false}
                >
                  <User className="w-5 h-5 transition-all"></User>
                  Perfil
                </Link>
              </TooltipTrigger>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/conf"}
                  className={getLinkClasses("/conf")}
                  prefetch={false}
                >
                  <Settings2 className="w-5 h-5 transition-all"></Settings2>
                  Configurações
                </Link>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="flex flex-col gap-2 pl-2 py-5 mb-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/"}
                  className="flex items-center gap-4 px-2.5 py-2 rounded-l-lg text-white font-bold hover:bg-white hover:text-red-600"
                  prefetch={false}
                >
                  <LogOut className="w-5 h-5 transition-all"></LogOut>
                  Sair
                </Link>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex w-full flex-col bg-muted/40 lg:hidden">
        <div className="flex flex-col lg:gap-4 lg:py-4 lg:pl-4">
          <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 lg:static lg:h-auto lg:border-0 lg:bg-transparent lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"outline"}
                  className="text-muted-foreground hover:bg-violet-600 hover:text-white lg:hidden "
                >
                  <SidebarOpen className="w-5 h-5"></SidebarOpen>
                  <span className="sr-only">Abrir/Fechar menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side={"left"}
                className="sm:max-w-x bg-violet-800 p-0 pl-4 pt-4"
              >
                <nav className="grid gap-2 pr-2 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-white"
                    prefetch={false}
                  >
                    <Package2 className="w-10 h-10 transition-all bg-white p-2 text-violet-600 rounded-full"></Package2>
                    SIG-IPIL
                  </Link>
                  <Link
                    href={"/dashboard"}
                    className={getLinkClasses("/dashboard")}
                    prefetch={false}
                  >
                    <Home className="w-5 h-5 transition-all"></Home>
                    Ínicio
                  </Link>
                  <Link
                    href={"/pedidos"}
                    className={getLinkClasses("/pedidos")}
                    prefetch={false}
                  >
                    <ShoppingBag className="w-5 h-5 transition-all"></ShoppingBag>
                    Pedidos
                  </Link>
                  <Link
                    href={"/turmas"}
                    className={getLinkClasses("/turmas")}
                    prefetch={false}
                  >
                    <Notebook className="w-5 h-5 transition-all"></Notebook>
                    Turmas
                  </Link>
                  <Link
                    href={"/docs"}
                    className={getLinkClasses("/docs")}
                    prefetch={false}
                  >
                    <Archive className="w-5 h-5 transition-all"></Archive>
                    Documentos
                  </Link>
                  <Link
                    href={"/prof"}
                    className={getLinkClasses("/prof")}
                    prefetch={false}
                  >
                    <Users2 className="w-5 h-5 transition-all"></Users2>
                    Professores
                  </Link>
                  <Link
                    href={"/coord"}
                    className={getLinkClasses("/coord")}
                    prefetch={false}
                  >
                    <School2 className="w-5 h-5 transition-all"></School2>
                    Coordenação
                  </Link>
                  <Link
                    href={"/perfil"}
                    className={getLinkClasses("/perfil")}
                    prefetch={false}
                  >
                    <User className="w-5 h-5 transition-all"></User>
                    Perfil
                  </Link>
                  <Link
                    href={"/conf"}
                    className={getLinkClasses("/conf")}
                    prefetch={false}
                  >
                    <Settings2 className="w-5 h-5 transition-all"></Settings2>
                    Configurações
                  </Link>
                  <Link
                    href={"../"}
                    className="flex items-center gap-4 px-2.5 text-white py-2 rounded-l-lg hover:text-red-600 hover:bg-white"
                    prefetch={false}
                  >
                    <LogOut className="w-5 h-5 transition-all"></LogOut>
                    Sair
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <h2>Menu</h2>
          </header>
        </div>
      </div>
    </>
  );
}
