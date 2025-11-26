<template>
	<div class="header">
		<div class="logo">
			<img draggable='false' src='/images/logo.png' />
		</div>
		<a class="btn" href="https://t.me/CoinCast_Exchenge" target="_blank">
			<TheButton class="desk" text="зв'язатися з нами" />
			<TheButton class="mob" text="зв'язатися" />
		</a>
	</div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='scss'>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 4rem;
	z-index: 10;
	pointer-events: none;
	@include mobile {
		padding: 1rem;
	}
}
.btn {
	pointer-events: auto;
}


.logo {
	width: 10rem;
	@include mobile {
		width: 6.625rem;
	}
}
.logo img {
	width: 100%;
}
</style>