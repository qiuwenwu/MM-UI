function submitMsg(file, fun, eventS, tagId) {
    if (tagId == null)
    {
        tagId = '#form'
    }
    formJsonStr = $(tagId).serializeJson();
    var json = {
        Content: JSON.stringify(formJsonStr),
        File: file,
        Fun: fun
    }
    $.ajax({
        type: 'POST',
        dataType: 'html',
        url: '/App/Use',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(json),
        success: function (result) {
            $('#result').html(result);
            eventS(result);
        },
        error: function (data) {
            $('#result').html('Error');
            eventS(null);
        }
    });
}

function sendSql() {
    var json = {
        apikey: $('#apikey').val(),
        token: $('#token').val(),
        sql: $('#sql').val()
    }
    getHtml('/Api/Sql', null, JSON.stringify(json), 'POST', null, '#result');
}

function sendScriptCode() {
    var json = {
        apikey: $('#apikey').val(),
        token: $('#token').val(),
        language: $('#language').val(),
        code: $('#code').val()
    }
    getHtml('/Api/Script', null, JSON.stringify(json), 'POST', null, '#result');
}

function sendApps() {
    var json = {
        apikey: $('#apikey').val(),
        token: $('#token').val(),
        type: $('#type').val(),
        file: $('#file').val(),
        param: $('#param').val(),
        paramB: $('#paramB').val()
    }
    getHtml('/Api/Apps', null, JSON.stringify(json), 'POST', null, '#result');
}


function sendCmd()
{
    var json = {
        apikey: $('#apikey').val(),
        token: $('#token').val(),
        username: $('#username').val(),
        msg: $('#msg').val()
    }
    getHtml('/Api/Cmd', null, JSON.stringify(json), 'POST', null, '#result');
}

function sendHttp()
{
    getHtml($('#url').val(), $('#param').val(), $('#postData').val(), $('#mothed').val(), $('#contentType').val(), '#result');
}

function getHtml(urls, params, datas, motheds, contentTypes, htmldoc) {
    if (contentTypes == null)
    {
        if (datas != null && datas != '')
        {
            contentTypes = 'application/json';
        }
        else
        {
            contentTypes = 'text/xml';
        }
    }
    if (motheds == null)
    {
        motheds = 'GET';
    }
    var AjaxURL = urls;
    if (params != null && params != '') {
        AjaxURL = AjaxURL + '?' + params;
    }
    $.ajax({
        type: motheds,
        dataType: 'html',
        url: AjaxURL,
        contentType: contentTypes + ' ;charset=utf-8',
        data: datas,
        success: function (result)
        {
            var strresult = result;
            if (htmldoc != null && htmldoc != '')
            {
                $(htmldoc).html(strresult);
            }
        },
        error: function (data) {
            alert('error:' + data.responseText);
        }
    });
}

(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };
})(jQuery);

(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };
})(jQuery); 
