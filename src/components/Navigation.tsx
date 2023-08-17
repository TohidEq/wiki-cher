import Link from "next/link";
import Search from "./Search";

function Navigation() {
  return (
    <nav className={"navigation"}>
      <div className={""}>
        <Search />
      </div>
    </nav>
  );
}

export default Navigation;
