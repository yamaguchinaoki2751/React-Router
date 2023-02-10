import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { userId } = useParams();
  // console.log(userId);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  // console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは {userId}</p>
      <p>クエリパラメーターは {query.get("name")}</p>
    </div>
  );
};
