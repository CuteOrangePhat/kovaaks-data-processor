import {makeAutoObservable} from 'mobx';

export class FileStore {
    files = []

    constructor() {
        makeAutoObservable(this)
        window.api.response("toFileService", (data) => this.addFile(data));
    }

    addFile(file) {
        if(file.event === 'add'){
            this.files.push(file)
        }

        if(file.event === 'unlink') {
            const pos = this.files.map((f => f.date)).indexOf(file.date);
            this.files.splice(pos, 1);
        }
    }

}


export default FileStore;
