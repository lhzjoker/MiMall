[MENU]


#### 1.添加地址

** POST /shippings


> request

```
receiverName=geely
receiverPhone=010
receiverMobile=18688888888
receiverProvince=北京
receiverCity=北京市
receiverDistrict=海淀区
receiverAddress=中关村
receiverZip=100000
```

> response

success

```
{
    "status": 0,
    "msg": "新建地址成功",
    "data": {
        "shippingId": 28
    }
}
```

fail
```
{
    "status": 1,
    "msg": "新建地址失败"
}
```


------


#### 2.删除地址

**DELETE /shippings/{shippingId}

DELETE /shippings/28

> request

```
shippingId
```

> response

success

```
{
    "status": 0,
    "msg": "删除地址成功"
}
```

fail
```
{
    "status": 1,
    "msg": "删除地址失败"
}
```


------


#### 3.登录状态更新地址

**PUT /shippings/{shippingId}

> request

```
receiverName=geely
receiverPhone=010
receiverMobile=18688888888
receiverProvince=北京
receiverCity=北京市
receiverDistrict=海淀区
receiverAddress=中关村
receiverZip=100000
```

> response

success

```
{
    "status": 0,
    "msg": "更新地址成功"
}
```

fail
```
{
    "status": 1,
    "msg": "更新地址失败"
}
```


------


#### 4.选中查看具体的地址

**GET /shippings/{shippingId}**

> request

```
shippingId
```

> response

success

```
{
    "status": 0,
    "data": {
        "id": 4,
        "userId": 13,
        "receiverName": "geely",
        "receiverPhone": "010",
        "receiverMobile": "18688888888",
        "receiverProvince": "北京",
        "receiverCity": "北京市",
        "receiverDistrict": "海淀区",
        "receiverAddress": "中关村",
        "receiverZip": "100000",
        "createTime": 1485066385000,
        "updateTime": 1485066385000
    }
}
```

fail
```
{
    "status": 1,
    "msg": "请登录之后查询"
}
```


------


####5.地址列表

**GET /shippings**

> request

```
pageNum(默认1),pageSize(默认10)
```

> response

success

```
{
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 4,
                "userId": 13,
                "receiverName": "geely",
                "receiverPhone": "010",
                "receiverMobile": "18688888888",
                "receiverProvince": "北京",
                "receiverCity": "北京市",
                "receiverDistrict": "海淀区",
                "receiverAddress": "中关村",
                "receiverZip": "100000",
                "createTime": 1485066385000,
                "updateTime": 1485066385000
            },
            {
                "id": 5,
                "userId": 13,
                "receiverName": "AAA",
                "receiverPhone": "010",
                "receiverMobile": "18688888888",
                "receiverProvince": "北京",
                "receiverCity": "北京市",
                "receiverDistrict": "海淀区",
                "receiverAddress": "中关村",
                "receiverZip": "100000",
                "createTime": 1485066392000,
                "updateTime": 1485075875000
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
}
```

fail
```
{
    "status": 1,
    "msg": "请登录之后查询"
}
```