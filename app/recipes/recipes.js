System.register(['./recipes.component', './recipes-list.component', './recipes.service', './sort-recipes.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (recipes_component_1_1) {
                exportStar_1(recipes_component_1_1);
                exportStar_1(recipes_component_1_1);
            },
            function (recipes_list_component_1_1) {
                exportStar_1(recipes_list_component_1_1);
            },
            function (recipes_service_1_1) {
                exportStar_1(recipes_service_1_1);
            },
            function (sort_recipes_pipe_1_1) {
                exportStar_1(sort_recipes_pipe_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=recipes.js.map