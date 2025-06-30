export type Lanche = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  ingredientes: string[];
};

export const lanches: Lanche[] = [
  {
    id: 1,
    nome: "X-Burgão do Chef",
    descricao: "Clássico suculento com tudo que tem direito",
    preco: 22.9,
    ingredientes: [
      "Pão brioche",
      "Hambúrguer 180g",
      "Queijo cheddar",
      "Alface",
      "Tomate",
      "Maionese da casa",
    ],
  },
  {
    id: 2,
    nome: "Duplo Smash Nervoso",
    descricao: "Dois smashs fininhos e crocantes, pra quem curte o crime!",
    preco: 28.5,
    ingredientes: [
      "Pão de batata",
      "2x Smash 100g",
      "Queijo prato",
      "Picles",
      "Mostarda",
      "Ketchup",
    ],
  },
  {
    id: 3,
    nome: "Churras Baconado",
    descricao: "Estilo churrasco, com bacon que desmancha na boca",
    preco: 31.0,
    ingredientes: [
      "Pão australiano",
      "Hambúrguer 200g",
      "Queijo mussarela",
      "Bacon crocante",
      "Molho barbecue",
      "Cebola caramelizada",
    ],
  },
  {
    id: 4,
    nome: "Veggie da Firma",
    descricao: "Pra galera do verde, mas com muito sabor!",
    preco: 24.0,
    ingredientes: [
      "Pão integral",
      "Hambúrguer de grão-de-bico",
      "Alface americana",
      "Tomate cereja",
      "Guacamole",
      "Molho de ervas",
    ],
  },
  {
    id: 5,
    nome: "X-Tudo do Zé",
    descricao: "É TUDO mesmo, irmão!",
    preco: 33.9,
    ingredientes: [
      "Pão francês",
      "Hambúrguer 180g",
      "Presunto",
      "Bacon",
      "Ovo",
      "Queijo mussarela",
      "Alface",
      "Tomate",
      "Milho",
      "Batata palha",
      "Maionese artesanal",
    ],
  },
];