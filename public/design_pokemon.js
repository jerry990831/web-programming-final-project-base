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
		
//Button events
$(document).ready(function() {
	 //add button event
	 $("#addBtn").click(function() {
		 const pokemon = {
				Pokemon: $("#pokemon_name").val(),
				HP:$("#hp").val(),
				Atk:$("#atk").val(),
				Def:$("#def").val(),
				SpA:$("#spAtk").val(),
				SpD:$("#spDef").val(),
				Spe:$("#speed").val(),
		 };
		 console.log(pokemon);
		 
		 $.ajax({
		 	url: "/sql",
		    type: "POST",
			data: pokemon,
		    success: function(msg){
				//add option to the list in client side
				// let option = document.createElement("option");
				// let txt = document.createTextNode(entree.name);
				// option.appendChild(txt);
				// option.setAttribute("id",entree.id);
				// $('select').append(option);
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
