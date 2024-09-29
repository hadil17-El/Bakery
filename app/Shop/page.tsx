"use client";
import React, { useState } from 'react';
import Styles from "./Shop.module.css";
import "../../app/page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type AdditionalBreadBlockProps = {
    handleClickC:(index: number,  blockId: string, category: string , title: string) => void;
}
const AdditionalBreadBlocks: React.FC<AdditionalBreadBlockProps> = ( {handleClickC} ) => {
    const breadblocks = [
        { id: 1, title: 'block1', price: '$10', img: '/images/bre1.jpg', width: 100, height: 100  },
        { id: 2, title: 'block2', price: '$10', img: '/images/bre2.jpg' , width: 100, height: 100 },
        { id: 3, title: 'block3', price: '$10', img: '/images/bre3.jpg' , width: 100, height: 100 },
        { id: 4, title: 'block4', price: '$10', img: '/images/bre4.jpg' , width: 100, height: 100 },
        { id: 5, title: 'block5', price: '$10', img: '/images/bre5.jpg' , width: 100, height: 100 }
    ];
    return (
        <ul className={Styles.showAdditionalListb}>
            {breadblocks.map(block => (
                <li key={block.id} className={Styles.block}  onClick={() => handleClickC(0, block.id.toString(), 'bread',block.title)}>
                    <Image src={block.img} className={Styles.img} alt={block.title} width={block.width} height={block.height} />
                    <h6 className={Styles.h6}>{block.title}</h6>
                    <i className="bi bi-heart-fill"></i>
                    <i className="bi bi-bag-plus"></i>
                    <span className={Styles.span}>{block.price}</span>
                </li>
            ))}
        </ul>
    )};
const AdditionalCroissantBlocks: React.FC<AdditionalBreadBlockProps>  = ({handleClickC}) => {
    const croissantblocks = [
        { id: 1, title: 'block1', price: '$10', img: '/images/croi1.jpg' , width: 100, height: 100  },
        { id: 2, title: 'block2', price: '$10', img: '/images/croi2.jpg' , width: 100, height: 100  },
        { id: 3, title: 'block3', price: '$10', img: '/images/croi3.jpg' , width: 100, height: 100  },
        { id: 4, title: 'block4', price: '$10', img: '/images/croi4.jpg' , width: 100, height: 100  },
        { id: 5, title: 'block5', price: '$10', img: '/images/croi5.jpg' , width: 100, height: 100  }
    ];
    return (
        <ul className={Styles.showAdditionalListc}>
            {croissantblocks.map(block => (
                <li key={block.id} className={Styles.block} onClick={() => handleClickC(1, block.id.toString(), 'croissant',block.title)}>
                    <Image src={block.img} className={Styles.img} alt={block.title}  width={block.width} height={block.height}/>
                    <h6 className={Styles.h6}>{block.title}</h6>
                    <i className="bi bi-heart-fill"></i>
                    <i className="bi bi-bag-plus"></i>
                    <span className={Styles.span}>{block.price}</span>
                </li>
            ))}
        </ul>
    )};
const AdditionalMuffinBlocks: React.FC<AdditionalBreadBlockProps>  = ({handleClickC}) => {
    const muffinblocks = [
        { id: 1, title: 'block1', price: '$10', img: '/images/muf1.jpg', width: 100, height: 100  },
        { id: 2, title: 'block2', price: '$10', img: '/images/muf2.jpg', width: 100, height: 100  },
        { id: 3, title: 'block3', price: '$10', img: '/images/muf3.jpg', width: 100, height: 100  },
        { id: 4, title: 'block4', price: '$10', img: '/images/muf4.jpg', width: 100, height: 100  },
        { id: 5, title: 'block5', price: '$10', img: '/images/muf5.jpg', width: 100, height: 100  }
    ];
    return (
        <ul className={Styles.showAdditionalListm}>
            {muffinblocks.map(block => (
                <li key={block.id} className={Styles.block} onClick={() => handleClickC(2, block.id.toString(), 'muffin',block.title)}>
                    <Image src={block.img} className={Styles.img} alt={block.title}  width={block.width} height={block.height} />
                    <h6 className={Styles.h6}>{block.title}</h6>
                    <i className="bi bi-heart-fill"></i>
                    <i className="bi bi-bag-plus"></i>
                    <span className={Styles.span}>{block.price}</span>
                </li>
            ))}
        </ul> )};
