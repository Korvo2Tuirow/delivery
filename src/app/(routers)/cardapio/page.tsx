"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Cardapio from "./lanches";
import Pastel from "./pasteis";
import Cart from "@/hooks/cart";



export default function ListaLanches() {
  return (
 
      <div>
        

        <Tabs defaultValue="lanches" >
          <TabsList className=" w-full flex justify-center">
            <TabsTrigger value="lanches">Lanches</TabsTrigger>
            <TabsTrigger value="pastel">Pastel</TabsTrigger>
          </TabsList>
          <Cart />
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
