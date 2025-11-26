<template>
	<section class="services">
		<h2 class="title">наші послуги</h2>

		<div class="items">
			<div v-for="(item, index) in items" :key="index" class="item">
				<div class="item-photo">
					<img class="inner-media" :src="item.photo" :alt="item.title" draggable='false'  />
				</div>

				<h3 class="item-title">{{ item.title }}</h3>
				<div class="item-descr" v-html="item.descr " />
			</div>
		</div>
	</section>
</template>

<script setup lang='ts'>
const items = [
	{
		title: "Обмін криптовалют",
		descr: "USDT / BTC / ETH / LTC — оперативність транзакцій та найкращі умови",
		photo: '/images/1.png',
	},
	{
		title: "Міжнародні платежі та інвойси",
		descr: "Європа, Азія, США, Близький Схід — <br />без затримок та обмежень",
		photo: '/images/2.png',
	},
	{
		title: "Оплата нерухомості за кордоном",
		descr: "Інвойси, внески забудовнику, супровід угод на великі суми",
		photo: '/images/3.png',
	},
	{
		title: "Оплата авто з аукціонів ",
		descr: "Copart, IAAI, Manheim: інвойси, ПД, <br />готівка, банки або USDT",
		photo: '/images/4.png',
	},
	{
		title: "Фіксація курсу та особистий менеджер",
		descr: "передбачуваний процес із фіксованим курсом та цілодобовою підтримкою",
		photo: '/images/5.png',
	}
]
</script>

<style scoped lang='scss'>
.services {
	padding: 13.6875rem 12.125rem 8rem;
}
.title {
	font-size: 2.75rem;
	line-height: 108%;
	letter-spacing: -0.0275rem;
	font-family: var(--f-dela);
	margin-bottom: 3.1875rem;
	text-align: center;
}
.items {
	display: flex;
	flex-wrap: wrap;;
	justify-content: center;
	gap: 1rem;
}
.item {
	width: 21.25rem;
	height: 24.5rem;
	padding: .375rem;
	padding-bottom: 1.25rem;
	border: .1875rem solid var(--c-black);
	border-radius: .25rem;
	background: #D9D9D9;
	display: flex;
	flex-direction: column;
	text-align: center;
}
.item-photo {
	position: relative;
	width: 100%;
	height: 12.5rem;
	overflow: hidden;
	border-radius: .25rem;
	margin-bottom: 1rem;
}
.item-photo img {
	transform: scale(1.02);
}
.item-title {
	font-size: 1.5rem;
	line-height: 108%;
	font-family: var(--f-dela);
	padding: 0 .625rem;
}
.item-descr {
	font-size: .75rem;
	line-height: 124%;
	margin-top: auto;
	padding: 0 1rem;
	font-family: var(--f-fixel);
}

</style>