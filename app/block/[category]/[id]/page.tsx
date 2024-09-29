"use client";
import React, { useState } from 'react';
import styles from "./Block.module.css";
import Image from 'next/image';

type ItemDetails = {
    img: string;
    title: string;
    description: string;
    price: string;
    nutrition: string;
    ingredients: string;
};

const itemData: Record<string, Record<string, ItemDetails>> = {
   "bread": {
    "1": {img: '/images/bre1.jpg', title: 'Block', description:'il pane si prepara mescolando farina,acqua,lievito e sale , e si lascia lievitare finche raddoppia di volume.Successivamente , si modella la forma desiderata e si cuoce in forno fino a doratura.', price:'$10',
        nutrition: `Calorie: 250kcal
                    Carboidrati: 50g
                    Proteine: 8g
                    Grassi: 1.5g
                    Fibra: 2g`
                    , 
        ingredients: `farina
                    Acqua
                    Lievito 
                    Sale 
                    Zucchero`
    },
    "2": {img: '/images/bre2.jpg', title: 'Block', description:'il pane si prepara mescolando farina,acqua,lievito e sale , e si lascia lievitare finche raddoppia di volume.Successivamente , si modella la forma desiderata e si cuoce in forno fino a doratura.', price:'$10',
        nutrition: `Calorie: 250kcal
        Carboidrati: 50g
        Proteine: 8g
        Grassi: 1.5g
        Fibra: 2g`
        , 
        ingredients: `farina
        Acqua
        Lievito
        Sale
        Zucchero`
        },
    "3": {img: '/images/bre3.jpg', title: 'Block', description:'il pane si prepara mescolando farina,acqua,lievito e sale , e si lascia lievitare finche raddoppia di volume.Successivamente , si modella la forma desiderata e si cuoce in forno fino a doratura.', price:'$10',
        nutrition: `Calorie: 250kcal 
        Carboidrati: 50g
        Proteine: 8g
        Grassi: 1.5g
        Fibra: 2g `,
        ingredients:` farina
        Acqua
        Lievito
        Sale
        Zucchero`
    },
    "4": {img: '/images/bre4.jpg', title: 'Block', description:'il pane si prepara mescolando farina,acqua,lievito e sale , e si lascia lievitare finche raddoppia di volume.Successivamente , si modella la forma desiderata e si cuoce in forno fino a doratura.', price:'$10',
        nutrition: `Calorie: 250kcal
                    Carboidrati: 50g
                    Proteine: 8g
                    Grassi: 1.5g
                    Fibra: 2g`
                    ,  
        ingredients: `farina
        Acqua
        Lievito
        Sale
        Zucchero`
    },
    "5": {img: '/images/bre5.jpg', title: 'Block', description:'il pane si prepara mescolando farina,acqua,lievito e sale , e si lascia lievitare finche raddoppia di volume.Successivamente , si modella la forma desiderata e si cuoce in forno fino a doratura.', price:'$10',
        nutrition:` Calorie: 250kcal
        Carboidrati: 50g
        Proteine: 8g
        Grassi: 1.5g
        Fibra: 2g  `
        ,
        ingredients: `farina
                    Acqua
                    Lievito
                    Sale
                    Zucchero`
    },
    },
    "croissant": {
    "1": {img: '/images/croi1.jpg', title: 'Block', description:'I croissant sono fatti con un impasto sfogliato,ricco di burro.Impasto viene piegato piu volte per creare strati,quandi tagliato a triangoli e arrotolato.Dopo la lievitazione, si cuociono fino a ottenere una superficie dorrata e croccante.', price:'$10',
        nutrition: `Calorie: 406kcal 
                    Carboidrati: 45g
                    Proteine: 8g
                    Grassi: 21g
                    Fibra: 1g`
                    , 
                    ingredients: `farina
                    Acqua
                    Lievito 
                    Latte
                    Burro
                    Uovo
                    Sale
                    Zucchero`
    },
    "2": {img: '/images/croi2.jpg', title: 'Block',  description:'I croissant sono fatti con un impasto sfogliato,ricco di burro.Impasto viene piegato piu volte per creare strati,quandi tagliato a triangoli e arrotolato.Dopo la lievitazione, si cuociono fino a ottenere una superficie dorrata e croccante.', price:'$10',
        nutrition: `Calorie: 406kcal
                    Carboidrati: 45g
                    Proteine: 8g
                    Grassi: 21g
                    Fibra: 1g`
                    , 
                    ingredients: `farina
                    Acqua
                    Lievito 
                    Latte
                    Burro
                    Uovo
                    Sale
                    Zucchero`
        },
    "3": {img: '/images/croi3.jpg', title: 'Block',  description:'I croissant sono fatti con un impasto sfogliato,ricco di burro.Impasto viene piegato piu volte per creare strati,quandi tagliato a triangoli e arrotolato.Dopo la lievitazione, si cuociono fino a ottenere una superficie dorrata e croccante.', price:'$10',
        nutrition: `Calorie: 406kcal 
                    Carboidrati: 45g
                    Proteine: 8g
                    Grassi: 21g
                    Fibra: 1g`
                    , 
                    ingredients:` farina
                    Acqua
                    Lievito 
                    Latte
                    Burro
                    Uovo
                    Sale
                    Zucchero`
        },
    "4": {img: '/images/croi4.jpg', title: 'Block',  description:'I croissant sono fatti con un impasto sfogliato,ricco di burro.Impasto viene piegato piu volte per creare strati,quandi tagliato a triangoli e arrotolato.Dopo la lievitazione, si cuociono fino a ottenere una superficie dorrata e croccante.', price:'$10',
        nutrition:` Calorie: 406kcal
        Carboidrati: 45g
        Proteine: 8g
        Grassi: 21g
        Fibra: 1g`
        , 
        ingredients: `farina
        Acqua
        Lievito 
        Latte
        Burro
        Uovo
        Sale
        Zucchero`
        },
   
    "5": {img: '/images/croi5.jpg', title: 'Block',  description:'I croissant sono fatti con un impasto sfogliato,ricco di burro.Impasto viene piegato piu volte per creare strati,quandi tagliato a triangoli e arrotolato.Dopo la lievitazione, si cuociono fino a ottenere una superficie dorrata e croccante.', price:'$10',
        nutrition: `Calorie: 406kcal 
                    Carboidrati: 45g
                    Proteine: 8g
                    Grassi: 21g
                    Fibra: 1g`
                    , 
        ingredients: `farina
        Acqua
        Lievito 
        Latte
        Burro
        Uovo
        Sale
        Zucchero`
        },
    },

    "muffin": {
    "1": {img: '/images/muf1.jpg', title: 'Block', description:'I muffin si preparano mescolando farina, zucchero,uova, latte e burro.Si possono aggiungere ingredienti come frutta o cioccolato.Impasto viene poi versato in stampi e cotto in forno fino a che i muffin non sono gonfi e dorati.', price:'$10',
        nutrition: `Calorie: 400kcal 
                    Carboidrati: 50g
                    Proteine: 6g
                    Grassi: 20g
                    Fibra: 1g`
                    , 
                    ingredients: `farina
                    Uova
                    Latte
                    Burro
                    Lievito 
                    Sale
                    Zucchero`
    }
        ,
    "2": {img: '/images/muf2.jpg', title: 'Block', description:'I muffin si preparano mescolando farina, zucchero,uova, latte e burro.Si possono aggiungere ingredienti come frutta o cioccolato.Impasto viene poi versato in stampi e cotto in forno fino a che i muffin non sono gonfi e dorati.', price:'$10',
        nutrition:` Calorie: 400kcal 
        Carboidrati: 50g
        Proteine: 6g
        Grassi: 20g
        Fibra: 1g`
        ,
        ingredients:` farina
        Uova
        Latte
        Burro
        Lievito 
        Sale
        Zucchero`
        },
    "3": {img: '/images/muf3.jpg', title: 'Block',description:'I muffin si preparano mescolando farina, zucchero,uova, latte e burro.Si possono aggiungere ingredienti come frutta o cioccolato.Impasto viene poi versato in stampi e cotto in forno fino a che i muffin non sono gonfi e dorati.', price:'$10',
        nutrition:` Calorie: 400kcal 
                    Carboidrati: 50g
                    Proteine: 6g
                    Grassi: 20g
                    Fibra: 1g`
                    , 
                    ingredients:` farina
                    Uova
                    Latte
                    Burro
                    Lievito 
                    Sale
                    Zucchero`
    }
        ,
    "4": {img: '/images/muf4.jpg', title: 'Block', description:'I muffin si preparano mescolando farina, zucchero,uova, latte e burro.Si possono aggiungere ingredienti come frutta o cioccolato.Impasto viene poi versato in stampi e cotto in forno fino a che i muffin non sono gonfi e dorati.', price:'$10',
        nutrition: `Calorie: 400kcal
        Carboidrati: 50g
        Proteine: 6g
        Grassi: 20g
        Fibra: 1g`
        ,
        ingredients:` farina
        Uova
        Latte
        Burro
        Lievito 
        Sale
        Zucchero`
        },
    "5": {img: '/images/muf5.jpg', title: 'Block', description:'I muffin si preparano mescolando farina, zucchero,uova, latte e burro.Si possono aggiungere ingredienti come frutta o cioccolato.Impasto viene poi versato in stampi e cotto in forno fino a che i muffin non sono gonfi e dorati.', price:'$10',
        nutrition:` Calorie: 400kcal 
        Carboidrati: 50g
        Proteine: 6g
        Grassi: 20g
        Fibra: 1g`
        , 
        ingredients: `farina
        Uova
        Latte
        Burro
        Lievito 
        Sale
        Zucchero`
    }
}
};


