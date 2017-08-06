$("#copy_shortlink").click(function(){

    origin_url = 'baidu3.com'
    short_url = 'baidu3'
    hits = 1
    var new_create = '{}'
    new_create = JSON.parse(new_create)
    new_create.origin_url = origin_url
    new_create.short_url = short_url
    new_create.hits = hits

//    localStorage.setItem("copy_shortlink_history", "Gates");
    var copy_shortlink_history = localStorage.getItem("copy_shortlink_history");
    console.log('copy_shortlink_history')
    console.log(copy_shortlink_history)
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
//
//    copy_shortlink_history.push()
//
//
//    copy_shortlink_history.data.reverse()

    localStorage.setItem("copy_shortlink_history", history_string);




});