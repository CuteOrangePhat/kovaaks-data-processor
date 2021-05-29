import './App.css';
import {useStore} from "./hooks/hooks";
import {observer} from "mobx-react-lite";

const  App = observer(() => {
    const fileStore = useStore("fileStore")

    return (
        <div className="App">
            <h1>File Store App</h1>
            <button onClick={() => fileStore.decrement()}>D</button>

            <button onClick={() => fileStore.increment()}>I</button>
            <h2>Value {fileStore.value}</h2>
            {
                fileStore.files.map((file) => <div>{file.split('\\').slice(-1)[0]}</div>)
            }
        </div>
    );
})

export default App;
