// starting points
var points = 0;

// starting income timer
var incomeTimer = 1000;

// income upgrades
var pointIncome = 1;
var bakers = 0;
var ovens = 0;
var restaurants = 0;

// upgrade base prices
var bakerPrice = 10;
var ovenPrice = 100;
var restaurantPrice = 1000;

window.onload = function () {
    document.getElementById("shopButton1").addEventListener("click", function () {
        if (points >= bakerPrice) {
            pointIncome += 1;
            elem = document.getElementsByClassName("pointIncome");
            elem[0].innerHTML = pointIncome;
            points -= bakerPrice;
            bakerPrice = Math.floor(bakerPrice* 1.25);
            elem = document.getElementById("shopButton1");
            elem.innerHTML = "Buy a baker <span class='bakerPrice'>" + bakerPrice + "</span>points";
            bakers += 1;
            elem = document.getElementsByClassName("pointAmount");
            elem[0].innerHTML = points;
        }else{
            return;
        }
    });
    document.getElementById("shopButton2").addEventListener("click", function () {
        if (points >= ovenPrice) {
            pointIncome += 10;
            elem = document.getElementsByClassName("pointIncome");
            elem[0].innerHTML = pointIncome;
            points -= ovenPrice;
            ovenPrice = Math.floor(ovenPrice * 1.23);
            elem = document.getElementById("shopButton2");
            elem.innerHTML = "Buy an oven <span class='bakerPrice'>" + ovenPrice + "</span>points";
            ovens += 1;
            elem = document.getElementsByClassName("pointAmount");
            elem[0].innerHTML = points;
        }else{
            return;
        }
    });
    document.getElementById("shopButton3").addEventListener("click", function () {
        if (points >= restaurantPrice) {
            pointIncome += 100;
            elem = document.getElementsByClassName("pointIncome");
            elem[0].innerHTML = pointIncome;
            points -= restaurantPrice;
            restaurantPrice = Math.floor( restaurantPrice * 1.21);
            elem = document.getElementById("shopButton3");
            elem.innerHTML = "Buy a retaurant <span class='ovenPrice'>" + restaurantPrice + "</span>points";
            restaurants += 1;
            elem = document.getElementsByClassName("pointAmount");
            elem[0].innerHTML = points;
        }else{
            return;
        }
    });
};

setInterval(function () {
    points += pointIncome;
    elem = document.getElementsByClassName("pointAmount");
    elem[0].innerHTML = points;
},incomeTimer);