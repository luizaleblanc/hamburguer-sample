import styles from "../ProductCard/style.module.scss";

export const ProductCard = ({ product, cartList, setCartList }) => {
  const addProductToCart = (product) => setCartList([...cartList, product]);

  return (
    <li className={styles.card}>
      <img src={product.img} alt={product.name} />
      <section className={product.components}>
        <div className={styles.infoDiv}>
          <h3>{product.name}</h3>
          <span className={styles.category}>{product.category}</span>
        </div>
        <div className={styles.buyDiv}>
          <span className={styles.price}>
            {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
          <button onClick={() => addProductToCart(product)}>Adicionar</button>
        </div>
      </section>
    </li>
  );
};
