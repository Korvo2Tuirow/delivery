import { useStore } from "../app/utils/store";
import { lanches } from "@/app/types/lanches";

const Cart = () => {
  const { pedidos } = useStore();
  return (
    <>
      {pedidos.length > 0 && (
        <div className="flex border m-4 gap-4 p-4 border rounded-lg shadow-md">
          <p className="flex flex-col">
            {pedidos.map((index, id) => (
              <span key={id}>
                {lanches.find((lanche) => lanche.id === index.id)?.nome}
              </span>
            ))}
          </p>
        </div>
      )}
    </>
  );
};
export default Cart;
