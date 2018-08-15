'use strict';

var numberofitems = $('#loop .list-sec').length;
var limitperpage = 4;
$("#loop .list-sec:gt(" + (limitperpage - 1) + ")").hide();
var totalpages = Math.ceil(numberofitems / limitperpage);
$('.paginate').append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>");

for(var i = 2;i<=totalpages;i++){
    $(".paginate").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>");
}

$('.paginate').append("<li id='next-page'><a href='#'>Next <i class='fa fa-long-arrow-right margin-5px-left xs-display-none'></i></a></li>");

$(".paginate li.current-page").on("click" , function(){
    if($(this).hasClass("active")){
        return false;
    }
    else{
        var currentpage = $(this).index();
        $(".paginate li").removeClass("active");
        $(this).addClass("active");
        $("#loop .list-sec").hide();
        var grandTotal = limitperpage * currentpage;
        for(var i = grandTotal - limitperpage;i < grandTotal;i++){
            $("#loop .list-sec:eq(" + i + ")").show();
        }
    }

});

$("#next-page").on("click" , function(){
    var currentpage = $(".paginate li.active").index();
    if(currentpage === totalpages ){
        return false;
    }
    else{
        currentpage++;
        $(".paginate li").removeClass("active");
        $("#loop .list-sec").hide();

        var grandTotal = limitperpage * currentpage;
        for(var i = grandTotal-limitperpage;i<grandTotal;i++){
            $("#loop .list-sec:eq(" + i + ")").show();
        }
        $(".paginate li.current-page:eq(" + (currentpage - 1) + ")").addClass("active");
    }
});

$("#previous-page").on("click" , function(){
    var currentpage = $(".paginate li.active").index();
    if(currentpage === 1){
        return false;
    }
    else{
        currentpage--;
        $(".paginate li").removeClass("active");
        $("#loop .list-sec").hide();

        var grandTotal = limitperpage * currentpage;
        for(var i = grandTotal-limitperpage;i<grandTotal;i++){
            $("#loop .list-sec:eq(" + i + ")").show();
        }
        $(".paginate li.current-page:eq(" + (currentpage - 1) + ")").addClass("active");
    }
});