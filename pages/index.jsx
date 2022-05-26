import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}>
                    <h1>Blaze</h1>
                    <h1>OP</h1>
                </div>
                <div className={styles.foreground}>
                    <div className={styles.content}>
                        <h1 className={styles.name}>Abish Magar</h1>
                        {<h6 className={styles.bio}>Student and a python developer</h6>}
                        <Link href="/projects">
                            <button className={styles.button}>Projects</button>
                        </Link>
                        <Link href="/contact">
                            <button className={styles.outlined}>Contact</button>
                        </Link>
                    </div>
                    <Illustration className={styles.illustration} />
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: { title: "Home" }
    };
}
