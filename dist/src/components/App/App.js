import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
export default function App() {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var str = 1;
    return (_jsxs("div", { children: ["Platform: ", __PLATFORM__, _jsxs("nav", { children: [_jsx(Link, { to: "/about", children: "about" }), _jsx(Link, { to: "/shop", children: "shop" })] }), count, _jsxs("div", { children: [_jsx("button", { className: styles.button, onClick: function () { return setCount(function (prev) { return prev + 1; }); }, children: "+" }), _jsx("button", { className: styles.button, onClick: function () { return setCount(function (prev) { return prev - 1; }); }, children: "-" })] }), _jsx(Outlet, {})] }));
}
