"use client";
import React, { useContext } from "react";
import "./AboutService.scss";
import { DataContext } from "@/lib/providers/DataProvider/context";
import Image from "next/image";
import classNames from "classnames";
import { motion } from "framer-motion";
import { anim, buySellAnim } from "@/lib/helpers/anim";
import { ModalContext } from "@/lib/providers/ModalProvider/ModalProvider";
import { Button } from "@/utils/Button/Button";

export default function AboutService({ type = "buy" }) {
  const { isActiveModal, setisActiveModal } = useContext(ModalContext);
  const { data: fullData } = useContext(DataContext);
  
  // Get the right data based on section type
  const {aboutService: data} = fullData;
  const isBuy = type === "buy";

  const handleClick = (type) => {
    if (isActiveModal.active && isActiveModal.type === type) {
      return setisActiveModal({ active: false, type });
    } else {
      return setisActiveModal({ active: true, type });
    }
  };

  return (
    <section className={`service-section-wrapper service-section--${type}`}>
      <div className={`service-section`}>
        <div className="service-section__doll">
          <Image src={`/images/${type}Section/doll.webp`} alt="" fill />
        </div>
        <div className={classNames("top-titles uppercase", { "top-titles--right": !isBuy })}>
          <span className={`fz--180 fz--mobile-60 ${isBuy ? "green" : "red"}`}>{type}</span>
          <span className="fz--180 fz--mobile-60">{type}</span>
          <span className="fz--180 fz--mobile-60">{type}</span>
          <span className="fz--180 fz--mobile-60">{type}</span>
          <span className="fz--180 fz--mobile-60">{type}</span>
        </div>
        <div className={classNames("list", { "list--right": !isBuy })}>
          {data.list.map((item, index) => (
            <motion.div
              key={`aboutService-list-${index}`}
              {...anim(buySellAnim.list)}
              custom={index}
              className={classNames("item", {
                "item--long": item?.big,
              })}
            >
              <div className="item__title">{item.title}</div>
              <p
                className="item__text"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </motion.div>
          ))}
          <Button classes={`list-button ${isBuy ? "button--green" : ""}`}>
            {data.button?.text}
          </Button>
        </div>
      </div>
    </section>
  );
}