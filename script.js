document.addEventListener('DOMContentLoaded', function() {
    const backgroundContainer = document.querySelector('.background-container');
    const content = document.querySelector('.content');

    const backgrounds = [
        'url("rendang.png")',
        'url("Es-Teh-Poci-removebg-preview (2).png")',
        'url("3.jpeg")',
        'url("sate.png")',
        'url("Es-Teh-Coklat-removebg-preview (2).png")',
        // Tambahkan URL gambar latar belakang sesuai kebutuhan
    ];

    let currentIndex = 0;

    function changeBackground(index) {
        backgroundContainer.style.backgroundImage = backgrounds[index];
        // Tambahkan kelas untuk animasi perubahan skala
        backgroundContainer.classList.add('scale-in');
        // Hapus kelas animasi perubahan skala setelah selesai animasi
        setTimeout(() => {
            backgroundContainer.classList.remove('scale-in');
        }, 1000);
    }

    function fadeInContent() {
        content.style.animation = 'fadeInContent 1s ease-out forwards';
    }

    backgroundContainer.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        changeBackground(currentIndex);
        fadeInContent();
    });

    // Set latar belakang pertama saat halaman dimuat
    changeBackground(currentIndex);
});
