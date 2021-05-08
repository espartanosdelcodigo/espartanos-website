import styles from "./LeftMenu.module.css";
import MenuItem from "../MenuItem/MenuItem";

export default function LeftMenu() {
  return (
    <div className={styles.container}>
      <div>
        <MenuItem imgClass="logo-light" url="/" />
      </div>
      <div className={styles.bottom}>
        <MenuItem imgClass="home" url="/"/>
        <MenuItem imgClass="team" />
        <MenuItem imgClass="blog" />
      </div>
    </div>
  );
}
