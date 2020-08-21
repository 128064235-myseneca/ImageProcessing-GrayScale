var img;
var imgData;
var canvas1;
var canvas2;
var ctx;
function draw() {
    canvas1 = document.getElementById('myCanvas1');
    canvas2 = document.getElementById('myCanvas2');
    ctx1 = canvas1.getContext('2d');
    ctx2 = canvas2.getContext('2d');
    img = new Image();
    img.onload = function() {
        canvas1.height = img.height;
        canvas1.width = img.width;
        canvas2.height = img.height;
        canvas2.width = img.width;
        ctx1.drawImage(img, 0, 0);
        imgData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
        convertGrey();
        ctx2.putImageData(imgData,0,0);
//        console.log(ctx);
    };  
    
    img.src = 'img/Shubham.jpg';
//    console.log(img);
    
}

function convertGrey(){
    var temp = 0;
    for(var i=0;i<imgData.data.length;i+=4){
        temp = Math.floor((0.299*imgData.data[i]+0.587*imgData.data[i+1]+0.114*imgData.data[i+2]));
//        console.log(temp);
        imgData.data[i] = temp;
        imgData.data[i+1] = temp;
        imgData.data[i+2] = temp;
    }
    console.log(imgData);
}