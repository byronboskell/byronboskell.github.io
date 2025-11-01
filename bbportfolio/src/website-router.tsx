import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home-page";



const WebsiteRouter = () => {

    const browserRouter = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
            errorElement: <ErrorPage />,
        }
    ],
        {
            future: {
                v7_relativeSplatPath: true,
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
                //v7_startTransition: true,
                v7_skipActionErrorRevalidation: true,
            }
        }
    );

    return (
        <RouterProvider router={browserRouter} />
    );
}

export default WebsiteRouter;