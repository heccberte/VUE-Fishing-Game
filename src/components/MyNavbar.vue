<template>
	<div class="navbar">
		<div class="time">
			<p v-if="hour < 10">0</p>{{ hour }}:<p v-if="minute < 10">0</p>{{ minute }}
		</div>
		<div class="money__main">
			<img class="money__icon" src="../img/money.png" alt="">
			<div class="money">{{ money }} RUB</div>
			<div class="money"></div>
		</div>
		{{ timer }}
	</div>
</template>
<script>
export default {
	name: 'MyNavbar',
	data() {
		return {
			hour: 0,
			minute: 0,
		}
	},

	props: {
		money: {
			type: Number,
			default: 550
		}
	},

	computed: {

		timer() {
			this.hour = 4;
			this.minute = 30;

			setInterval(() => {
				this.minute += 5

				if (this.minute == 60) {
					this.hour++
					this.minute = 0
				}
				if (this.hour > 24) {
					this.hour = 0
				}
			}, 5000)
		}
	}
}
</script>
<style scoped>
.navbar {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	top: 0;
	height: 60px;
	width: 100%;
	background: #cc945f;
	border-bottom: 4px solid #976b42;
	padding: 0 40px;
}

.time {
	display: flex;
	background: #976b42;
	padding: 10px;
	border-radius: 5px;
	color: white;
	font-size: 18px;
}

.money__main {
	display: flex;
	align-items: center;
	gap: 5px;
	background: #976b42;
	padding: 10px;
	border-radius: 5px;
	color: white;
}

.money__icon {
	width: 20px;
	height: 20px;
}

.money {
	background: #976b42;
	color: white;
	font-size: 18px;
}
</style>