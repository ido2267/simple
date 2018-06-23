function init(){

    id_h3.innerHTML = "<strong>New js message</strong>";
    id_h3.style.color="red";
    img_id.width=500;
   // img_id.src="ofir.jpg"
}

 function changeImg(){
/*
    if (img_id.src == "file:///C:/Users/USER/projects/trainologic/simple/ofir.jpg") {
        
        img_id.src = "shaked.jpg";

    }
    else
    {  
        img_id.src="ofir.jpg";

    } */
    img_id.src =retrnImg("file:///C:/Users/USER/projects/trainologic/simple/ofir.jpg","shaked.jpg" );
}

  function retrnImg(imgSrc,img1 ){
    var isSrc = (img_id.src == imgSrc);
     return isSrc? img1 :imgSrc;
  }