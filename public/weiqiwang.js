let firstpokemon = true;
let firstnag = true;
let secondpokemon = true;
let secondnag = true;
function atkcheckForm(event) {
    let hp1 = document.querySelector("#stats1_hp").value;
    let atk1=document.querySelector("#stats1_atk").value;
    let def1=document.querySelector("#stats1_def").value;
    let sp_atk1=document.querySelector("#stats1_sp_atk").value;
    let sp_def1=document.querySelector("#stats1_sp_def").value;
    let speed1=document.querySelector("#stats1_speed").value;

    if(hp1===""||atk1===""||def1===""||sp_atk1===""||sp_def1===""||speed1===""){
        if(firstpokemon){
            $("#firstpoke").before("<p class='error'>error! you need fill in all the attack pokemon data</p>");
            firstpokemon=false;
        }
        event.preventDefault();
    }
    else{
        $("p:contains('all the attack pokemon data')").remove();
        firstpokemon=true;
    }
    if(parseInt(hp1)<=0||parseInt(atk1)<=0||parseInt(def1)<=0||parseInt(sp_def1)<=0||parseInt(sp_atk1)<=0||parseInt(speed1)<=0){
        if(firstnag){
            $("#firstpoke").before("<p class='error'>error! Attack pokemon data must be positive</p>");
            firstnag=false;
        }
        event.preventDefault();
    }
    else{
        $("p:contains('Attack pokemon data must be positive')").remove();
        firstnag=true;
    }
 }
 function defcheckForm(event){
    let hp2 = document.querySelector("#stats2_hp").value;
    let atk2=document.querySelector("#stats2_atk").value;
    let def2=document.querySelector("#stats2_def").value;
    let sp_atk2=document.querySelector("#stats2_sp_atk").value;
    let sp_def2=document.querySelector("#stats2_sp_def").value;
    let speed2=document.querySelector("#stats2_speed").value;
    if(hp2===""||atk2===""||def2===""||sp_atk2===""||sp_def2===""||speed2===""){
        if(secondpokemon){
            $("#secondpokemon").before("<p class='error'>error! you need fill in all the defend pokemon data</p>");
            secondpokemon=false;
        }
        event.preventDefault();
    }
    else{
        $("p:contains('all the defend pokemon data')").remove();
        secondpokemon=true;
    }
    if(parseInt(hp2)<=0||parseInt(atk2)<=0||parseInt(def2)<=0||parseInt(sp_def2)<=0||parseInt(sp_atk2)<=0||parseInt(speed2)<=0){
        if(secondnag){
            $("#secondpokemon").before("<p class='error'>error! Defend pokemon data must be positive</p>");
            secondnag=false;
        }
        event.preventDefault();
    }
    else{
        $("p:contains('Defend pokemon data must be positive')").remove();
        secondnag=true;
    }
 }
 let $menu = $("#return_menu");
$menu.click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/yichengwang";
});
 $("#firstpoke").keyup(atkcheckForm);
 $("#firstpoke").click(atkcheckForm);
 $("#secondpokemon").click(defcheckForm);
 $("#secondpokemon").keyup(defcheckForm);
