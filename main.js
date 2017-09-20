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
var o1 = false;
var o2 = false;
var o3 = false;
var o4 = false;
var o5 = false;
var od = false;
var r1 = false;
var r2 = false;
var r3 = false;
var r4 = false;
var r5 = false;
var r6 = false;

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
    shop_button.innerHTML = "Buy a baker " + Math.floor(10 * Math.pow(1 + (25 / 100), bakers)) + " points";
    var shop_button2 = document.getElementById("shopButton2");
    shop_button2.innerHTML = "Buy an oven " + Math.floor(100 * Math.pow(1 + (25 / 100), ovens)) + " points";
    var shop_button3 = document.getElementById("shopButton3");
    shop_button3.innerHTML = "Buy a retaurant " + Math.floor(1000 * Math.pow(1 + (25 / 100), restaurants)) + " points";

    // add eventListners to all the shop buttons so items can be bought
    document.getElementById("shopButton1").addEventListener("click", function () {
        if (points >= Math.floor(10 * Math.pow(1 + (25 / 100), bakers))) {
            points -= Math.floor(10 * Math.pow(1 + (25 / 100), bakers));
            bakers += 1;
            var shop_button = document.getElementById("shopButton1");
            shop_button.innerHTML = "Buy a baker " + Math.floor(10 * Math.pow(1 + (25 / 100), bakers)) + " points";
            var Pamount = document.getElementsByClassName("pointAmount");
            Pamount[0].innerHTML = points;
            var upgrade_owned = document.getElementsByClassName("owned_bakers");
            upgrade_owned[0].innerHTML = "Bakers owned: " + bakers;
            document.cookie = "bakers=" + bakers + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
            var Pincome = document.getElementsByClassName("pointIncome");
            Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
            document.cookie = "points=" + points + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
        }
    });

    document.getElementById("shopButton2").addEventListener("click", function () {
        if (points >= Math.floor(100 * Math.pow(1 + (25 / 100), ovens))) {
            points -= Math.floor(100 * Math.pow(1 + (25 / 100), ovens));
            ovens += 1;
            var shop_button = document.getElementById("shopButton2");
            shop_button.innerHTML = "Buy an oven " + Math.floor(100 * Math.pow(1 + (25 / 100), ovens)) + " points";
            var Pamount = document.getElementsByClassName("pointAmount");
            Pamount[0].innerHTML = points;
            var upgrade_owned = document.getElementsByClassName("owned_ovens");
            upgrade_owned[0].innerHTML = "Ovens owned:" + ovens;
            document.cookie = "ovens=" + ovens + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
            var Pincome = document.getElementsByClassName("pointIncome");
            Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
            document.cookie = "points=" + points + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
        }
    });

    document.getElementById("shopButton3").addEventListener("click", function () {
        if (points >= Math.floor(1000 * Math.pow(1 + (25 / 100), restaurants))) {
            points -= Math.floor(1000 * Math.pow(1 + (25 / 100), restaurants));
            restaurants += 1;
            var shop_button = document.getElementById("shopButton3");
            shop_button.innerHTML = "Buy a retaurant " + Math.floor(1000 * Math.pow(1 + (25 / 100), restaurants)) + " points";
            var Pamount = document.getElementsByClassName("pointAmount");
            Pamount[0].innerHTML = points;
            var upgrades_owned = document.getElementsByClassName("owned_restaurants");
            upgrades_owned[0].innerHTML = "Restaurants owned: " + restaurants;
            document.cookie = "restaurants=" + restaurants + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
            var Pincome = document.getElementsByClassName("pointIncome");
            Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
            document.cookie = "points=" + points + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
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
    if (bakers >= 10 && b1 === false) {
        var Bupgrade1 = document.getElementsByClassName("show_upgrades");
        Bupgrade1[0].innerHTML += "<div id='b2' class='upgrade_button'>B1</div>";
        b1 = true;
        baker_multiplier *= 2;
        var Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
    }

    if (bakers >= 25) {
        if (b2 === false) {
            var Bupgrade2 = document.getElementsByClassName("show_upgrades");
            Bupgrade2[0].innerHTML += "<div id='b2' class='upgrade_button'>B2</div>";
            b2 = true;
            baker_multiplier += 2;
            Pincome = document.getElementsByClassName("pointIncome");
            Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);

        }
    }

    if (bakers >= 50) {
        if (b3 === false) {
            var Bupgrade3 = document.getElementsByClassName("show_upgrades");
            Bupgrade3[0].innerHTML += "<div id='b3' class='upgrade_button'>B3</div>";
            b3 = true;
            baker_multiplier += 2;
            Pincome = document.getElementsByClassName("pointIncome");
            Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);

        }
    }

    if (bakers >= 75) {
        if (b4 === false) {
            var Bupgrade4 = document.getElementsByClassName("show_upgrades");
            Bupgrade4[0].innerHTML += "<div class='upgrade_button'>B4</div>";
            b4 = true;
            baker_multiplier += 2;
            Pincome = document.getElementsByClassName("pointIncome");
            Pincome[0].innerHTML = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier);
        }
    }

    if (bakers >= 100 && b5 === false) {
            var Bupgrade5 = document.getElementsByClassName("show_upgrades");
            Bupgrade5[0].innerHTML += "<div class='upgrade_button'>B5</div>";
            b5 = true;
    }

    if (ovens >= 10 && o1 === false) {
        var Oupgrade1 = document.getElementsByClassName("show_upgrades");
        Oupgrade1[0].innerHTML += "<div class='upgrade_button'>O1</div>";
        oven_multiplier *= 2;
        o1 = true
    }

    if (ovens >= 25 && o2 === false) {
        var Oupgrade2 = document.getElementsByClassName("show_upgrades");
        Oupgrade2[0].innerHTML += "<div class='upgrade_button'>O2</div>";
        oven_multiplier += 2;
        o2 = true
    }

    if (ovens >= 50 && o3 === false) {
        var Oupgrade3 = document.getElementsByClassName("show_upgrades");
        Oupgrade3[0].innerHTML += "<div class='upgrade_button'>O3</div>";
        oven_multiplier += 2;
        o3 = true
    }

    if (ovens >= 75 && o4 === false) {
        var Oupgrade4 = document.getElementsByClassName("show_upgrades");
        Oupgrade4[0].innerHTML += "<div class='upgrade_button'>O3</div>";
        oven_multiplier += 2;
        o4 = true
    }

    if (ovens >= 100 && o5 === false) {
        var Oupgrade5 = document.getElementsByClassName("show_upgrades");
        Oupgrade5[0].innerHTML += "<div class='upgrade_button'>O4</div>";
        oven_multiplier += 2;
        o5 = true
    }

    if (restaurants >= 10 && r1 === false) {
        var Rupgrade1 = document.getElementsByClassName("show_upgrades");
        Rupgrade1[0].innerHTML += "<div class='upgrade_button'>R1</div>";
        restaurant_multiplier *= 2;
        r1 = true
    }

    if (restaurants >= 25 && r2 === false) {
        var Rupgrade2 = document.getElementsByClassName("show_upgrades");
        Rupgrade2[0].innerHTML += "<div class='upgrade_button'>R2</div>";
        restaurant_multiplier += 2;
        r2 = true
    }

    if (restaurants >= 50 && r3 === false) {
        var Rupgrade3 = document.getElementsByClassName("show_upgrades");
        Rupgrade3[0].innerHTML += "<div class='upgrade_button'>R3</div>";
        restaurant_multiplier += 2;
        r3 = true
    }

    if (restaurants >= 75 && r4 === false) {
        var Rupgrade4 = document.getElementsByClassName("show_upgrades");
        Rupgrade4[0].innerHTML += "<div class='upgrade_button'>R4</div>";
        restaurant_multiplier += 2;
        r4 = true
    }
    if (restaurants >= 50 && r5 === false) {
        var Rupgrade5 = document.getElementsByClassName("show_upgrades");
        Rupgrade5[0].innerHTML += "<div class='upgrade_button'>R5</div>";
        restaurant_multiplier += 2;
        r5 = true
    }

}, 100);

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