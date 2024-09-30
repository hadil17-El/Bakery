
"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from './createaccount.module.css';
import { useRouter } from "next/navigation";

const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "China",
    "India",
    "Japan",
    "Mexico",
    "Tunisia",
];
;

export default function CreateAccount() {
    const router = useRouter();
    const initialFormData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [formData, setFormData] = useState(initialFormData);
        const [selectedCountry, setSelectedCountry] = useState("");
        useEffect(() => {
            setFormData(initialFormData);
           },[]);

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value}= e.target;

            setFormData({...formData, [name]:value});
        };
        const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
            setSelectedCountry(e.target.value);
        }
        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log("Selected country:", selectedCountry);

            if(formData.password !== formData.confirmPassword) {
                alert("Passowrds do not match");
                return;
            }
            console.log('Account created: ', formData);
            setFormData(initialFormData);
            setSelectedCountry("");
        };
       const handleAccount = () => {
        setFormData(initialFormData);
        setSelectedCountry("");
        router.push('/Account');
       }
     
    return(
        <>
        <section className={styles.section}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange}
                placeholder="Enter your name" title="Name"/>
                <input className={styles.input} type="email" name="email"
                value={formData.email} onChange={handleChange} placeholder="Enter your email"
                title="Email" />
                <input className={styles.input} type="password" name="password" value={formData.password}
                onChange={handleChange} placeholder="Enter your password" title="Password" />
                <input className={styles.input} type="password" name="confirmPassword" value={formData.confirmPassword}
                onChange={handleChange} placeholder="Confirm your password" title="Confirm Password" />
              <label className={styles.label}>
                Choose your country:
                <select value={selectedCountry}
                        onChange={handleChangeSelect}
                        className={styles.select} >

                <option value="" disabled>
                    Select a country
                </option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
                </select>
              </label>              
                <button className={styles.btn} type="submit" >Created</button>
                <button className={styles.btn2} type="button" onClick={handleAccount}>Back</button>
            </form>
            </section>


        </>
    )
}