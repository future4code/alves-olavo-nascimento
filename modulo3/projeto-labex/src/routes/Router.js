import { AdminHomePage } from "../pages/adminHomePage/AdminHomePage";
import { ApplicationFormPage } from "../pages/applicationFormPage/ApplicationFormPage";
import { CreateTripPage } from "../pages/createTripPage/CreateTripPage";
import { HomePage } from "../pages/homePage/HomePage";
import { ListTripsPage } from "../pages/listTripsPage/ListTripsPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { TripDetailsPage } from "../pages/tripDetailsPage/TripDetailsPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="adminHome" element={<AdminHomePage />} />
                <Route path="applicationForm" element={<ApplicationFormPage />} />
                <Route path="createTrip" element={<CreateTripPage />} />
                <Route path="listTrips" element={<ListTripsPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="tripDetails" element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}