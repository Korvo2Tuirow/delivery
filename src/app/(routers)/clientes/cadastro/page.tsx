// NovoPedidoCliente.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function NovoPedidoCliente() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  // Aqui você salva os dados no contexto ou localStorage

  const handleCadastrar = (e: React.FormEvent) => {
    // Aqui você pode salvar os dados no contexto, localStorage ou enviar para a API

    setNome(nome);
    setTelefone(telefone);
    console.log("Nome salvo:", nome, telefone, endereco);
  };

const handleCancelar = () => {
  // Aqui você pode limpar os campos ou redirecionar para outra página
  setNome("");
  setTelefone("");
  setEndereco("");
  setNumero("");
  setBairro("");
  setComplemento("");
  setCidade("");

  redirect("/clientes"); // Redireciona para a página de clientes

}



  return (
    <div className="p-4 max-w-xl mx-auto flex flex-col justify-center items-center">
      <h1 className="mb-10 text-3xl">Cadastro de Clientes</h1>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="nome">Nome</Label>
        <Input
          type="text"
          id="nome"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <Label htmlFor="telefone">Telefone</Label>
        <Input
          type="number"
          id="telefone"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <Label htmlFor="endereco">Endereço</Label>
        <Input
          type="text"
          id="Endereco"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />

          <Label htmlFor="Numero">Número</Label>
        <Input
          type="string"
          id="numero"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
          <Label htmlFor="Bairro">Bairro</Label>
        <Input
          type="text"
          id="bairro"
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />

        <Label htmlFor="cidade">Cidade</Label>
        <Input
          type="text"
          id="cidade"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}/>

        <Label htmlFor="complemento">Complemento</Label>
        <Input
          type="text"
          id="complemento"
          placeholder="Complemento"
          value={complemento} 
          onChange={(e) => setComplemento(e.target.value)}/>
      </div>
       <div className="flex w-full justify-center items-center gap-4">
         <Button variant={"destructive"}  className="btn mt-4" onClick={handleCancelar}>
          Cancelar
               </Button>
               <Button className="btn mt-4  text-white" onClick={handleCadastrar}>
          Cadastrar
               </Button>
       </div>
    </div>
  );
}
