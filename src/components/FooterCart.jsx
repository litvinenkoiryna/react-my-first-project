import React , {useState} from "react";
import styles from "../styles/FooterCart.module.css";

const FooterCart = (props) => {
    return (
        <div className={styles.footer}>
            {props.items.length>0?
                <span>
                    Загальна вартість замовлення: <span className={styles.result}>
                        {new Intl.NumberFormat('ru-RU', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(props.result)}</span>
                </span>
                : <span>
                    Ваша корзина порожня
                </span>
            }
        </div>
    )
}

export default FooterCart;