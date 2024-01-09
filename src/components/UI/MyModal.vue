<template>
	<div class="modal" v-if="show">
		<div class="modal__content">
			<slot></slot>
			
		</div>
	</div>
</template>
<script>
export default {
	name: 'my-modal',
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	}
}
</script>
<style>

	.modal__content {
		margin: auto;
		background: #cc945f;
		border: 4px solid #976b42;
		min-width: 200px;
		min-height: 100px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.fish {
		color:#000;
		margin: 10px 0 5px;
	}

	.fish__weight {
		font-weight: 700;
		color: #2961d8;
	}

	.bucket__list .modal__content{
		min-width: 250px;
		min-height: 150px;
		padding: 25px 0;
	}

	.fishing .modal__content {
		min-height: 30px;
	}
	ul {
		list-style-type: none;
	}
</style>