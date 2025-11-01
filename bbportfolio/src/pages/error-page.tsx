import { useRouteError, isRouteErrorResponse } from "react-router";

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    console.error(error);
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return (
        <div id="error-page">
            <h1>An error has occurred</h1>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
}

export default ErrorPage;