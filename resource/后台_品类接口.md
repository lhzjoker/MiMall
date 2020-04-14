[MENU]

------

####1.获取品类子节点(平级)

http://localhost:8080/manage/category/get_category.do
http://localhost:8080/manage/category/get_category.do?categoryId=0


http://localhost:8080/manage/category/get_category.do?categoryId=2

**/manage/category/get_category.do**

> request

```
categoryId(default=0)

```

> response

success

```

{
    "status": 0,
    "data": [
        {
            "id": 2,
            "parentId": 1,
            "name": "手机",
            "status": true,
            "sortOrder": 3,
            "createTime": 1479622913000,
            "updateTime": 1479622913000
        },
        {
            "id": 4,
            "parentId": 1,
            "name": "移动座机",
            "status": true,
            "sortOrder": 5,
            "createTime": 1480059936000,
            "updateTime": 1480491941000
        }
    ]
}

```


http://localhost:8080/manage/category/get_category.do?categoryId=19


fail
```
{
    "status": 10,
    "msg": "用户未登录,请登录"
}
或

{
    "status": 1,
    "msg": "未找到该品类"
}
```

------

####2.增加节点

**/manage/category/add_category.do**

> request

```
parentId(default=0)
categoryName
```

> response

success

```
{
    "status": 0,
    "msg": "添加品类成功"
}
```

fail
```
{
    "status":1,
    "msg": "添加品类失败"
}
```

------

####3.修改品类名字

http://localhost:8080/manage/category/set_category_name.do?categoryId=999&categoryName=%E5%98%BB%E5%98%BB
http://localhost:8080/manage/category/set_category_name.do?categoryId=1&categoryName=%E5%98%BB%E5%98%BB


**/manage/category/set_category_name.do**

> request

```
categoryId
categoryName
```

> response

success

```
{
    "status": 0,
    "msg": "更新品类名字成功"
}
```

fail
```
{
    "status": 1,
    "msg": "更新品类名字失败"
}
```

------


####4.获取当前分类id及递归子节点categoryId

http://localhost:8080/manage/category/get_deep_category.do?categoryId=100001


**/manage/category/get_deep_category.do**

> request

```
categoryId
```

> response

success

```
{
    "status": 0,
    "data": [
        100009,
        100010,
        100001,
        100006,
        100007,
        100008
    ]
}
```

fail
```
{
    "status": 1,
    "msg": "无权限"
}
```

------