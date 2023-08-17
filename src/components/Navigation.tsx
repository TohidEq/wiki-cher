import Link from "next/link";
import Search from "./Search";

function Navigation() {
  return (
    <nav className={"navigation"}>
      <div className={"container"}>
        <Link href={"/"} className="title">
          <span>W</span>iki<span>C</span>her
        </Link>
        <Search />
      </div>
    </nav>
  );
}

export default Navigation;
