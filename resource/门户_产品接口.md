[MENU]


#### 1.产品搜索及动态排序List

**GET /products

> request

```
categoryId
keyword
pageNum(default=1)
pageSize(default=10)
orderBy(default="")：排序参数：例如price_desc，price_asc

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
                "id": 1,
                "categoryId": 3,
                "name": "iphone7",
                "subtitle": "双十一促销",
                "mainImage": "mainimage.jpg",
                "status":1,
                "price": 7199.22
            },
            {
                "id": 2,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "mainimage.jpg",
                "status":1,
                "price": 2999.11
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
    "msg": "参数错误"
}
```


------

#### 2.产品detail

**GET /products/{productId}

> request

```
productId
```

> response

success

```
{
  "status": 0,
  "data": {
    "id": 2,
    "categoryId": 2,
    "name": "oppo R8",
    "subtitle": "oppo促销进行中",
    "mainImage": "mainimage.jpg",
    "subImages": "[\"mmall/aa.jpg\",\"mmall/bb.jpg\",\"mmall/cc.jpg\",\"mmall/dd.jpg\",\"mmall/ee.jpg\"]",
    "detail": "richtext",
    "price": 2999.11,
    "stock": 71,
    "status": 1,
    "createTime": "2016-11-20 14:21:53",
    "updateTime": "2016-11-20 14:21:53"
  }
}

```

fail
```
{
    "status": 1,
    "msg": "该商品已下架或删除"
}
```