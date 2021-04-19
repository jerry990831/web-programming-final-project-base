// check whether user input valid Statistic
// valid Species Strengths should be an non-negative integer 
let statsValid = false;
let statsHpValid = false;
let statsAtkValid = false;
let statsDefValid = false;
let statsSpAtkValid = false;
let statsSpDefValid = false;
let statsSpeedValid = false;
let $statsError = $("#statsError");

$("#stats_hp").keyup(statsHpCheck);
$("#stats_atk").keyup(statsAtkCheck);
$("#stats_def").keyup(statsDefCheck);
$("#stats_sp_atk").keyup(statsSpAtkCheck);
$("#stats_sp_def").keyup(statsSpDefCheck);
$("#stats_speed").keyup(statsSpeedCheck);


function statsHpCheck(){
    val = $(this).val();
    statsHpValid = false;
    $statsError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0){
            statsHpValid = true;
            if(statsAtkValid && statsDefValid && statsSpAtkValid && statsSpDefValid && statsSpeedValid){
                $statsError.addClass("hidden");
            }
        }
    }
}

function statsAtkCheck(){
    val = $(this).val();
    statsAtkValid = false;
    $statsError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0){
            statsAtkValid = true;
            if(statsHpValid && statsDefValid && statsSpAtkValid && statsSpDefValid && statsSpeedValid){
                $statsError.addClass("hidden");
            }
        }
    }
}

function statsDefCheck(){
    val = $(this).val();
    statsDefValid = false;
    $statsError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0){
            statsDefValid = true;
            if(statsAtkValid && statsHpValid && statsSpAtkValid && statsSpDefValid && statsSpeedValid){
                $statsError.addClass("hidden");
            }
        }
    }
}

function statsSpAtkCheck(){
    val = $(this).val();
    statsSpAtkValid = false;
    $statsError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0){
            statsSpAtkValid = true;
            if(statsAtkValid && statsDefValid && statsHpValid && statsSpDefValid && statsSpeedValid){
                $statsError.addClass("hidden");
            }
        }
    }
}

function statsSpDefCheck(){
    val = $(this).val();
    statsSpDefValid = false;
    $statsError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0){
            statsSpDefValid = true;
            if(statsAtkValid && statsDefValid && statsSpAtkValid && statsHpValid && statsSpeedValid){
                $statsError.addClass("hidden");
            }
        }
    }
}

function statsSpeedCheck(){
    val = $(this).val();
    statsSpeedValid = false;
    $statsError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0){
            statsSpeedValid = true;
            if(statsAtkValid && statsDefValid && statsSpAtkValid && statsSpDefValid && statsHpValid){
                $statsError.addClass("hidden");
            }
        }
    }
}


// check whether user input valid Base Points
// valid Base Points should be an integer in the range [0, 252]
// the sum of base points should <= 510
let evValid = false;
let evHpValid = false;
let evAtkValid = false;
let evDefValid = false;
let evSpAtkValid = false;
let evSpDefValid = false;
let evSpeedValid = false;
let evHp = 0;
let evAtk = 0;
let evDef = 0;
let evSpAtk = 0;
let evSpDef = 0;
let evSpeed = 0;
let $evError = $("#evError");

$("#ev_hp").keyup(evHpCheck);
$("#ev_atk").keyup(evAtkCheck);
$("#ev_def").keyup(evDefCheck);
$("#ev_sp_atk").keyup(evSpAtkCheck);
$("#ev_sp_def").keyup(evSpDefCheck);
$("#ev_speed").keyup(evSpeedCheck);


function evHpCheck(){
    val = $(this).val();
    evHpValid = false;
    $evError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0 && num <= 252){
            evHp = num;
            if(evHp + evAtk + evDef + evSpAtk + evSpDef + evSpeed <= 510){
                evHpValid = true;
                if(evAtkValid && evDefValid && evSpAtkValid && evSpDefValid && evSpeedValid){
                    $evError.addClass("hidden");
                }
            }
        }
    }
}

function evAtkCheck(){
    val = $(this).val();
    evAtkValid = false;
    $evError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0 && num <= 252){
            evAtkValid = true;
            evAtk = num;
            if(evHp + evAtk + evDef + evSpAtk + evSpDef + evSpeed <= 510){
                evAtkValid = true;
                if(evHpValid && evDefValid && evSpAtkValid && evSpDefValid && evSpeedValid){
                    $evError.addClass("hidden");
                }
            }
        }
    }
}

