import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, isOpen, setIsOpen, setCartList }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <div role="dialog" className={styles.modal}>
      <div className={styles.dialog}>
        <div className={styles.header}>
          <h2>Carrinho de compras</h2>
          <button aria-label="close" title="Fechar" onClick={() => setIsOpen(false)}>
            <MdClose size={21} className={styles.close} />
          </button>
        </div>
        <ul className={styles.ul}>
          {cartList.map((product) => (
            <CartItemCard
              key={Math.random()}
              product={product}
              setCartList={setCartList}
              cartList={cartList}
            />
          ))}
        </ul>
        <div className={styles.buy}>
          <div>
            <span>Total</span>
            <span className={styles.value}>
              {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </span>
          </div>
          <button onClick={() => clearCart()}>Remover todos</button>
        </div>
      </div>
    </div>
  );
};
