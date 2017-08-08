function form1_onsubmit(url){
    var result = false
    if(url.indexOf('.')>0){
        result = true
    }
    if(url.indexOf(' ')>-1){
        result = false
    }
    if(result==false){
        layer.msg("请输入有效网址");
    }
    return result
}
function data_shorten() {
    var long_url = document.getElementById('shorten_url').value
    right_url = form1_onsubmit(long_url)
    if(!right_url){
        return
    }
    host_url = '/data/shorten'
    var shorten_data = {}
    shorten_data.errcode = 5001
    shorten_data.errmsg = "创建失败"
    $.ajax({
        url: host_url,
        type: 'GET',
        dataType: "json",
        data:{
            'long_url': long_url
        },
        success: function (data) {
            if(data.errcode!=0){
                if(data.errmsg==undefined){
                    shorten_data.errmsg = data.errmsg
                }
                return shorten_data
            }
            shorten_data.errcode = data.errcode
            shorten_data.errmsg = ''
            shorten_data.data = data.data
        },
        error: function (data) {
            layer.msg('创建失败');
        },
        async:false
    });
    return shorten_data
}