function evDefCheck(){
    val = $(this).val();
    evDefValid = false;
    $evError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0 && num <= 252){
            evDef = num;
            if(evHp + evAtk + evDef + evSpAtk + evSpDef + evSpeed <= 510){
                evDefValid = true;
                if(evAtkValid && evHpValid && evSpAtkValid && evSpDefValid && evSpeedValid){
                    $evError.addClass("hidden");
                }
            }
        }
    }
}

function evSpAtkCheck(){
    val = $(this).val();
    evSpAtkValid = false;
    $evError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0 && num <= 252){
            evSpAtk = num;
            if(evHp + evAtk + evDef + evSpAtk + evSpDef + evSpeed <= 510){
                evSpAtkValid = true;
                if(evAtkValid && evDefValid && evHpValid && evSpDefValid && evSpeedValid){
                    $evError.addClass("hidden");
                }
            }
        }
    }
}

function evSpDefCheck(){
    val = $(this).val();
    evSpDefValid = false;
    $evError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0 && num <= 252){
            evSpDef = num;
            if(evHp + evAtk + evDef + evSpAtk + evSpDef + evSpeed <= 510){
                evSpDefValid = true;
                if(evAtkValid && evDefValid && evSpAtkValid && evHpValid && evSpeedValid){
                    $evError.addClass("hidden");
                }
            }
        }
    }
}

function evSpeedCheck(){
    val = $(this).val();
    evSpeedValid = false;
    $evError.removeClass("hidden");
    //check if user input an integer
    if(Math.floor(val) == val && $.isNumeric(val)){
        num = parseInt(val, 10);
        if(num >= 0 && num <= 252){
            evSpeed = num;
            if(evHp + evAtk + evDef + evSpAtk + evSpDef + evSpeed <= 510){
                evSpeedValid = true;
                if(evAtkValid && evDefValid && evSpAtkValid && evSpDefValid && evHpValid){
                    $evError.addClass("hidden");
                }
            }
        }
    }
}

// return to menu
$("#return_menu").click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/yichengwang";
});


// update available Pokemon and Nature
let pokemons;  // store all pokemon info
let natures;  // store all nature info
updateData();

function updateData(){
    // request latest Pokemon and Nature info
    $.ajax({
        url:"/pokemon",
        type:'GET',
        dataType: 'json', 
        async:false,
        success:function(data){
            pokemons = data;
        }
    });
    $.ajax({
        url:"/nature",
        type:'GET',
        dataType: 'json', 
        async:false,
        success:function(data){
            natures = data;
        }
    });

    // remove current data
    $("option").remove();

    // update pokemon info
    for(let i = 0; i < pokemons.length; i++){
        let pokemon = $("<option></option>").text(pokemons[i].Pokemon);
        $("#pokemon").append(pokemon);
    }
    // update default pokemon Species Strengths info
    $("#ss_hp").text(pokemons[0].HP);
    $("#ss_atk").text(pokemons[0].Atk);
    $("#ss_def").text(pokemons[0].Def);
    $("#ss_sp_atk").text(pokemons[0].SpA);
    $("#ss_sp_def").text(pokemons[0].SpD);
    $("#ss_speed").text(pokemons[0].Spe);

    // update nature info
    for(let i = 0; i < natures.length; i++){
        let nature = $("<option></option>").text(natures[i].Nature);
        $("#nature").append(nature);
    }
}


//update species strength info after user select a pokemon
$("#show_pokemon").change(updateSpeciesStrength);

function updateSpeciesStrength(){
    for(let i = 0; i < pokemons.length; i++){
        if(pokemons[i].Pokemon == $("#show_pokemon").val()){
            $("#ss_hp").text(pokemons[i].HP);
            $("#ss_atk").text(pokemons[i].Atk);
            $("#ss_def").text(pokemons[i].Def);
            $("#ss_sp_atk").text(pokemons[i].SpA);
            $("#ss_sp_def").text(pokemons[i].SpD);
            $("#ss_speed").text(pokemons[i].Spe);
        }
    }
}


// calculate IV:
$("#submit").click(calculateIV);

function calculateHpIV(stats, lv, ss, ev){
    return (100 / lv) * (stats - lv - 10) - 2 * ss - (ev / 4);
}

function calculateOtherIV(stats, lv, ss, ev, nature_affect){
    return (100 / lv) * ((stats / nature_affect) - 5) - 2 * ss - (ev / 4);
}

