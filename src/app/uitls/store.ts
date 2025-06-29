import { useEffect } from 'react';
import {create} from 'zustand';

type Pedidos = {
    id: number;
    nome?: string;
    quantidade?: number;
    preco?: number;
    };

 type StoreState = {
    pedidos: Pedidos[];
    adicionarPedido: (pedido: Pedidos) => void;
    consoleLog: () => void;
 
 }
export const useStore = create<StoreState>((set, get) => ({

    pedidos: [],

    adicionarPedido: (pedido) => set((state) => ({
        pedidos: [...state.pedidos, pedido],
    })),   

    consoleLog: () => {
        const state = get();
        console.log(state.pedidos);
    }
  
}))


    


