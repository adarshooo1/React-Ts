"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Book = ({ url, title, author }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "bg-white h-[320px] w-[400px] flex justify-center items-center flex-col text-black rounded-lg m-3 shadow-2xl transition-transform duration-300 ease-linear hover:scale-105" },
            react_1.default.createElement("img", { src: url, alt: "Curious Minds Book", className: "h-60" }),
            react_1.default.createElement("div", { className: "flex flex-col justify-center text-center mt-2" },
                react_1.default.createElement("h1", { className: "text-xl font-bold" }, title),
                react_1.default.createElement("p", { className: "leading-tight" },
                    "Written By ",
                    author)))));
};
exports.default = Book;
