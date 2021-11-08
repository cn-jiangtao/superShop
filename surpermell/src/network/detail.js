import {request} from './request'

export function getDetail(iid){
    return request({
        url:"/detail",
        params:{
            iid
        }
    });
}
export function getRecommend(){
    return request({
        url:"/recommend",
      
    });
}



// 创建一个类，使用构造函数对数据进行整合
// 商品详情信息
export class Goods {
    constructor(itemInfo, columns, services) {
      this.iid = itemInfo.iid;
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.realPrice = itemInfo.lowNowPrice;
    }
  }
  // 商家店铺信息
export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods;
    }
  }
// 商品参数信息
export class Params {
    constructor(info, rule) {
      this.image = info.images ? info.images : "";
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }
