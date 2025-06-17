import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



const lanches = [
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

const Cardapio = () => {
    return ( 

         <div className="flex flex-wrap gap-4 p-4 " >
          {lanches.map((lanche) => (
            <Card key={lanche.id} className="rounded-2xl shadow-md min-w-80">
              <CardHeader>
                <CardTitle className="text-xl">{lanche.nome}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {lanche.descricao}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm list-disc pl-5 mb-3">
                  {lanche.ingredientes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-green-600">
                    R$ {lanche.preco.toFixed(2)}
                  </span>
                  <Button variant="default" className="text-white">Pedir</Button>
                </div>
              </CardContent>
            </Card>
          ))}

          </div>
     );
}
 
export default Cardapio;