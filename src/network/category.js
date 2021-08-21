import { request } from "./request"

export function getCateList() {
    return request({
        url: '/category'
    })
}
export function getCateGoods(miniWallkey) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey
        }
    })
}
