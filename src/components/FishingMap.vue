<template>
	<div class="main">
			<router-link id="river" class="map__point" to="/russia">
			</router-link>
			<router-link id="winter" class="map__point" to="/canada"></router-link>
			<router-link id="africa" class="map__point" to="/africa"></router-link>
	</div>
</template>
<script>

export default {
	name: 'FishingMap'
}
</script>
<style>

	.map__point {
		cursor: pointer;
		position: absolute;
		height: 30px;
		width: 30px;
		background-image: url('../img/mapPoint.png');
		background-repeat: no-repeat;
		background-size: cover;
		transition: all .3s;
		animation: bounce 1.2s infinite;
	}
	.map__point#river {
		top: 250px;
		right: 20px;
	}
	.map__point#river::before {
		content: 'Россия';
		font-size: 22px;
		padding: 2px 5px;
		background: #00000088;
		position: relative;
		top: -35px;
		color: #fff;
		left: -27px;
	}
	.map__point#winter {
		top: 160px;
		left: 130px;

	}
	.map__point#winter::before {
		content: 'Канада';
		font-size: 22px;
		padding: 2px 5px;
		background: #00000088;
		position: relative;
		top: -35px;
		color: #fff;
		left: -27px;
	}

	.map__point#africa {
		bottom: 280px;
		right: 60px;

	}
	.map__point#africa::before {
		content: 'Африка';
		font-size: 22px;
		padding: 2px 5px;
		background: #00000088;
		position: relative;
		top: -35px;
		color: #fff;
		left: -27px;
	}

	.map__point:hover {
		transform: scale(1.5);
	}

	@keyframes bounce {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
</style>