------

####1.统计用户、商品、订单数量


**/manage/statistic/base_count.do**

> request

```
无

```

> response

success

```

{
    "status": 0,
    "data": {
        userCount: 123,
        productCount: 456,
        orderCount: 789
    }
}

```


fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
或

{
    "status": 1,
    "msg": "出错啦"
}
```
