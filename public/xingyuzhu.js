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

getAllSelect();
function getAllSelect() {
    $.get("/pokemon", function(pokemons) {
        let $name = $("#pokemon");
        pokemons.forEach(function(data) {
            $name.append("<option>" + data.Pokemon + "</option>");
        });
    });

    $.get("/nature", function(natures) {
        let $nature = $("#nature");
        natures.forEach(function(data) {
            $nature.append("<option>" + data.Nature + "</option>");
        });
    });
}

let hpS;
let atkS;
let defS;
let spAS;
let spDS;
let speS;
$("#pokemon").change(showData);
function showData() {
    $.get("/pokemon", function(pokemons) {
        pokemons.forEach(function(data) {
            if(data.Pokemon == $("#pokemon").val()){
                hpS = data.HP;
                atkS = data.Atk;
                defS = data.Atk;
                spAS = data.SpA;
                spDS = data.SpD;
                speS = data.Spe;
                $("#HP").text(data.HP);
                $("#ATK").text(data.Atk);
                $("#DEF").text(data.Def);
                $("#sp_atk").text(data.SpA);
                $("#sp_def").text(data.SpD);
                $("#Speed").text(data.Spe);
            }
        });
    });
}

console.log(hpS);

var hp_input = $("#hp").val();
var ark_input = $("#atk").val();
var def_input = $("#def").val();
var spA_input = $("#spAtk").val();
var spD_input = $("#spDef").val();
var speed_input = $("#speed").val();

$("#sub").click(statsCal);

function statsCal() {
    let hpW = 1;
    let atkW = 1;
    let defW = 1;
    let spAW = 1;
    let spDW = 1;
    let speW = 1;
    $.get("/nature", function(natures) {
        let $nature = $("#nature");
        natures.forEach(function(data) {
            if(data.Nature == $("#nature").val()) {
                let increaseS = data["Increased stat"];
                let decreaseS = data["Decreased stat"];
                if(increaseS == "Attack") {
                    atkW = 1.1;
                }else if(increaseS == "Defense") {
                    defW = 1.1;
                }else if(increaseS == "Sp. Attack") {
                    spAW = 1.1;
                }else if(increaseS == "Sp. Defense") {
                    spDW = 1.1;
                }else if(increaseS == "Speed") {
                    speW = 1.1;
                }

                if(decreaseS == "Attack") {
                    atkW = 0.9;
                }else if(decreaseS == "Defense") {
                    defW = 0.9;
                }else if(decreaseS == "Sp. Attack") {
                    spAW = 0.9;
                }else if(decreaseS == "Sp. Defense") {
                    spDW = 0.9;
                }else if(decreaseS == "Speed") {
                    speW = 0.9;
                }
            }
        });
    });
    
}