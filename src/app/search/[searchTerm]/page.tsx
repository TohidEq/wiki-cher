import Card from "@/components/Card";
import Scroll from "@/components/Scroll";
import getWikiResult from "@/lib/getWikiResult";

type Params = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata(props: Params) {
  const wikiResult: Promise<SearchResult> = getWikiResult(
    props.params.searchTerm
  );

  const data = await wikiResult;
  const results: Result[] | undefined = data?.query?.pages;

  const displayTerm = props.params.searchTerm.replaceAll("%20", " ");

  if (!results) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }
  return {
    title: `Search Results for ${displayTerm}`,
  };
}

export default async function SearchResult(props: Params) {
  const wikiResult: Promise<SearchResult> = getWikiResult(
    props.params.searchTerm
  );

  const data = await wikiResult;
  const results: Result[] | undefined = data?.query?.pages;

  const displayTerm = props.params.searchTerm.replaceAll("%20", " ");

  const content = (
    <main className="search-result pb-28">
      <h2 className="msg-text py-4">
        Search Result for:
        <span> {displayTerm} </span>
      </h2>
      <div className="results"></div>
      {results ? (
        Object.values(results).map((result) => (
          <Card key={result.pageid} result={result} />
        ))
      ) : (
        <h2 className="msg-text py-4">
          <span>{`${props.params.searchTerm} `}</span>
          Not Found 🙁
        </h2>
      )}

      <Scroll />
    </main>
  );

  return content;
}
