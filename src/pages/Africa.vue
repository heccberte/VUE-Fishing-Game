<template>
	<div id="africa">
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
			fishies: ['Аулонокара', 'Акула-мако', 'Тигровая рыба', 'Золотой леопард', 'Нильский окунь', 'Нотобранх Рахова', 'Кошачья акула', 'Рыба-бабочка', 'Рыба-казуар', 'Сомик-перевёртыш', 'Фахака', 'Электрический сом'],
			localPrice: 20,
		}
	}

}
</script>
<style>
	#africa .main {
		background: url('../img/africa.jpg');
		background-position: -450px;
	}
	#africa .sea {
		height: 220px;
	}
</style>