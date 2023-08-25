const bannerImage = document.getElementById('bannerImage');
const imagePaths = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Đường dẫn đến các hình ảnh
let currentImageIndex = 0;

function changeBannerImage() {
  bannerImage.style.transform = 'scale(1.1)'; // Tạo hiệu ứng zoom nhỏ trước khi thay đổi hình
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    bannerImage.src = imagePaths[currentImageIndex];
    bannerImage.style.transform = 'scale(1)'; // Trở lại kích thước bình thường
  }, 1000); // Thay đổi hình ảnh mỗi 1 giây
}

// Gọi hàm thay đổi hình ảnh ban đầu
changeBannerImage();

// Thay đổi hình ảnh theo khoảng thời gian
setInterval(changeBannerImage, 5000); // Thay đổi hình ảnh mỗi 5 giây
