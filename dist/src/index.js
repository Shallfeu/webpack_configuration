import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { About } from '@/pages/About';
import { Shop } from '@/pages/Shop';
var root = document.getElementById('root');
if (!root) {
    throw new Error('root in not found');
}
var container = createRoot(root);
var router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: (_jsx(Suspense, { fallback: _jsx(_Fragment, { children: "Loading" }), children: _jsx(About, {}) })),
            },
            {
                path: '/shop',
                element: (_jsx(Suspense, { fallback: _jsx(_Fragment, { children: "Loading" }), children: _jsx(Shop, {}) })),
            },
        ],
    },
]);
container.render(_jsx(RouterProvider, { router: router }));
