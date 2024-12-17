

// $('.sitede').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   prevArrow:"<i class="fa-solid fa-angle-right"></i>"
// });

$('.sitede').slick({
  slidesToShow: 3,
  slidesToScroll:3,
  autoplay: true,
  autoplaySpeed: 2000,
});
	
		
				

  const togglebtn = document.querySelector(".toggleBtn");
  const dropdawn = document.querySelector(".dropdawn");

  togglebtn.addEventListener('click',()=>{
    dropdawn.classList.toggle('top-16')
  })