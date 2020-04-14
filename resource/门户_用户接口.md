[MENU]

#### 1.登录


**POST /user/login**

> request

```
username,password
```
> response

fail
```
{
    "status": 1,
    "msg": "密码错误"
}
```

success
```
{
    "status": 0,
    "data": {
        "id": 12,
        "username": "aaa",
        "email": "aaa@163.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
}
```


-------

#### 2.注册
**POST /user/register**

> request

```
username,password,email
```


> response

success
```
{
    "status": 0,
    "msg": "校验成功"
}
```


fail
```
{
    "status": 1,
    "msg": "用户已存在"
}
```


#### 4.获取登录用户信息
**/user**


> request

```
无参数
```
> response

success
```
{
    "status": 0,
    "data": {
        "id": 12,
        "username": "aaa",
        "email": "aaa@163.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
}
```

fail
```
{
    "status": 1,
    "msg": "用户未登录,无法获取当前用户信息"
}

```

------


####11.退出登录
**POST /user/logout

> request

```
无
```

> response

success

```
{
    "status": 0,
    "msg": "退出成功"
}
```

fail
```
{
    "status": 1,
    "msg": "服务端异常"
}
```