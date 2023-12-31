import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/Dashboard";
import { AllUsersPage } from "../pages/AllUsers";
import { MyProfile } from "../pages/MyProfile";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/update" element={<MyProfile />} />
            <Route path="/all-users" element={<AllUsersPage />} />
        </Routes>
    );
};
