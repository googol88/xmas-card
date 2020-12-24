VanillaTilt.init(document.querySelectorAll(".card"),{
	max: 30,
	speed: 600,
  scale: 1,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 800,
  glare: true
});

snowStorm.followMouse = false;
snowStorm.snowStick = false;
snowStorm.useMeltEffect = false;
snowStorm.freezeOnBlur = false;
snowStorm.vMaxX = 0;
snowStorm.vMaxY = 2;