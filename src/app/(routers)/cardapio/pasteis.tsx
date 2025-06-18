import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



const pasteis = [
  {
    id: 1,
    nome: "Pastel de Carne Louca",
    descricao: "Carne desfiada no tempero da vovó, suculenta e bem recheada",
    preco: 9.90,
    ingredientes: [
      "Massa crocante",
      "Carne louca desfiada",
      "Cebola",
      "Alho",
      "Salsinha",
    ],
  },
  {
    id: 2,
    nome: "Pastel de Queijo Cremoso",
    descricao: "Explosão de queijo derretido a cada mordida",
    preco: 8.50,
    ingredientes: [
      "Massa crocante",
      "Queijo mussarela",
      "Requeijão cremoso",
    ],
  },
  {
    id: 3,
    nome: "Pastel Calabresa Show",
    descricao: "Calabresa acebolada com toque de pimenta — raiz!",
    preco: 10.00,
    ingredientes: [
      "Massa crocante",
      "Calabresa fatiada",
      "Cebola",
      "Orégano",
      "Pimenta calabresa",
    ],
  },
  {
    id: 4,
    nome: "Pastel Veggie Leve",
    descricao: "Sabor e saúde num pastel vegano cheio de atitude",
    preco: 9.00,
    ingredientes: [
      "Massa integral",
      "Palmito",
      "Tomate",
      "Cebola roxa",
      "Azeitona preta",
    ],
  },
  {
    id: 5,
    nome: "Pastel Doce Tentação",
    descricao: "Fechamento da night: doce de leite com banana e canela",
    preco: 7.50,
    ingredientes: [
      "Massa doce",
      "Doce de leite",
      "Banana",
      "Canela em pó",
    ],
  },
];


const Pastel = () => {
    return ( 

         <div className="flex flex-wrap gap-4 p-4 " >
          {pasteis.map((lanche) => (
            <Card key={lanche.id} className="rounded-2xl shadow-md min-w-80 ">
              <CardHeader>
                <CardTitle className="text-xl">{lanche.nome}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {lanche.descricao}
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
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
 
export default Pastel;