import styles from "./IconMainScreen.module.css";

export default function IconMainScreen({ imgClass, url }) {
  return (
    <a href={url}>
      <button
        className={[styles.container, styles[imgClass]].join(" ")}
      ></button>
    </a>
  );
}
