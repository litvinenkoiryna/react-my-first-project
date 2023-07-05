import React , {useState} from "react";
import Card from "./Card";
import styles from '../styles/Main.module.css'
import data from '../data';
import ShopButtons from "./ShopButtons";

function Main() {
  let [name, setName] = useState('Mc Donny');
  let shopCards = data.find((card) => card.title === name);
  //console.log(shopCards);
 
    return (
      
         <div  className={styles.main}>
            <div className={styles.shopContainer}>
                <h2>Shops:</h2>
                <ShopButtons setName={setName}/>
            </div>
             <div className={styles.container}>
                {shopCards.cards.map((item) => <Card key={item.id} item={item}/>)}
                  
             </div>
          </div>     
    );
  }
  
  export default Main;