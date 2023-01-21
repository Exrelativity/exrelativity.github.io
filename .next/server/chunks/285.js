"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(382);
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(515);









const icons = {
    github: react_icons_vsc__WEBPACK_IMPORTED_MODULE_7__.VscGithubInverted,
    linkedin: react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaLinkedin,
    devpost: react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaDev,
    email: react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdEmail,
    document: react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdDocument,
    youtube: react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaYoutube,
    link: react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiLink
};
const LinkIcon = ({ index , color , onHoverColor , url , label , icon  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
        label: label,
        "aria-label": `${label}-tooltip`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            "aria-label": `Open link to ${url}`,
            display: "inline-block",
            href: url,
            isExternal: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                as: icons[icon],
                fontSize: "xl",
                color: color,
                _hover: {
                    color: onHoverColor
                }
            })
        })
    }, `link-${index}`)
;
const LinkIconBar = ({ links , color , onHoverColor , ...props })=>{
    const iconColor = color || (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(_theme__WEBPACK_IMPORTED_MODULE_8__/* .colors.subtle.light */ .O.subtle.light, _theme__WEBPACK_IMPORTED_MODULE_8__/* .colors.subtle.dark */ .O.subtle.dark);
    const hoverColor = onHoverColor || (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(_theme__WEBPACK_IMPORTED_MODULE_8__/* .colors.secondary.light */ .O.secondary.light, _theme__WEBPACK_IMPORTED_MODULE_8__/* .colors.secondary.dark */ .O.secondary.dark);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        mt: 4,
        direction: "row",
        spacing: "12px",
        justify: "center",
        mb: 10,
        ...props,
        children: links.map((link, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkIcon, {
                index: index,
                color: iconColor,
                onHoverColor: hoverColor,
                ...link
            }, link.label)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkIconBar);


/***/ }),

/***/ 530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const links = [
    {
        label: "Github",
        icon: "github",
        url: "https://github.com/exrelativity/"
    },
    {
        label: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/everest-ukweh-354a1740/"
    },
    {
        label: "Resume",
        icon: "document",
        url: "/resume.pdf"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (links);


/***/ }),

/***/ 515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
};
const colors = {
    primary: {
        light: "#F7F8FA",
        dark: "#252934"
    },
    secondary: {
        light: "#1ca7d0",
        dark: "#90cdf4"
    },
    tertiary: {
        light: "#736CED",
        dark: "#0056b3"
    },
    subtle: {
        light: "gray.400",
        dark: "#FFFFFF"
    },
    bg: {
        light: "",
        dark: "#343a40"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    config,
    colors
}));


/***/ })

};
;