<template>
	<div id="winter">
		<my-main :localPrice="localPrice"  :fishies="fishies"></my-main>
	</div>
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
		}
	}

}
</script>
<style>
	#winter .main {
		background: url('../img/winter.jpg');
	}
	#winter .sea {
		height: 170px;
		left: 44px;
	}
</style>