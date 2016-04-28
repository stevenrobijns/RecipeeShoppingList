import { Component, Input, OnDestroy, OnInit } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
    selector: 'recipee',
    templateUrl: 'app/recipees/recipee.component.html',
    styles ['.mdl-textfield__label {top: 0,}'],
    directives: [ROUTER_DIRECTIVES]
})
export class RecipeeComponent implements CanDeactivate, OnDestroy, OnInit {
    private _dbResetSubscription: Subscription;
    
    @Input() Recipee: Recipee;
    editRecipee: Recipee = <Recipee>{};
}