import React from "react";
import style from "../styles/Services.module.css";
import services from "../Utils/services";

function Services() {
  return (
    <section className={style.services}>
      <h2 className={style.title}>Layanan kami</h2>
      <div className={style.cardContainer}>
        {services.map((Service) => (
          <div key={Service.id} className={styles.card}>
            <h3 className={style.cardTitle}>{Service.name}</h3>
            <p className={style.cardDescription}>{Service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
