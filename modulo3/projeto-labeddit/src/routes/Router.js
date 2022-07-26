import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='registration' element={<RegistrationPage />} />
                <Route path='post' element={<PostPage />} />
                <Route path='*' element={<p>Pagina não encontrada.  :(</p>} />
            </Routes>
        </BrowserRouter>
    )
}