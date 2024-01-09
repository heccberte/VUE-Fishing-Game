<template>
	<div id="river">
		<my-main :localPrice="localPrice" :fishies="fishies"></my-main>
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
			fishies: ['Судак', 'Окунь', 'Ерш', 'Щука', 'Хек', 'Лещ', 'Сазан', 'Сом', 'Карась', 'Карп', 'Язь', 'Красноперка'],
			localPrice: 10,
		}
	}
}
</script>
<style>

</style>