const verifyCertificate = function () {
  // location.reload();
  const number = (document.getElementById('inputtext').value);
  // console.log(number);
  fetch('numbers.json')
    .then(response => response.json())
    .then(data => {
      if (data.includes(number)) {
        const container = document.getElementById('container');
        container.innerHTML = `✔️ <br>Valid Certificate`;
        container.style.fontSize = '10vmin';
        console.log(container);
        document.body.appendChild(container);
      }
      else {
        const container = document.getElementById('container');
        container.innerHTML = `❌ <br>Invalid Credentials`;
        container.style.fontSize = '10vmin';
      }
    });


}