const BlockDetailPage = ({ params }: { params: { index: number; category: string; title: string; id: string } }) => {
    const { category, id } = params;
    const item = itemData[category]?.[id];
    const [quantity, setQuantity] = useState(0);

    if(!item) {
        return <div>Item not found</div>
    }
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    return (
        <section className={styles.section}>
            <h2 className={styles.h2}>{item.title}</h2>
            <Image src={item.img} alt={item.title} width={300} height={300} className={styles.image} />
            <p className={styles.descrip}>{item.description}</p>
            <p className={styles.price}>{item.price}</p>
            <p className={styles.quantity}>quantita: {quantity} </p>
            <i className="bi bi-plus" onClick={handleIncrement} ></i>      
            <div className={styles.nutrition}>
            <h3 className={styles.h3}>
                Nutrition
                </h3>
                <ul className={styles.nutritionList}>
                {item.nutrition.split('\n').map((nutrition,index) => (
                    <li key={index} className={styles.nutritionItem}>
                        {nutrition.trim()}
                    </li>
                ))}
                </ul>
           </div>
            <div className={styles.ingredient}>
                <h3 className={styles.h3}> Ingredients</h3>
                <ul className={styles.ingredientList}>
                {item.ingredients.split('\n').map((ingredient, index) => (
                    <li key={index} className={styles.ingredientItem}>
                        {ingredient.trim()}
                    </li>
                ))}
                </ul>
                </div>
            <button className={styles.addToCartButton}>Add to Cart</button>
        </section>
    );
};

export default BlockDetailPage;