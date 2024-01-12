<template>
	<div v-if="pageLoaded" id="winter">
		<my-main :localPrice="localPrice" :fishies="fishies"></my-main>
	</div>
	<div class="pageLoad" v-else>Загрузка локации...</div>
</template>
<script>
import MyMain from '@/components/MyMain.vue'
import MyNavbar from '@/components/MyNavbar.vue'

export default {
	components: {
		MyMain, MyNavbar,
	},
	data() {
		return {
			fishies: ['Маскеллунге', 'Блюгилл', 'Радужная форель', 'Северная щука', 'Плоскоголовый сом', 'Судак', 'Большеротый окунь', 'Пятнистый гар', 'Длинноносый гар', 'Бычья форель', 'Ручьевая форель', 'Красноперка'],
			localPrice: 15,
			pageLoaded: false,
		}
	},
	mounted() {
		setTimeout(() => {
			this.pageLoaded = true;
		}, 1200)
	}

}
</script>
<style>
#winter .main {
	background: url('../img/winter.jpg');
	animation-duration: 1s;
	animation-name: loading;
}
.pageLoad {
	font-size: 26px;
}

#winter .sea {
	height: 170px;
	left: 44px;
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