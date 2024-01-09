<template>
	<div class="fishing__menu">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'FishingMenu',
	
}
</script>
<style scoped>
		.fishing__menu {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: space-between;
		bottom: 0;
		height: 60px;
		width: 100%;
		background: #cc945f;
		border-top: 4px solid #976b42;
		padding: 0 40px;
	}
	
</style>