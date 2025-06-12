import { createBrowserRouter } from "react-router-dom";
import InsertPage from "../components/pages/Insert";
import MainPage from "../components/pages/Main";
import ReadPage from "../components/pages/Read";
import UpdatePage from "../components/pages/Update";
import SelectPage from "../components/pages/Select";


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
        path: '/patchSelect',
        element: <ReadPage />
    },
    {
        path: '/select',
        element: <SelectPage/>
    },
    {
        path: '/update/:index',
        element: <UpdatePage />
    }
])
export default Router;