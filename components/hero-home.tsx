"use client";

import { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Gráfico de Inteligência de Negócios - Pizza
  const businessIntelligenceData = {
    labels: ["Receita", "Custo", "Lucro", "Investimento", "ROI"],
    datasets: [
      {
        label: "Inteligência de Negócios",
        data: [50000, 20000, 30000, 12000, 20000],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Gráfico de Estoque
  const stockData = {
    labels: ["Produto A", "Produto B", "Produto C", "Produto D", "Produto E"],
    datasets: [
      {
        label: "Estoque Atual",
        data: [120, 150, 80, 90, 60],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    setSelectedTask(null); // Terminal inicializado sem clique
  }, []);

  const runTask = (taskId: string) => {
    setSelectedTask(taskId);
    if (taskId === "respondClients") {
      setIsTyping(true); // Simula a IA "digitando"
      setTimeout(() => setIsTyping(false), 2000); // Remove o "digitando" após 2 segundos
    } else if (taskId === "issueInvoices") {
      setIsProcessing(true); // Simula IA processando notas fiscais
      setTimeout(() => setIsProcessing(false), 4000); // Duração da simulação de processamento
    }
  };

  const renderTaskContent = () => {
    if (!selectedTask) {
      return <div className="text-gray-300">Escolha sua opção:</div>;
    }

    if (selectedTask === "salesReport") {
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="w-2/3">
            <Pie
              data={businessIntelligenceData}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: true },
                },
              }}
              height={300}
            />
          </div>
        </div>
      );
    } else if (selectedTask === "respondClients") {
      return (
        <div className="mt-4 rounded-lg bg-gray-800 p-2 text-sm text-gray-100">
          <p>
            <strong>Cliente:</strong> Olá! Preciso de ajuda com o meu pedido.
          </p>
          {isTyping ? (
            <div className="flex items-center space-x-2">
              <span className="animate-pulse text-gray-400">
                IA está digitando...
              </span>
              <div className="typing-indicator flex space-x-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-75"></span>
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-150"></span>
              </div>
            </div>
          ) : (
            <>
              <p>
                <strong>Chatbot:</strong> Olá! Como posso ajudar você hoje?
              </p>
              <p>
                <strong>Cliente:</strong> Quando meu pedido será entregue?
              </p>
              <p>
                <strong>Chatbot:</strong> Seu pedido está previsto para entrega
                em 3 dias úteis. Se precisar de mais ajuda, estou à disposição!
              </p>
            </>
          )}
        </div>
      );
    } else if (selectedTask === "issueInvoices") {
      return (
        <div className="mt-4 rounded-lg bg-gray-800 p-4 text-sm text-gray-100">
          {isProcessing ? (
            <>
              <div className="flex items-center space-x-2">
                <span className="animate-pulse text-gray-400">
                  IA está emitindo notas fiscais...
                </span>
                <div className="typing-indicator flex space-x-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-75"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-150"></span>
                </div>
              </div>
            </>
          ) : (
            <>
              <p>
                <strong>Sistema:</strong> Nota Fiscal para o Pedido #12345
                emitida com sucesso.
              </p>
              <p>
                <strong>Sistema:</strong> Nota Fiscal para o Pedido #12346
                emitida com sucesso.
              </p>
              <p>
                <strong>Sistema:</strong> Nota Fiscal para o Pedido #12347
                emitida com sucesso.
              </p>
              <p>
                <strong>Sistema:</strong> Painel financeiro atualizado com os
                novos valores.
              </p>
            </>
          )}
        </div>
      );
    } else if (selectedTask === "manageStock") {
      return (
        <div className="h-full w-full">
          <Bar
            data={stockData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: { display: true },
              },
              scales: {
                x: {
                  ticks: { color: "#fff" },
                },
                y: {
                  ticks: { color: "#fff" },
                  grid: { color: "#fff" },
                },
              },
            }}
            height={300}
          />
        </div>
      );
    }
  };

  return (
    <section className="relative">
      {/* Ilustração de Stripes */}
      <PageIllustration />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold text-[#192B38] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Transforme a sua empresa com
              <br className="max-lg:hidden" />
              soluções inovadoras e{" "}
              <span className="gradient-text shadow-text">inteligentes</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                A Promethea Solutions é especializada em automação empresarial,
                oferecendo soluções personalizadas para maximizar a eficiência,
                integrar processos e gerar insights valiosos através de análise
                de dados e inteligência de negócios.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-[#192B38] text-white shadow hover:bg-[#1f3543] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Comece Agora{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-[#192B38] shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Simulação de Terminal */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl">
              <div className="relative mb-8 flex items-center justify-between">
                <span className="text-[13px] font-medium text-white">
                  promethea.com
                </span>
              </div>

              {/* Conteúdo do Terminal */}
              <div className="flex h-[350px] flex-col justify-between rounded-lg bg-gray-900 p-2 font-mono text-gray-500">
                {/* Linha inicial estática "Promethea Solutions" */}
                <div className="mb-4 text-green-400">Promethea Solutions</div>

                {/* Renderizar conteúdo da tarefa selecionada */}
                <div className="flex-1 overflow-hidden">
                  {renderTaskContent()}
                </div>
              </div>
            </div>

            {/* Botões fora do terminal */}
            <div className="mt-6 flex flex-col justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <button
                onClick={() => runTask("salesReport")}
                className="rounded-lg bg-[#192B38] px-4 py-2 text-sm text-white hover:bg-[#1f3543]"
              >
                Gerar Relatório de Vendas
              </button>
              <button
                onClick={() => runTask("respondClients")}
                className="rounded-lg bg-[#192B38] px-4 py-2 text-sm text-white hover:bg-[#1f3543]"
              >
                Responder Clientes
              </button>
              <button
                onClick={() => runTask("manageStock")}
                className="rounded-lg bg-[#192B38] px-4 py-2 text-sm text-white hover:bg-[#1f3543]"
              >
                Gerenciar Estoque
              </button>
              <button
                onClick={() => runTask("issueInvoices")}
                className="rounded-lg bg-[#192B38] px-4 py-2 text-sm text-white hover:bg-[#1f3543]"
              >
                Emitir Notas Fiscais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}