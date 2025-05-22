// Kalkulator Harga Desain
const designType = document.getElementById('designType');
const quantity = document.getElementById('quantity');
const total = document.getElementById('total');

function updateTotal() {
  let price = 0;
  switch (designType.value) {
    case 'logo': price = 150000; break;
    case 'poster': price = 100000; break;
    case 'feed': price = 75000; break;
  }
  const qty = parseInt(quantity.value) || 1;
  total.textContent = 'Rp' + (price * qty).toLocaleString('id-ID');
}

designType.addEventListener('change', updateTotal);
quantity.addEventListener('input', updateTotal);
updateTotal();

// Formulir Kirim via WhatsApp
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if(!name || !message) {
    alert('Mohon isi semua data dengan lengkap!');
    return;
  }

  const whatsappMessage = `Halo, saya ${name} ingin memesan jasa desain: ${service}. Detail: ${message}`;
  const whatsappUrl = 'https://wa.me/6281234567890?text=' + encodeURIComponent(whatsappMessage);

  window.open(whatsappUrl, '_blank');
});
