(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService']

    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getBuyItems();
        toBuy.checkOff = function(itemIndex) {
            ShoppingListCheckOffService.checkOff(itemIndex);
        };
        toBuy.emptyMessage="Everything is bought!";

    };

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
        alreadyBought.emptyMessage="Nothing bought yet";
    };

    function ShoppingListCheckOffService() {
        var service = this;
        var itemsToBuy = [{
            name: "cookies",
            quantity: 10
        }, {
            name: "chips",
            quantity: 2
        }, {
            name: "coke",
            quantity: 1
        }, {
            name: "chocholates",
            quantity: 5
        }, {
            name: "soda",
            quantity: 2
        }];

        var itemsBought=[];

        service.getBuyItems = function() {
            return itemsToBuy;
        };

        service.getBoughtItems = function() {
            return itemsBought;
        }

        service.checkOff = function(itemIndex) {
            var tmpItem = itemsToBuy.splice(itemIndex, 1);
            itemsBought.push(tmpItem[0]);
        }
    };
})();
