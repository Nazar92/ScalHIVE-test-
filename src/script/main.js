// circle
function circleON () {
  document.getElementById("overlayCircle").style.display = "block";
};
function circleOFF () {
  document.getElementById("overlayCircle").style.display = "none";
};

// Rectangle
function RectangleON () {
  document.getElementById("overlayRectangle").style.display = "block";
};
function RectangleOFF () {
  document.getElementById("overlayRectangle").style.display = "none";
};

// Square
function SquareON () {
  document.getElementById("overlaySquare").style.display = "block";
};
function SquareOFF () {
  document.getElementById("overlaySquare").style.display = "none";
};

// Triangle
function TriangleON () {
  document.getElementById("overlayTriangle").style.display = "block";
};
function TriangleOFF () {
  document.getElementById("overlayTriangle").style.display = "none";
};


////////////////////////////////////////////////Domino section/////////////////////////////////////////////////
window.onload=function() {
  Random();
  runBot();
};
/////////////////////////////////// Random function for TOP side domino //////////////////////////////////////
function Random() {
  var  
    a=Math.round(Math.random()*7)
    imageTop = new Array();
    imageTop[0]="/madia/domino-1.png"
    imageTop[1]="/madia/domino-2.png"
    imageTop[2]="/madia/domino-3.png"
    imageTop[3]="/madia/domino-4.png"
    imageTop[4]="/madia/domino-5.png"
    imageTop[5]="/madia/domino-6.png"
    imageTop[6]="/madia/domino-7.png"
    
    dominoTop.innerHTML = ("<img src="+imageTop[a]+">");
};
/////////////////////////////////// Random function for BOTTOM side domino ///////////////////////////////////
function runBot() {
  var 
    b=Math.round(Math.random()*7)
    imageBottom = new Array();
    imageBottom[0]="/madia/domino-8.png"
    imageBottom[1]="/madia/domino-9.png"
    imageBottom[2]="/madia/domino-10.png"
    imageBottom[3]="/madia/domino-11.png"
    imageBottom[4]="/madia/domino-12.png"
    imageBottom[5]="/madia/domino-13.png"
    imageBottom[6]="/madia/domino-14.png"
  
  dominoBottom.innerHTML = ("<img src="+imageBottom[b]+">");
};


//////////////////////////////////////////////////////////// Selected = top or bottom /////////////////////////
function Sel() {
  if (dominoType[0].selected) {
    dominoPosition.style="display:block";
  } else if (dominoType[1].selected) {
    dominoPosition.style="display:block";
  }
};

function downTop(Sel) {
  if (dominoType[0].selected) {
    if (dominoPositionSel[0].selected) {
      dominoTop.innerHTML = ("<img src="+imageTop[0]+">"); 
      } else if (dominoPositionSel[1].selected) {
        dominoTop.innerHTML = ("<img src="+imageTop[1]+">");  
      } else if (dominoPositionSel[2].selected) {
        dominoTop.innerHTML = ("<img src="+imageTop[2]+">");  
      } else if (dominoPositionSel[3].selected) {
        dominoTop.innerHTML = ("<img src="+imageTop[3]+">");  
      } else if (dominoPositionSel[4].selected) {
        dominoTop.innerHTML = ("<img src="+imageTop[4]+">");  
      } else if (dominoPositionSel[5].selected) {
        dominoTop.innerHTML = ("<img src="+imageTop[5]+">");  
      } else if (dominoPositionSel[6].selected) {
        dominoTop.innerHTML = ("<img src="+imageTop[6]+">");  
      }
  } else if (dominoType[1].selected) {
    if (dominoPositionSel[0].selected) {
      dominoBottom.innerHTML = ("<img src="+imageBottom[0]+">"); 
      } else if (dominoPositionSel[1].selected) {
        dominoBottom.innerHTML = ("<img src="+imageBottom[1]+">");  
      } else if (dominoPositionSel[2].selected) {
        dominoBottom.innerHTML = ("<img src="+imageBottom[2]+">");  
      } else if (dominoPositionSel[3].selected) {
        dominoBottom.innerHTML = ("<img src="+imageBottom[3]+">");  
      } else if (dominoPositionSel[4].selected) {
        dominoBottom.innerHTML = ("<img src="+imageBottom[4]+">");  
      } else if (dominoPositionSel[5].selected) {
        dominoBottom.innerHTML = ("<img src="+imageBottom[5]+">");  
      } else if (dominoPositionSel[6].selected) {
        dominoBottom.innerHTML = ("<img src="+imageBottom[6]+">");  
      }
  }  
};

////////////////////////////////////////////////////////// <!-- ROTATE -->///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// <!-- LEFT -->////////////
document.getElementById('left').onclick = turnLeft;
function turnLeft() {
  var Left = document.getElementById('domino');
  Left.style.transform = 'rotate(-90deg)';
}

//////////////////////////////////////////////////////////// <!-- RIGHT -->//////////
document.getElementById('right').onclick = turnRight;
function turnRight() {
  var Right = document.getElementById('domino');
  Right.style.transform = 'rotate(+90deg)';
}

////////////////////////////////////////////////////////////Size + Rotation//////////
function dominoSize() {
  var rng=document.getElementById('dominoSize');
  var domino=document.getElementById('domino');
   domino.style.width=rng.value+'2px';
  // domino.style.scale=rng.value+'1dec';
}

//////////////////////////////////////////////////////////Transition speed///////////
function dominoRotationSpeed() {
   var tran=document.getElementById('dominoRotationSpeed');
   var dominor=document.getElementById('domino');
  dominor.style.transition=tran.value+'1ms ease all';
}

////////////////////////////////////////////////////////////Reset button//////////////
function reset() {
  location.reload();
}
function resetform() {
  reset();
}