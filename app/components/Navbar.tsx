"use client";
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import "../../app/page.module.css";
import Styles from  './Navbar.module.css';
import { usePathname } from 'next/navigation';
type Product = {
  id:number;
  name: string;
  reviews:string[];
};

const products: Product[] = [
  { id: 1, name: 'Pane Integrale', reviews: ["Ottimo pane!", "Molto buono!"] },
  { id: 2, name: 'Il Corentto', reviews: ["Delizioso!", "Perfetto per la colazione."] },
  // Aggiungi altri prodotti
];
export default function Navbar() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const pathname = usePathname();//ottiene il percorso attuale
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
 


return(
    <>
      
      <div className={Styles.logo}>MICHE</div>
<ul  className={`${Styles.navLinks} ${isOpen ? Styles.active : ''}`}>
      <li className={pathname === '/Shop' ? Styles.active : ''}>
        <Link href="/Shop" className={pathname === '/Shop/Shop' ? Styles.active : ''}>
          Shop
        </Link>
      
      </li>
      <li className={pathname === '/Learn' ? Styles.active : ''}>
        <Link href="/Learn" className={pathname === '/Learn/Learn' ? Styles.active : ''}>
          Learn
        </Link>
        </li>
     
      <li className={pathname === '/' ? Styles.active : ''}>
        <Link href="/" className={pathname === '/Home/Home' ? Styles.active : ''}>
          Home
        </Link>
      </li> 
      <li className={pathname === '/Account' ? Styles.active : ''}>
        <Link href="/Account" className={pathname === '/Account/Account' ? Styles.active : ''}>
         
            Account
            <i className="bi bi-person-circle"></i>
        
        </Link>
      </li>
    </ul>
  <div className={`${Styles.hamburger} ${isOpen ? Styles.active : '' }`} onClick={toggleMenu}>
    <span className={Styles.span}></span>
    <span className={Styles.span}></span>
    <span className={Styles.span}></span>
  </div>
  <div className={`${Styles.close} ${isOpen ? Styles.active : ''}`} onClick={toggleMenu}>
  <i className="bi bi-x"></i>
    </div> 
    </>
)
}

