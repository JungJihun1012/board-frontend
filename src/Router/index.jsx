import { createBrowserRouter } from "react-router-dom";
import InsertPage from "../components/pages/Insert";
import MainPage from "../components/pages/Main";
import ReadPage from "../components/pages/Read";
import UpdatePage from "../components/pages/Update";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/insert',
        element: <InsertPage/>
    },
    {
        path: '/read',
        element: <ReadPage />
    },
    {
        path: '/update/:index',
        element: <UpdatePage />
    }
])
export default Router;