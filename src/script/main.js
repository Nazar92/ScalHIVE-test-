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
//   // Random();
  runBot();
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
      dominoItemImgTop1.style="opacity:0";
      dominoItemImgTop2.style="opacity:0";
      dominoItemImgTop3.style="opacity:0";
      dominoItemImgTop4.style="opacity:0";
      dominoItemImgTop5.style="opacity:0";
      dominoItemImgTop6.style="opacity:0";
      dominoItemImgTop7.style="opacity:0";
      dominoItemImgTop8.style="opacity:0";
      dominoItemImgTop9.style="opacity:0";
    } else if (dominoPositionSel[1].selected) {
      dominoItemImgTop1.style="opacity:0";
      dominoItemImgTop2.style="opacity:0";
      dominoItemImgTop3.style="opacity:0";
      dominoItemImgTop4.style="opacity:0";
      dominoItemImgTop5.style="opacity:1";
      dominoItemImgTop6.style="opacity:0";
      dominoItemImgTop7.style="opacity:0";
      dominoItemImgTop8.style="opacity:0";
      dominoItemImgTop9.style="opacity:0";
    } else if (dominoPositionSel[2].selected) {
      dominoItemImgTop1.style="opacity:0";
      dominoItemImgTop2.style="opacity:0";
      dominoItemImgTop3.style="opacity:1";
      dominoItemImgTop4.style="opacity:0";
      dominoItemImgTop5.style="opacity:0";
      dominoItemImgTop6.style="opacity:0";
      dominoItemImgTop7.style="opacity:1";
      dominoItemImgTop8.style="opacity:0";
      dominoItemImgTop9.style="opacity:0";
    } else if (dominoPositionSel[3].selected) {
      dominoItemImgTop1.style="opacity:0";
      dominoItemImgTop2.style="opacity:0";
      dominoItemImgTop3.style="opacity:1";
      dominoItemImgTop4.style="opacity:0";
      dominoItemImgTop5.style="opacity:1";
      dominoItemImgTop6.style="opacity:0";
      dominoItemImgTop7.style="opacity:1";
      dominoItemImgTop8.style="opacity:0";
      dominoItemImgTop9.style="opacity:0";
    } else if (dominoPositionSel[4].selected) {
      dominoItemImgTop1.style="opacity:1";
      dominoItemImgTop2.style="opacity:0";
      dominoItemImgTop3.style="opacity:1";
      dominoItemImgTop4.style="opacity:0";
      dominoItemImgTop5.style="opacity:0";
      dominoItemImgTop6.style="opacity:0";
      dominoItemImgTop7.style="opacity:1";
      dominoItemImgTop8.style="opacity:0";
      dominoItemImgTop9.style="opacity:1";
    } else if (dominoPositionSel[5].selected) {
      dominoItemImgTop1.style="opacity:1";
      dominoItemImgTop2.style="opacity:0";
      dominoItemImgTop3.style="opacity:1";
      dominoItemImgTop4.style="opacity:0";
      dominoItemImgTop5.style="opacity:1";
      dominoItemImgTop6.style="opacity:0";
      dominoItemImgTop7.style="opacity:1";
      dominoItemImgTop8.style="opacity:0";
      dominoItemImgTop9.style="opacity:1";
    } else if (dominoPositionSel[6].selected) {
      dominoItemImgTop1.style="opacity:1";
      dominoItemImgTop2.style="opacity:0";
      dominoItemImgTop3.style="opacity:1";
      dominoItemImgTop4.style="opacity:1";
      dominoItemImgTop5.style="opacity:0";
      dominoItemImgTop6.style="opacity:1";
      dominoItemImgTop7.style="opacity:1";
      dominoItemImgTop8.style="opacity:0";
      dominoItemImgTop9.style="opacity:1";
    }
  } else if (dominoType[1].selected) {
    if (dominoPositionSel[0].selected) {
      dominoItemImgBottom1.style="opacity:0";
      dominoItemImgBottom2.style="opacity:0";
      dominoItemImgBottom3.style="opacity:0";
      dominoItemImgBottom4.style="opacity:0";
      dominoItemImgBottom5.style="opacity:0";
      dominoItemImgBottom6.style="opacity:0";
      dominoItemImgBottom7.style="opacity:0";
      dominoItemImgBottom8.style="opacity:0";
      dominoItemImgBottom9.style="opacity:0";
    } else if (dominoPositionSel[1].selected) {
      dominoItemImgBottom1.style="opacity:0";
      dominoItemImgBottom2.style="opacity:0";
      dominoItemImgBottom3.style="opacity:0";
      dominoItemImgBottom4.style="opacity:0";
      dominoItemImgBottom5.style="opacity:1";
      dominoItemImgBottom6.style="opacity:0";
      dominoItemImgBottom7.style="opacity:0";
      dominoItemImgBottom8.style="opacity:0";
      dominoItemImgBottom9.style="opacity:0";
    } else if (dominoPositionSel[2].selected) {
      dominoItemImgBottom1.style="opacity:0";
      dominoItemImgBottom2.style="opacity:0";
      dominoItemImgBottom3.style="opacity:1";
      dominoItemImgBottom4.style="opacity:0";
      dominoItemImgBottom5.style="opacity:0";
      dominoItemImgBottom6.style="opacity:0";
      dominoItemImgBottom7.style="opacity:1";
      dominoItemImgBottom8.style="opacity:0";
      dominoItemImgBottom9.style="opacity:0";
    } else if (dominoPositionSel[3].selected) {
      dominoItemImgBottom1.style="opacity:0";
      dominoItemImgBottom2.style="opacity:0";
      dominoItemImgBottom3.style="opacity:1";
      dominoItemImgBottom4.style="opacity:0";
      dominoItemImgBottom5.style="opacity:1";
      dominoItemImgBottom6.style="opacity:0";
      dominoItemImgBottom7.style="opacity:1";
      dominoItemImgBottom8.style="opacity:0";
      dominoItemImgBottom9.style="opacity:0";
    } else if (dominoPositionSel[4].selected) {
      dominoItemImgBottom1.style="opacity:1";
      dominoItemImgBottom2.style="opacity:0";
      dominoItemImgBottom3.style="opacity:1";
      dominoItemImgBottom4.style="opacity:0";
      dominoItemImgBottom5.style="opacity:0";
      dominoItemImgBottom6.style="opacity:0";
      dominoItemImgBottom7.style="opacity:1";
      dominoItemImgBottom8.style="opacity:0";
      dominoItemImgBottom9.style="opacity:1";
    } else if (dominoPositionSel[5].selected) {
      dominoItemImgBottom1.style="opacity:1";
      dominoItemImgBottom2.style="opacity:0";
      dominoItemImgBottom3.style="opacity:1";
      dominoItemImgBottom4.style="opacity:0";
      dominoItemImgBottom5.style="opacity:1";
      dominoItemImgBottom6.style="opacity:0";
      dominoItemImgBottom7.style="opacity:1";
      dominoItemImgBottom8.style="opacity:0";
      dominoItemImgBottom9.style="opacity:1";
    } else if (dominoPositionSel[6].selected) {
      dominoItemImgBottom1.style="opacity:1";
      dominoItemImgBottom2.style="opacity:0";
      dominoItemImgBottom3.style="opacity:1";
      dominoItemImgBottom4.style="opacity:1";
      dominoItemImgBottom5.style="opacity:0";
      dominoItemImgBottom6.style="opacity:1";
      dominoItemImgBottom7.style="opacity:1";
      dominoItemImgBottom8.style="opacity:0";
      dominoItemImgBottom9.style="opacity:1";
    }
    // if (dominoPositionSel[0].selected) {
    //   dominoTop.innerHTML = ("<img src="+imageTop[0]+">"); 
    //   } else if (dominoPositionSel[1].selected) {
    //     dominoTop.innerHTML = ("<img src="+imageTop[1]+">");  
    //   } else if (dominoPositionSel[2].selected) {
    //     dominoTop.innerHTML = ("<img src="+imageTop[2]+">");  
    //   } else if (dominoPositionSel[3].selected) {
    //     dominoTop.innerHTML = ("<img src="+imageTop[3]+">");  
    //   } else if (dominoPositionSel[4].selected) {
    //     dominoTop.innerHTML = ("<img src="+imageTop[4]+">");  
    //   } else if (dominoPositionSel[5].selected) {
    //     dominoTop.innerHTML = ("<img src="+imageTop[5]+">");  
    //   } else if (dominoPositionSel[6].selected) {
    //     dominoTop.innerHTML = ("<img src="+imageTop[6]+">");  
    //   }
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
  var domino=document.getElementById('dominoListIMG');
  domino.style.width=rng.value+"1px";
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