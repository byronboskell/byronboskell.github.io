import { createHashRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home-page";
import BlogPage from "./pages/blog-page";
import ContactPage from "./pages/contact-page";
import AboutPage from "./pages/about-page";
import PageLayout from "./components/page-layout";



const WebsiteRouter = () => {

    const browserRouter = createHashRouter([
        {
            path: "/",
            element: <HomePage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/home",
            element: <HomePage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/blog",
            element: <BlogPage />,
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
            path: "/projects",
            element: <HomePage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/projects/illic",
            element: <PageLayout />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/projects/ahp",
            element: <PageLayout />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/projects/telehealth",
            element: <PageLayout />,
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