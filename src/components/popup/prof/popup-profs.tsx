import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface ProfsProps {
  onClose: () => void;
}

export default function Profs({ onClose }: ProfsProps) {
  const [formData, setFormData] = useState({
    nome: "",
    bi: "",
    email: "",
    tel: "",
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

    // Validação do nome
    if (!formData.nome) {
      formErrors.nome = "Nome é obrigatório.";
      isValid = false;
    }

    // Validação do BI
    if (!formData.bi) {
      formErrors.bi = "Número de BI é obrigatório.";
      isValid = false;
    }

    // Validação do email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email inválido.";
      isValid = false;
    }

    // Validação do telefone
    if (!formData.tel || formData.tel.length < 9) {
      formErrors.tel = "Telefone deve ter no mínimo 9 dígitos.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Enviar os dados para o servidor ou fazer o que for necessário
      console.log("Formulário válido!", formData);
    } else {
      console.log("Existem erros no formulário.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 -top-2 pl-2 pr-2 sm:pl-0 sm:pr-2">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-4">
        <h1 className="text-2xl font-bold text-center mb-2 text-violet-600">
          Cadastrar Professor
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dados Pessoais */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-violet-600">
              Dados Pessoais
            </h2>
            <div className="flex flex-wrap gap-2 grid-rows-2">
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="flex-1 bg-violet-200 p-2 rounded-md"
              />
              {errors.nome && (
                <span className="text-red-500">{errors.nome}</span>
              )}

              <input
                type="text"
                name="bi"
                id="bi"
                placeholder="BI"
                value={formData.bi}
                onChange={handleChange}
                required
                className="flex-1 bg-violet-200 p-2 rounded-md"
              />
              {errors.bi && <span className="text-red-500">{errors.bi}</span>}
            </div>
            <div className="flex flex-wrap gap-2 grid-rows-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 bg-violet-200 p-2 rounded-md"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}

              <input
                type="number"
                name="tel"
                id="tel"
                placeholder="Tel"
                value={formData.tel}
                onChange={handleChange}
                required
                className="flex-1 bg-violet-200 p-2 rounded-md"
              />
              {errors.tel && <span className="text-red-500">{errors.tel}</span>}
            </div>
          </div>
          {/* Dados Profissionais */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-violet-600">
              Dados Profissionais
            </h2>
            <div className="flex flex-nowrap gap-2 grid-rows-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Disciplina"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L. Portuguesa">LP</SelectItem>
                  <SelectItem value="Química">Quí</SelectItem>
                  <SelectItem value="FAI">FAI</SelectItem>
                  <SelectItem value="TIC">TIC</SelectItem>
                  <SelectItem value="SEAC/Redes">SEAC/Redes</SelectItem>
                  <SelectItem value="Mat">Mat</SelectItem>
                  <SelectItem value="Fis">Fis</SelectItem>
                  <SelectItem value="EMP">EMP</SelectItem>
                  <SelectItem value="Ed. Física">Ed. Fis</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Cargo"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Orientador/a">Orientador/a</SelectItem>
                  <SelectItem value="Coordenador/a">Coordenador/a</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Turmas */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-violet-600">Turmas</h2>
            <div className="flex flex-wrap gap-2 grid-rows-1 w-full h-[160px]">
              <div className="w-full border-2 p-2 rounded-lg space-y-2 h-40 overflow-y-auto">
                <h3>Informática</h3>
                <div className="flex flex-row space-x-8">
                  <div>
                    <h4>10ª Classe</h4>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="IG10A"
                      />
                      <p>IG10A</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="IG10B"
                      />
                      <p>IG10B</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="IG10C"
                      />
                      <p>IG10C</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="IG10D"
                      />
                      <p>IG10D</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="II10A"
                      />
                      <p>II10A</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="II10B"
                      />
                      <p>II10B</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="II11C"
                      />
                      <p>II10C</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="II10D"
                      />
                      <p>II10D</p>
                    </div>
                  </div>
                  <div>
                    <h4>11ª Classe</h4>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="IG11A"
                      />
                      <p>IG11A</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="IG11B"
                      />
                      <p>IG11B</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="II11A"
                      />
                      <p>II11A</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="II11B"
                      />
                      <p>II11B</p>
                    </div>
                  </div>
                  <div>
                    <h4>12ª Classe</h4>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="IG12A"
                      />
                      <p>IG12A</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="IG12B"
                      />
                      <p>IG12B</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="II12A"
                      />
                      <p>II12A</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="II12B"
                      />
                      <p>II12B</p>
                    </div>
                  </div>
                  <div>
                    <h4>13ª Classe</h4>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="Informática"
                      />
                      <p>IG13A</p>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <input
                        type="checkbox"
                        name="area"
                        id="area"
                        value="Informática"
                      />
                      <p>II13A</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-center gap-4 mt-4 pb-4">
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="submit" className="bg-violet-800 hover:bg-violet-600">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
