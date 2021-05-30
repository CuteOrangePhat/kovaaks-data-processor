import './App.css';
import {useStore} from "./hooks/hooks";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    const fileStore = useStore("fileStore")

    return (
        <div className="App">
            {
                fileStore.files.map((file) => (
                    <div>
                        <h1>Scenario: {file.data.Scenario}</h1>
                        <div>date: {file.date.toString()}</div>
                        <div>Score: {file.data.Score}</div>
                        <div>Shots: {file.data.Shots}</div>
                        <div>Hits: {file.data.Hits}</div>
                        <div>Damage Possible: {file.data['Damage Possible']}</div>
                        <br/>
                    </div>
                ))}
        </div>
    );
});

export default App;
