//init
var winnerTracker=[
  [0,0,0],
  [0,0,0],
  [0,0,0],

  ]

  var clicked=[
    [0,0,0],
    [0,0,0],
    [0,0,0],

    ]

//process

var whoClicked = 1
var allBox = $('td')
var clickCount = 0
var clickCount2 = 0
var clickCounter = 0


// $("td").on("click",function(){
// whoWas()
// clickCount++
//
// })

//clear all
$('#btn').on('click', function (){
  console.log("restarted");
  $('td').text('').css("background","white")
$("h4").text("").css("background", "white");
  whoClicked=1
  winnerTracker=[
    [0,0,0],
    [0,0,0],
    [0,0,0],

    ]

clicked=[
      [0,0,0],
      [0,0,0],
      [0,0,0],]

})

//track clicks and update array

//listen for cell00
$("#one1").on("click",function(){
//check player ID for "X"and if cell has been clicked
  if (whoClicked%2===0 && clicked[0][0]===0){
    whoClicked++
    clicked[0][0] = 1
    winnerTracker[0][0]=1
//change cell to ble for X
$("#one1").text('X').css("background","Blue")

//check if there is a winner or if game has ended
winner(); gameOver();

//implement same for player "O"
}else if (whoClicked%2===1 && clicked[0][0]===0) {

    whoClicked++
    clicked[0][0] = 1
    winnerTracker[0][0]=5
$("#one1").text('O').css("background","Red")
winner(); gameOver();
}})

//Do the same for the remaining 8 cells

$("#one2").on("click",function(){
  if (whoClicked%2===0 && clicked[0][1]===0){
    whoClicked++
    clicked[0][1] = 1
    winnerTracker[0][1]=1
$("#one2").text('X').css("background","Blue")


console.log(winnerTracker);
winner(); gameOver();
}else if (whoClicked%2===1 && clicked[0][1]===0) {

    whoClicked++
    clicked[0][1] = 1
    winnerTracker[0][1]=5
$("#one2").text('O').css("background","Red")
winner(); gameOver();
}})

$("#one3").on("click",function(){
  if (whoClicked%2===0 && clicked[0][2]===0){
    whoClicked++
    clicked[0][2] = 1
    winnerTracker[0][2]=1
$("#one3").text('X').css("background","Blue")


console.log(winnerTracker);
winner(); gameOver();
}else if (whoClicked%2===1 && clicked[0][2]===0) {

    whoClicked++
    clicked[0][2] = 1
    winnerTracker[0][2]=5
$("#one3").text('O').css("background","Red")
winner(); gameOver();
}})

$("#two1").on("click",function(){
  if (whoClicked%2===0 && clicked[1][0]===0){
    whoClicked++
    clicked[1][0] = 1
    winnerTracker[1][0]=1
$("#two1").text('X').css("background","Blue")


console.log(winnerTracker);
winner(); gameOver();
}else if (whoClicked%2===1 && clicked[1][0]===0) {

    whoClicked++
    clicked[1][0] = 1
    winnerTracker[1][0]=5
$("#two1").text('O').css("background","Red")
winner(); gameOver();
}})



$("#two2").on("click",function(){
  if (whoClicked%2===0 && clicked[1][1]===0){
    whoClicked++
    clicked[1][1] = 1
    winnerTracker[1][1]=1
$("#two2").text('X').css("background","Blue")


console.log(winnerTracker);
winner(); gameOver();
}else if (whoClicked%2===1 && clicked[1][1]===0) {

    whoClicked++
    clicked[1][1] = 1
    winnerTracker[1][1]=5
$("#two2").text('O').css("background","Red")
winner(); gameOver();
}})


$("#two3").on("click",function(){
  if (whoClicked%2===0 && clicked[1][2]===0){
    whoClicked++
    clicked[1][2] = 1
    winnerTracker[1][2]=1
$("#two3").text('X').css("background","Blue")


console.log(winnerTracker);
winner(); gameOver();
}else if (whoClicked%2===1 && clicked[1][2]===0) {

    whoClicked++
    clicked[1][2] = 1
    winnerTracker[1][2]=5
$("#two3").text('O').css("background","Red")
winner(); gameOver();
}})

