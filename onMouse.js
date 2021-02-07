
    $(window).mousemove(function(e){
       mouseX = e.pageX
       mouseY = e.pageY

    var follower = $("#flying");
    var offset = $('#flying').offset()
    var xp = offset.left
    var yp = offset.top
    var loop = setInterval(function(){
    xp += (mouseX - xp - 100) / 40;
    yp += (mouseY - yp - 60) / 40;
    follower.css({left:xp, top:yp});
 }, 10);
    })