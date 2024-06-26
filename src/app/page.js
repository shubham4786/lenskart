import Categories from "@/components/Categories";
import LinkBar from "@/components/LinkBar";
import NavBar from "@/components/NavBar";
import Product from "@/components/Product";
import TopLink from "@/components/TopLink";

export default function Home() {
  return (
    <main className="">
      <TopLink />
      <NavBar />
      <LinkBar />
      {/* <Categories /> */}
      <Product />
    </main>
  );
}
