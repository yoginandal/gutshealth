import styles from "@/components/Icon/Icon.module.css";

const Icon = ({ children }) => {
  return (
    <div className={styles.iconCircle}>
      {children} {/* Other content (e.g., icons, text) will go here */}
    </div>
  );
};

export default Icon;
