
let firstpokemon = true;
let firstnag = true;
let secondpokemon = true;
let secondnag = true;
let submit = false;


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
        submit = false;
        event.preventDefault();
    }
    else{
        $("p:contains('all the attack pokemon data')").remove();
        firstpokemon=true;
        submit = true;
    }
    if(parseInt(hp1)<=0||parseInt(atk1)<=0||parseInt(def1)<=0||parseInt(sp_def1)<=0||parseInt(sp_atk1)<=0||parseInt(speed1)<=0){
        if(firstnag){
            $("#firstpoke").before("<p class='error'>error! Attack pokemon data must be positive</p>");
            firstnag=false;
        }
        submit = false;
        event.preventDefault();
    }
    else{
        $("p:contains('Attack pokemon data must be positive')").remove();
        firstnag=true;
        submit = true;
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
        submit = false;
        event.preventDefault();
    }
    else{
        $("p:contains('all the defend pokemon data')").remove();
        secondpokemon=true;
        submit = true;
    }
    if(parseInt(hp2)<=0||parseInt(atk2)<=0||parseInt(def2)<=0||parseInt(sp_def2)<=0||parseInt(sp_atk2)<=0||parseInt(speed2)<=0){
        if(secondnag){
            $("#secondpokemon").before("<p class='error'>error! Defend pokemon data must be positive</p>");
            secondnag=false;
        }
        submit = false;
        event.preventDefault();
    }
    else{
        $("p:contains('Defend pokemon data must be positive')").remove();
        secondnag=true;
        submit = true;
    }
 }
 let $menu = $("#return_menu");
$menu.click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/yichengwang";
});

function modifyselect(){
    var list;
    $.ajax({
        url:"/pokemon",
        type:'GET',
        dataType: 'json', 
        async:false,
        success:function(data){
            list=data;
        }
    });
    var skilllist
    $.ajax({
        url:"/skill",
        type:'GET',
        dataType: 'json', 
        async:false,
        success:function(data){
            skilllist=data;
        }
    });
    $("option").remove();
    for(var i=0;i<list.length;i++){
        var option=$("<option></option>").text(list[i].Pokemon);
        $("#pokemon_select2").append(option);
    }
    for(var i=0;i<list.length;i++){
        var option=$("<option></option>").text(list[i].Pokemon);
        $("#pokemon_select1").append(option);
    }
    for(var i=0;i<skilllist.length;i++){
        var option=$("<option></option>").text(skilllist[i].Name);
        $("#skill").append(option);
    }
}
function showdetail(event){
        var skilllist
        $.ajax({
            url:"/skill",
            type:'GET',
            dataType: 'json', 
            async:false,
            success:function(data){
                skilllist=data;
            }
        });
        $("#skill_detail").empty();
        var index_chosen;
        for(var i=0;i<skilllist.length;i++){
            if(skilllist[i].Name==$("#skill").val()){
                index_chosen=i;
            }
        }
        var Name=$("<td></td>").text(skilllist[index_chosen].Name);
        $("#skill_detail").append(Name);
        var Type=$("<td></td>").text(skilllist[index_chosen].Type);
        $("#skill_detail").append(Type);
        var Power=$("<td></td>").text(skilllist[index_chosen].Power);
        $("#skill_detail").append(Power);
        var Category=$("<td></td>").text(skilllist[index_chosen].Category);
        $("#skill_detail").append(Category);
        var PP=$("<td></td>").text(skilllist[index_chosen].PP);
        $("#skill_detail").append(PP);
}

function damagecount(event){
        let atk1=document.querySelector("#stats1_atk").value;
        let def1=document.querySelector("#stats1_def").value;
        let sp_atk1=document.querySelector("#stats1_sp_atk").value;
        let sp_def1=document.querySelector("#stats1_sp_def").value;
        let atk2=document.querySelector("#stats2_atk").value;
        let def2=document.querySelector("#stats2_def").value;
        let sp_atk2=document.querySelector("#stats2_sp_atk").value;
        let sp_def2=document.querySelector("#stats2_sp_def").value;
        var skilllist
        $.ajax({
            url:"/skill",
            type:'GET',
            dataType: 'json', 
            async:false,
            success:function(data){
                skilllist=data;
            }
        });
        var index_chosen;
        for(var i=0;i<skilllist.length;i++){
            if(skilllist[i].Name==$("#skill").val()){
                index_chosen=i;
            }
        }
        if(skilllist[index_chosen].Category=="Physical"){
            var damage = ((2*100+10)/250*parseInt(atk1)/parseInt(def2)*parseInt(skilllist[index_chosen].Power)+2)*1;
            $("#damage_number").empty();
            var result = $("<td></td>").text(damage);
            var zero=$("<td></td>").text("0");
            if(isNaN(damage)){
                alert("error, you need give more data!");
                $("#damage_number").append(zero);
            }
            else{
                $("#damage_number").append(result);
            }
        }
}

 $("#firstpoke").keyup(atkcheckForm);
 $("#firstpoke").click(atkcheckForm);
 $("#secondpokemon").click(defcheckForm);
 $("#secondpokemon").keyup(defcheckForm);
 $("#skill").change(showdetail);
 $("#submit").click(damagecount);
 modifyselect();