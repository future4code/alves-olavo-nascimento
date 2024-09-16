import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailMovie from "../pages/detailMovie/DetailMovie";
import FeedPage from '../pages/feed/FeedPage'
import styled from "styled-components";

const PageNotFound = styled.div`
display: flex;
align-items: center;
justify-content: center ;
height: 100vh;
border: solid 1px black;
`

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage />} />
                <Route path="detail/:id" element={<DetailMovie />} />
                <Route path="*" element={<PageNotFound><p>Página não encontrada. (✿◠‿◠)</p></PageNotFound>} />
            </Routes>
        </BrowserRouter>
    )
}