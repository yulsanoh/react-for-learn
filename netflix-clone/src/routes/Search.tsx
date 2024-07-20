import { useLocation, useParams } from "react-router-dom";

function Search() {
  const location = useLocation();
  console.log(location);
  const keyword = new URLSearchParams(location.search).get("keyword");

  return (
    <>
      <h1>Search</h1>
    </>
  );
}

export default Search;
