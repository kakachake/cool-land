import request from "@/service";

export function testApi() {
  return request({
    url: "/",
    method: "get",
  });
}
