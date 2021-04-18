$(function () {
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    $('#link_login').on('click', function () {
        $('.reg-box').hide();
        $('.login-box').show();
    })
});


// 从layui中获取form对象
var form = layui.form

var layer = layui.layer

// 通过form.verify()函数自定义校验规则
form.verify({
    //自定义了一个叫做pwd校验规则
    'pwd': [
        /^[\S]{6,12}$/
        , '密码必须6到12位，且不能出现空格'
    ],
    'repwd': function (value) {
        //通过形参拿到的是确认密码框中的内容
        //还需要拿到密码框中的内容
        //然后进行一次等于的判断
        //如果判断失败，则return一个提示消息即可
        var pwd = $('.reg-box [name=password]').val()
        console.log(pwd);
        console.log(value);

        if (pwd !== value) {
            return '两次密码不一致！'
        }
    }
})