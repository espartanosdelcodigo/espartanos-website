import styles from "./LeftMenu.module.css";
import MenuItem from "../MenuItem/MenuItem";
export default function LeftMenu() {
  return (
    <div className={styles.container}>
      <div>
        <MenuItem />
      </div>
      <div className={styles.bottom}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}
