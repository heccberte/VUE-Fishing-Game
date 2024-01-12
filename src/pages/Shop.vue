<template>
	<div v-if="pageLoaded" class="shop">
		<my-navbar v-model:money="money"></my-navbar>
		<div class="shop__content">
			<ul class="shop__items">
				<li v-for="rod in rods" :key="rod.index" class="shop__item">
					<img :id="rod.rare" class="shop__item-icon" src="../img/rare4_fr.png" alt="">
					<p class="item__name">{{ rod.name }}</p>
					<p class="item__desc">{{ rod.desc }}</p>
					<p class="item__desc">Стоимость: {{ rod.price }}</p>
					<div class="btn-controls">
						<div v-show="rod.purchased == false" @click="buy(rod)" class="btn btn-buy">Купить</div>
						<div v-show="rod.active === true" class="btn btn-actived">Активна</div>
					</div>
				</li>
				<router-link class="btn close-btn" to="/">Назад</router-link>
			</ul>
		</div>
	</div>
	<div class="pageLoad" v-else>Загрузка магазина...</div>
</template>
<script>
import MyNavbar from '@/components/MyNavbar.vue'
export default {
	components: {
		MyNavbar
	},
	data() {
		return {
			money: 0,
			pageLoaded: false,
			activeRod: {},
			purchasedRods: [],
			rods: [
				{
					name: 'Удочка школьника',
					minTimer: 8000,
					maxTimer: 16000,
					img: '../img/rare1_fr.png',
					rare: 'rare1',
					desc: 'Скорость рыбалки: +20%',
					price: 500,
					purchased: false,
					active: false,
				},
				{
					name: 'Удочка рыбака',
					minTimer: 6000,
					maxTimer: 12000,
					img: '../img/rare2_fr.png',
					rare: 'rare2',
					desc: 'Скорость рыбалки: +40%',
					price: 1000,
					purchased: false,
					active: false,
				},
				{
					name: 'Удочка пирата',
					minTimer: 4000,
					maxTimer: 8000,
					img: '../img/rare3_fr.png',
					rare: 'rare3',
					desc: 'Скорость рыбалки: +60%',
					price: 1500,
					purchased: false,
					active: false,
				},
				{
					name: 'Удочка везунчика',
					minTimer: 2000,
					maxTimer: 4000,
					img: '../img/rare4_fr.png',
					rare: 'rare4',
					desc: 'Скорость рыбалки: +80%, Шанс выловить сокровища',
					price: 2500,
					purchased: false,
					active: false,
				},
			],
		}
	},
	mounted() {

		if (localStorage.getItem('money')) {
			try {
				this.money = JSON.parse(localStorage.getItem('money'));
			} catch (e) {
				localStorage.removeItem('money');
			}
		};
		if (localStorage.getItem('rod')) {
			try {
				this.activeRod = JSON.parse(localStorage.getItem('rod'));
				this.rods.forEach(el => {
					if (el.name === this.activeRod.name) {
						el.purchased = this.activeRod.purchased
						el.active = this.activeRod.active
					}
				})
			} catch (e) {
				localStorage.removeItem('rod');
			}
		};
		setTimeout(() => {
			this.pageLoaded = true;
		},1000)
	},
	methods: {
		buy(item) {
			if (this.money > item.price) {
				this.money -= item.price
				item.purchased = true
				this.activeRod = item
				item.active = true
				this.saveMoney()
				this.saveRodInfo()
				location.reload();
			}

		},
		activate(item) {
			this.activeRod = item
			item.active = true
			this.saveRodInfo()
		},
		saveRodInfo() {
			const parsedRod = JSON.stringify(this.activeRod);
			localStorage.setItem('rod', parsedRod);
		},
		saveMoney() {
			const parsedMoney = JSON.stringify(this.money);
			localStorage.setItem('money', parsedMoney);
		},
	}
}
</script>
<style>
.shop {
	position: relative;
	display: flex;
	width: 460px;
	height: 700px;
	border-radius: 40px;
	border: 4px solid black;
	overflow: hidden;
	background: url('../img/shop.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	animation-duration: 1s;
	animation-name: loading;
}
.pageLoad {
	font-size: 26px;
}

.shop__content {
	width: 100%;
	padding: 80px 80px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;

}

.shop__items {
	display: grid;
	row-gap: 30px;
	column-gap: 30px;
	grid-template-columns: repeat(1, 1fr);
	align-items: center;
}

.shop__item {
	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: center;
	align-items: center;
	padding: 10px;
	color: #fff;
	border: 2px solid #000000;
	transition: all .3s;
	cursor: pointer;
	background: #00000052;
}

.shop__item:hover {
	background: #000000c2;
}

.item__name {
	font-weight: 800;
	margin-bottom: 20px;
	font-size: 20px;
}

.btn-controls {
	margin-top: 20px;
}

.btn {
	padding: 8px 12px;
	background: #cc945f;
	border: 2px solid #745130;
	color: #745130;
	margin-top: 10px;
	transition: all .4s;
}

.btn:hover {
	background: #ec9848;
}


.shop__item-icon {
	height: 100px;
	width: 100px;
	border: 3px solid #000;
	padding: 5px;
}

.close-btn {
	position: relative;
	padding: 10px 40px;
	background: #cc945f;
	border: 4px solid #976b42;
	color: #745130;
	text-align: center;
}

.btn-actived {
	background: #36a72c;
	border: 4px solid #5ec943;
	color: #00ff00;
}

.btn-actived:hover {
	background: #36a72c;
	border: 4px solid #5ec943;
	color: #00ff00;
}

#rare1 {
	-webkit-box-shadow: 0px 0px 44px 19px rgba(4, 255, 0, 0.2);
	-moz-box-shadow: 0px 0px 44px 19px rgba(4, 255, 0, 0.2);
	box-shadow: 0px 0px 44px 19px rgba(4, 255, 0, 0.7) inset;
	background-color: #0000006e;
}

#rare2 {
	-webkit-box-shadow: 0px 0px 44px 19px rgba(0, 154, 255, 0.2);
	-moz-box-shadow: 0px 0px 44px 19px rgba(0, 154, 255, 0.2);
	box-shadow: 0px 0px 44px 19px rgba(0, 154, 255, 0.7) inset;
	background-color: #0000006e;
}

#rare3 {
	-webkit-box-shadow: 0px 0px 44px 19px rgba(150, 0, 255, 0.2);
	-moz-box-shadow: 0px 0px 44px 19px rgba(150, 0, 255, 0.2);
	box-shadow: 0px 0px 44px 19px rgba(150, 0, 255, 0.7) inset;
	background-color: #0000006e;
}

#rare4 {
	-webkit-box-shadow: 0px 0px 44px 19px rgba(255, 214, 0, 0.2) inset;
	-moz-box-shadow: 0px 0px 44px 19px rgba(255, 214, 0, 0.2) inset;
	box-shadow: 0px 0px 44px 19px rgba(255, 214, 0, 0.7) inset;
	background-color: #0000006e;
}

.shop__content::-webkit-scrollbar {
	width: 20px;
}

.shop__content::-webkit-scrollbar-track {
	background: #cc945f;
}

.shop__content::-webkit-scrollbar-thumb {
	background: #976b42;
	border: none;
	border-radius: 0;
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