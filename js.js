document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const kucing = document.getElementById('kucing').value;

    const invoiceDetails = `
        <h3>Invoice</h3>
        <p>Nama: ${nama}</p>
        <p>Alamat: ${alamat}</p>
        <p>Email: ${email}</p>
        <p>No. Telepon: ${telepon}</p>
        <p>Kucing: ${kucing}</p>
    `;

    document.getElementById('invoiceDetails').innerHTML = invoiceDetails;
});
document.addEventListener('DOMContentLoaded', function() {
    const nama = sessionStorage.getItem('nama');
    const alamat = sessionStorage.getItem('alamat');
    const email = sessionStorage.getItem('email');
    const telepon = sessionStorage.getItem('telepon');
    const kucing = sessionStorage.getItem('kucing');

    document.getElementById('invoiceName').textContent = nama ? nama : 'Data tidak tersedia';
    document.getElementById('invoiceAddress').textContent = alamat ? alamat : 'Data tidak tersedia';
    document.getElementById('invoiceEmail').textContent = email ? email : 'Data tidak tersedia';
    document.getElementById('invoicePhone').textContent = telepon ? telepon : 'Data tidak tersedia';
    document.getElementById('invoiceCat').textContent = kucing ? kucing : 'Data tidak tersedia';

    // Hapus data dari sessionStorage setelah ditampilkan
    sessionStorage.removeItem('nama');
    sessionStorage.removeItem('alamat');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('telepon');
    sessionStorage.removeItem('kucing');
});

