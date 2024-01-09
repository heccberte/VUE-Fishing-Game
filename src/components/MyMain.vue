<template v-model:rod="rod">
	<div v-show="fishing" class="fishing__float"></div>
	<div class="main">
		<my-navbar v-model:money="money"></my-navbar>
		<div class="fishing__link-menu">
			<router-link class="home__link" to="/">
				<img class="home__link-icon" src="../img/home.png" alt="">
			</router-link>
			<router-link class="home__link" to="/worldmap">
				<img class="home__link-icon" src="../img/compass.png" alt="">
			</router-link>
		</div>
		<div class="fishing">
			<my-modal v-model:show="fishingFloatTime">
				Клюёт! Нажимай
			</my-modal>
		</div>
		<my-modal class="fishing__finish" v-model:show="fishingFinishVisible" @click="hideModal">
			<h2 class="modal__content-title">Улов!</h2>
			<img class="fish__img" src="../img/fish.png" alt="">
			<p class="fish__name">{{ fish.name }}</p>
			<div class="fish__weight">{{ fish.weight }} кг.</div>
		</my-modal>
		<div @click="fishingProcess" class="sea">
			<div class="rod-fishing"></div>
		</div>
		<div class="bucket">
			<img @click="bucketOpen" class="bucket__icon" src="../img/fishes.png" alt="">
			<my-modal v-model:show="bucketVisible" class="bucket__list">
				<ul v-for="(fish, index) in bucket" :key="index">
					<li>{{ fish.name }} {{ fish.weight }} кг.</li>
				</ul>
				<div v-show="bucket.length > 0" @click="sellBucket" class="bucket__sell">
					Продать всё
				</div>
				<div @click="hideBucket" class="bucket__close">
					Закрыть
				</div>
			</my-modal>
		</div>
		<fishing-menu>
			<div class="fishing__progress">
				<div v-show="fishingFloatTime" class="fishing__progress-label"></div>
			</div>
			<div v-show="fishingFloatTime" class="fishing__click">
				<img class="fishing__click-icon" src="../img/fishingRun.png" alt="">
			</div>
			<div class="fishing__bait">
				<div class="fishing__bait-count">{{ worms }}</div>
				<img @click="addWorms" class="fishing__bait-icon" src="../img/worm.png" alt="">
				
			</div>
		</fishing-menu>
	</div>
	{{ fishingFinish() }}
</template>
<script>
import MyModal from '@/components/UI/MyModal.vue'
import MyNavbar from '@/components/MyNavbar.vue'
import FishingMenu from '@/components/FishingMenu.vue'


export default {
	name: 'MyMain',
	components: {
		MyModal, MyNavbar, FishingMenu,
	},

	data() {
		return {
			fishingFinishVisible: false,
			fishing: false,
			bucketVisible: false,
			fishingFloatTime: false,
			width: 0,
			floatPosition: 0,
			money: 0,
			worms: 5,
			minTimer: 10000,
			maxTimer: 20000,
			bucket: [],
			summa: 0,

			fish: {
				name: '',
				weight: '',
			},
		}
	},

	props: {
		rod: {
			type: Object,
			default: JSON.parse(localStorage.getItem('rod'))
		},
		fishName: {
			type: String,
			default: '',
		},
		fishies: {
			type: Array,
			default: [],
		},
		localPrice: {
			type: Number,
			default: 10,
		},
		

	},

	mounted() {
		if (localStorage.getItem('money')) {
			try {
				this.money = JSON.parse(localStorage.getItem('money'));
			} catch (e) {
				localStorage.removeItem('money');
			}
		};
		if (localStorage.getItem('bucket')) {
			try {
				this.bucket = JSON.parse(localStorage.getItem('bucket'));
			} catch (e) {
				localStorage.removeItem('bucket');
			}
		};
		if (localStorage.getItem('worms')) {
			try {
				this.worms = JSON.parse(localStorage.getItem('worms'));
			} catch (e) {
				localStorage.removeItem('worms');
			}
		};
		if (localStorage.getItem('rod')) {
			this.minTimer = this.rod.minTimer
			this.maxTimer = this.rod.maxTimer
			if (this.rod.rare === 'rare4') {
				this.fishies.push('Сокровище пирата')
			}
		};
		
	},

	methods: {

		bucketOpen() {
			this.bucketVisible = true
		},

		hideBucket() {
			this.bucketVisible = false;
		},

		hideModal() {
			this.fishingFinishVisible = false;
		},

		addWorms() {
			if (this.money > 5) {
				this.worms++;
				this.money -= 5
				this.saveMoney();
				this.saveWorms();
			}
		},

		sellBucket() {
			
			this.bucket.forEach(fish => {
				this.summa += fish.weight
				if (fish.name === 'Сокровище пирата') {
					this.summa *= 100
				}
			})
			this.money += Math.ceil(this.summa * this.localPrice)
			this.bucket = []
			this.summa = 0
			this.saveMoney();
			this.saveBucket()
		},

		saveMoney() {
			const parsedMoney = JSON.stringify(this.money);
			localStorage.setItem('money', parsedMoney);
		},
		saveBucket() {
			const parsedBucket = JSON.stringify(this.bucket);
			localStorage.setItem('bucket', parsedBucket);
		},
		saveWorms() {
			const parsedWorms = JSON.stringify(this.worms);
			localStorage.setItem('worms', parsedWorms);
		},

		randomItem(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		},


		fishingProcess(e) {
			let seaZone = document.querySelector('.sea')
			let x = e.pageX
			let y = e.pageY
			let a = this.minTimer
			let b = this.maxTimer
			let fishingFloat = document.querySelector('.fishing__float')
			if (this.fishing === false && this.worms > 0) {
				this.worms--;
				this.saveWorms();
				this.fishing = true;
				fishingFloat.style.left = x - 15 + 'px';
				fishingFloat.style.top = y - 15 + 'px';
				seaZone.style.cursor = 'default'
				setTimeout(() => {
					this.fishingFloatTime = true;
				}, this.randomItem(a, b))
			} else {
				if (this.fishing == false)
					alert('Купи червей!')
			}
		},
		fishingFinish() {
			if (this.fishingFloatTime == true) {

				let labelPlus = document.querySelector('.fishing__click')
				let label = document.querySelector('.fishing__progress-label')
				let seaZone = document.querySelector('.sea')
				let labelBar = 40

				labelPlus.addEventListener('click', () => {

					if (labelBar >= 100) {
						let id = this.randomItem(0, this.fishies.length)
						let weight = this.randomItem(800, 4500) / 1000

						let fish = {
							name: '',
							weight: 0
						}

						fish.name = this.fishies[id];
						fish.weight = weight;
						this.fish.name = this.fishies[id];
						this.fish.weight = weight;

						this.bucket.push(fish)
						this.fishing = false;
						this.fishingFinishVisible = true;
						seaZone.style.cursor = 'crosshair'
						label.style.width = 0 + '%'
						this.fishingFloatTime = false;
						labelBar = 0
						this.saveBucket()
						clearInterval(interval)
					}
					if (labelBar > 0 && labelBar < 100) {
						labelBar += 10
						this.width = labelBar
						label.style.width = labelBar + '%'
					}
				})
				const interval = setInterval(() => {
					labelBar -=8
					label.style.width = labelBar + '%'
					if (labelBar <= 0) {
						clearInterval(interval)
						alert('Эх, сорвалась :(')
						this.fishing = false;
						seaZone.style.cursor = 'crosshair'
						label.style.width = 0 + '%'
						this.fishingFloatTime = false;
					}
				}, this.randomItem(100, 900))
			}
		},
	},

}
</script>
<style scoped>
.main {
	position: relative;
	display: flex;
	width: 460px;
	height: 700px;
	border-radius: 40px;
	border: 4px solid black;
	overflow: hidden;
	background: url('../img/265844_main.jpg');
	background-position: 100%;
	align-items: flex-end;
}

