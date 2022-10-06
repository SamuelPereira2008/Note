$('.btn-add').click(function(){
    var randowID = Math.floor(Math.random() * 4 + 0);
    var el = '<div class="anotacao-single"><textarea placeholder="Sua anotação..." id="'+randowID+'"></textarea></div>'
    $('.container-anotacao').append(el);
    $("#1").css('background-color','rgba(181, 43, 43, 0.5)');
    $("#2").css('background-color','#ffe499');
    $("#3").css('background-color','#bd34eb');
    $("#4").css('background-color','#383838');
    $("#0").css('background-color','#2b7fed');
})
