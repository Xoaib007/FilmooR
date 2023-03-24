import { createBrowserRouter } from "react-router-dom";
import AllCredits from "../Components/Reusable/AllCredits";
import Main from "../Layout/Main";
import EpisodeGuide from "../Pages/EpisodeGuide/EpisodeGuide";
import HomePage from "../Pages/HomePage/MainBody/HomePage";
import CastPage from "../Pages/Single/CastPage/CastPage";
import SingleMovie from "../Pages/Single/Movies/SingleMovie";
import SingleTVShow from "../Pages/Single/TvShows/SingleTVShow";

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
        },
        {
            path: '/episodeguide/:id',
            element: <EpisodeGuide/>,
            loader: ({params}) => fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`)
        },
        {
            path: '/allcredits/movie/:id',
            element: <AllCredits/>,
            loader: ({params}) => fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`)
        },
        {
            path: '/allcredits/tv/:id',
            element: <AllCredits/>,
            loader: ({params}) => fetch(`https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`)
        },
        {
            path: '/cast/:id',
            element: <CastPage/>,
            loader: ({params}) => fetch(`https://api.themoviedb.org/3/person/${params.id}?api_key=6d47a4eb4a550f0aec87d70e03ce12ae`)
        },
        {
            path: '/signin',
            element: <CastPage/>
        },
        {
            path: '/signup',
            element: <CastPage/>
        },
    ]
}
])

export default router;