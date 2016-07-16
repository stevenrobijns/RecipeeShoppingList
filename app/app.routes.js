"use strict";
var router_1 = require('@angular/router');
var shoppinglists_1 = require('./shoppinglists/shoppinglists');
var recipes_1 = require('./recipes/recipes');
var routes = [
    { path: '', component: shoppinglists_1.ShoppingListComponent },
    { path: 'shoppinglists', component: shoppinglists_1.ShoppingListComponent },
    { path: 'recipes', component: recipes_1.RecipesComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map