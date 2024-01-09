<template>
	<div id="world">
		<fishing-map></fishing-map>
	</div>
</template>
<script>

import FishingMap from '@/components/FishingMap.vue'
export default {
	components: {FishingMap}
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
		background-position: -250px;
	}
</style>