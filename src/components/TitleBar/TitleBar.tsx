import React from "react";

const TitleBar = () => {
    const closeWindow = () => {
        // @ts-ignore
        window.api.request('closeWindow');
    }

    const minimizeWindow = () => {
        // @ts-ignore
        window.api.request('minimizeWindow');
    }

    const maximizeWindow = () => {
        // @ts-ignore
        window.api.request('maximizeWindow');
    }
    return (
        <div className="draggable bg-purple-600 h-7 flex justify-end ">
            <button className="flex justify-center items-center not-draggable hover:bg-purple-500 h-full w-10" onClick={minimizeWindow}>
                <i className="far fa-window-minimize"></i>
            </button>
            <button className="flex justify-center items-center not-draggable hover:bg-purple-500 h-full w-10" onClick={maximizeWindow}>
                <i className="far fa-window-maximize"></i>
            </button>
            <button className="flex justify-center items-center not-draggable hover:bg-close h-full w-10" onClick={closeWindow}>
                <i className="fas fa-times"></i>
            </button>

        </div>
    );
};

export default TitleBar;