.sea {
	display: flex;
	position: relative;
	bottom: 60px;
	right: 0;
	left: 0;
	width: 100%;
	height: 240px;
	cursor: crosshair;
}

.test {
	background: #000;
}

.rod-fishing {
	position: absolute;
	bottom: 0;
	right: 100px;
	transform: rotate(-45deg);
	width: 100px;
	height: 100px;
	background-image: url('../img/pngwing.com.png');
	background-size: 100%;
	background-repeat: no-repeat;

}

.fish__img {
	height: 40px;
	width: 50px;
	margin-top: 10px;
}

.bucket {
	position: absolute;
	bottom: 70px;
	cursor: pointer;
	transition: all .4s;
}

.bucket__icon {
	height: 70px;
	width: 70px;
	position: relative;
	transition: all .4s;
}


.bucket__list {
	position: absolute;
	bottom: 80px;
	margin-left: 10px;
	z-index: 10;
}

.fishing__finish {
	background: rgba(0, 0, 0, 0.2);
	top: 60px;
	right: 0;
	left: 0;
	bottom: 60px;
	position: absolute;
	display: flex;
	z-index: 10;
}

.fishing__float {
	position: absolute;
	height: 30px;
	width: 30px;
	background-image: url('../img/fishingFloat.png');
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 2;
}

.bucket__close {
	position: absolute;
	bottom: -17px;
	padding: 10px 15px;
	background: #976b42;
	border-radius: 5px;
	color: #442710;
	font-size: 18px;
}

.bucket__sell {
	position: absolute;
	top: -17px;
	padding: 10px 15px;
	background: #976b42;
	border-radius: 5px;
	color: #442710;
	font-size: 18px;
}


.fishing__progress {
	display: flex;
	align-items: center;
	padding: 10px;
	border-radius: 5px;
	color: white;
	font-size: 18px;
	background: #976b42;
	width: 60%;
	height: 30px;
}

.fishing__progress-label {
	height: 140%;
	width: 0%;
	background: #1dc51d;
	transition: all .4s;
}

.fishing__click {
	display: flex;
	align-items: center;
	justify-content: center;
	background: #976b42;
	padding: 10px;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	cursor: pointer;
	transition: all .4s;
}

.fishing__click:active {
	transform: rotate(180deg);
}

.fishing__click-icon {
	width: 35px;
	height: 35px;
}

.fishing__bait {
	background: #976b42;
	padding: 10px;
	border-radius: 5px;
	color: white;
	font-size: 18px;
	width: 20%;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
}

.fishing__bait-icon {
	width: 20px;
	height: 20px;
}

.fishing {
	position: absolute;
	bottom: 0;
	left: 200px;
	bottom: 56px;
	z-index: 10;

}

.fishing__link-menu {
	position: absolute;
	top: 80px;
	right: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;

}

.home__link-icon {
	height: 60px;
	width: 60px;
}
</style>