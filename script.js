//Declare a variable named count and assign it a value of one.
var count = 1;
var levelBackdrop = ["https://backgrounddownload.com/wp-content/uploads/2018/09/sonic-background.png","http://www.slateman.net/images/gaming/backgrounds/sf2ww-blanka.gif"];
//Pre-game Set-up
$('h1').show();
$("#level").text("Level: " + count + "");
$('.characterSection').hide();
$('#start').click(function() {
    $('#start').fadeOut();
    $('p').show();
    $('.characterSection').show();
    $('h1').text("Choose Your Character");
});
//Character Selection

function characterSelect(img) {
    $('#game').show();
    $("#character1").attr("src", img);
    $('#level').show();
}

function hideSelection (){
    $('.characterSection').hide();
    $('h1').hide();
}

function showDesc(desc){
    $("#description").text(desc);    
}
function hideDesc(){
    $("#description").text("");    
}

$("#characterA").click(function() {
    characterSelect("https://img.fireden.net/v/image/1447/70/1447700446903.gif");
    hideSelection ();
});
$("#characterA").mouseenter(function() {
    showDesc("Jotaro 'Jojo' Kujo");
});
$("#characterA").mouseleave(function() {
    hideDesc();
});

$("#characterb").click(function() {
    characterSelect("https://i.imgur.com/pnpvlTQ.gif");
    hideSelection ();
});
$("#characterb").mouseenter(function() {
    showDesc("Karate black belt boi (will be replaced by ken)");
});
$("#characterb").mouseleave(function() {
    hideDesc();
});

$("#characterc").click(function() {
    characterSelect("http://vignette1.wikia.nocookie.net/streetfighter/images/a/ad/Feilong_walkforward.gif/revision/latest?cb=20100411215853");
    hideSelection ();
});
$("#characterc").mouseenter(function() {
    showDesc("Bruce Swollo");
});
$("#characterc").mouseleave(function() {
    hideDesc();
});

$("#characterd").click(function() {
    characterSelect("https://media.giphy.com/media/ViNsC3xYHMnauAaYPe/giphy.gif");
    hideSelection ();
});
$("#characterd").mouseenter(function() {
    showDesc("Some fighter girl");
});
$("#characterd").mouseleave(function() {
    hideDesc();
});

//Check Collison Function

function checkCollision() {
    var characterLeft = $("#character1").offset().left;
    var characterRight = characterLeft + $("#character1").width();
    var portalLeft = $("#character2").offset().left;
    var portalRight = portalLeft + $("#character2").width();
    if (characterRight >= portalLeft) {
        $("#character1").css("left","0");
        count = count + 1;
        $("#level").text("Level: " + count + "");
    }else {
        return;
    }
}
//Character 1 Movement

$("body").keydown(function(event) {
    //moves left
    if (event.key === "ArrowLeft") {
        $("#character1").css("left", $("#character1").offset().left - 6.5);
        //moves right
    } else if (event.key === "ArrowRight") {
        $("#character1").css("left", $("#character1").offset().left + 10);
    } else if (event.key === "ArrowDown"){
    }else {
        return;
    }
    levelProgress();
    checkCollision();
});
$("body").keyup(function(event){
    if(event.key === "ArrowDown"){
        
}
        
});
//Next Level if Needed
function levelProgress(){
    if (count === 2) {
        $("#game").css("background","url('" +levelBackdrop[0]+"')");
        $("#character2").attr("src","https://media0.giphy.com/media/V6N1zd3UtkQEg/source.gif");
    } else if (count=== 3) {
        $("#game").css("background","url('" +levelBackdrop[1]+"')");
    }      
}
//Ken attack
function kenAttack() {
    $("#character1").attr("src","http://wiki.shoryuken.com/images/a/ad/%28kenhdkex%29.gif");
    $("#character1").offset({top:75,left:675});
    $("#character1").css("width","170px");
    $("#character1").css("height","170px");
    
}
