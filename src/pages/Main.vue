<template >
	<div v-if="pageLoaded" class="main__game">
		<div class="main__content">
			<h1 class="main__title">Русская рыбалка</h1>
			<ul class="main__menu">
				<li class="main__menu-item">
					<router-link class="main__menu-link" to="/worldmap">Начать игру</router-link>
					
				</li>
				<li class="main__menu-item">
					<router-link class="main__menu-link" to="/shop">Магазин</router-link>
				</li>
			</ul>
		</div>
	</div>
	<div class="pageLoad" v-else>Загрузка...</div>
</template>
<script>
export default {
	data() {
		return {
			pageLoaded: false,
		}
	},
	mounted() {
		setTimeout(() => {
			this.pageLoaded = true;
		},1000)
	}
}
</script>
<style >
	.main__game {
	position: relative;
	display: flex;
	width: 460px;
	height: 700px;
	border-radius: 40px;
	border: 4px solid black;
	overflow: hidden;
	background-position: 100%;
	align-items: center;
	justify-content: center;
	background: url('../img/mainhub.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	animation-duration: 1s;
	animation-name: loading;
}
.pageLoad {
	font-size: 26px;
}

.main__content {
	position: absolute;
	top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.main__menu {
	margin-top: 70px;
}

.main__menu-item {
	margin-bottom: 10px;
	padding: 15px;

}
.main__menu-link {
	background: #00000031;
	padding: 15px;
	cursor: pointer;
	transition: all .2s;
	font-size: 20px;
}
.main__menu-link:hover {
	background: #00000050;
	transform: scale(1.1);
}
@keyframes loading {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

</style>