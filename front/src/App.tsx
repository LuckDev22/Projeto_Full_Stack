import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/routes";
import { GlobalStyles } from "./styles/globalStyles";
import { HomeProvider } from "./providers/HomeProvider";
import { ClientProvider } from "./providers/UserProvider";

export const App = () => {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <GlobalStyles />
            <ClientProvider>
                <HomeProvider>
                    <AppRoutes />
                </HomeProvider>
            </ClientProvider>
        </>
    );
};
