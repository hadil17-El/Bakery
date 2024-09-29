"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect} from "react";
import Image  from "next/image";
import  styles from './account.module.css';
import { useRouter } from "next/navigation";
export default function Account() {
const router = useRouter();
const initialFormData = {
  name: "",
  email: "",
  password: "",
}
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setFormData(initialFormData);
  },[]);
  
  const handleChange = ( e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Account created:', formData);
    setFormData(initialFormData);
  };
const handleCreateAccount = () => {
  router.push('/CreateAccount');
};

  return (
    <>
    <section className={styles.section}>
    <Image  className= {styles.img} src="/images/bakery.jpg" alt="" width={100} height= {100} />
    <form  className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <input  className = {styles.input} type="text"
               name="name"
               value={formData.name}
               onChange={handleChange}
               placeholder="Enter your name"
               title="Name"
               />
      </label>
      <label className={styles.label}>
        <input className = {styles.input} type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                title="Email"
          />
          </label>
          <label className={styles.label}> 
        <input  className = {styles.input} type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                title="Password"
          />
          </label>
        <button  className = {styles.btn} type="submit">Login</button>
        <button className= {styles.btn2} type="button" onClick={handleCreateAccount}>Create Account</button>

    </form>
    </section>
    </>
  )
}