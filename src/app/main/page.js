import styles from "../page.module.css";
import Image from "next/image";

export default function Main() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                Please type in all information

                <form>
                    <input type="text" name="name" />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}