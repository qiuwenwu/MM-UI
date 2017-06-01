function SendCode()
{
    _username = $('#username').val();
    _email = $('#email').val();
    if (_username == "" || _email == "")
    {
        message = "用户名和邮箱不能为空!";
        $('#result').html(message);
        return;
    }
    var json = {
        username: _username,
        email: _email
    }
    $.ajax({
        type: 'Post',
        dataType: 'html',
        url: '/Account/SendCode',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (result) {
            var strresult = result;
            switch (Number(strresult))
            {
                case 1:
                    message = "已将验证新码发送至您的邮箱,请留意查收!";
                    $('#result').html(message);
                    break;
                case 0:
                    $('#result').html("连接数据库服务器失败...");
                    break;
                case -1:
                    $('#result').html("用户不存在...");
                    break;
                case -2:
                    $('#result').html("绑定的邮箱不正确...");
                    break;
                case -3:
                    $('#result').html("发送验证信息时发生意想不到的错误...");
                    break;
                case -4:
                    $('#result').html("用户名不符合规范...");
                    break;
                case -5:
                    $('#result').html("邮箱不符合规范...");
                    break;
            }
        },
        error: function (data) {
            alert('error:' + data.responseText);
        }
    });
}