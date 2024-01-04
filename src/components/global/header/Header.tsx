import TopHeader from "./TopHeader";
import LogoAndSearchBar from "./LogoAndSearchBar";
import Navigation from "./Navigation";
import readCategoryAction from "@/actions/global/readCategoryAction";

export default async function Header() {
  const { data } = await readCategoryAction();
  return (
    <header>
      <TopHeader />
      <LogoAndSearchBar />
      <Navigation data={data} />
    </header>
  );
}
