import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import avatarPng from '@/assets/images/anime.png';
import animeJpg from '@/assets/images/girl.jpg';
import IconSvg from '@/assets/images/cloud.svg';
export default function Shop() {
    return (_jsxs("div", { children: [_jsx("h1", { children: "Shop" }), _jsx("img", { width: "100px", src: avatarPng }), _jsx("img", { width: "100px", src: animeJpg }), _jsx(IconSvg, { style: { color: 'blue' }, width: "100px", height: "100px", fill: "red" })] }));
}
