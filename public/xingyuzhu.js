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

let pokemons;
let natures;

getAllSelect();
function getAllSelect() {
    $.ajax({
        url: "/pokemon",
        type: "GET",
        dataType: "json", 
        async: false,
        success:function(data){
            pokemons = data;
        }
    });
    pokemons.forEach(function(data) {
        $("#pokemon").append("<option>" + data.Pokemon + "</option>");
    });

    $.ajax({
        url: "/nature",
        type: "GET",
        dataType: "json", 
        async: false,
        success:function(data){
            natures = data;
        }
    });
    natures.forEach(function(data) {
        $("#nature").append("<option>" + data.Nature + "</option>");
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
}

$("#sub").click(statsCal);
let hpW = 1;
let atkW = 1;
let defW = 1;
let spAW = 1;
let spDW = 1;
let speW = 1;
function statsCal() {
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

    let hp_input = $("#hp").val();
    let ark_input = $("#atk").val();
    let def_input = $("#def").val();
    let spA_input = $("#spAtk").val();
    let spD_input = $("#spDef").val();
    let spe_input = $("#speed").val();

    lowerHP = calculateHP(hpS, hp_input, 0);
    upperHP = calculateHP(hpS, hp_input, 31);
    $("#hpF").text(lowerHP + " - " + upperHP);

    lowerAtk = calculateOther(atkS, atkW, ark_input, 0);
    upperAtk = calculateOther(atkS, atkW, ark_input, 31);
    $("#atkF").text(lowerAtk + " - " + upperAtk);

    lowerDef = calculateOther(defS, defW, def_input, 0);
    upperDef = calculateOther(defS, defW, def_input, 31);
    $("#defF").text(lowerDef + " - " + upperDef);
    
    lowerSpA = calculateOther(spAS, spAW, spA_input, 0);
    upperSpA = calculateOther(spAS, spAW, spA_input, 31);
    $("#spAF").text(lowerSpA + " - " + upperSpA);

    lowerSpD = calculateOther(spDS, spDW, spD_input, 0);
    upperSpD = calculateOther(spDS, spDW, spD_input, 31);
    $("#spDF").text(lowerSpD + " - " + upperSpD);

    lowerSpe = calculateOther(speS, speW, spe_input, 0);
    upperSpe = calculateOther(speS, speW, spe_input, 31);
    $("#speF").text(lowerSpe + " - " + upperSpe);
}

function calculateHP(stat, base, iv) {
    return Math.floor((stat * 2 + iv + base / 4) + 10 + 100);
}

function calculateOther(stat, weight, base, iv) {
    return Math.floor(((stat * 2 + iv + base/4) + 5) * weight);
}