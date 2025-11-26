<template>
	<section class="hero">
		<div class="content">
			<img class="coins" draggable='false'  src='/images/coins.png'  />
			<h1 class="title">Обмін криптовалют та швидкі міжнародні перекази</h1>

			<a class="btn" href=" https://t.me/CoinCastExchange" target="_blank">
				<TheButton text="Обміняти валюту" />
			</a>
		</div>

		<img class='scroll-img' draggable='false'  src='/images/scroll.png' />
	</section>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.hero {
	height: 100vh;
	position: relative;
}

.content {
	position: absolute;
	top: 42%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 60rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.coins {
	width: 13.9375rem;
}
.title {
	font-size: 3.5rem;
	line-height: 108%;
	letter-spacing: -0.035rem;
	font-family: var(--f-dela);
	margin-bottom: 2.5rem;
	width: 100%;
}

.scroll-img {
	position: absolute;
	bottom: 2rem;
	left: 4rem;
	width: 2.5rem;
}
</style>