
    $(window).mousemove(function(e){
       mouseX = e.pageX
       mouseY = e.pageY

    var follower = $("#flying");
    var offset = $('#flying').offset()
    var xp = offset.left
    var yp = offset.top 
    var loop = setInterval(function(){
    xp += (mouseX - xp - 30) / 70;
    yp += (mouseY - yp - 30 ) / 70;

    follower.offset({left:xp, top:yp});
 }, 10);
    })