const Shop = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const router = useRouter();
    const [redirectIndex, setRedirectIndex] = useState<number | null>(null);

    const breadblocks = [
        { id: 1, title: 'block1', price: '$10', img: '/images/bre1.jpg' },
        { id: 2, title: 'block2', price: '$10', img: '/images/bre2.jpg' },
        { id: 3, title: 'block3', price: '$10', img: '/images/bre3.jpg' },
        { id: 4, title: 'block4', price: '$10', img: '/images/bre4.jpg' },
        { id: 5, title: 'block5', price: '$10', img: '/images/bre5.jpg' }
    ];

    const croissantblocks = [
        { id: 1, title: 'block1', price: '$10', img: '/images/croi1.jpg' },
        { id: 2, title: 'block2', price: '$10', img: '/images/croi2.jpg' },
        { id: 3, title: 'block3', price: '$10', img: '/images/croi3.jpg' },
        { id: 4, title: 'block4', price: '$10', img: '/images/croi4.jpg' },
        { id: 5, title: 'block5', price: '$10', img: '/images/croi5.jpg' }
    ];

    const muffinblocks = [
        { id: 1, title: 'block1', price: '$10', img: '/images/muf1.jpg' },
        { id: 2, title: 'block2', price: '$10', img: '/images/muf2.jpg' },
        { id: 3, title: 'block3', price: '$10', img: '/images/muf3.jpg' },
        { id: 4, title: 'block4', price: '$10', img: '/images/muf4.jpg' },
        { id: 5, title: 'block5', price: '$10', img: '/images/muf5.jpg' }
    ];

    const handleClickC = (index: number, blockId: string, category: string, title: string) => {
       const uniqueId = `${category}-${blockId}`;
        setActiveIndex(activeIndex === index ? null : index);
        setRedirectIndex(index);
        router.push(`/block/${category}/${blockId}`);
    };
    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const categories = [
        {id: 0, name: 'bread', img: '/images/bb.png', blocks: breadblocks},
        {id: 1, name: 'croissant', img: '/images/cc.png', blocks: croissantblocks},
        {id: 2, name: 'muffin', img: '/images/mm.png', blocks: muffinblocks}
    ];

    return (
        <section className={Styles.section}>
            <h2 className={Styles.titolo}>Category</h2>
            <ul className={Styles.list}>
                <li  className = {Styles.bread} key={0} onClick={() => handleClick(0)}>
                    <Image className={`${Styles.img1} ${activeIndex === 0 ? Styles.active : ''}`} src='/images/bb.png' alt='bb' width={100} height= {100}  />
                    {activeIndex === 0 && <AdditionalBreadBlocks handleClickC={handleClickC} />}
                </li>
                <li className={Styles.croissant} key={1} onClick={() => handleClick(1)}>
                    <Image className={`${Styles.img1} ${activeIndex === 1 ? Styles.active : ''}`} src='/images/cc.png' alt="cc" width={100} height= {100}  />
                    {activeIndex === 1 && <AdditionalCroissantBlocks handleClickC={handleClickC}/>}
                </li>
                <li key={2} className = {Styles.muffin} onClick={() => handleClick(2)}>
                    <Image className={`${Styles.img1} ${activeIndex === 2 ? Styles.active : ''}`} src='/images/mm.png' alt='mm' width={100} height= {100}  />
                    {activeIndex === 2 && <AdditionalMuffinBlocks  handleClickC={handleClickC}/>}
                </li>
            </ul>
        </section>
    );};
export default Shop;