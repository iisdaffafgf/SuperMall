export default {
    newCartItem(state, cartItem) {
        state.cartList.push(cartItem)
    },
    oldCartItem(state, iid) {
        state.cartList.forEach(item => {
            if (item.iid === iid) {
                item.count++
            }
        });
    },
    cancelAll(state) {
        state.cartList.forEach(item => {
            item.selected = false
        })
    },
    selectAll(state) {
        state.cartList.forEach(item => {
            item.selected = true
        })
    },
    selectThis(state, iid) {
        state.cartList.forEach(item => {
            if (item.iid === iid) {
                item.selected = !item.selected
            }
        });
    }
}