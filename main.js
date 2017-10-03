/**
 * an upgrade of a higher level will upgrade all upgrades below it
 * for example the oven upgrade will also upgrade the baker multiplier
 * and a restaurant upgrade will also upgrade the oven multiplier
 * normal upgrade is multiplier + 2, previous upgade multiplier is * 2
 *
 *
 *---------------------------------------------------------------------
 *
 * show points with "k", "m" etc so that the numbers are smaller
 *
 * @type {number}
 */

// starting income timer
var incomeTimer = 1000;
// income upgrades, this is bugging out
var bakers = Number(readCookie("bakers"));
var ovens = Number(readCookie("ovens"));
var restaurants = Number(readCookie("restaurants"));
var restaurant_chains = Number(readCookie("restaurant_chains"));

// upgrade point gain
var baker_multiplier = 1;
var oven_multiplier = 1;
var restaurant_multiplier = 1;
var restaurant_chains_multiplier = 1;

var total_income = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier) + ( restaurant_chains * 1000 * restaurant_chains_multiplier);

//upgrades check this is array is used to check if upgrade requirements have been met
var upgrades_check = {
    b1: false,
    b2: false,
    b3: false,
    b4: false,
    b5: false,
    b6: false,
    o1: false,
    o2: false,
    o3: false,
    o4: false,
    o5: false,
    o6: false,
    r1: false,
    r2: false,
    r3: false,
    r4: false,
    r5: false,
    r6: false,
    rc1: false,
    rc2: false,
    rc3: false,
    rc4: false,
    rc5: false,
    rc6: false
};

// when there is no cookie for points give the player 10 cookies to start the game
if (typeof Number(readCookie("points")) !== 'undefined') {
    var points = Number(readCookie("points")) + 10;
} else {
    points = 10;
}

// calculate income every 100ms
setInterval(function () {
    total_income = (bakers * baker_multiplier) + (ovens * 10 * oven_multiplier ) + ( restaurants * 100 * restaurant_multiplier) + ( restaurant_chains * 1000 * restaurant_chains_multiplier);
}, 100);

window.onload = function () {
    // load saved vars
    var bakers_owned = document.getElementsByClassName("owned_bakers");
    bakers_owned[0].innerHTML = "Bakers owned: " + bakers;
    var ovens_owned = document.getElementsByClassName("owned_ovens");
    ovens_owned[0].innerHTML = "Ovens owned:" + ovens;
    var restaurants_owned = document.getElementsByClassName("owned_restaurants");
    restaurants_owned[0].innerHTML = "Restaurants owned: " + restaurants;
    var restaurant_chains_owned = document.getElementsByClassName("owned_restaurant_chains");
    restaurant_chains_owned[0].innerHTML = "Restaurant chains owned: " + restaurant_chains;
    var point_load = document.getElementsByClassName("pointAmount");
    point_load[0].innerHTML = points;
    var shop_button = document.getElementById("shopButton1");
    shop_button.innerHTML = "Buy a baker " + Math.floor(10 * Math.pow(1 + (25 / 100), bakers)) + " points";
    var shop_button2 = document.getElementById("shopButton2");
    shop_button2.innerHTML = "Buy an oven " + Math.floor(100 * Math.pow(1 + (25 / 100), ovens)) + " points";
    var shop_button3 = document.getElementById("shopButton3");
    shop_button3.innerHTML = "Buy a retaurant " + Math.floor(1000 * Math.pow(1 + (25 / 100), restaurants)) + " points";
    var shop_button4 = document.getElementById("shopButton4");
    shop_button4.innerHTML = "Buy a restaurant chain " + Math.floor(10000 * Math.pow(1 + (25 / 100), restaurant_chains)) + " points";

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
            Pincome[0].innerHTML = total_income;
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
            Pincome[0].innerHTML = total_income;
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
            Pincome[0].innerHTML = total_income;
            document.cookie = "points=" + points + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
        }
    });

    document.getElementById("shopButton4").addEventListener("click", function () {
        if (points >= Math.floor(10000 * Math.pow(1 + (25 / 100), restaurant_chains))) {
            points -= Math.floor(10000 * Math.pow(1 + (25 / 100), restaurant_chains));
            restaurant_chains += 1;
            var shop_button = document.getElementById("shopButton4");
            shop_button.innerHTML = "Buy a retaurant chain " + Math.floor(10000 * Math.pow(1 + (25 / 100), restaurants)) + " points";
            var Pamount = document.getElementsByClassName("pointAmount");
            Pamount[0].innerHTML = points;
            var upgrades_owned = document.getElementsByClassName("owned_restaurant_chains");
            upgrades_owned[0].innerHTML = "Restaurant chains owned: " + restaurant_chains;
            document.cookie = "restaurant_chains=" + restaurant_chains + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
            var Pincome = document.getElementsByClassName("pointIncome");
            Pincome[0].innerHTML = total_income;
            document.cookie = "points=" + points + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
        }
    });
};

