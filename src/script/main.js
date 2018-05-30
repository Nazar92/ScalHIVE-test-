// circle
function circleON () {
  document.getElementById("overlayCircle").style.display = "block";
}
function circleOFF () {
  document.getElementById("overlayCircle").style.display = "none";
}

// Rectangle
function RectangleON () {
  document.getElementById("overlayRectangle").style.display = "block";
}
function RectangleOFF () {
  document.getElementById("overlayRectangle").style.display = "none";
}

// Square
function SquareON () {
  document.getElementById("overlaySquare").style.display = "block";
}
function SquareOFF () {
  document.getElementById("overlaySquare").style.display = "none";
}

// Triangle
function TriangleON () {
  document.getElementById("overlayTriangle").style.display = "block";
}
function TriangleOFF () {
  document.getElementById("overlayTriangle").style.display = "none";
}


///////////////////////////////////////////Domino section/////////////////////////////////////////////////
function Random() {
  var  
    a=Math.round(Math.random()*27)
    image = new Array();
    image[0]="/madia/domino-1.png"
    image[1]="/madia/domino-2.png"
    image[2]="/madia/domino-3.png"
    image[3]="/madia/domino-4.png"
    image[4]="/madia/domino-5.png"
    image[5]="/madia/domino-6.png"
    image[6]="/madia/domino-7.png"
    image[7]="/madia/domino-8.png"
    image[8]="/madia/domino-9.png"
    image[9]="/madia/domino-10.png"
    image[10]="/madia/domino-11.png"
    image[11]="/madia/domino-12.png"
    image[12]="/madia/domino-13.png"
    image[13]="/madia/domino-14.png"
    image[14]="/madia/domino-15.png"
    image[15]="/madia/domino-16.png"
    image[16]="/madia/domino-17.png"
    image[17]="/madia/domino-18.png"
    image[18]="/madia/domino-19.png"
    image[19]="/madia/domino-20.png"
    image[20]="/madia/domino-21.png"
    image[21]="/madia/domino-22.png"
    image[22]="/madia/domino-23.png"
    image[23]="/madia/domino-24.png"
    image[24]="/madia/domino-25.png"
    image[25]="/madia/domino-26.png"
    image[26]="/madia/domino-27.png"
  
  domino.innerHTML = ("<img src="+image[a]+">");
  
  
}
  reset.onclick

////////////////////////////////////////////////////////// <!-- ROTATE -->////////////////////////////
/////////////////////////////////////////////////////////// <!-- LEFT -->
document.getElementById('left').onclick = turnLeft;

function turnLeft() {
  var Left = document.getElementById('domino');
  Left.style.transform = 'rotate(-90deg)';
}


//////////////////////////////////////////////////////////// <!-- RIGHT -->
document.getElementById('right').onclick = turnRight;

function turnRight() {
  var Right = document.getElementById('domino');
  Right.style.transform = 'rotate(+90deg)';
}



////////////////////////////////////////////////////////////Size + Rotation
function dominoSize() {
  var rng=document.getElementById('dominoSize');
  var domino=document.getElementById('domino');
   domino.style.width=rng.value+'9px';
}
///////////////////////////////////////Transition speed/////
function dominoRotationSpeed() {
   var tran=document.getElementById('dominoRotationSpeed');
   var dominor=document.getElementById('domino');
  dominor.style.transition=tran.value+'1ms ease all';
}
