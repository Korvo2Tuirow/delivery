"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { lanches } from "@/app/types/lanches"; // Importando o array de lanches
import { useStore } from "../../../app/utils/store";

const Cardapio = () => { 

  const store = useStore();
  
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      
      {lanches.map((lanches) => (
      
          <Accordion
            type="single"
            collapsible
            className="w-full pb-4 px-4 border rounded-lg shadow-md "
            key={lanches.id}
          >
            <AccordionItem
              value="item-1"
              key={lanches.id}
              className="rounded-2xl  min-w-80 "
            >
              <AccordionTrigger>
                <div className="text-[15px] flex gap-4">
                  <p>{lanches.nome}</p>
                  <p>( R$ {lanches.preco.toFixed(2)} )</p>
                </div>
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="flex flex-1 flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-5">
                    {lanches.descricao}
                  </p>

                  <ul className="text-sm list-disc pl-5 mb-3">
                    {lanches.ingredientes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
              <div className="flex justify-between items-center ">
              
                  <span className="font-bold text-lg text-green-600">
                       
                  <p className="text-right text-lg font-semibold text-green-600">
                    Total: R$ {(store.quant.filter((item) => item === lanches.id).length * lanches.preco).toFixed(2)}
                  </p>
           
                  </span>
         
                <div className="flex items-center gap-x-3">
                  <Button
                    variant="destructive"
                    className="text-white"
                    onClick={() => store.deletarPedido?.(lanches.id)}
                  >
                    -
                  </Button>
                  <p className="bg-white text-black px-5 font-bold text-2xl rounded-lg ">
                   {store.quant.filter((item) => item === lanches.id).length}
                  </p>
                  <Button
                    variant="default"
                    className="text-white"
                    onClick={() => store.teste(lanches.id)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        ))};
    </div>
  );
};

export default Cardapio;
