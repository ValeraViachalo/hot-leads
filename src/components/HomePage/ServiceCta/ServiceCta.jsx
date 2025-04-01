"use client";
import { anim, animModal } from "@/lib/helpers/anim";
import { DataContext } from "@/lib/providers/DataProvider/context";
import { ModalContext } from "@/lib/providers/ModalProvider/ModalProvider";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext } from "react";

import "./ServiceCta.scss";

export default function ServiceCta({ type }) {
  const { isActiveModal, setisActiveModal } = useContext(ModalContext);
  const { data: fullData } = useContext(DataContext);
  const { ctaSection: data } = fullData;

  return (
    <motion.section
      className={`active-section active-section--${type}`}
      {...anim(animModal.wrapperPresence)}
    >
      <div className="active-section__title">
        {data.title.map((item, index) => (
          <motion.h1
            key={index}
            {...anim(animModal.title)}
            custom={index}
            className="fz--mobile-24"
          >
            {item}
          </motion.h1>
        ))}
      </div>

      <div className="active-section__list">
        {data.list.map((item, index) => (
          <motion.div
            {...anim(animModal.listItems)}
            custom={index}
            key={index}
            className="item"
          >
            <Image
              src={item.image}
              alt=""
              width={144}
              height={144}
              className="item__image"
            />
            <div className="text">
              <p className="fz--18 fz--mobile-16 shadow">[{index + 1}]</p>
              <p className="fz--18 fz--mobile-14 ">{item.title}</p>
            </div>
          </motion.div>
        ))}
        <div
          className={`sell-button sell-button--${type}`}
          onClick={() => setisActiveModal({ active: true, type: "contact" })}
        >
          Заказать тестовый пролив
        </div>
      </div>

      <motion.div className="active-section__background">
        <Image src="/images/buysell/buysell-bg.png" alt="" fill />
      </motion.div>
      <motion.div
        className="active-section__doll"
        {...anim(animModal.doll)}
        custom={isActiveModal.type === "buy" ? 0 : 1}
      >
        <Image src="/images/hero/hero.png" alt="" fill />
      </motion.div>

      <div className="buttons-wrapper"></div>
    </motion.section>
  );
}
