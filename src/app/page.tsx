import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WikiCher",
  description: "WikiCher, Wiki Searcher.",
};

export default function Home() {
  return (
    <main className="home">
      <h2 className={"msg-text"}>Welcome 🙂</h2>
    </main>
  );
}
