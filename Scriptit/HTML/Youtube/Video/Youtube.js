var channelID = "CHANNELID"; //www.youtube.com/channel/ jälkeinen asia lisätään tuohon. 
        $.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D' + channelID, function (data) {

var link = data.items[0].link;
var id = link.substr(link.indexOf("=") + 1);
        $("#youtube_video").attr("src", "https://youtube.com/embed/" + id + "?controls=0&showinfo=0&rel=0");
