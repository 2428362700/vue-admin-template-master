import request from "@/utils/request";

export function reqTrandeMarkList(page, limit) {
  return request({
    url: `/admin/product/baseTrademark/${page}/${limit}`,
    method: "get",
  });
}
export function reqAddTrandeMarkList(tradeMark) {
  return request({
    url: "/admin/product/baseTrademark/save",
    method: "post",
    data: tradeMark,
  });
}
export function reqUpdateTrandeMarkList(tradeMark) {
  return request({
    url: "/admin/product/baseTrademark/update",
    method: "put",
    data: tradeMark,
  });
}
export function reqDeleteTrandeMarkList(id) {
  return request({
    url: `/admin/product/baseTrademark/remove/${id}`,
    method: "delete",
  });
}
