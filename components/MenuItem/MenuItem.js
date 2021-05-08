import styles from "./menuItem.module.css";

export default function MenuItem({ imgClass, url }) {
  return (
    <a href={url}>
      <button
        className={[styles.container, styles[imgClass]].join(" ")}
      ></button>
    </a>
  );
}
