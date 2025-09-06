let urlInput = document.getElementById("urlInput");
let generateBtn = document.getElementById("generateBtn");
let qrCodeImg = document.getElementById("qrCodeImg");
let qrImageContainer = document.getElementById("qrImageContainer");
let downloadBtn = document.getElementById("downloadBtn");
let shareBtn = document.getElementById("shareBtn");

let img;

// generate QR image
generateBtn.addEventListener("click", function() {
        if(img && qrImageContainer.contains(img) ){
                qrImageContainer.removeChild(img);
        }

     QRCode.toDataURL(urlInput.value, function (err, url) {
        if (err) throw err;
        img = document.createElement("img");
        img.src = url;
        img.className = "sm:w-64 sm:h-64 w-40 h-40";
        qrImageContainer.appendChild(img);
        });  
});


// download QR image
downloadBtn.addEventListener("click", function() {
    if (img) {
        let link = document.createElement("a");
        link.href = img.src;
        link.download = "qrcode.png";
        link.click();
     }
});

// share QR image
shareBtn.addEventListener("click",async function() {
    if (img && navigator.share) {
        const blob = await (await fetch(img.src)).blob();
        const file = new File([blob], "qrcode.png", { type: "image/png" });

        navigator.share({
          title: "QR Code",
          text: "Here is your QR image.",
          files: [file]
        }).catch(err => console.log("Share canceled:", err));
    }       
});

