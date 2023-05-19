import { useNavigate } from "react-router-dom";

import useProtectedPage from "../hooks/useProtectedPage";

function FeedPage() {
  const navigate = useNavigate();
  
  useProtectedPage(navigate);

  return (
    <main>
      <h1>Página de Feed</h1>
    </main>
  );
}

export default FeedPage;