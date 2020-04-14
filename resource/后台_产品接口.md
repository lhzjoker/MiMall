[MENU]

------

####1.产品list

http://localhost:8080/manage/product/list.do

**/manage/product/list.do**

> request

```
pageNum(default=1)
pageSize(default=10)

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
    "status": 10,
    "msg": "用户未登录,请登录"
}

```

------

####2.产品搜索

http://localhost:8080/manage/product/search.do?productName=p

http://localhost:8080/manage/product/search.do?productId=1



**/manage/product/search.do**

> request

```
productName
productId
pageNum(default=1)
pageSize(default=10)


```

> response

success

```
{
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 1,
        "orderBy": null,
        "startRow": 1,
        "endRow": 1,
        "total": 1,
        "pages": 1,
        "list": [
            {
                "id": 1,
                "categoryId": 3,
                "name": "iphone7",
                "subtitle": "双十一促销",
                "mainImage": "mainimage.jpg",
                "price": 7199.22
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
    "status": 10,
    "msg": "用户未登录,请登录"
}

```

------

####3.图片上传

**/manage/product/upload.do**

> request

```

<form name="form2" action="/manage/product/upload.do" method="post"  enctype="multipart/form-data">
    <input type="file" name="upload_file">
    <input type="submit" value="upload"/>
</form>

```

> response

success

```
{
    "status": 0,
    "data": {
        "uri": "e6604558-c0ff-41b9-b6e1-30787a1e3412.jpg",
        "url": "http://img.happymmall.com/e6604558-c0ff-41b9-b6e1-30787a1e3412.jpg"
    }
}

```

fail
```
status!=0的时候
```

------

####4.产品详情

http://localhost:8080/manage/product/detail.do?productId=2

**/manage/product/detail.do**

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
        "parentCategoryId":1,
        "name": "oppo R8",
        "subtitle": "oppo促销进行中",
        "imageHost": "http://img.happymmall.com/",
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
    "msg": "没有权限"
}
```

------

####5.产品上下架

http://localhost:8080/manage/product/set_sale_status.do?productId=1&status=1

**/manage/product/set_sale_status.do**

> request

```
productId
status
```

> response

success

```
{
    "status": 0,
    "data": "修改产品状态成功"
}
```

fail
```
{
    "status": 1,
    "data": "修改产品状态失败"
}
```

------

####6.新增OR更新产品

新增

新增
http://localhost:8080/manage/product/save.do?categoryId=1&name=三星洗衣机&subtitle=三星大促销&subImages=test.jpg,11.jpg,2.jpg,3.jpg&detail=detailtext&price=1000&stock=100&status=1


更新
http://localhost:8080/manage/product/save.do?categoryId=1&name=三星洗衣机&subtitle=三星大促销&subImages=test.jpg&detail=detailtext&price=1000&stock=100&status=1&id=3


**/manage/product/save.do**

> request

```
categoryId=1&name=三星洗衣机&subtitle=三星大促销&mainImage=sss.jpg&subImages=test.jpg&detail=detailtext&price=1000&stock=100&status=1&id=3
```

> response

success

```
{
    "status": 0,
    "data": "更新产品成功"
}

或


{
    "status": 0,
    "data": "新增产品成功"
}

```

fail
```
{
    "status": 1,
    "data": "更新产品失败"
}
```

------



####7.富文本上传图片


**/manage/product/richtext_img_upload.do**

> request

```
<form name="form2" action="/manage/product/upload.do" method="post"  enctype="multipart/form-data">
    <input type="file" name="upload_file">
    <input type="submit" value="upload"/>
</form>

```

> response

success

```
{
    "file_path": "http://img.happymmall.com/5fb239f2-0007-40c1-b8e6-0dc11b22779c.jpg",
    "msg": "上传成功",
    "success": true
}

```

fail
```
{
    "success": false,
    "msg": "error message",
    "file_path": "[real file path]"
}
```

------