<template>
	<div class="main">
		<div class="map__location" id="russia">
			<div class="map__title">
				<p>Россия</p>
				<p class="local__price">1кг = 10руб</p>
			</div>
			<router-link class="map__point" to="/russia">
			</router-link>
		</div>
		<div class="map__location" id="canada">
			<div class="map__title">
				<p>Канада</p>
				<p class="local__price">1кг = 15руб</p>
			</div>
			<router-link class="map__point" to="/canada">
			</router-link>
		</div>
		<div class="map__location" id="africa">
			<div class="map__title">
				<p>Африка</p>
				<p class="local__price">1кг = 20руб</p>
			</div>
			<router-link class="map__point" to="/africa">
			</router-link>
		</div>

	</div>
</template>
<script>

export default {
	name: 'FishingMap'
}
</script>
<style>
	.map__location {
		height: fit-content;
		display: flex;
		position: absolute;
		flex-direction: column;
		align-items: center;
		color: #fff;
		font-size: 22px;
		text-align: center;
	}
	.map__title {
		background: #00000089;
		padding: 2px 5px;
	}

	.map__location#russia {
		right: 5px;
		top: 180px;
	}
	.map__location#canada {
		top: 140px;
		left: 30px;
	}
	.map__location#africa {
		bottom: 280px;
		right: 100px;
	}
	.local__price {
		font-size: 12px;
	}
	.map__point {
		margin-top: 10px;
		cursor: pointer;
		position: relative;
		height: 30px;
		width: 30px;
		background-image: url('../img/mapPoint.png');
		background-repeat: no-repeat;
		background-size: cover;
		transition: all .3s;
		animation: bounce 1.2s infinite;
	}


	@keyframes bounce {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
</style>