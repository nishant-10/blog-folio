import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/desktop-navbar";
import Footer from "@/components/footer/desktop-footer";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* navbar goes here */}
      <Navbar />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      <Image src={"/DEMO.jpg"} alt="just a nice guy" height={200} width={200} />
      {/* footer goes here */}
      <Footer/>
    </div>
  );
}
