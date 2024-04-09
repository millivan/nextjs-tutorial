import Link from "next/link";
import Header from "@/components/header";

const Home = () => {
  // console.log("hi");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
};

export default Home;
