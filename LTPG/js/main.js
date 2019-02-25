
function loadTsumego(which, what) {
var puzzletodisplay = "puzzles/" + which + ".sgf";

var tsumego = new WGo.Tsumego(document.getElementById("tsumego_wrapper"), {
	sgfFile: puzzletodisplay,

});
  tsumego.setCoordinates(true);

document.getElementById("pzl1").className = "bttn";
document.getElementById("pzl2").className = "bttn";
document.getElementById(what).className = "bttn-selected";
document.getElementById("pzl3").className = "bttn";
document.getElementById(what).className = "bttn-selected";
document.getElementById("pzl4").className = "bttn";
document.getElementById(what).className = "bttn-selected";
}

function loadSgf(which, what) {
var puzzletodisplay = "puzzles/" + which + ".sgf";

var elem = document.getElementById("player");
var player = new WGo.BasicPlayer(elem, {
	  sgfFile: puzzletodisplay,
    formatMoves: true,
    layout: { // you can use static or dynamic layout
        top: ['CommentBox'], 
        bottom: ['Control']
    }
});

document.getElementById("pzl1").className = "bttn";
document.getElementById("pzl2").className = "bttn";
document.getElementById(what).className = "bttn-selected";
document.getElementById("pzl3").className = "bttn";
document.getElementById(what).className = "bttn-selected";
document.getElementById("pzl4").className = "bttn";
document.getElementById(what).className = "bttn-selected";
}

function myFunction(jdi) {
window.location.href = jdi;
}

function guess(gswht, late, right){
    var guess=+getCookie("guessed");
    
if ((0+guess) != "0") {
    document.getElementById(late).style.display = "block";

} else {    
    document.getElementById(gswht).style.display = "block";
                setCookie("guessed", right, "14");
}
        document.getElementById("btn1").style.display = "none";
            document.getElementById("btn2").style.display = "none";

}

function checkReward(){
    var first=+getCookie("1");
    var second=+getCookie("2");
    var third=+getCookie("3");
    var fourth=+getCookie("4");
    var fifth=+getCookie("5");

    if ((0+first+second+third+fourth+fifth) != "5") {
document.write("You cannot cheat at learning Go. You have to walk the same path as others. There are no shortcuts... <a href='index.html'>Go back</a>");
    }
}

function checkReward2(){
    var sixth=+getCookie("6");
    var seventh=+getCookie("7");
    var eight=+getCookie("8");
    var ninth=+getCookie("9");
    var tenth=+getCookie("10");
    var eleventh=+getCookie("11");

    if ((0+sixth+seventh+eight+ninth+tenth+eleventh) == "6") {
setCookie("under", 1, 14);
    }

    if ((0+sixth+seventh+eight+ninth+tenth+eleventh) != "6") {
document.write("You cannot cheat at learning Go. You have to walk the same path as others. There are no shortcuts... <a href='index.html'>Go back</a>");
    }
}


