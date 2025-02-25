"use client";
import { DataContext } from "@/lib/providers/DataProvider/context";
import React, { useContext } from "react";

import "./Hero.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/utils/Button/Button";

export default function Hero() {
  const { data } = useContext(DataContext);
  const { hero } = data;

  return (
    <section className="hero">
      <div className="flames">

        <Image
          src="/images/hero/flame-1.png"
          alt=""
          className="hero__flame-1"
          width={568}
          height={558}
        />
        <Image
          src="/images/hero/flame-2.png"
          alt=""
          className="hero__flame-2"
          width={753}
          height={380}
        />
      </div>
      <div className="title-wrapper">
        <Image
          src="/images/hero/title.svg"
          alt="Hot-leads"
          fill
          className="title"
          data-hide-for-mobile
        />
        <Image
          src="/images/hero/title-mobile.svg"
          alt="Hot-leads"
          fill
          className="title"
          data-only-mobile
        />
        <div className="title__bottom">
          <Button modalType="contact">{hero.title.button}</Button>
          <p className="description fz--mobile-14">{hero.title.description}</p>
        </div>
      </div>
      <div className="cards">
        {hero.list.map((card, index) => (
          <motion.div key={index} className="card uppercase">
            <div className="card__text">
              <p className="fz--16 fz--mobile-14">{card.top}</p>
              <p className="fz--20 fz--mobile-18 col-red">{card.title}</p>
            </div>
            <Image src={card.image} alt={card.title} width={120} height={120} className="card__image"/>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
