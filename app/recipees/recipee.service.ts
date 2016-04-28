import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

// import { ExceptionService, SpinnerService } from '../blocks/blocks';
// import { CONFIG, MessageService } from '../shared/shared';

let recipeesUrl = CONFIG.baseUrls.recipees;

export interface Recipee {
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
}

@Injectable()
export class RecipeeService {
    constructor(
        private _http: Http,
        private _exceptionService: ExceptionService,
        private _messageService: MessageService,
        private _spinnerService: SpinnerService){
            this._messageService.state.subscribe(state => this.getRecipees());
        }    

}