function checkPuzzle(){
    var correct=+getCookie("guessed");

    if ((correct) == "1") {
document.write("You even got my trick question correct! That is impressive.");
    }
}







 function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookies() {
    var first=+getCookie("1");
    var second=+getCookie("2");
    var third=+getCookie("3");
    var fourth=+getCookie("4");
    var fifth=+getCookie("5");
    
    var sixth=+getCookie("6");
    var seventh=+getCookie("7");
    var eight=+getCookie("8");
    var ninth=+getCookie("9");
    var tenth=+getCookie("10");
    var eleventh=+getCookie("11");
    var twelfth=+getCookie("12");
    
    var showunder=+getCookie("under");

    if ((0+first+second+third+fourth+fifth) == "0") {
    document.getElementById("progressbar").innerHTML = "Learn them <span class='black'>all</span> one by one ("+ (0+first+second+third+fourth+fifth) +"/5)";
    } else
    
    if ((0+first+second+third+fourth+fifth) == "1") {
    document.getElementById("progressbar").innerHTML = "Off to a <span class='black'>good</span> start ("+ (0+first+second+third+fourth+fifth) +"/5)";
    } else
    
    if ((0+first+second+third+fourth+fifth) == "2") {
    document.getElementById("progressbar").innerHTML = "Almost <span class='black'>halfway</span> there! ("+ (0+first+second+third+fourth+fifth) +"/5)";
    } else

    if ((0+first+second+third+fourth+fifth) == "3") {
    document.getElementById("progressbar").innerHTML = "Wow, you are doing <span class='black'>great</span>! ("+ (0+first+second+third+fourth+fifth) +"/5)";
    } else
    
    if ((0+first+second+third+fourth+fifth) == "4") {
    document.getElementById("progressbar").innerHTML = "Just <span class='black'>one last</span> thing to know! ("+ (0+first+second+third+fourth+fifth) +"/5)";
    } else    
    
    if ((0+first+second+third+fourth+fifth) == "5") {
    document.getElementById("progressbar").innerHTML = "You are now a <span class='black'>go player</span>! Click here for your reward! ("+ (0+first+second+third+fourth+fifth) +"/5)";
    document.getElementById("progressbar").style.background = "rgba(0,102,102,0.3)"
    }
    
    
     

    if (first != "") {
      document.getElementById("1").className = "button-green";
    }

    if (second != "") {
      document.getElementById("2").className = "button-green";
    }
    
    if (third != "") {
      document.getElementById("3").className = "button-green";
    }
    
    if (fourth != "") {
      document.getElementById("4").className = "button-green";
    }        
    
    if (fifth != "") {
      document.getElementById("5").className = "button-green";
    }  


    if ((0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) == "0") {
    document.getElementById("progressbar2").innerHTML = "Learn them <span class='black'>all</span> one by one ("+ (0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) +"/7)";
    } else
    
    if ((0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) == "1") {
    document.getElementById("progressbar2").innerHTML = "Off to the <span class='black'>advanced</span> topics already? Nice! ("+ (0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) +"/7)";
    } else
    
    if ((0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) == "2") {
    document.getElementById("progressbar2").innerHTML = "Check out the <span class='black'>snapback</span> it's cool! ("+ (0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) +"/7)";
    } else

    if ((0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) == "3") {
    document.getElementById("progressbar2").innerHTML = "Wooah We're <span class='black'>almost half way</span> there! ("+ (0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) +"/7)";
    } else
    
    if ((0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) == "4") {
    document.getElementById("progressbar2").innerHTML = "With this <span class='black'>pace</span> you may beat me one day! ("+ (0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) +"/7)";
    } else    
    
    if ((0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) == "5") {
    document.getElementById("progressbar2").innerHTML = "Just <span class='black'>two last</span> things to know! ("+ (0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) +"/7)";
    } else 

    if ((0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) == "6") {
    document.getElementById("progressbar2").innerHTML = "Just <span class='black'>one last</span> thing to know! ("+ (0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) +"/7)";
    } else

    if ((0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) == "7") {
    document.getElementById("progressbar2").innerHTML = "You are <span class='black'>persistant</span>! Click here for your reward! ("+ (0+sixth+seventh+eight+ninth+tenth+eleventh+twelfth) +"/7)";
    document.getElementById("progressbar2").style.background = "rgba(0,102,102,0.3)"
    }


    if (sixth != "") {
      document.getElementById("6").className = "button-green";
    }

    if (seventh != "") {
      document.getElementById("7").className = "button-green";
    }
    
    if (eight != "") {
      document.getElementById("8").className = "button-green";
    }
    
    if (ninth != "") {
      document.getElementById("9").className = "button-green";
    }        
    
    if (tenth != "") {
      document.getElementById("10").className = "button-green";
    }

    if (eleventh != "") {
      document.getElementById("11").className = "button-green";
    }

    if (twelfth != "") {
      document.getElementById("12").className = "button-green";
    }

    if (showunder != "") {
      document.getElementById("gold").style.display = "inline-block";
    }





}

function learn() {
    var first=+getCookie("1");
    var second=+getCookie("2");
    var third=+getCookie("3");
    var fourth=+getCookie("4");
    var fifth=+getCookie("5");


        if (first == "0") {
          window.location.href = "1.html";
        } else
        if (second == "0") {
          window.location.href = "2.html";
        } else
        if (third == "0") {
          window.location.href = "3.html";
        } else
        if (fourth == "0") {
          window.location.href = "4.html";
        } else
        if (fifth == "0") {
          window.location.href = "5.html";
        } else
          window.location.href = "reward.html";
}

function learn2() {
    var sixth=+getCookie("6");
    var seventh=+getCookie("7");
    var eight=+getCookie("8");
    var ninth=+getCookie("9");
    var tenth=+getCookie("10");
    var eleventh=+getCookie("11");
    var twelfth=+getCookie("12")

        if (sixth == "0") {
          window.location.href = "6.html";
        } else
        if (seventh == "0") {
          window.location.href = "7.html";
        } else
        if (eight == "0") {
          window.location.href = "8.html";
        } else
        if (ninth == "0") {
          window.location.href = "9.html";
        } else
        if (tenth == "0") {
          window.location.href = "10.html";
        } else
        if (eleventh == "0") {
          window.location.href = "11.html";
        } else
        if (tvelfth == "0") {
          window.location.href = "12.html";
        } else
          window.location.href = "reward2.html";
}

function reset() {

    var r = confirm("Careful, this will reset all your progress to 0 is that what you want?");
    if (r == true) {
document.cookie = "1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "3=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "4=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "5=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "6=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "7=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "8=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "9=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "10=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "11=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "12=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "13=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "14=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "15=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "guessed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "showunder=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "under=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
location.reload(); 
    } else {
void 0
    }

}