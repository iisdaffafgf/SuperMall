import { request } from "./request";
// 详情页数据请求
export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
// 详情页底部推荐商品数据
export function getRecommend() {
    return request({
        url: "/recommend"
    })
}
// 商品基本信息
export class Baseinfo {
    constructor(data) {
        this.desc = data.detailInfo.desc;
        this.price = data.itemInfo.price;
        this.oldPrice = data.itemInfo.oldPrice;
        this.discountDesc = data.itemInfo.discountDesc;
        this.columns = data.columns
    }
}
// 店铺信息
export class ShopInfo {
    constructor(data) {
        this.services = data.services;
        this.name = data.name;
        this.logo = data.shopLogo;
        this.sells = data.cSells;
        this.goods = data.cGoods;
        this.fans = data.cFans;
        this.score = data.score
    }
}
// 添加到购物车数据
export class CartItem {
    constructor(data) {
        this.title = data.skuInfo.title
        this.desc = data.itemInfo.desc
        this.price = parseFloat(data.itemInfo.lowNowPrice).toFixed(2)
        this.image = data.itemInfo.topImages[0]
        this.iid = data.itemInfo.iid
        this.selected = false
        this.count = 1
    }
}