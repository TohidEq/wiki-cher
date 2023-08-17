import React from "react";
import Link from "next/link";

import { BsLink45Deg } from "react-icons/bs";

type Props = {
  result: Result;
};

function Card(props: Props) {
  const cardTextCol = (
    <div className="card-texts">
      <h2 className="title">
        <BsLink45Deg />
        {props.result.title}
      </h2>
      <p>{props.result.extract}</p>
    </div>
  );

  const content = props.result?.thumbnail?.source ? (
    <article className="card">
      <Link
        href={`https://en.wikipedia.org/?curid=${props.result.pageid}`}
        target="_blank"
        className="card-items"
      >
        <div className="card-img">
          <img
            src={props.result.thumbnail.source}
            alt={props.result.title}
            width={props.result.thumbnail.width}
            height={props.result.thumbnail.height}
            loading="lazy"
          />
        </div>
        {cardTextCol}
      </Link>
    </article>
  ) : (
    <article className="card">
      <Link
        href={`https://en.wikipedia.org/?curid=${props.result.pageid}`}
        target="_blank"
        className="card-items"
      >
        {cardTextCol}
      </Link>
    </article>
  );

  return content;
}

export default Card;
