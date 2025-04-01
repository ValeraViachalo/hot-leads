"use client";
import { DataContext } from "@/lib/providers/DataProvider/context";
import React, { useContext } from "react";

import "./Hero.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/utils/Button/Button";
import { anim, heroAnim, heroAnin } from "@/lib/helpers/anim";

export default function Hero() {
  const { data } = useContext(DataContext);
  const { hero } = data;

  return (
    <section className="hero">
      <motion.div className="hero-anim" {...anim(heroAnim.doll)}>
        <Image src="/images/hero/hero.png" alt="" fill />
      </motion.div>
      <motion.div {...anim(heroAnim.background)} className="flames">
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
      </motion.div>
      <motion.div {...anim(heroAnim.title)} className="title-wrapper">
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
          <motion.div
            className="button-wrapper"
            {...anim(heroAnim.cards)}
            custom={0}
          >
            <Button modalType="contact">{hero.title.button}</Button>
          </motion.div>
          <motion.p
            {...anim(heroAnim.cards)}
            custom={0}
            className="description fz--mobile-14"
          >
            {hero.title.description}
          </motion.p>
        </div>
      </motion.div>
      <div className="cards">
        {hero.list.map((card, index) => (
          <motion.div
            {...anim(heroAnim.cards)}
            custom={index}
            key={`hero-card-${index}`}
            className="card uppercase"
          >
            <div className="card__text">
              <p className="fz--16 fz--mobile-14">{card.top}</p>
              <p className="fz--20 fz--mobile-18 col-red">{card.title}</p>
            </div>
            <Image
              src={card.image}
              alt={card.title}
              width={120}
              height={120}
              className="card__image"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
