<template>
	<div v-if="pageLoaded" id="world">
		<fishing-map></fishing-map>
	</div>
	<div class="pageLoad" v-else>Загрузка карты...</div>
</template>
<script>

import FishingMap from '@/components/FishingMap.vue'
export default {
	components: { FishingMap },
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
<style>
.main {
	position: relative;
	display: flex;
	width: 460px;
	height: 700px;
	border-radius: 40px;
	border: 4px solid black;
	overflow: hidden;
	background-position: 100%;
	background: url('../img/world_map.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: -320px;
	animation-duration: 1s;
	animation-name: loading;
}
.pageLoad {
	font-size: 26px;
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