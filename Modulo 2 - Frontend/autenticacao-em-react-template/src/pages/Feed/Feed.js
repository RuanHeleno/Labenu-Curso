import { useNavigate } from "react-router-dom";

import CardPost from "../../components/CardPost/CardPost";
import CriarPost from "../../components/CriarPost/CriarPost";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectedPage";

import { FeedContainer } from "./styled";

export default function Feed() {
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  
  useProtectedPage(navigate);

  const [posts] = useRequestData([], "/posts", config);

  return (
    <FeedContainer>
      <h1>Feed</h1>
      <section>
        <h3>Novo post</h3>
        <CriarPost />
      </section>
      {posts.map((post) => {
        return <CardPost key={post.id} post={post} />;
      })}
    </FeedContainer>
  );
}