setInterval(function () {
    points += total_income;
    var elem = document.getElementsByClassName("pointAmount");
    elem[0].innerHTML = points;
    var Pincome = document.getElementsByClassName("pointIncome");
    Pincome[0].innerHTML = total_income;
    document.cookie = "points=" + points + "; expires=Thu, 18 Dec 9999 12:00:00 UTC";
}, incomeTimer);

/**
 * upgrades the player gets for having a certain amount of income generators (bakers. ovens etc)
 * add the eventlistner when the upgrade button is created
 * add upgrade for having 10,25,50,75 and 100 of everything
 */

setInterval(function () {
    var upgrade = document.getElementsByClassName("show_upgrades");
    if (bakers >= 10 && upgrades_check["b1"] === false) {
        upgrade[0].innerHTML += "<div id='b2' class='upgrade_button'>B1</div>";
        upgrades_check["b1"] = true;
        baker_multiplier *= 2;
        var Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (bakers >= 25 && upgrades_check["b2"] === false) {
        upgrade[0].innerHTML += "<div id='b2' class='upgrade_button'>B2</div>";
        upgrades_check["b2"] = true;
        baker_multiplier += 2;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (bakers >= 50 && upgrades_check["b3"] === false) {
        upgrade[0].innerHTML += "<div id='b3' class='upgrade_button'>B3</div>";
        upgrades_check["b3"] = true;
        baker_multiplier += 2;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (bakers >= 75 && upgrades_check["b4"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>B4</div>";
        upgrades_check["b4"] = true;
        baker_multiplier += 2;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (bakers >= 100 && upgrades_check["b5"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>B5</div>";
        upgrades_check["b5"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (ovens >= 10 && upgrades_check["o1"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>O1</div>";
        oven_multiplier *= 2;
        baker_multiplier *= 2;
        upgrades_check["o1"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (ovens >= 25 && upgrades_check["o2"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>O2</div>";
        oven_multiplier += 2;
        baker_multiplier *= 2;
        upgrades_check["o2"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (ovens >= 50 && upgrades_check["o3"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>O3</div>";
        oven_multiplier += 2;
        baker_multiplier *= 2;
        upgrades_check["o3"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (ovens >= 75 && upgrades_check["o4"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>O4</div>";
        oven_multiplier += 2;
        baker_multiplier *= 2;
        upgrades_check["o4"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (ovens >= 100 && upgrades_check["o5"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>O5</div>";
        oven_multiplier += 2;
        baker_multiplier *= 2;
        upgrades_check["o5"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (restaurants >= 10 && upgrades_check["r1"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>R1</div>";
        restaurant_multiplier *= 2;
        oven_multiplier *= 2;
        upgrades_check["r1"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (restaurants >= 25 && upgrades_check["r2"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>R2</div>";
        restaurant_multiplier += 2;
        oven_multiplier *= 2;
        upgrades_check["r2"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (restaurants >= 50 && upgrades_check["r3"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>R3</div>";
        restaurant_multiplier += 2;
        oven_multiplier *= 2;
        upgrades_check["r3"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }

    if (restaurants >= 75 && upgrades_check["r4"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>R4</div>";
        restaurant_multiplier += 2;
        oven_multiplier *= 2;
        upgrades_check["r4"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }
    if (restaurants >= 100 && upgrades_check["r5"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>R5</div>";
        restaurant_multiplier += 2;
        oven_multiplier *= 2;
        upgrades_check["r5"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }
    if (restaurant_chains >= 10 && upgrades_check["rc1"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>C1</div>";
        restaurant_chains_multiplier *= 2;
        restaurant_multiplier *= 2;
        upgrades_check["rc1"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }
    if (restaurant_chains >= 25 && upgrades_check["rc2"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>C2</div>";
        restaurant_chains_multiplier += 2;
        restaurant_multiplier *= 2;
        upgrades_check["rc2"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }
    if (restaurant_chains >= 50 && upgrades_check["rc3"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>C3</div>";
        restaurant_chains_multiplier += 2;
        restaurant_multiplier *= 2;
        upgrades_check["rc3"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }
    if (restaurant_chains >= 75 && upgrades_check["rc4"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>C4</div>";
        restaurant_chains_multiplier += 2;
        restaurant_multiplier *= 2;
        upgrades_check["rc4"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
    }
    if (restaurant_chains >= 100 && upgrades_check["rc5"] === false) {
        upgrade[0].innerHTML += "<div class='upgrade_button'>C4</div>";
        restaurant_chains_multiplier += 2;
        restaurant_multiplier *= 2;
        upgrades_check["rc5"] = true;
        Pincome = document.getElementsByClassName("pointIncome");
        Pincome[0].innerHTML = total_income;
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