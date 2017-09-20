/**
 * add an upgrade menu
 * add upgrades
 * create all buttons with html and then edit them with javascript
 * @type {number}
 */

// starting income timer
var incomeTimer = 1000;

// income upgrades, this is bugging out
var bakers = Number(readCookie("bakers"));
var ovens = Number(readCookie("ovens"));
var restaurants = Number(readCookie("restaurants"));

// upgrade point gain
var baker_multiplier = 1;
var oven_multiplier = 1;
var restaurant_multiplier = 1;

//upgrades check
var b1 = false;
var b2 = false;
var b3 = false;
var b4 = false;
var b5 = false;
var b6 = false;

// initial points
if (typeof Number(readCookie("points")) !== 'undefined') {
    var points = Number(readCookie("points")) + 10;
} else {
    points = 10;
}

window.onload = function () {
    // load saved vars
    var bakers_owned = document.getElementsByClassName("owned_bakers");
    bakers_owned[0].innerHTML = "Bakers owned: " + bakers;
    var ovens_owned = document.getElementsByClassName("owned_ovens");
    ovens_owned[0].innerHTML = "Ovens owned:" + ovens;
    var restaurants_owned = document.getElementsByClassName("owned_restaurants");
    restaurants_owned[0].innerHTML = "Restaurants owned: " + restaurants;
    var point_load = document.getElementsByClassName("pointAmount");
    point_load[0].innerHTML = points;
    var shop_button = document.getElementById("shopButton1");
    shop_button.innerHTML = "Buy a baker " + Math.floor(10 * Math.pow(1 + (20 / 100), bakers)) + " points";
    var shop_button2 = document.getElementById("shopButton2");
    shop_button2.innerHTML = "Buy an oven " + Math.floor(100 * Math.pow(1 + (18 / 100), ovens)) + " points";
    var shop_button3 = document.getElementById("shopButton3");
    shop_button3.innerHTML = "Buy a retaurant " + Math.floor(1000 * Math.pow(1 + (16 / 100), restaurants)) + " points";

    // add eventListners to all the shop buttons so items can be bought
    document.getElementById("shopButton1").addEventListener("click", function () {
        if (points >= Math.floor(10 * Math.pow(1 + (20 / 100), bakers))) {
            points -= Math.floor(10 * Math.pow(1 + (20 / 100), bakers));
            bakers += 1;
            var shop_button = document.getElementById("shopButton1");
            shop_button.innerHTML = "Buy a baker " + Math.floor(10 * Math.pow(1 + (20 / 100), bakers)) + " points";
            var Pamount = document.getElementsByClassName("pointAmount");
            Pamount[0].innerHTML = points;
            var upgrade_owned = document.getElementsByClassName("owned_bakers");
            upgrade_owned[0].innerHTML = "Bakers owned: " + bakers;
            document.cookie = "bakers=" + bakers + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
        } else {
            return;
        }
    });

    document.getElementById("shopButton2").addEventListener("click", function () {
        if (points >= Math.floor(100 * Math.pow(1 + (18 / 100), ovens))) {
            points -= Math.floor(100 * Math.pow(1 + (18 / 100), ovens));
            ovens += 1;
            var shop_button = document.getElementById("shopButton2");
            shop_button.innerHTML = "Buy an oven " + Math.floor(100 * Math.pow(1 + (18 / 100), ovens)) + " points";
            var Pamount = document.getElementsByClassName("pointAmount");
            Pamount[0].innerHTML = points;
            var upgrade_owned = document.getElementsByClassName("owned_ovens");
            upgrade_owned[0].innerHTML = "Ovens owned:" + ovens;
            document.cookie = "ovens=" + ovens + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
        } else {
            return;
        }
    });

    document.getElementById("shopButton3").addEventListener("click", function () {
        if (points >= Math.floor(1000 * Math.pow(1 + (16 / 100), restaurants))) {
            points -= Math.floor(1000 * Math.pow(1 + (16 / 100), restaurants));
            restaurants += 1;
            var shop_button = document.getElementById("shopButton3");
            shop_button.innerHTML = "Buy a retaurant " + Math.floor(1000 * Math.pow(1 + (16 / 100), restaurants)) + " points";
            var Pamount = document.getElementsByClassName("pointAmount");
            Pamount[0].innerHTML = points;
            var upgrades_owned = document.getElementsByClassName("owned_restaurants");
            upgrades_owned[0].innerHTML = "Restaurants owned: " + restaurants;
            document.cookie = "restaurants=" + restaurants + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
        } else {
            return;
        }
    });
};

setInterval(function () {
    points += (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
    var elem = document.getElementsByClassName("pointAmount");
    elem[0].innerHTML = points;
    var Pincome = document.getElementsByClassName("pointIncome");
    Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
    document.cookie = "points=" + points + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
}, incomeTimer);

/**
 * add the eventlistner when the upgrade button is created
 */

setInterval(function () {
    if (bakers >= 10) {
        if (b1 == false) {
            var upgrade = document.getElementsByClassName("show_upgrades");
            upgrade[0].innerHTML += "<div id='b1' class='upgrade_button'>B1</div>";
            b1 = true;
            document.getElementById("b1").addEventListener("click",function(){
                baker_multiplier *= 2;
                var element = document.getElementById("b1");
                element.parentNode.removeChild(element);
                var Pincome = document.getElementsByClassName("pointIncome");
                Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
            })
        }
    }

    if( bakers >= 25){
        if(b2 == false && b1 == true){
            var upgrade2 = document.getElementsByClassName("show_upgrades");
            upgrade2[0].innerHTML += "<div id='b2' class='upgrade_button'>B2</div>";
            b2 = true;
            document.getElementById("b2").addEventListener("click",function(){
                baker_multiplier *= 2;
                var element2 = document.getElementById("b2");
                element2.parentNode.removeChild(element2);
                var Pincome = document.getElementsByClassName("pointIncome");
                Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
            })
        }
    }

    if ( bakers >= 50 && b1 == true && b2 == true){
        if(b3 == false){
            var upgrade3 = document.getElementsByClassName("show_upgrades");
            upgrade3[0].innerHTML += "<div id='b3' class='upgrade_button'>B3</div>";
            b3 = true;
            document.getElementById("b3").addEventListener("click",function(){
                baker_multiplier *= 2;
                var element = document.getElementById("b3");
                element.parentNode.removeChild(element);
                var Pincome = document.getElementsByClassName("pointIncome");
                Pincome[0].innerHTML =  (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
            })
        }
    }

    if (bakers >= 75){
        if(b4 == false){
            var upgrade4 = document.getElementsByClassName("show_upgrades");
            upgrade4[0].innerHTML += "<div class='upgrade_button'>B4</div>";
            b4 = true;
        }
    }

    if (bakers >= 100){
        if(b5 == false){
            var upgrade5 = document.getElementsByClassName("show_upgrades");
            upgrade5[0].innerHTML += "<div class='upgrade_button'>B5</div>";
            b5 = true;
        }
    }
}, 500);

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}