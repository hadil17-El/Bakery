"use client";
import React, {useState, useEffect} from 'react';
import  styles from './footer.module.css';
import Image from 'next/image';
import AOS from 'aos';
export default function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    },[]);
    const [imageIndex, setImageIndx] = useState(0);
    const images = ['/images/img1.jpg','/images/img2.jpg','/images/img3.jpg',
    '/images/img4.jpg','/images/img5.jpg','/images/img6.jpg'
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndx(prevIndex => (prevIndex + 1) % images.length);

        },3000);
        return () => clearInterval(interval);
       
    },[]);
    return(<>
            <footer className={styles.footer}>
                <div className={styles.iconContainer} data-aos="fade-left">
                    <a href="#">  <span className={styles.iconTitolo}>
                        Cancel Anytime
                    </span>
                     <Image src="/images/cancel.png" alt="icon" width={100} height= {100} /></a>
                 
                    <a href="#">  <span className={styles.iconTitolo}>
                        Our Location
                    </span>
                    <Image src="/images/location.png" alt="icon" width={100} height= {100} /></a>
                  
                    <a href="#"><span className={styles.iconTitolo}>
                        Want to talk</span>  
                      <Image src="/images/phone.png" alt="icon"  width={100} height= {100}/></a>
                
                    <a href="#"> <span className={styles.iconTitolo}>Our Email</span>
                       <Image src="/images/email.png" alt="icon" width={100} height= {100} /></a>
                
                    <a href="#"> <span className={styles.iconTitolo}>Satisfaction Guaranted</span>
                    <Image src="/images/heart.png" alt="icon" width={100} height= {100} /></a>
                   
                    <a href="#"><span className={styles.iconTitolo}>Free Shipping</span>
                         <Image src="/images/shipping.png" alt="icon" width={100} height= {100}/></a>
                   

                </div>
                <div className={styles.imageContainer} data-aos="fade-right">
                    <Image src= {images[imageIndex]} alt="Footer Image" width={100} height= {100} />

                </div>
                <div className={styles.footerInfo}>
                    <p className={styles.p}>&copy; 2024 <i className="bi bi-heart-fill"></i> Tutti i diritti riservati.</p>
                    
                    <div className={styles.socialMedia}>
                        <a  href="#" ><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </footer>
         
            </>)
}
