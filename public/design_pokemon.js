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

		
//Button events
$(document).ready(function() {
	 //add button event
	 $("#addBtn").click(function() {
		 const pokemon = {
				NO: 25,
				Pokemon: $("#pokemon_name").val(),
				HP:$("#stats_hp").val(),
				Atk:$("#stats_atk").val(),
				Def:$("#stats_def").val(),
				SpA:$("#stats_sp_atk").val(),
				SpD:$("#stats_sp_def").val(),
				Spe:$("#stats_speed").val(),
		 };
		 console.log(entree);
		 
		 $.ajax({
		 	url: "/pokemon",
		    type: "POST",
			data: pokemon,
		    success: function(msg){
				//add option to the list in client side
				#let option = document.createElement("option");
				#let txt = document.createTextNode(entree.name);
				#option.appendChild(txt);
				#option.setAttribute("id",entree.id);
				#$('select').append(option);
				alert("added")
				
				//blank the input field
				document.getElementById("pokemon_name").value='';
		    },
		 	failure: function(msg){
				alert("The entree could not be added.")
			}
		 });
		 
	 });
});


$("#return_menu").click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/yichengwang";
});
