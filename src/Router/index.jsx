import { createBrowserRouter } from "react-router-dom";
import InsertPage from "../components/pages/Insert";
import MainPage from "../components/pages/Main";
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
        path: '/select/:index',
        element: <SelectPage/>
    },
    {
        path: '/update/:index',
        element: <UpdatePage />
    }
])
export default Router;