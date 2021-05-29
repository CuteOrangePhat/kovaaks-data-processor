import {makeAutoObservable} from 'mobx';

export class FileStore {
    value = 0;
    files = []

    constructor() {
        makeAutoObservable(this)
        window.api.response("toFileService", (data) => this.addFile(data));
    }

    increment() {
        this.value += 1;
    }

    decrement() {
        this.value -= 1;
    }

    addFile(fileName) {
        this.files.push(fileName)
    }

}


export default FileStore;
