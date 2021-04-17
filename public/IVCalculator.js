console.log(pokemon)
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


$("#return_menu").click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/yichengwang";
});




