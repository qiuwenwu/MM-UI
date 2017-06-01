function isNull(obj)
{
	if (obj !== null || obj !== undefined || obj !== '')
	{
		return true;
	}
	else
	{
		return false;
	}
}

function httpS(ul,param,tp)
{
	if(isNull(tp))
	{
		tp == 'GET';
	}
	if(isNull(param))
	{
		param == '';
	}
	var ret ='';
		$.ajax({
        type: tp,
        url: ul,
        data: param,
		async: false,
        success: function(data,status){
			ret = data;
        },
        })

	 return ret;
}
function tplLoad(file){
 return	httpS('temp/'+ file +'.html');
}

function view(tag,html,data){
	new Vue({
		 el: tag,
		 template:tplLoad(html),
		 data: data
		});
	}