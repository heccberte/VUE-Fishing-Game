<template >
	<div class="root">
		<router-view></router-view>
	</div>
</template>
<script>
export default {

}
</script>
<style >
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: black;
}

.root {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #c5c5c5;

	user-select: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-moz-user-select: none;
}

</style>