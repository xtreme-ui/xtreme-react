import { jsx as _jsx } from "react/jsx-runtime";
export const CoolButton = () => {
    return (_jsx("div", { children: _jsx("button", Object.assign({ onClick: () => alert("hello") }, { children: "Cool Button" }), void 0) }, void 0));
};
