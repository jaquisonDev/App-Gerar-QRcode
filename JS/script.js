const btnGenerater = document.getElementById("btn-generater");
const area_qrcode = document.getElementById("qrcode");
const text = document.getElementById("text");
const modal = document.querySelector(".modal");
const title = document.querySelector(".title");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

const imageClickDownload = (qrCode, showValue) => {
  setTimeout(() => {
    modal.style.display = "flex";
    title.innerHTML = "Você deseja fazer download?";
    btnYes.style.display = "flex";
    btnNo.style.display = "flex";

    btnYes.addEventListener("click", async () => {
      await fetch(qrCode)
        .then((res) => res.blob())
        .then((blob) => {
          const file = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = file;
          a.download = "qrcode.png";
          a.click();
        });

      modal.style.display = "none";
    });

    btnNo.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }, showValue);
};

btnGenerater.addEventListener("click", () => {
  if (!text.value) {
    btnGenerater.focus();
    btnGenerater.innerHTML = "⚠️ Você deve digitar algum texto ⚠️";
    btnGenerater.style.backgroundColor = "#FF6347";
    return;
  }

  let qrCode = "";

  modal.style.display = "flex";
  title.innerHTML = "Gerando QRCode...";
  btnYes.style.display = "none";
  btnNo.style.display = "none";

  setTimeout(() => {
    modal.style.display = "none";

    let generateQrcode = `https://quickchart.io/qr?text=${text.value}`;
    area_qrcode.src = generateQrcode;
    qrCode = generateQrcode;
  }, 5000);

  imageClickDownload(qrCode, 6000);

  area_qrcode.addEventListener("click", () => {
    if (qrCode !== "") {
      imageClickDownload(qrCode, 0);
    }

    return;
  });
});
