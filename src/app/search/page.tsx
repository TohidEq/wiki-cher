"use client";
import getWikiResult from "@/lib/getWikiResult";
import { useSearchParams } from "next/navigation";
import React from "react";

export default async function SearchResult(props: Params) {
  const content = (
    <main className="search-result">
      <h2 className="msg-text">{`What Are You Doing Here? 😃`}</h2>
      <h3 className="msg-text">{`Please Insert Something`}</h3>
    </main>
  );

  return content;
}
