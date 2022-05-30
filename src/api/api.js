import service from "@/utils/request";
export function getAll(data) {
    return service.request({
        method: "get",
        url: `/items/page?order=${data.order}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }

export function getMzhf(data) {
 return service.request({
     method: "get",
     url: `/items/find/mzhf?order=${data.order}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
 })
        
}
export function getFsxb(data) {
    return service.request({
        method: "get",
        url: `/items/find/fsxb?order=${data.order}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }
export function getEssj(data) {
    return service.request({
        method: "get",
        url: `/items/find/essj?order=${data.order}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }
export function getRyjj(data){
    return service.request({
        method:"get",
        url:`/items/find/ryjj?order=${data.order}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
}
export function getLsyp(data) {
    return service.request({
        method: "get",
        url: `/items/find/lsyp?order=${data.order}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }
export function getInfo(shopId){
    console.log(shopId)
    return service.request({
        method:"get",
        url:`/items/detail/${shopId}`
    })
}
export function Login(data){
    return service.request({
        method:"post",
        url:`/user/login`,
        data
    })
}
export function Register(data){
    return service.request({
        method:"post",
        url:`/user/register`,
        data
    })
}
export function searchShop (data) {
    console.log(data)
    return service.request({
        method: "get",
        url:`/items/search/${data.name}?sort=${data.sort}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`,
    })
}
   export function sendEmail(data) {
    return service.request({
        method: "get",
        url: `/mail/send/${data.email}`
    })
           
   }
   export function testEmail(data) {
       console.log(data)
    return service.request({
        method: "get",
        url: `/mail/cmp?email=${data.email}&VerCode=${data.Vercode}`
    })
           
   }
   export function getExamAll(data) {
       console.log(data)
    return service.request({
        method: "get",
        url: `/audit/all?type=${data.type}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })    
   }
   export function examMzhf(data) {
    return service.request({
        method: "get",
        url: `/audit/MZHF?type=${data.type}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }
   export function examFsxb(data) {
    return service.request({
        method: "get",
        url: `/audit/FSXB?type=${data.type}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }
   export function examEssj(data) {
    return service.request({
        method: "get",
        url: `/audit/ESSJ?type=${data.type}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }
   export function examRyjj(data) {
    return service.request({
        method: "get",
        url: `/audit/RYJJ?type=${data.type}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }
export function examLsyp(data) {
    return service.request({
        method: "get",
        url: `/audit/LSYP?type=${data.type}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }
   export function Buy(data) {
       console.log(data)
    return service.request({
        method: "post",
        url: `/order/newOrder`,
        data
    })
           
   }
   export function getMyBuy(data) {
    return service.request({
        method: "get",
        url: `/order/itemInfo/${data.userId}?sort=${data.sort}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
    })
           
   }
   export function changePassword(data) {
    return service.request({
        method: "post",
        url: `/user/chgPwd`,
        data
    })
    }
    export function examShop(data) {
        return service.request({
            method: "get",
            url: `/audit/audit/${data.id}?pass=${data.pass}`
        })
        }
        export function changeUser(data) {
            return service.request({
                method: "post",
                url: `/user/chgUInfo`,
                data
            })
            }
            export function getUserInfo(data) {
                return service.request({
                    method: "get",
                    url: `/user/get?id=${data.id}`
                })
                }
                export function UploadShop(data) {
                    return service.request({
                        method: "post",
                        url: `/items/upload?kind=${data.kind}&name=${data.name}&price=${data.price}&number=${data.number}&seller_id=${data.seller_id}`,
                    })
                    }
                    export function SearchSort(data) {
                        return service.request({
                            method: "get",
                            url: `/items/find/all?order=${data.order}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
                        })
                        }
                        export function getMySeller(data) {
                            console.log(data)
                            return service.request({
                                method: "get",
                                url: `/items/itemInfo/${data.userId}?sort=${data.sort}&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
                            })
                                   
                           }
                           export function confirmShop(data) {
                            console.log(data)
                            return service.request({
                                method: "get",
                                url: `/order/confirm/${data.orderId}`
                            })
                                   
                           }
                           export function cancleShop(data) {
                            console.log(data)
                            return service.request({
                                method: "delete",
                                url: `/order/cancel/${data.orderId}`
                            })
                                   
                           }
                           export function deleteShop(data) {
                            console.log(data)
                            return service.request({
                                method: "delete",
                                url: `/items/del/${data.itemId}`
                            })
                                   
                           }
                           export function ManagerShop(data) {
                            console.log(data)
                            return service.request({
                                method: "get",
                                url: `/audit/search/${data.nname}?&pageNum=${data.pageNum}&pageSize=${data.pageSize}`
                            })
                                   
                           }
                           export function ManagerUser(data) {
                            console.log(data)
                            return service.request({
                                method: "get",
                                url: `/audit/user?pageNum=${data.pageNum}&pageSize=${data.pageSize}&sort=${data.sort}`
                            })
                                   
                           }
                           export function deleteUser(data) {
                            console.log(data)
                            return service.request({
                                method: "get",
                                url: `/audit/delUser/${data.userId}`
                            })        
                           }
                           export function searchUser(data) {
                            console.log(data)
                            return service.request({
                                method: "get",
                                url: `/audit/searchUser/${data.nname}?pageNum=${data.pageNum}&pageSize=${data.pageSize}`
                            })        
                           }
                           export function getMsg(data) {
                            console.log(data)
                            return service.request({
                                method: "get",
                                url: `/msg/getMsg/${data.fromId}/${data.toId}`
                            })        
                           }
                           export function sendMsg(data) {
                            console.log(data)
                            return service.request({
                                method: "post",
                                url: `/msg/sendMsgByUser/{toId}/{fromId}`,
                                data
                            })        
                           }
                           export function sendNotice(data) {
                            console.log(data)
                            return service.request({
                                method: "post",
                                url: `/msg/sendSysMsg/{toId}`,
                                data
                            })        
                           }
                           export function getNotice(data) {
                            console.log(data)
                            return service.request({
                                method: "get",
                                url: `/msg/getSysMsg/${data.id}`
                            })        
                           }
                    
        