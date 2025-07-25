"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Cardapio from "./lanches";
import Pastel from "./pasteis";
import Cart from "@/hooks/cart";
import { lanches } from "@/app/types/lanches"
import { useStore } from "../../../app/utils/store";
import { useMemo } from "react";

export default function ListaLanches() {
  const store = useStore();

  // Aqui a mágica: cria a contagem reativa com useMemo
  const contagem = useMemo(() => {
    const temp: Record<number, number> = {};
    store.quant.forEach((id) => {
      temp[id] = (temp[id] || 0) + 1;
    });
    return temp;
  }, [store.quant]);

  return (
    <div>
      <Tabs defaultValue="lanches">
        <TabsList className="w-full flex justify-center">
          <TabsTrigger value="lanches">Lanches</TabsTrigger>
          <TabsTrigger value="pastel">Pastel</TabsTrigger>
        </TabsList>

        <Cart />

        <div className="flex flex-col mx-4 border border-green-500 p-3 rounded-lg shadow-lg">
          {Object.entries(contagem).map(([id, qtd]) =>
            lanches.filter(lanche => lanche.id === Number(id)).map((lanche) => (
              <p key={lanche.id} className="flex items-center gap-2 ">{lanche.nome} - {qtd}</p>
            ))
          )}
        </div>

        <TabsContent value="lanches">
          <Cardapio />
        </TabsContent>
        <TabsContent value="pastel">
          <Pastel />
        </TabsContent>
      </Tabs>
    </div>
  );
}
