export default {
    addCart(context, cartItem) {
        return new Promise((resolve, reject) => {
            if (!context.state.cartList.length) {
                context.commit('newCartItem', cartItem)
                resolve('新添加到购物车成功！')
            } else {
                if (context.state.cartList.find(item => item.iid === cartItem.iid)) {
                    context.commit('oldCartItem', cartItem.iid)
                    resolve('购物车商品数量增加成功！')
                } else {
                    context.commit('newCartItem', cartItem)
                    resolve('新添加到购物车成功！')
                }
            }
        })
    }
}