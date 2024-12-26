"use client";

import { useState } from "react";
import Servico from "@/components/popup/popup-servico";
import Entrar from "@/components/popup/popup-entrar";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isServicoOpen, setIsServicoOpen] = useState(false);
  const [isEntrarOpen, setIsEntrarOpen] = useState(false);

  const handleOpenServico = () => setIsServicoOpen(true);
  const handleCloseServico = () => setIsServicoOpen(false);

  const handleOpenEntrar = () => setIsEntrarOpen(true);
  const handleCloseEntrar = () => setIsEntrarOpen(false);

  return (
    <>
      <main className="bg-white min-h-screen">
        {/* Seção Inicial */}
        <section className="w-full h-[600px] flex flex-col items-center justify-center p-6 sm:flex-row sm:justify-around">
          {/* Texto de Boas-Vindas */}
          <div className="text-center space-y-6 sm:max-w-md">
            <h1 className="text-3xl font-bold text-violet-600 sm:text-6xl">
              Seja bem-vindo ao nosso e seu portal...
            </h1>
            <p className="text-gray-600 sm:hidden">
              Com o{" "}
              <span className="text-violet-600">
                SGI<span className="text-orange-600">-IPIL</span>
              </span>
              , você fica mais próximo da escola. Faça já a sua solicitação e
              obtenha o seu{" "}
              <span className="text-violet-600">
                Boletim de Notas, Certificado, Declaração e Tranferência
              </span>
              .
            </p>
            <p className="text-gray-600 sm:hidden">
              Temos para si vastos serviços que ti como aluno e professor.
              Deixando-te assim com a facilidade total de poder interagir com as
              entidades diregentes da instituição.
            </p>
            <div className="space-x-4 sm:hidden">
              <Button
                className="bg-violet-600 text-white hover:bg-violet-800"
                onClick={handleOpenServico}
              >
                Serviços
              </Button>
              <Button
                className="bg-violet-600 text-white hover:bg-violet-800"
                onClick={handleOpenEntrar}
              >
                Entrar
              </Button>
            </div>
          </div>

          {/* Versão Desktop */}
          <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center">
            <div className="border-l-4 pl-8 w-[600px] h-96 text-2xl space-y-8">
              <p>
                Com o{" "}
                <span className="text-violet-600">
                  SGI<span className="text-orange-600">-IPIL</span>
                </span>
                , você fica mais próximo da escola. Faça já a sua solicitação e
                obtenha o seu{" "}
                <span className="text-violet-600">
                  Boletim de Notas, Certificado, Declaração e Tranferência
                </span>
                .
              </p>
              <p>
                Temos para si vastos serviços que ti como aluno e professor.
                Deixando-te assim com a facilidade total de poder interagir com
                as entidades diregentes da instituição.
              </p>
              <div className="space-x-4 hidden sm:flex sm:flex-row sm:justify-center sm:items-center">
                <Button
                  className="bg-violet-600 text-white hover:bg-violet-800"
                  onClick={handleOpenServico}
                >
                  Serviços
                </Button>
                <Button
                  className="bg-violet-600 text-white hover:bg-violet-800"
                  onClick={handleOpenEntrar}
                >
                  Entrar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Modal de Serviço */}
        {isServicoOpen && <Servico onClose={handleCloseServico} />}

        {/* Modal Entrar */}
        {isEntrarOpen && <Entrar onClose={handleCloseEntrar} />}

        {/* Seção de Serviços */}
        <section className="w-full bg-violet-600 py-8">
          <h1 className="text-white text-3xl font-bold text-center mb-6 sm:text-4xl">
            Nossos Serviços
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            {["Aluno", "Professor", "Coordenação"].map((categoria) => (
              <div
                key={categoria}
                className="bg-white shadow-md rounded-xl w-80 h-96 flex flex-col items-center justify-center p-4"
              >
                <h2 className="text-violet-600 font-bold text-2xl">
                  {categoria}
                </h2>

                <p className="text-center text-gray-600 mt-4">
                  <span className="text-violet-600">
                    SGI<span className="text-orange-600">-IPIL</span>
                  </span> trás para si como {categoria} o melhor, promovendo assim uma maior eficiêncie em temos de consultas. solicitação e muito mais.
                </p>
                <img src="images/1728418025038.jpg" className="rounded-full w-44"/>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Sobre a Escola */}
        <section className="w-full bg-white py-8">
          <h1 className="text-violet-600 text-3xl font-bold text-center mb-6 sm:text-4xl">
            Sobre a Escola
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-violet-600 shadow-md rounded-xl w-80 h-96 flex flex-col overflow-hidden">
             <figure>
              <img src="images/IMG-20240802-WA0015.jpg" className="w-full h-80 object-center"/>
              <figcaption className="p-2">
                <h2 className="text-white font-semibold">Milton</h2>
                <p className="text-gray-400">
                  Diretor
                </p>
              </figcaption>
             </figure>
            </div>
            <div className="bg-violet-600 shadow-md rounded-xl w-80 h-96 flex flex-col overflow-hidden">
             <figure>
              <img src="images/IMG-20240802-WA0015.jpg" className="w-full h-80 object-center"/>
              <figcaption className="p-2">
                <h2 className="text-white font-semibold">Edson Viegas</h2>
                <p className="text-gray-400">
                  Sub Dir. Pedagógico
                </p>
              </figcaption>
             </figure>
            </div>
            <div className="bg-violet-600 shadow-md rounded-xl w-80 h-96 flex flex-col overflow-hidden">
             <figure>
              <img src="images/IMG-20240802-WA0015.jpg" className="w-full h-80 object-center"/>
              <figcaption className="p-2">
                <h2 className="text-white font-semibold">Prof. Lucas Pazito</h2>
                <p className="text-gray-400">
                  Coordenador
                </p>
              </figcaption>
             </figure>
            </div>
          </div>
        </section>

        {/* Seção de Criadores */}
        <section className="w-full bg-violet-600 py-8">
          <h1 className="text-white text-3xl font-bold text-center mb-6 sm:text-4xl">
            Participantes do Projeto
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white shadow-md rounded-xl w-80 h-96 flex flex-col overflow-hidden">
             <figure>
              <img src="images/IMG-20240802-WA0015.jpg" className="w-full h-80 object-center"/>
              <figcaption className="p-2">
                <h2 className="text-violet-600 font-semibold">Abel Eduardo</h2>
                <p className="text-gray-400">
                  Software Developer
                </p>
              </figcaption>
             </figure>
            </div>
            <div className="bg-white shadow-md rounded-xl w-80 h-96 flex flex-col overflow-hidden">
             <figure>
              <img src="images/IMG-20240802-WA0015.jpg" className="w-full h-80 object-center"/>
              <figcaption className="p-2">
                <h2 className="text-violet-600 font-semibold">Uveli Afonso</h2>
                <p className="text-gray-400">
                  Software Developer
                </p>
              </figcaption>
             </figure>
            </div>
            <div className="bg-white shadow-md rounded-xl w-80 h-96 flex flex-col overflow-hidden">
             <figure>
              <img src="images/IMG-20240802-WA0015.jpg" className="w-full h-80 object-center"/>
              <figcaption className="p-2">
                <h2 className="text-violet-600 font-semibold">Prof. Lucas Pazito</h2>
                <p className="text-gray-400">
                  Orientador
                </p>
              </figcaption>
             </figure>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="bg-white w-full py-4 text-center">
          <p>Todos os direitos reservados &copy; IPIL</p>
          <p>Por Abel Eduardo | Uveli Afonso</p>
        </footer>
      </main>
    </>
  );
}
