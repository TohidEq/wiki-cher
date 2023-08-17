"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

import { BiSearchAlt } from "react-icons/bi";

function Search() {
  const router = useRouter();

  const search = useRef<HTMLInputElement>(null);
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search.current?.value}/`);
  };

  return (
    <div className="search">
      <form action="" onSubmit={handleSearch}>
        <input
          type="text"
          className=""
          ref={search}
          required
          placeholder="Your Question..."
        />
        <button type="submit" className="">
          <BiSearchAlt />
        </button>
      </form>
    </div>
  );
}

export default Search;
