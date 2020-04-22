<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="top-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="top-user">
                    <a href="javascript:;">登陆</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <input class="input-search" />
                    <span class="icon-search"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav-header',
    }
</script>

<style lang="scss">
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container{
                width: 1226px;
                margin-left: auto;
                margin-right: auto;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                a{
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    text-align: center;
                    background-color: #FF6600;
                    color: #ffffff;
                    .icon-cart{
                        display: inline-block;
                        /*
                            背景图标一般用backgroud,no-repeat为不平铺
                            background-size: contain；使其宽高完全填充至内容区域
                        */
                        background: url('/imgs/icon-cart-checked.png') no-repeat center;
                        background-size: contain;
                        width: 16px;
                        height: 12px;
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                width: 1226px;
                margin-left: auto;
                margin-right: auto;
                height: 112px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content: ' ';   //给图片留白,一定要留白占位置
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/mi-logo.png') no-repeat center;
                            background-size: contain;
                            transition:margin .2s;
                        }
                        &:after{
                            content: ' ';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/mi-home.png') no-repeat center;
                            background-size: contain;
                        }
                        //鼠标移上去的时候切换图片，前面的图片向左移动55px
                        &:hover:before{
                            margin-left: -55px;
                            transition:margin .2s;  //过渡动画效果
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    // padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        line-height: 112px;
                        margin-right: 10px;
                        color: #333333;
                        font-size: 16px;
                        font-weight: bold;  //加粗字体
                        span{
                            cursor: pointer;    //鼠标放上去就会出现一个小手
                        }
                        &:hover{

                        }
                    }
                }
            }
        }
    }
</style>