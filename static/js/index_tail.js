$("#copy_shortlink").click(function(){
    var shorten_data = data_shorten()
    errcode = shorten_data.errcode
    if(errcode!=0){
        layer.msg(shorten_data.errmsg);
        return
    }
    var new_create = {}
    new_create.long_url = shorten_data.data.long_url
    new_create.hash = shorten_data.data.hash
    new_create.url = shorten_data.data.url
    var copy_shortlink_history = localStorage.getItem("copy_shortlink_history");
    if(!copy_shortlink_history){
        copy_shortlink_history = '{"data":[]}'
    }
    copy_shortlink_history = JSON.parse(copy_shortlink_history)
    var splice_0 = copy_shortlink_history[0]
    var splice_1 = copy_shortlink_history[1]
    var splice_2 = copy_shortlink_history[2]
    copy_shortlink_history.data.splice(0,0,new_create);
    copy_shortlink_history.data = copy_shortlink_history.data.slice(0,3)
    var history_string = JSON.stringify(copy_shortlink_history)
    localStorage.setItem("copy_shortlink_history", history_string);
    // # TODO vue add 下拉框
});