$("#three1").on("click",function(){
  if (whoClicked%2===0 && clicked[2][0]===0){
    whoClicked++
    clicked[2][0] = 1
    winnerTracker[2][0]=1
$("#three1").text('X').css("background","Blue")


console.log(winnerTracker);
winner(); gameOver();
}else if (whoClicked%2===1 && clicked[2][0]===0) {

    whoClicked++
    clicked[2][0] = 1
    winnerTracker[2][0]=5
$("#three1").text('O').css("background","Red")
winner(); gameOver();
}})

$("#three2").on("click",function(){
  if (whoClicked%2===0 && clicked[2][1]===0){
    whoClicked++
    clicked[2][1] = 1
    winnerTracker[2][1]=1
$("#three2").text('X').css("background","Blue")


console.log(winnerTracker);
winner(); gameOver();
}else if (whoClicked%2===1 && clicked[2][1]===0) {

    whoClicked++
    clicked[2][1] = 1
    winnerTracker[2][1]=5
$("#three2").text('O').css("background","Red")
winner(); gameOver();
}})

$("#three3").on("click",function(){
  if (whoClicked%2===0 && clicked[2][2]===0){
    whoClicked++
    clicked[2][2] = 1
    winnerTracker[2][2]=1
$("#three3").text('X').css("background","Blue")


console.log(winnerTracker);
winner(); gameOver();
}else if (whoClicked%2===1 && clicked[2][2]===0) {

    whoClicked++
    clicked[2][2] = 1
    winnerTracker[2][2]=5
$("#three3").text('O').css("background","Red")
winner(); gameOver();
}})

//check winner
function winner() {
if (winnerTracker[0][0]+winnerTracker[0][1]+winnerTracker[0][2]===3||winnerTracker[1][0]+winnerTracker[1][1]+winnerTracker[1][2]===3||winnerTracker[2][0]+winnerTracker[2][1]+winnerTracker[2][2]===3||winnerTracker[0][0]+winnerTracker[1][0]+winnerTracker[2][0]===3){
  $("h4").text("X has won").css("color", "blue");
  endGame()

}
else if (winnerTracker[0][1]+winnerTracker[1][1]+winnerTracker[2][1]===3||winnerTracker[0][2]+winnerTracker[1][2]+winnerTracker[2][2]===3||winnerTracker[0][0]+winnerTracker[1][1]+winnerTracker[2][2]===3||winnerTracker[0][2]+winnerTracker[1][1]+winnerTracker[2][0]===3){
  $("h4").text("X has won").css("color", "blue");
endGame()
}
else if (winnerTracker[0][0]+winnerTracker[0][1]+winnerTracker[0][2]===15||winnerTracker[1][0]+winnerTracker[1][1]+winnerTracker[1][2]===15||winnerTracker[2][0]+winnerTracker[2][1]+winnerTracker[2][2]===15||winnerTracker[0][0]+winnerTracker[1][0]+winnerTracker[2][0]===15){
$("h4").text("O has won").css("color", "red");
endGame()
}
else if (winnerTracker[0][1]+winnerTracker[1][1]+winnerTracker[2][1]===15||winnerTracker[0][2]+winnerTracker[1][2]+winnerTracker[2][2]===15||winnerTracker[0][0]+winnerTracker[1][1]+winnerTracker[2][2]===15||winnerTracker[0][2]+winnerTracker[1][1]+winnerTracker[2][0]===15){
$("h4").text("O has won").css("color", "red");
endGame()
}
}

// check Game over
function gameOver() {

if (whoClicked===10){
    $("h4").text("No winner. Click - Start Over - to play again").css("color", "purple");}}

//End game after victory.
function endGame() {
//record all as clicked
  clicked=[
        [1,1,1],
        [1,1,1],
        [1,1,1],]

}
