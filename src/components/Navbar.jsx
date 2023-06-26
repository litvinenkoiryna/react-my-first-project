import React, {useState} from "react";
import styles from "../styles/Navbar.module.css";
import data from '../data';


function Navbar({props}) {
  let [title, setTitle] = useState('');
  console.log({title});


    return (
    <div className={styles.navBar}>
      <h2 className={styles.title}>Shops:</h2>
      <nav className={styles.nav}>
          <div>
            {data.map((shop) => (
            <button
               key={shop.id}
               className={styles.item}
               onClick={() => setTitle(shop.title)}
              
            >
               {shop.title}
            </button>
            ))}
           </div>
      </nav>
    </div>
  );
}

export default Navbar;
