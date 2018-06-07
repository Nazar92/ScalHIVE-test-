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
    imageW = new Array();
    imageW[0]="/madia/domino-1.png"
    imageW[1]="/madia/domino-2.png"
    imageW[2]="/madia/domino-3.png"
    imageW[3]="/madia/domino-4.png"
    imageW[4]="/madia/domino-5.png"
    imageW[5]="/madia/domino-6.png"
    imageW[6]="/madia/domino-7.png"
    imageW[7]="/madia/domino-8.png"
    imageW[8]="/madia/domino-9.png"
    imageW[9]="/madia/domino-10.png"
    imageW[10]="/madia/domino-11.png"
    imageW[11]="/madia/domino-12.png"
    imageW[12]="/madia/domino-13.png"
    imageW[13]="/madia/domino-14.png"
    imageW[14]="/madia/domino-15.png"
    imageW[15]="/madia/domino-16.png"
    imageW[16]="/madia/domino-17.png"
    imageW[17]="/madia/domino-18.png"
    imageW[18]="/madia/domino-19.png"
    imageW[19]="/madia/domino-20.png"
    imageW[20]="/madia/domino-21.png"
    imageW[21]="/madia/domino-22.png"
    imageW[22]="/madia/domino-23.png"
    imageW[23]="/madia/domino-24.png"
    imageW[24]="/madia/domino-25.png"
    imageW[25]="/madia/domino-26.png"
    imageW[26]="/madia/domino-27.png"
  
    domino.innerHTML = ("<img src="+imageW[a]+">");
  
  var 
    b=Math.round(Math.random()*28)
    imageB = new Array();
    imageB[0]="/madia/black-1.png"
    imageB[1]="/madia/black-2.png"
    imageB[2]="/madia/black-3.png"
    imageB[3]="/madia/black-4.png"
    imageB[4]="/madia/black-5.png"
    imageB[5]="/madia/black-6.png"
    imageB[6]="/madia/black-7.png"
    imageB[7]="/madia/black-8.png"
    imageB[8]="/madia/black-9.png"
    imageB[9]="/madia/black-10.png"
    imageB[10]="/madia/black-11.png"
    imageB[11]="/madia/black-12.png"
    imageB[12]="/madia/black-13.png"
    imageB[13]="/madia/black-14.png"
    imageB[14]="/madia/black-15.png"
    imageB[15]="/madia/black-16.png"
    imageB[16]="/madia/black-17.png"
    imageB[17]="/madia/black-18.png"
    imageB[18]="/madia/black-19.png"
    imageB[19]="/madia/black-20.png"
    imageB[20]="/madia/black-21.png"
    imageB[21]="/madia/black-22.png"
    imageB[22]="/madia/black-23.png"
    imageB[23]="/madia/black-24.png"
    imageB[24]="/madia/black-25.png"
    imageB[25]="/madia/black-26.png"
    imageB[26]="/madia/black-27.png"
    imageB[27]="/madia/black-28.png"

    domino.innerHTML = ("<img src="+imageB[b]+">")

    if (dominoType[0].selected) {
      domino.innerHTML = ("<img src="+imageW[a]+">"); 
    } else if (dominoType[1].selected) {
      domino.innerHTML = ("<img src="+imageB[b]+">"); 
    }
}


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


////////////////////////////////////////////////////////////Size + Rotation/////
function dominoSize() {
  var rng=document.getElementById('dominoSize');
  var domino=document.getElementById('domino');
   domino.style.width=rng.value+'9px';
}
//////////////////////////////////////////////////////////Transition speed/////
function dominoRotationSpeed() {
   var tran=document.getElementById('dominoRotationSpeed');
   var dominor=document.getElementById('domino');
  dominor.style.transition=tran.value+'1ms ease all';
}

////////////////////////////////////////////////////////////Reset//////////
function resetform() {
  Random();
}