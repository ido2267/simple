function init(){

    createElement();
}

function  createElement()
{
 for (var i = 0 ; i<9 ; i++){
    var newDiv = document.createElement("div");
    newDiv.className= "box";
  //  all_site.appendChild(newDiv);
   all_site.appendChild( newDiv);
   newDiv.innerHTML="Object through JavaScript";
 }
}