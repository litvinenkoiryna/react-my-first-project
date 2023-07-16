import React from "react";
import styles from "../styles/ShoppingCart.module.css";
import FooterCart from "./FooterCart";

const ShoppingCart = ({ items, remove, increaceCount, decreaceCount, result}) => {
  //console.log(items);
  return (
    <table className={styles.cartTitle}>
      <tread>
        <tr>
          <th>Фото товару</th>
          <th>Назва товару</th>
          <th>Ціна за одиницю</th>
          <th>Кількість</th>
          <th>Вартість</th>
        </tr>
      </tread>
      <tbody className={styles.cartBody}></tbody>
      {items.map((item) => (
        <tr className={styles.items} key={item.id}>
          <td>
            <img className={styles.img} src={item.img} alt={item.title} />
          </td>
          <td className={styles.item}>{item.title}</td>
          <td className={styles.item}>{item.price}$</td>
          <td>
            <button onClick={()=>decreaceCount(item.id,item.count)}>-</button>
            <span className={styles.count}>{(item.count)} </span>
            <button onClick={()=>increaceCount(item.id)}>+</button>
          </td>
          <td>{item.price * item.count}</td>
          <button onClick={() => remove(item)}>X</button>
        </tr>
      ))}
      <FooterCart result = {result}/>    
    </table>
  );
};

export default ShoppingCart;
