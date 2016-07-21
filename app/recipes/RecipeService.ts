import { Injectable } from '@angular/core'; 
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Recipe } from  './Recipe';

@Injectable()
export class RecipeService{
    private recipeeListUrl = 'app/recipes'

    constructor(private http:Http) {
        
    }

    getRecipes(){
        this.http.get(this.recipeeListUrl)
        .toPromise()
                .then(response => {
                    return response.json().data
                })
                .catch(this.handleError);  
    }

    handleError(error: any){
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}