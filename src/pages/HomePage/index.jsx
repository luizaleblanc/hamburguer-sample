import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { API } from "../../services/Api";

export const HomePage = () => {
  const getLocalStorageItems = JSON.parse(localStorage.getItem("productList")) || [];

  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(getLocalStorageItems);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const removeProduct = (product) => setCartList(product);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await API.get("/products");

        setProductList(data);
      } catch (error) {
        console.error("Erro ao obter os produtos:", error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => localStorage.setItem("productList", JSON.stringify(productList)), [productList]);

  console.log("PRODUCTLIST", productList);

  return (
    <>
      <Header setSearchValue={setSearchValue} cartList={cartList} setIsOpen={setIsOpen} />
      <main>
        {productList && (
          <ProductList
            productList={productList}
            cartList={cartList}
            setCartList={setCartList}
            searchValue={searchValue}
          />
        )}
        {isOpen && (
          <CartModal
            cartList={cartList}
            setCartList={setCartList}
            setIsOpen={setIsOpen}
            removeProduct={removeProduct}
          />
        )}
      </main>
    </>
  );
};
