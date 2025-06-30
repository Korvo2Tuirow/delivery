
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
    deletarPedido?: (id: number) => void;
    consoleLog: () => void;
 
 }
export const useStore = create<StoreState>((set, get) => ({

    pedidos: [],

    adicionarPedido: (pedido) => set((state) => ({
        pedidos: [...state.pedidos, pedido],
    })),   

    deletarPedido: (id) => set((state) => ({
        pedidos: state.pedidos.filter((pedido) => pedido.id !== id),
    })),

    consoleLog: () => {
        const state = get();
        console.log(state.pedidos);
    }
  
}))


    


