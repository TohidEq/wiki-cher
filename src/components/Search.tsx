"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

function Search() {
  const router = useRouter();

  const search = useRef<HTMLInputElement>(null);
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search.current?.value}/`);
  };

  return (
    <div className="pb-2 search">
      <form action="" onSubmit={handleSearch}>
        <input
          type="text"
          className=""
          ref={search}
          required
          placeholder="Your Question..."
        />
        <button type="submit" className="text-yellow-500 hover:opacity-50">
          
        </button>
      </form>
    </div>
  );
}

export default Search;
