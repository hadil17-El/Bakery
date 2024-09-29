"use client";

import React, { useEffect } from 'react';
import styles from './Learn.module.css';
import "../../app/page.module.css";
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';
type NutritionalInfoProps = {
  info: {
    Calorie: string;
    Proteine: string;
    Grassi: string;
    Carboidrati: string;
    Zuccheri: string;
  };};
type IngredientsProps = {
  items: string[];
};
const breadIngredients: string[] = [
  "Farina bianca",
  "Acqua",
  "Lievito",
  "Sale",
  "Olio"
];
const croissantIngredients: string[] = [
  "500g farina",
"  60g zucchero",
  "10g sale",
  "20g lievito ",
  "300ml acqua",
  "250g burro",
  "1 uovo" 
];
const muffinIngredients: string[] = [
  "250g farina",
  "150g zucchero",
  "lievito",
  "sale",
  "2uova",
  "250ml latte"
];
const NutritionalInforma = {
  Calorie: "70-90 kcal",
  Proteine: "3-4 g",
  Grassi: "0.5-1 g",
  Carboidrati: "15-18 g",
  Zuccheri: "1-2 g"
};
const breadData = [
  { imgSrc: "/images/b1.jpg" },
  { imgSrc: "/images/b2.jpg" },
  { imgSrc: "/images/b3.jpg" },
  {imgSrc: "/images/b4.jpg"}
];
const croissantData = [
{ imgSrc: "/images/c1.jpg"},
{ imgSrc: "/images/c2.jpg"},
{ imgSrc: "/images/c3.jpg"},
{imgSrc: "/images/c4.jpg"}
];
const muffinData = [
  { imgSrc: "/images/m1.jpg"},
  { imgSrc: "/images/m2.jpg"},
  { imgSrc: "/images/m3.jpg"},
  { imgSrc: "/images/m4.jpg"}
  ];
const Ingredients = ({ items }: IngredientsProps) => (
  <div className={styles.ingredients}>
    <span className={styles.span1}>Ingredienti</span>
    <ul className={styles.ul1}>
      {items.map((item, index) => (
        <li key={index} className={styles.ingredientItem}>{item}</li>
      ))}
    </ul>
  </div>
);
const NutritionalInfo = ({ info }: NutritionalInfoProps) => (
  <div className={styles.nutritionalInfo}>
    <span className={styles.span2}>Informazioni Nutrizionali</span>
    <ul className={styles.ul1}>
      {Object.entries(info).map(([key, value], index) => (
        <li key={index} className={styles.nutritionalItem}>{`${key}: ${value}`}</li>
      ))}
    </ul>
  </div>
);
const Learn = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  },[]);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.bread} data-aos="fade-right">
          <h3 className={styles.h3}>Bread</h3>
          {breadData.map((bread, index) => (
            <div key={index}>
              <Image className={`${styles[`img${index + 1}`]}`} src={bread.imgSrc} alt={`Bread ${index + 1}`}  width={100} height= {100}/>
              </div>
          ))}
              <Ingredients items={breadIngredients} />
              <NutritionalInfo info={NutritionalInforma} />  
        </div>
        <div className={styles.croissant} data-aos="fade-left">
          <h3 className={styles.h3}>Croissant</h3>
         {croissantData.map((croissant, index) => (
          <div key={index}>
            <Image className={`${styles[`img${index + 1}`]}`} src={croissant.imgSrc} alt={`croissant ${index + 1}`} width={100} height= {100} />
            </div>
         ))}
            <Ingredients items ={croissantIngredients} />
            <NutritionalInfo info={NutritionalInforma} />
        </div>
         <div className={styles.muffin} data-aos="fade-right">
          <h3 className={styles.h3}>muffin</h3>
          {muffinData.map((muffin, index) => (
            <div key={index}>
              <Image className={`${styles[`img${index + 1}`]}`} src={muffin.imgSrc} alt={`muffin ${index + 1}`} width={100} height= {100}/>
              </div>
            ))}
              <Ingredients items={muffinIngredients} />
              <NutritionalInfo info={NutritionalInforma} />
         </div>
      </section>
    </>
  );};
export default Learn;
