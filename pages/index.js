import styles from "../styles/Home.module.css";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import IconMainScreen from "../components/IconMainScreen/IconMainScreen";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <LeftMenu />
      <div className={styles.leftScreen}>
        <div>
          <h1 className={styles.mainText}>
            <span>¡Hola, </span>
            <span className="red-font">Espartano</span>!
          </h1>
          <p className={styles.paragraph}>
            Bienvenido a la mejor comunidad de
            <br /> desarrollo de software de Latinoamérica.
          </p>
        </div>
        <div>
          <button
            className={["red-background", styles.contactButton].join(" ")}
          >
            Contáctanos
          </button>
          <div className={"display-flex"}>
            <IconMainScreen />
            <IconMainScreen />
            <IconMainScreen />
            <IconMainScreen />
          </div>
        </div>
      </div>
      <div className={styles.rightScreen}>
        <Image
          src="/resources/espartánosdelcódigo-light.png"
          alt="Picture of the author"
          width={729}
          height={436}
        />
      </div>
    </div>
  );
}
