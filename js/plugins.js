$('.container').css("width","600")
$("h3").hide()
$("p").hide()
$("ul").hide()
$("a").hide()
$(".image").hide()

$('.row1').css("height","300px")
$('.row2').css("height","370px")
$('.row3').css("height","520px")
$('.row4').css("height","350px")
$('.row5').css("height","230px")
$('.row6').css("height","150px")
$('.row7').css("height","100px")
$('h3',).css("color","#FFF")
$('h2',).css("color","#FFF")
$('footer',).css("color","#FFF")
$("a").css("color","#FFF")
$("button").hide()
$(".b0").show()
$(".b0").click(function(){
$(this).hide()
$("h3").show(1000)
$("p").show(1000)
$("ul").show(1000)
$("a").show(1000)
$(".image").show(800)
})
$(".b0").hover(
    (function(){
        $(".b0").addClass("button-hover")
    }),
    (function(){
        $(".b0").removeClass("button-hover")
    })
)