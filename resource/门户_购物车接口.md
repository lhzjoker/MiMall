#### 1.购物车List列表

** GET /carts

> request

```
无参数,需要登录状态
```

> response

success

```

{
    "status": 0,
    "data": {
        "cartProductVoList": [
            {
                "id": 1,
                "userId": 13,
                "productId": 1,
                "quantity": 1,
                "productName": "iphone7",
                "productSubtitle": "双十一促销",
                "productMainImage": "mainimage.jpg",
                "productPrice": 7199.22,
                "productStatus": 1,
                "productTotalPrice": 7199.22,
                "productStock": 86,
                "productSelected": true,
            },
            {
                "id": 2,
                "userId": 13,
                "productId": 2,
                "quantity": 1,
                "productName": "oppo R8",
                "productSubtitle": "oppo促销进行中",
                "productMainImage": "mainimage.jpg",
                "productPrice": 2999.11,
                "productStatus": 1,
                "productTotalPrice": 2999.11,
                "productStock": 86,
                "productSelected": false,
            }
        ],
        "selectedAll": false,
        "cartTotalPrice": 10198.33
    }
}

```

fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
```


------


#### 2.购物车添加商品

** POST /carts

> request

```
productId
selected: true
```

`注意`数量不用传，添加商品永远是以1累加

> response

success

```
{
    "status": 0,
    "data": {
        "cartProductVoList": [
            {
                "id": 1,
                "userId": 13,
                "productId": 1,
                "quantity": 12,
                "productName": "iphone7",
                "productSubtitle": "双十一促销",
                "productMainImage": "mainimage.jpg",
                "productPrice": 7199.22,
                "productStatus": 1,
                "productTotalPrice": 86390.64,
                "productStock": 86,
                "productSelected": true
            },
            {
                "id": 2,
                "userId": 13,
                "productId": 2,
                "quantity": 1,
                "productName": "oppo R8",
                "productSubtitle": "oppo促销进行中",
                "productMainImage": "mainimage.jpg",
                "productPrice": 2999.11,
                "productStatus": 1,
                "productTotalPrice": 2999.11,
                "productStock": 86,
                "productSelected": true
            }
        ],
        "selectedAll": true,
        "cartTotalPrice": 89389.75
    }
}
```

fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
```


------





#### 3.更新购物车某个产品数量

** PUT /carts/{productId}

> request

```
quantity
selected: true
```

> response

响应同2

success

```
{
    "status": 0,
    "data": {
        "cartProductVoList": [
            {
                "id": 1,
                "userId": 13,
                "productId": 1,
                "quantity": 12,
                "productName": "iphone7",
                "productSubtitle": "双十一促销",
                "productMainImage": "mainimage.jpg",
                "productPrice": 7199.22,
                "productStatus": 1,
                "productTotalPrice": 86390.64,
                "productStock": 86,
                "productSelected": true
            },
            {
                "id": 2,
                "userId": 13,
                "productId": 2,
                "quantity": 1,
                "productName": "oppo R8",
                "productSubtitle": "oppo促销进行中",
                "productMainImage": "mainimage.jpg",
                "productPrice": 2999.11,
                "productStatus": 1,
                "productTotalPrice": 2999.11,
                "productStock": 86,
                "productSelected": true,
            }
        ],
        "selectedAll": true,
        "cartTotalPrice": 89389.75
    }
}
```

fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
```


------



#### 4.移除购物车某个产品

** DELETE /carts/{productId}

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
        "cartProductVoList": [
            {
                "id": 2,
                "userId": 13,
                "productId": 2,
                "quantity": 1,
                "productName": "oppo R8",
                "productSubtitle": "oppo促销进行中",
                "productMainImage": "mainimage.jpg",
                "productPrice": 2999.11,
                "productStatus": 1,
                "productTotalPrice": 2999.11,
                "productStock": 86,
                "productSelected": true
            }
        ],
        "selectedAll": true,
        "cartTotalPrice": 2999.11
    }
}
```

fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
```


------

#### 5.全选中

** PUT /carts/selectAll

> request

```
无参数,需要登录状态
```

> response

success

同接口 获取购物车列表

------

#### 6.全不选中

** PUT /carts/unSelectAll

> request

```
无参数,需要登录状态
```

> response

success

同接口 获取购物车列表

------

#### 7.获取购物中所有商品数量总和

** GET /carts/products/sum

> request

```
无参数,需要登录状态
```

> response

```
{
    "status": 0,
    "data": 2
}
```