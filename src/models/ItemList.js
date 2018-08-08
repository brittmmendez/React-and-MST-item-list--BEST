import {types, getParent} from "mobx-state-tree";
import Item from "./Item"

const ItemList = types.model('ItemList', {
    items: types.array(Item),
})
.views((self) => ({
    get total() {
        return this.items.reduce((sum, item) =>(sum+item.total),0)
    }
}))
.actions(self => ({
    add(item) {
        self.items.push(item)
        getParent(self, 1).markUnpaid()
    },
    remove(item) {
        self.items.splice(self.items.indexOf(item),1)
    }
}));

export default ItemList;