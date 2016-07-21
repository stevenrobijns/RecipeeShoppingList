"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var shoppingLists = [
            { id: 1, name: 'Week 27' },
            { id: 2, name: 'Week 28' },
            { id: 3, name: 'Week 29' },
        ];
        var recipes = [
            { id: 1, name: 'Paëlla' },
            { id: 2, name: 'Spaghetti' },
            { id: 3, name: 'Pasta met courgettes en spekjes' },
        ];
        return { shoppingLists: shoppingLists };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data-service.js.map