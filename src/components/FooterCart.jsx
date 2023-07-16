import React , {useState} from "react";
import styles from "../styles/FooterCart.module.css";

const FooterCart = (props) => {
    return (
        <div className={styles.footer}>
            <span>
                Загальна вартість замовлення: <span className={styles.value}>{props.result}</span>
            </span>
        </div>
    )
}

export default FooterCart;