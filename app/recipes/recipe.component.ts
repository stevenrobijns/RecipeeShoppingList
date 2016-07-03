import { Component, Input, OnDestroy, OnInit } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
    selector: 'recipe',
    templateUrl: 'app/recipes/recipe.component.html',
    styles ['.mdl-textfield__label {top: 0,}'],
    directives: [ROUTER_DIRECTIVES]
})
export class RecipeComponent implements CanDeactivate, OnDestroy, OnInit {
    private _dbResetSubscription: Subscription;
    
    @Input() Recipe: Recipe;
    editRecipe: Recipe = <Recipe>{};
}