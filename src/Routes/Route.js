import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/MainBody/HomePage";
import SingleMovie from "../Pages/SingleMovie/SingleMovie";
import SingleTVShow from "../Pages/SingleMovie/SingleTVShow";

const router= createBrowserRouter([
{
    path: '/',
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/movie/:id',
            element: <SingleMovie/>,
            loader: ({params}) => fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`)
        },
        {
            path: '/tv/:id',
            element: <SingleTVShow/>,
            loader: ({params}) => fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`)
        }
    ]
}
])

export default router;