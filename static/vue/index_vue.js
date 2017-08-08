function init_shortened_info() {
    var copy_shortlink_history = localStorage.getItem("copy_shortlink_history")
    if(!copy_shortlink_history){
        copy_shortlink_history = '{"data":[]}'
    }
    var hashs = Array()
    copy_shortlink_history = jQuery.parseJSON(copy_shortlink_history)
    for(var i=0;i<copy_shortlink_history.data.length;i++){
        var data = copy_shortlink_history.data[i]
        hashs.push(data.hash)
    }
    var clicks_infos = {}
    var clicks = data_clicks(hashs)
    if(clicks){
        for(var i=0;i<clicks.length;i++){
            var click = clicks[i]
            clicks_infos[click.hash] = click.clicks
        }
    }
    for(var i=0;i<copy_shortlink_history.data.length;i++){
        var data = copy_shortlink_history.data[i]
        if(clicks_infos[data.hash]!=undefined){
            data.clicks = clicks_infos[data.hash]
        }
    }
    return copy_shortlink_history.data
}
