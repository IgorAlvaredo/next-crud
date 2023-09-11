'use client';
import Image from "next/image";
import Layout from "../components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visible, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Pedro", 23, "3"),
    new Cliente("Carlos", 54, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) { }

  function salvarCliente(cliente: Cliente){
    setVisivel('tabela')
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <div
      className={`
     flex justify-center items-center h-screen
     bg-gradient-to-r from-blue-500 to-purple-500
     text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {visible === 'tabela' ?
          (
            <>
              <div className="flex items-center justify-end">
                <Botao cor="green" className="mb-4" onClick={() => novoCliente()}>Novo Cliente</Botao>
              </div>
              <Tabela
                clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              />
            </>
          ) : (
            <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => setVisivel('tabela')} />
          )}


      </Layout>
    </div>
  );
}
