[MENU]



------

#### 1.支付

**POST /pay


> request

```
orderId
orderName //扫码支付时订单名称
amount //单位元
payType //1支付宝，2微信
```

> response

success

```
{
    "status": 0,
    "data": {
        "content": "http://"
    }
}
```

微信支付：content内容是支付链接，转换为二维码即可扫码支付

支付宝支付：content是html源码，渲染到页面上后自动跳转到支付页面

fail
```
{
    "status": 1,
    "msg": "支付宝生成订单失败"
}
```

------