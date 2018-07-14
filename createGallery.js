
var pic_ar;
var countPic;

function init(){
 pic_ar =["images/dice1.jpg","images/dice2.jpg","images/dice3.jpg","images/dice4.jpg"]  ;
 countPic = 0;
}

function onpic1Click(){
    big_pic.src="images/dice1.jpg";
 }
function onpic2Click(){
    big_pic.src="images/dice2.jpg";
}
function onpic3Click(){
    big_pic.src="images/dice3.jpg";
}
function onpic4Click(){
    big_pic.src="images/dice4.jpg";
}

function nextPic(){
    var limit = (countPic >= (pic_ar.length -1)  );
    if (limit) {
        countPic = 0;  
    }
    else{
        countPic++;
    }
 
    big_pic.src =  pic_ar[countPic] ;
}

function backPic(){
    var limit = (countPic <= 0 );
    if (limit) {
        countPic = 3;  
    }
    else{
        countPic--;
    }

    big_pic.src =  pic_ar[countPic] ;
}