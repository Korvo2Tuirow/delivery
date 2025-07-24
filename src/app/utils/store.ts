// Importa a função `create` do Zustand, que serve pra criar a store
import { create } from 'zustand';

// Importa o array de lanches (provavelmente um mock ou tipo com nome e preço)
import { lanches } from '../types/lanches';

// Define o tipo de cada pedido no sistema
type Pedidos = {
    id: number;               // ID único do lanche/pedido
    nome?: string;            // Nome do lanche (opcional)
    quantidade?: number;      // Quantidade do lanche (opcional)
    preco?: number;           // Preço do lanche (opcional)
};

// Define o shape da store do Zustand
type StoreState = {
    pedidos: Pedidos[];                     // Lista de pedidos adicionados
    quant: any[];                           // Array genérico usado pra contagem ou controle de IDs
    adicionarPedido: (pedido: Pedidos) => void;   // Função pra adicionar pedido
    deletarPedido?: (id: number) => void;         // Função opcional pra remover item de `quant`
    consoleLog: () => void;                 // Função pra printar os pedidos no console
    teste: (ids: number) => void;           // Função pra adicionar ID no array `quant`
};

// Cria a store com Zustand, usando os tipos definidos acima
export const useStore = create<StoreState>((set, get) => ({

    // Estado inicial: lista de pedidos vazia
    pedidos: [],

    // Estado inicial do array quant (usado pra controlar os IDs adicionados)
    quant: [],

    // Adiciona um novo pedido na lista
    adicionarPedido: (pedido) => set((state) => ({
        pedidos: [...state.pedidos, pedido], // Adiciona o novo pedido no final da lista atual
    })),

    // Remove apenas o primeiro ID que bater no array `quant`
    deletarPedido: (id) => set((i) => {
        const index = i.quant.indexOf(id); // Procura o índice do primeiro valor igual ao `id`

        if (index === -1) return {}; // Se não encontrou o ID, não muda nada no estado

        const newQuant = [...i.quant]; // Cria uma cópia do array `quant`
        newQuant.splice(index, 1);    // Remove apenas 1 item na posição `index`

        console.log("Novo array depois da remoção:", newQuant); // Mostra no console o novo estado
        return { quant: newQuant }; // Atualiza o estado com o novo array `quant`
    }),

    // Mostra no console a lista de pedidos atual
    consoleLog: () => {
        const state = get();              // Pega o estado atual com `get`
        console.log(state.pedidos);       // Mostra no console os pedidos
    },

    // Adiciona um ID no final do array `quant`
    teste: (ids) => set((i) => {
        const newQuant = [...i.quant, ids]; // Copia o array `quant` e adiciona o novo `ids` no final
        console.log(newQuant);              // Mostra no console o novo estado
        return { quant: newQuant };         // Atualiza o estado com o novo array `quant`
    })

}));
