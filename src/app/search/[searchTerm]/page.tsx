import getWikiResult from "@/lib/getWikiResult";
import { useSearchParams } from "next/navigation";
import React from "react";

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

  const content = (
    <main className="search-result">
      {results ? (
        Object.values(results).map((result) => (
          <p className="">
            {result.title}
            <br />
            <br />
          </p>
        ))
      ) : (
        <h2 className="msg-text">{`${props.params.searchTerm} Not Found 🙁`}</h2>
      )}
    </main>
  );

  return content;
}
