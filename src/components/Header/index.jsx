import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "../Header/style.module.scss";

export const Header = ({ setSearchValue, cartList, setIsOpen }) => {
  const [value, setValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchValue(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <div>
          <button className={styles.button} onClick={() => setIsOpen(true)}>
            <MdShoppingCart size={22} className={styles.cart} />
            <span>{cartList.length}</span>
          </button>
          <form onSubmit={handleSearch}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit">
              <MdSearch size={21} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
