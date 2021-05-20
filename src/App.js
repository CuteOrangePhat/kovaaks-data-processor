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
        </div>
    );
})

export default App;