function allValid(){
    return (statsHpValid && statsAtkValid && statsDefValid && statsSpAtkValid && statsSpDefValid && statsSpeedValid 
        && evHpValid && evAtkValid && evDefValid && evSpAtkValid && evSpDefValid && evSpeedValid);
}

function ivCheck(iv){
    //check if iv from 0 to 31
    if(iv >= 0 && iv <= 31){
        return true;
    }
    return false;
}

function calculateIV(){
    if(allValid()){
        let atk_aff = 1;
        let def_aff = 1;
        let sp_atk_aff = 1;
        let sp_def_aff = 1;
        let speed_aff = 1;

        // find what basic stat of pokemon is affected by nature, and update the affect
        for(let i = 0; i < natures.length; i++){
            let nature = natures[i];
            if(nature.Nature == $("#show_nature").val()){
                // update increased stat
                if(nature["Increased stat"] == "Attack"){
                    atk_aff = 1.1;
                }
                if(nature["Increased stat"] == "Defense"){
                    def_aff = 1.1;
                }
                if(nature["Increased stat"] == "Sp. Attack"){
                    sp_atk_aff = 1.1;
                }
                if(nature["Increased stat"] == "Sp. Defense"){
                    sp_def_aff = 1.1;
                }
                if(nature["Increased stat"] == "Speed"){
                    speed_aff = 1.1;
                }
                // update decreased stat
                if(nature["Decreased stat"] == "Attack"){
                    atk_aff = 0.9;
                }
                if(nature["Decreased stat"] == "Defense"){
                    def_aff = 0.9;
                }
                if(nature["Decreased stat"] == "Sp. Attack"){
                    sp_atk_aff = 0.9;
                }
                if(nature["Decreased stat"] == "Sp. Defense"){
                    sp_def_aff = 0.9;
                }
                if(nature["Decreased stat"] == "Speed"){
                    speed_aff = 0.9;
                }
            }
            break; 
        }

        // calculate IV
        let hp_iv = calculateHpIV(parseInt($("#stats_hp").val(), 10), 100, parseInt($("#ss_hp").text(), 10), parseInt($("#ev_hp").val(), 10));
        let atk_iv = calculateOtherIV(parseInt($("#stats_atk").val(), 10), 100, parseInt($("#ss_atk").text(), 10), parseInt($("#ev_atk").val(), 10), atk_aff);
        let def_iv = calculateOtherIV(parseInt($("#stats_def").val(), 10), 100, parseInt($("#ss_def").text(), 10), parseInt($("#ev_def").val(), 10), def_aff);
        let sp_atk_iv = calculateOtherIV(parseInt($("#stats_sp_atk").val(), 10), 100, parseInt($("#ss_sp_atk").text(), 10), parseInt($("#ev_sp_atk").val(), 10), sp_atk_aff);
        let sp_def_iv = calculateOtherIV(parseInt($("#stats_sp_def").val(), 10), 100, parseInt($("#ss_sp_def").text(), 10), parseInt($("#ev_sp_def").val(), 10), sp_def_aff);
        let speed_iv = calculateOtherIV(parseInt($("#stats_speed").val(), 10), 100, parseInt($("#ss_speed").text(), 10), parseInt($("#ev_speed").val(), 10), speed_aff);

        // update output
        $("#iv_hp").text(hp_iv);
        $("#iv_atk").text(atk_iv);
        $("#iv_def").text(def_iv);
        $("#iv_sp_atk").text(sp_atk_iv);
        $("#iv_sp_def").text(sp_def_iv);
        $("#iv_speed").text(speed_iv);

        console.log($("stats_hp").val());
        console.log($("ss_hp").text());
        console.log($("ev_hp").val());
        console.log(parseInt($("#stats_hp").val(), 10));
        console.log(parseInt($("#ss_hp").text(), 10));
        console.log(parseInt($("#ev_hp").val(), 10));
        console.log(hp_iv);

        // check whether IV is valid. If not, then Stats(user input) must be incorrect
        $("#ivError").removeClass("hidden");
        if(ivCheck(hp_iv) && ivCheck(atk_iv) && ivCheck(def_iv) && ivCheck(sp_atk_iv) && ivCheck(sp_def_iv) && ivCheck(speed_iv)){
            $("#ivError").addClass("hidden");
        }
    }
}




