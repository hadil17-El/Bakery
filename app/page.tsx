"use client";
import styles from "./page.module.css";
//import "./globals.css";
import Footer from "./components/Footer";
import 'aos/dist/aos.css';
import Image from "next/image";

import AOS from 'aos';
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });

    },[]);
return(
    <>
    <section className={styles.section1}>
        <h2 className={styles.heading}>
            All articles
        </h2>
        <Image className={styles.img1} src="/images/picture.jpg" alt="im1" /*data-aos="fade-right"*/ width={100} height= {100}/>
        <Image className={styles.img2} src="/images/bread.jpg" alt="im2" /*data-aos="fade-left"*/ width={100} height= {100} />
        <Image className={styles.img3} src="/images/croissant.jpg" alt="m3" /*data-aos="fade-left"*/ width={100} height= {100}/>

        <div className={styles.recipe1} /*data-aos="fade-left"*/>
            <button className={styles.bt1}>Recipe</button>
            <h2 className={styles.titolo1}>Pane Integrale</h2>
            <p className={styles.p1}>
Il pane integrale  mantiene tutte le parti del 
chicco di grano: la crusca, il germe e endosperma. 
Questo pane è noto per il suo sapore ricco e leggermente
nocciolato, oltre che per la sua consistenza densa e 
sostanziosa. </p>
        </div>
        <div className={styles.recipe2} /*data-aos="fade-left"*/>
            <button className={styles.bt2}>Recipe</button>
        <h2 className={styles.titolo2}>
            Il Corentto
            </h2>
            <p className={styles.p2}>
Il cornetto è fatto di pasta sfoglia leggera e friabile, spesso arricchito
  con farciture come crema, marmellata, o cioccolato. 
  Viene consumato principalmente a colazione, accompagnato 
  da un caffè o un cappuccino.
            </p>
        </div>
        <div className={styles.recipe3} /*data-aos="fade-right"*/>
            <button className={styles.bt3}>Recipe</button>
        <h2 className={styles.titolo3}>
            Ciambella
            </h2>
            <p className={styles.p3}>
            ciambella, è un dolce che consiste in un anello di pasta fritta, 
            caratterizzato da una consistenza soffice e un gusto dolce. Dopo essere stato fritto,
             il donut può essere ricoperto con una varietà di glasse, zuccheri o altre decorazioni.
            </p>
        </div>

    </section>
    <section className={styles.section2}  /*data-aos="fade-up"*/>
        <h2 className={styles.t1}>Popular posts</h2>
        <div className={styles.container}>
        <div className={styles.recipe6}  >
        <Image className={styles.img4} src="/images/pic1.jpg" alt=""  width={100} height= {100}/>
            <h2 className={styles.t2}>Planning Helps A Party Perfect Keep Dinner Simple Heat </h2>
            <p className={styles.p3}>
                if you are the owner,operator or manager of a restaurant of other type of establishement food is sold,you
                will regularly find yourself in the market for different products to stock you commercial kitch.
            </p>
        </div>
        <div className={styles.recipe4}>
        <Image className={styles.img5} src="/images/pic2.jpg" alt="" width={100} height= {100}  />
            <h2 className={styles.t2}>Planning Helps A Party Perfect Keep Dinner Simple Heat </h2>
            <p className={styles.p3}>
            if you are the owner,operator or manager of a restaurant of other type of establishement food is sold,you
                will regularly find yourself in the market for different products to stock you commercial kitch.
            </p>
        </div>
        <div className={styles.recipe5}>
        <Image className={styles.img6} src="/images/pic3.jpg" alt=""  width={100} height= {100}  />
            <h2 className={styles.t2}>Planning Helps A Party Perfect Keep Dinner Simple Heat </h2>
            <p className={styles.p3}>
            if you are the owner,operator or manager of a restaurant of other type of establishement food is sold,you
                will regularly find yourself in the market for different products to stock you commercial kitch.
            </p>
        </div>
        </div>
    </section>
    <Footer />
    </>
)
}