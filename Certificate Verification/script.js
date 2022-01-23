

const verifyCertificate = function () {
  // location.reload();
  const number = (document.getElementById('inputtext').value);
  // console.log(number);
  fetch('numbers.json')
    .then(response => response.json())
    .then(data => {
      if (data.includes(number)) {
        const container = document.getElementById('validation-box');
        container.innerText = `✅ Verified`;
        container.style.fontSize = '15vmin';
        console.log(container);
        document.body.appendChild(container);
      }
      else {
        const container = document.getElementById('validation-box');
        container.innerHTML = `❌ <br>Not Verified`;
        container.style.fontSize = '15vmin';
      }
    });


}
