import { createHashRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home-page";
import ContactPage from "./pages/contact-page";
import AboutPage from "./pages/about-page";
import IllicPage from "./pages/illic-page";
import AHPPage from "./pages/ahp-page";
import ClearCallPage from "./pages/clear-call-page";
import BlogEntryPage from "./pages/blog-entry-page";
import BlogNavigationPage from "./pages/blog-navigation-page";



const WebsiteRouter = () => {

    const browserRouter = createHashRouter([
        {
            path: "/",
            element: <HomePage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/projects",
            element: <HomePage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/blog",
            element: <BlogNavigationPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/blog/:index",
            element: <BlogEntryPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/about",
            element: <AboutPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/contact",
            element: <ContactPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/projects/illic",
            element: <IllicPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/projects/ahp",
            element: <AHPPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/projects/telehealth",
            element: <ClearCallPage />,
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