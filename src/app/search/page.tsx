export function generateMetadata() {
  return {
    title: `How R U? :)`,
  };
}

export default function SearchResult() {
  const content = (
    <main className="search-result">
      <h2 className="msg-text">{`What Are You Doing Here? 😃`}</h2>
      <h3 className="msg-text">{`Please Insert Something`}</h3>
    </main>
  );

  return content;
}
