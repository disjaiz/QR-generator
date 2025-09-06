let urlInput = document.getElementById("urlInput");
let generateBtn = document.getElementById("generateBtn");
let qrCodeImg = document.getElementById("qrCodeImg");
let qrImageContainer = document.getElementById("qrImageContainer");

let img;

generateBtn.addEventListener("click", function() {
        if(img && qrImageContainer.contains(img) ){
                qrImageContainer.removeChild(img);
        }

     QRCode.toDataURL(urlInput.value, function (err, url) {
        if (err) throw err;
        img = document.createElement("img");
        img.src = url;
        img.className = "w-64 h-64";
        qrImageContainer.appendChild(img);
        });  
});
