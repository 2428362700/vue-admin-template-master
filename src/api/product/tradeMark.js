import request from "@/utils/request";

export function reqTrandeMarkList(page,limit){
    return request({
        url:`/admin/product/baseTrademark/${page}/${limit}`,
        method:'get',
    })

}