import React from "react";
import Navbar from './Navbar';
import Cards from "./Cards";
import styles from '../styles/Main.module.css'

function Main() {
    return (
      
         <div  className={styles.main}>
             <Navbar/>
             <Cards/>
          </div>     
     
    );
  }
  
  export default Main;