 //declare variables
 let $about = $("#about");
 let $stat_calculator = $("#stat_calculator");
 let $iv_calculator = $("#iv_calculator");
 let $damage_calculator = $("#damage_calculator");
 let $design_pokemon = $("#design_pokemon");



$about.click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/yichengwang";
});
$design_pokemon.click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/design_pokemon";
});
$stat_calculator.click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/xingyuzhu";
});
$iv_calculator.click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/yiquanxiao";
});
$damage_calculator.click(function() {
    window.location.href = "https://quiet-beyond-13399.herokuapp.com/weiqiwang";
});