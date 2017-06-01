/*判断变量是否为空*/
function isNull(obj)
{
	return (obj == '' || typeof(obj) == 'undefined' || obj == null) ? true: false
}

/*http请求*/
function https(ul,param,tp)
{
	if(isNull(tp))
	{
		tp == 'GET';
	}
	var ret = null;
		$.ajax({
        type: tp,
        url: ul,
        data: param,
		async: false,
        success: function(data,status){
			ret = data;
        }
        });
	 return ret;
}

/* 获取模板 */
function tplLoad(file){
 return	https('/tpl/'+ file +'.html');
}

/*== 视图渲染 ==*/
/// <summary>
/// 视图渲染
/// </summary>
/// <param name="tag">渲染位置</param>
/// <param name="file">模板文件</param>
/// <param name="vm">视图模型</param>
/// <param name="funs">触发函数集合</param>
/// <param name="frs">过滤集合</param>
/// <returns>返回Vue实体</returns>
function view(tag,file,vm,funs,frs){
    var viewModel = new Vue({
		 el: tag,
		 template:tplLoad(file),
		 data: vm,
		 methods:funs,
	     filters:frs
		});
	return viewModel;
}