import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import HomePage from './pages/Home/HomePage';
import EditPage from './pages/Edit/EditPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<HomePage/>}/>
            <Route path='/edit' element={<EditPage/>}/>
        </Route>
    )
);

export default function Router() {
    return <RouterProvider router={router} />
}