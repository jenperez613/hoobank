import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better deal <br className="sm:block hidden" /> in a few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our approval process is fast and easy and won't impact your credit
        score. See your APR and credit limit offers before you apply.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
