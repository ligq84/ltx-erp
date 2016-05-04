新增 推荐客源 renren/recommends/customers
方法 post
字段 {
  company //企业
  contact //联系人
  tel    //手机
  demandTime //需求日期
  area    //面积
  price   //加个
  priceUnit ［day,month］//单位
  cityId //城市
  districtId //区域
  commId    //商圈
   rpRemark/
   rpId
}
返回 是否成功
查看 推荐客源详情
renren/recommends/customers/:id
方法 get
返回 如上


／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／／

新增 推荐房源源 renren/recommends/propertys
方法 post
字段 {
  cityId //城市
  districtId //区域
  commId    //商圈
  buildName
  blockName
  unitNum
  area    //面积
  price   //加个
  priceUnit ［day,month］//单位
  remark   //备注
  recommendPersonId //推荐人
}
返回 是否成功
查看 推荐客源详情
renren/recommends/propertys/:id
方法 get
返回 如上

/////////////////////////////////////////////////////////////////
