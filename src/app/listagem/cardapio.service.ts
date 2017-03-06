import { EventEmitter } from '@angular/core';
export class CardapioService{
    showID = new EventEmitter<string>();

    private id: string;
    getID(){
        return this.id;
    }

    setID(id: string){
        this.id = id;
        this.showID.emit(id);
    }

}