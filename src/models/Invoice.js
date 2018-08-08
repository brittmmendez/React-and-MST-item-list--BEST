import {types} from "mobx-state-tree";
import ItemList from "./ItemList"

const Invoice = types.model('Invoice', {
    currency: types.string,
    is_paid: false,
    itemList: types.optional(ItemList, {items: []})
})
.views((self) => ({
    get status() {
        return self.is_paid ? "Thank you! Your order has been placed!" : null
    }
}))
.actions(self => {
    function markPaid() {
        self.is_paid = true
        self.itemList.items = []
    }

    function markUnpaid() {
        self.is_paid = false
    }
    return {markPaid, markUnpaid};
});

export default Invoice;