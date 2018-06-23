function init(){
    
    declareBtns();
}

function declareBtns(){
    console.log (img_id.src);
    idChangeBtn.onclick = onCchangeImgClick;
}

 function onCchangeImgClick(){
 
    img_id.src =retrnImg("file:///C:/Users/USER/projects/trainologic/simple/ofir.jpg","shaked.jpg" );
}

  function retrnImg(imgSrc,img1 ){
    var isSrc = (img_id.src == imgSrc);
     return isSrc? img1 :imgSrc;
  }