import React from "react";

export const CoolButton: React.VFC = () => {
    return (
        <div>
            <button onClick={() => alert("hello")}>Cool Button</button>
        </div>
    );
};