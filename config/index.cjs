/* eslint 禁用 */

/**
* 本项目配置为方便新人使用，已缩减至最简配置。
* 如若想使用更多功能，请查考文档中的【3. 配置参数说明】
* 自行添加属性，以支持更多个性化功能
*/
常量 USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID：'wx6f137bf4de067f10'，

  // 使用微信测试号：公众号APP_SECRET
  应用程序秘密：'3a4c87a13a139bff5f6139d5f1a3a607'，

  省份: '河北' ,
  CITY : '保定' ,

  用户：[
    {
      // 想要发送的人的名字
      name : '刘嘉琪' ,
      // 使用微信测试号：扫码关注您的微信测试号后生成的一段字符串，在测试号后台可以看到
      id：'3a4c87a13a139bff5f6139d5f1a3a607'，
      // 使用微信测试号：你想给他发送的模板消息的模板ID
      useTemplateId : 'DaRw9PmiHpCKYrQMG0KY3jVMLCRKyXqKUgHKDz4argg' ,
      // 新历生日,仅开始获取星座势运,格式必须为MM-DD
      星座日期: '03-26' ,
      节日：[
        // 注意：此条配置日期为阴历日期，因为`type`中“生日”之前有*符号
        {
          输入：'*生日'，姓名：'宝贝'，年份：'1996'，日期：'09-09'，
        } ,
        // 注意：此条配置日期为阳历日期，因为`type`中“生日”之前没有*符号
        {
          type : '生日' ,姓名: '李四' ,年份: '1996' ,日期: '09-31' ,
        } ,
        {
          类型：'节日'，名称：'相识纪念日'，年份：'2020'，日期：'09-03'，
        } ,
      ] ,
      // 我们在一起已经有xxxx天了的配置
      定制日期列表：[
        // 在一起的日子
        { 关键字：'love_day'，日期：'2023-07-26'  } ,
        // 结婚纪念日
        { 关键字：'marry_day'，日期：'2023-07-10'  }，
      ] ,
    } ,
  ] ,


  // 【积极完成提醒】id，使用查看自己有没有成功的那个模板
  CALLBACK_TEMPLATE_ID : 'DaRw9PmiHpCKYrQMG0KY3jVmLRKyXqKUgHKDz4argg' ,

  CALLBACK_用户：[
    {
      name : '秦雨馨' ,
      // 使用微信测试号：自己的微信id，扫码您的微信测试号后生成关注的一段字符串，在测试号后台可以看到
      id : 'oOiGc6M5BuL5pQiNk3GEbFOBxhC8' ,
    }
  ] ,

}

模块。导出= USER_CONFIG
