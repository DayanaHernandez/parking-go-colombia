const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];

// Open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside the content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Calcula la cantidad a pagar y la muestra en la casilla de "cantidad"
		document.getElementById("parking-time").addEventListener("input", function() {
			var parkingTime = parseInt(this.value);
			var amount = parkingTime * 2000; // 2000 pesos la hora 
			document.getElementById("amount").value = amount.toFixed(0);
		});



// https://codepen.io/Middi/pen/rJYOyz
// make a epayco account
