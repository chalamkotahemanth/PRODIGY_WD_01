window.addEventListener('scroll', function() {
    const navigation = document.querySelector('.navigation');
    if (window.scrollY > 50) { // adjust as needed
      navigation.style.backgroundColor = '#555'; // change color on scroll
    } else {
      navigation.style.backgroundColor = '#333';
    }
  });
  