System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var recipesUrl, RecipeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            // import { ExceptionService, SpinnerService } from '../blocks/blocks';
            // import { CONFIG, MessageService } from '../shared/shared';
            recipesUrl = CONFIG.baseUrls.recipes;
            let RecipeService = class RecipeService {
                constructor(_http, _exceptionService, _messageService, _spinnerService) {
                    this._http = _http;
                    this._exceptionService = _exceptionService;
                    this._messageService = _messageService;
                    this._spinnerService = _spinnerService;
                    this._messageService.state.subscribe(state => this.getRecipes());
                }
            };
            RecipeService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, Object, Object, Object])
            ], RecipeService);
            exports_1("RecipeService", RecipeService);
        }
    }
});
//# sourceMappingURL=recipe.service.js.map