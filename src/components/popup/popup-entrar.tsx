import { Button } from "@/components/ui/button";
import Image from "next/image";

interface EntrarProps {
  onClose: () => void;
}

export default function Entrar({ onClose }: EntrarProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 pl-2 pr-2 sm:pl-0 sm:pr-2">
       <div className="flex flex-col bg-violet-200 sm:felx sm:flex-row w-80 rounded-lg overflow-hidden sm:w-[600px] sm:h-80">
            <div className="flex justify-center items-center p-4 w-full">
                <Image
                    src={"/images/img1.png"}
                    width={160}
                    height={160}
                    style={{
                        width: "auto",
                        height: "auto",
                    }}
                    alt="profile"
                    className="w-full"
                    />
            </div>
            <div className="bg-violet-800 flex flex-col items-center justify-center w-full p-4 space-y-2 sm:space-y-8">
                <h1 className="text-white text-xl font-bold">Entrar</h1>
                <form className="space-y-4 w-full" action={'dashboard'} method="POST">
                    {/* Inputs */}
                    <input type="email" name="email" id="email" placeholder="email" className="bg-white rounded-lg w-full h-10 pl-2 py-1 outline-violet-600" />
                    <input type="password" name="password" id="password" placeholder="senha" className="bg-white rounded-lg w-full h-10 pl-2 py-1 outline-violet-600" />
                    {/* Botões de Ação */}
                    <div className="flex justify-center gap-4 mt-4 pb-4">
                    <Button onClick={onClose} className="font-bold">Cancelar</Button>
                    <Button type="submit" className="bg-violet-600 font-bold hover:bg-violet-700">Entrar</Button>
                    </div>
                </form>
            </div>
       </div>
    </div>
  );
}
