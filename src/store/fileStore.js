import {makeAutoObservable} from 'mobx';

export class FileStore {

    value= 0;

    constructor() {
        makeAutoObservable(this)
        // fetch("https://swapi.dev/api/people/1/")
        //     .then(response => response.json()) // Parsing
        //     .then(data => console.log(data)); // collecting
    }

    increment() {
        this.value += 1;
    }

    decrement() {
        this.value -= 1;
    }

}



export default FileStore;
