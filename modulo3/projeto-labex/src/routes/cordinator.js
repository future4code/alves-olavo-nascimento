export const goToListTripsPage = (navigate) => {
navigate("/listTrips")
}
export const goToLoginPage = (navigate) => {
    navigate("/login")
}
export const goToHomePage = (navigate) => {
    navigate("/")
}
export const goToApplicationFormPage = (navigate) => {
    navigate("/applicationForm")
}
export const goToCreateTripPage = (navigate) => {
    navigate("/createTrip")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/tripDetails/${id}`)
}
export const goToAdminHomePage = (navigate) => {
    navigate("/adminHome")
}
export const fazLogout = (navigate) => {
    navigate("/login")
    localStorage.clear()
}