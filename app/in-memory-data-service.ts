export class InMemoryDataService{

    createDb(){
        let shoppingLists = [
            {id: 1, name: 'Week 27'},
            {id: 2, name: 'Week 28'},
            {id: 3, name: 'Week 29'},
        ];

        let recipes = [
            {id: 1, name: 'Paëlla'},
            {id: 2, name: 'Spaghetti'},
            {id: 3, name: 'Pasta met courgettes en spekjes'},
        ];

        return { shoppingLists }
    }
}