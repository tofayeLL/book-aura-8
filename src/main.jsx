import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesRead from './components/PagesRead/PagesRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact/Contact';
import AskQuestion from './components/AskQuestion/AskQuestion';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/pages',
        element: <PagesRead></PagesRead>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/question',
        element:<AskQuestion></AskQuestion>
      }
     
     


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
