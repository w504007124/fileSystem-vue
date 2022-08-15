<template>
    <div class="wrap">
      <div class="cube">
        <div class="liang-one">
          <img
            src="../assets/img/01.jpg"
            class="photo"
          />
        </div>
        <div class="liang-two">
          <img
            src="../assets/img/01.jpg"
            class="photo"
          />
        </div>
        <div class="liang-three">
          <img
            src="../assets/img/01.jpg"
            class="photo"
          />
        </div>
        <div class="liang-four">
          <img
            src="../assets/img/bg1.jpg"
            class="photo"
          />
        </div>
        <div class="liang-five">
          <img
            src="../assets/img/02.jpg"
            class="photo"
          />
        </div>
        <div class="liang-six">
          <img
            src="../assets/img/02.jpg"
            class="photo"
          />
        </div>
        <span class="liang-front">
          <img
            src="../assets/img/02.jpg"
            class="liang-photo"
          />
        </span>
        <span class="liang-back">
          <img
            src="../assets/img/bg1.jpg"
            class="liang-photo"
          />
        </span>
        <span class="liang-left">
          <img
            src="../assets/img/bg1.jpg"
            class="liang-photo"
          />
        </span>
        <span class="liang-right">
          <img
            src="../assets/img/bg1.jpg"
            class="liang-photo"
          />
        </span>
        <span class="liang-top">
          <img
            src="../assets/img/bg1.jpg"
            class="liang-photo"
          />
        </span>
        <span class="liang-bottom">
          <img
            src="../assets/img/02.jpg"
            class="liang-photo"
          />
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'girlFriend'
}
</script>

<style lang="less" scoped>
html {
	background: #000;
	height: 100%;
}

.wrap {
	position: relative;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 200px;
	height: 200px;
	margin: auto;
}

.cube {
	width: 200px;
	height: 200px;
	margin: 0 auto;
	transform-style: preserve-3d;
	transform: rotateX(-30deg) rotateY(-80deg);
	animation: rotate 20s infinite;
	animation-timing-function: linear;
}

@keyframes rotate {
	from {
		transform: rotateX(0deg) rotateY(0deg);
	}
	to {
		transform: rotateX(360deg) rotateY(360deg);
	}
}

.cube div {
	position: absolute;
	width: 200px;
	height: 200px;
	opacity: 0.8;
	transition: all .4s;
}


.photo {
	width: 200px;
	height: 200px;
}

.cube .liang-one {
	transform: rotateY(0deg) translateZ(100px);
}

.cube .liang-two {
	transform: translateZ(-100px) rotateY(180deg);
}

.cube .liang-three {
	transform: rotateY(90deg) translateZ(100px);
}

.cube .liang-four {
	transform: rotateY(-90deg) translateZ(100px);
}

.cube .liang-five {
	transform: rotateX(90deg) translateZ(100px);
}

.cube .liang-six {
	transform: rotateX(-90deg) translateZ(100px);
}


.cube span {
	display: bloack;
	width: 100px;
	height: 100px;
	position: absolute;
	top: 50px;
	left: 50px;
}

.cube .liang-photo {
	width: 100px;
	height: 100px;
}

.cube .liang-front {
	transform: rotateY(0deg) translateZ(50px);
}

.cube .liang-back {
	transform: translateZ(-50px) rotateY(180deg);
}

.cube .liang-left {
	transform: rotateY(90deg) translateZ(50px);
}

.cube .liang-right {
	transform: rotateY(-90deg) translateZ(50px);
}

.cube .liang-top {
	transform: rotateX(90deg) translateZ(50px);
}

.cube .liang-bottom {
	transform: rotateX(-90deg) translateZ(50px);
}



.cube:hover .liang-one {
	transform: rotateY(0deg) translateZ(200px);
}

.cube:hover .liang-two {
	transform: translateZ(-200px) rotateY(180deg);
}

.cube:hover .liang-three {
	transform: rotateY(90deg) translateZ(200px);
}

.cube:hover .liang-four {
	transform: rotateY(-90deg) translateZ(200px);
}

.cube:hover .liang-five {
	transform: rotateX(90deg) translateZ(200px);
}

.cube:hover .liang-six {
	transform: rotateX(-90deg) translateZ(200px);
}


</style>