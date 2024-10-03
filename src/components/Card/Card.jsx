import styles from "@/components/Card/Card.module.css";
import Icon from "@/components/Icon/Icon";

const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon>
          {/* Icon with a shadow effect */}
          <img
            src={icon}
            alt={title}
            style={{
              width: "40px",
              height: "40px",
              filter: "drop-shadow(5px 5px 50px #fff)",
              zIndex: "50",
            }}
          />
        </Icon>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>

      {/* Button added below the description */}
      <button className={styles.cardButton}>Learn More</button>
    </div>
  );
};

export default Card;
