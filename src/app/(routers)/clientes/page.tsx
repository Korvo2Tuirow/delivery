import { Button } from "@/components/ui/button";
import Link from "next/link";

const Clientes = () => {
  return ( <div>
    <Link href="/clientes/cadastro">
    <Button className="mb-4 text-white m-5" variant="default" size="sm">Novo Cliente</Button>
     </Link>
  </div> );
}
 
export default Clientes;