// 作者Linmo，只发布在minebbs
// ver 1.1
var path = "plugins/information/infomation.json";
var infomation = {};
// 创建文件
var file = data.openConfig(path, 'json', "{}");

mc.listen("onJoin", function(pl){
    infomation.uuid = pl.uuid;
    infomation.ip = pl.getDevice().ip;
    infomation.os = pl.getDevice().os;
    infomation.time = system.getTimeStr();

    file.set(pl.name, infomation);
})