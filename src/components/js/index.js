let menu= document.querySelector("#menu")
  console.log(menu)
  menu.addEventListener('click', function () {
      this.classList.toggle('fa-times');
      document.querySelector('.navbar').classList.toggle('nav-toggle');

  window.addEventListener('scroll', function () {
      document.getElementById('menu').classList.remove('fa-times');
      document.querySelector('.navbar').classList.remove('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }

      // scroll spy
      document.querySelectorAll('section').forEach(function (section) {
          let height = section.offsetHeight;
          let offset = section.offsetTop - 200;
          let top = window.pageYOffset;
          let id = section.getAttribute('id');

          if (top > offset && top < offset + height) {
              document.querySelectorAll('.navbar ul li a').forEach(function (link) {
                  link.classList.remove('active');
              });
              document.querySelector('.navbar').querySelector(`[href="#${id}"]`).classList.add('active');
          }
      });
  });

});
