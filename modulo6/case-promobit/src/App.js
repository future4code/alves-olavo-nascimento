import FeedPage from "./pages/feed/FeedPage";
import { Router } from "./router/router";
import * as S from './styled-App'

function App() {
  return (
    <S.ContainerApp>
      <Router />
    </S.ContainerApp>
  );
}

export default App;
