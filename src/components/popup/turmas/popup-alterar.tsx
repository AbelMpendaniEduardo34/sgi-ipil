import React, { useState } from "react";
import { Button } from "@/components/ui/button";
interface TurmasProps {
  onClose: () => void;
}

export default function Turmas({ onClose }: TurmasProps) {
  const [formData, setFormData] = useState({
    nome: "",
    bi: "",
    email: "",
    tel: "",
    area: "",
    sexo: "",
    idade: "",
    proc: "",
    sala: "",
    classe: "",
    turma: "",
    curso: "",
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
    } else if (!/^\d{9}[A-Z]{2}\d{3}$/.test(formData.bi)) {
      formErrors.bi =
        "BI deve começar com 9 dígitos, seguido de 2 letras e terminar com 3 dígitos.";
      isValid = false;
    } else if (formData.bi.length !== 13) {
      formErrors.bi = "BI deve ter exatamente 13 caracteres.";
      isValid = false;
    }

    // Validação do email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email inválido.";
      isValid = false;
    }

    // Validação do telefone
    if (!formData.tel || formData.tel.length !== 9) {
      formErrors.tel = "Telefone deve ter exatamente 9 dígitos.";
      isValid = false;
    }
    // Validação da área
    if (!formData.area) {
      formErrors.area = "Área de formação é obrigatória.";
      isValid = false;
    }

    // Validação da classe
    if (!formData.classe) {
      formErrors.classe = "Área de formação é obrigatória.";
      isValid = false;
    }

    // Validação do curso (se a área foi selecionada)
    if (formData.area && !formData.curso) {
      formErrors.curso = "Curso é obrigatório após selecionar a área.";
      isValid = false;
    }
    // Validação da Turma (se a classe foi selecionada)
    if (formData.classe && !formData.turma) {
      formErrors.turma = "Curso é obrigatório após selecionar a área.";
      isValid = false;
    }

    // Validação do Nº Proc
    if (!formData.proc || formData.proc.length !== 5) {
      formErrors.proc = "Telefone deve ter exatamente 5 dígitos.";
      isValid = false;
    }

    // Validação da Sala
    if (!formData.sala || formData.sala.length !== 2) {
      formErrors.sala = "Telefone deve ter exatamente 2 dígitos.";
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

  const cursosPorArea: { [key: string]: string[] } = {
    "Construcao Civil": ["Engenharia Civil", "Arquitetura", "Topografia"],
    Electricidade: ["Eletrotécnica", "Energias Renováveis", "Automação"],
    Informática: ["Téc. Informática", "Téc. Ges. Sis. Informáticos"],
    Mecanica: ["Mecatrônica", "Manutenção Industrial", "Produção Mecânica"],
    Quimica: ["Química Industrial", "Engenharia Química", "Biotecnologia"],
  };
  const turmasPorClasse: { [key: string]: string[] } = {
    "10ª Classe": ["IG10A", "IG10B", "IG10C", "IG10D", "II10A", "II10B", "II10C", "II10D"],
    "11ª Classe": ["IG11A", "IG11B", "II11A", "II11B"],
    "12ª Classe": ["IG12A", "IG12B", "II12A", "II12B"],
    "13ª Classe": ["IG13A", "II13A"],
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 -top-2 pl-2 pr-2 sm:pl-0 sm:pr-2">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-4">
        <h1 className="text-2xl font-bold text-center mb-2 text-violet-600">
          Cadastrar Aluno
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Dados Pessoais */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-violet-600">
              Dados Pessoais
            </h2>
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
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
                maxLength={13}
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
              />
              {errors.bi && <span className="text-red-500">{errors.bi}</span>}
            </div>
            <div className="flex flex-wrap gap-4">
              <select
                name="sexo"
                id="sexo"
                value={formData.sexo}
                onChange={handleChange}
                required
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
              >
                <option value="">Sexo</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
              {errors.sexo && (
                <span className="text-red-500">{errors.sexo}</span>
              )}

              <input
                type="date"
                name="idade"
                id="iade"
                placeholder="Idade"
                value={formData.idade}
                onChange={handleChange}
                required
                maxLength={2}
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
              />
              {errors.idade && (
                <span className="text-red-500">{errors.idade}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}

              <input
                type="text"
                name="tel"
                id="tel"
                placeholder="Tel"
                value={formData.tel}
                onChange={handleChange}
                required
                maxLength={9}
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
              />
              {errors.tel && <span className="text-red-500">{errors.tel}</span>}
            </div>
          </div>

          {/* Dados Acadêmicos */}
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-violet-600">
              Dados Acadêmicos
            </h2>
            <div className="flex flex-wrap gap-4">
              <select
                name="area"
                id="area"
                value={formData.area}
                onChange={handleChange}
                required
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
              >
                <option value="">Área de Formação</option>
                <option value="Construcao Civil">Construção Civil</option>
                <option value="Electricidade">Electricidade</option>
                <option value="Informática">Informática</option>
                <option value="Mecanica">Mecânica</option>
                <option value="Quimica">Química</option>
              </select>
              {errors.area && (
                <span className="text-red-500">{errors.area}</span>
              )}

              {formData.area && cursosPorArea[formData.area] && (
                <select
                  name="curso"
                  id="curso"
                  value={formData.curso}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
                >
                  {cursosPorArea[formData.area].map((curso) => (
                    <option key={curso} value={curso}>
                      {curso}
                    </option>
                  ))}
                </select>
              )}
              {errors.curso && (
                <span className="text-red-500">{errors.curso}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              <select
                name="classe"
                id="classe"
                value={formData.classe}
                onChange={handleChange}
                required
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
              >
                <option value="">Classe</option>
                <option value="10ª Classe">10ª Classe</option>
                <option value="11ª Classe">11ª Classe</option>
                <option value="12ª Classe">12ª Classe</option>
                <option value="13ª Classe">13ª Classe</option>
              </select>
              {errors.classe && (
                <span className="text-red-500">{errors.classe}</span>
              )}

              {formData.classe && turmasPorClasse[formData.classe] && (
                <select
                  name="turma"
                  id="turma"
                  value={formData.turma}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
                >
                  <option value="">Selecione uma Turma</option>
                  {turmasPorClasse[formData.classe].map((turma) => (
                    <option key={turma} value={turma}>
                      {turma}
                    </option>
                  ))}
                </select>
              )}
              {errors.turma && (
                <span className="text-red-500">{errors.turma}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              <input
                type="sala"
                name="sala"
                id="sala"
                placeholder="Sala"
                value={formData.sala}
                onChange={handleChange}
                required
                maxLength={2}
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
              />
              {errors.sala && (
                <span className="text-red-500">{errors.sala}</span>
              )}

              <input
                type="text"
                name="proc"
                id="proc"
                placeholder="Nº Proc"
                value={formData.proc}
                onChange={handleChange}
                required
                maxLength={5}
                className="flex-1 bg-violet-200 p-2 rounded-md outline-violet-600"
              />
              {errors.proc && (
                <span className="text-red-500">{errors.proc}</span>
              )}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-center gap-4 mt-4 pb-4">
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="submit" className="bg-red-800 hover:bg-red-600">
              Apagar
            </Button>
            <Button type="submit" className="bg-blue-800 hover:bg-blue-600">
              Editar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
