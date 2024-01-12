<template>
	<div v-if="pageLoaded" id="africa">
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
			fishies: ['Аулонокара', 'Акула-мако', 'Тигровая рыба', 'Золотой леопард', 'Нильский окунь', 'Нотобранх Рахова', 'Кошачья акула', 'Рыба-бабочка', 'Рыба-казуар', 'Сомик-перевёртыш', 'Фахака', 'Электрический сом'],
			localPrice: 20,
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
.pageLoad {
	font-size: 26px;
}

#africa .main {
	background: url('../img/africa.jpg');
	background-position: -450px;
	animation-duration: 1s;
	animation-name: loading;
}

#africa .sea {
	height: 220px;
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