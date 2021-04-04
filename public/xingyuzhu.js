let $hp = $("#hp");
let $atk = $("#atk");
let $def = $("#def");
let $spAtk = $("#spAtk");
let $spDef = $("#spDef");
let $speed = $("#speed");

$hp.keyup(function(e) {
    if($(this).val() >= 0 && $(this).val() <= 252 && $.isNumeric($(this).val())){
        $("#hpW").hide();
    }else {
        $("#hpW").show();
        e.preventDefault();
    }
});

$atk.keyup(function(e) {
    if($(this).val() >= 0 && $(this).val() <= 252 && $.isNumeric($(this).val())){
        $("#atkW").hide();
    }else {
        $("#atkW").show();
        e.preventDefault();
    }
});

$def.keyup(function(e) {
    if($(this).val() >= 0 && $(this).val() <= 252 && $.isNumeric($(this).val())){
        $("#defW").hide();
    }else {
        $("#defW").show();
        e.preventDefault();
    }
});

$spAtk.keyup(function(e) {
    if($(this).val() >= 0 && $(this).val() <= 252 && $.isNumeric($(this).val())){
        $("#spAtkW").hide();
    }else {
        $("#spAtkW").show();
        e.preventDefault();
    }
});

$spDef.keyup(function(e) {
    if($(this).val() >= 0 && $(this).val() <= 252 && $.isNumeric($(this).val())){
        $("#spDefW").hide();
    }else {
        $("#spDefW").show();
        e.preventDefault();
    }
});

$speed.keyup(function(e) {
    if($(this).val() >= 0 && $(this).val() <= 252 && $.isNumeric($(this).val())){
        $("#speedW").hide();
    }else {
        $("#speedW").show();
        e.preventDefault();
    }
});

let $emptyW = $("#empW");
let $indW = $("#indvidualW");
let $sumW = $("#sumW");
$("#sub").click(function(e) {
    if(!$hp.val() || !$atk.val() || !$def.val() || !$spAtk.val() || !$spDef.val() || !$speed.val()){
        $emptyW.show();
        e.preventDefault();
    }else {
        $emptyW.hide();
    }

    if((parseInt($hp.val()) + parseInt($atk.val()) + parseInt($def.val()) + 
        parseInt($spAtk.val()) + parseInt($spDef.val()) + parseInt($speed.val())) > 510) {
        $sumW.show();
        e.preventDefault();
    }else {
        $sumW.hide();
    }

});

let $menu = $("#menu");
$menu.click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/yichengwang";
});