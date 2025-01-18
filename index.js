let imgBox = document.getElementById("imgBox");
let QRImg = document.getElementById("qrImage");
let QRText = document.getElementById("qrText");
function genrateQR(){

    if(QRText.value.length > 0){
    QRImg.src  = 
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+QRText.value;

    imgBox.classList.add("show-img");
    }else
    {
        QRText.classList.add('error');
        setTimeout(()=>{
            QRText.classList.add('error');
        },1000);
    }
}