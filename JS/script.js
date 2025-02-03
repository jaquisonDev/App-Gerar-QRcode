const btnGenerater = document.getElementById("btn-generater");
const area_qrcode = document.getElementById("qrcode");
const text = document.getElementById("text");
const dialog = document.getElementById("dialog");

btnGenerater.addEventListener("click", async () => {
  if (!text.value) {
    btnGenerater.focus();
    btnGenerater.innerHTML = "⚠️ Você deve digitar algum texto ⚠️";
    btnGenerater.style.backgroundColor = "#FF6347";
    return;
  }

  alert("QRCode gerado com sucesso!");

  let generateQrcode = `https://quickchart.io/qr?text=${text.value}`;

  area_qrcode.src = generateQrcode;

  dialog.innerHTML = "Gerou";
  dialog.showModal();

  // await fetch(generateQrcode)
  //   .then((res) => res.blob())
  //   .then((blob) => {
  //     const file = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = file;
  //     a.download = "qrcode.png";
  //     a.click();
  //   });
});
