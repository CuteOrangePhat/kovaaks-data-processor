import {observer} from "mobx-react";
import React, {AriaAttributes, DOMAttributes, useRef} from "react";
import {useStore} from "../../hooks/hooks";

const Settings = () => {
        const settingsStore = useStore("settingsStore");

        const folderInput = useRef(null)
        const onButtonClick = () => {
            folderInput.current.click();
        };

        const onChangeFile = (e: any) => {
            const filePath = e.target.files[0]?.path
            const filePathArray = filePath.split('\\')
            filePathArray.pop()
            const directoryName = filePathArray.join('\\')
            settingsStore.setStatsPath(directoryName);
        }

        return (
            <div className="flex flex-col items-center w-full ">
                <b className="text-4xl mb-4">Settings</b>
                <div>
                    <span className="text-xl">Kovaaks Directory: {settingsStore.statsPath}</span>
                    <input type="file" id="file" directory="" webkitdirectory="" ref={folderInput}
                           onChange={onChangeFile}
                           style={{display: "none"}}/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full"
                            onClick={onButtonClick}>
                        <i className="material-icons">edit</i>
                    </button>
                </div>

            </div>
        );
    }
;

export default observer(Settings);

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        directory?: string;
        webkitdirectory?: string;
    }
}
