import { ProductCard } from "./ProductCard";
import styles from "../ProductList/style.module.scss";

export const ProductList = ({ productList, cartList, setCartList, searchValue }) => {
  const filteredProducts =
    searchValue === ""
      ? productList
      : productList?.filter((product) => {
          const name = product.name.toLowerCase();
          const price = product.price.toString();

          console.log(name);

          return name.includes(searchValue.toLowerCase()) || price.includes(searchValue);
        }) || [];

  return (
    <ul className={styles.ul}>
      {filteredProducts?.map((product) => (
        <li key={product.id} className="min-w-0">
          <ProductCard product={product} cartList={cartList} setCartList={setCartList} />
        </li>
      ))}
    </ul>
  );
};
