'use client';
import Image from "next/image";
import Layout from "../components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Pedro", 23, "3"),
    new Cliente("Carlos", 54, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) { }

  function clienteExcluido(cliente: Cliente) { }

  return (
    <div
      className={`
     flex justify-center items-center h-screen
     bg-gradient-to-r from-blue-500 to-purple-500
     text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <div className="flex items-center justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  );
}
