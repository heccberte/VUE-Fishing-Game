<template>
	<div v-if="pageLoaded" id="river">
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
			fishies: ['Судак', 'Окунь', 'Ерш', 'Щука', 'Хек', 'Лещ', 'Сазан', 'Сом', 'Карась', 'Карп', 'Язь', 'Красноперка'],
			localPrice: 10,
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
#river {
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