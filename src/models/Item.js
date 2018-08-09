import {types, getParent} from "mobx-state-tree";

const Item = types.model('Item', {
    name: types.string,
    quantity: types.number,
    price: types.number
})
.views((self) => ({
    get total() {
        return self.quantity*self.price
    }
}))
.actions(self => {
    function increment() {
        self.quantity += 1;
    }

    function decrement() {
        self.quantity -= 1;
    }

    function remove(){
        getParent(self, 2).remove(self)
    }

    function changeName(newName) {
        self.name = newName
    }

    function changePrice(newPrice) {
        self.price = newPrice
    }

    function changeQuantity(newQuant) {
        self.quantity = newQuant
    }
    return {increment, decrement, remove, changeName, changePrice, changeQuantity};
});

export default Item;