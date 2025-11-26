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
	@include mobile {
		padding: 3rem 1rem 4rem;
	}
}
.title {
	font-size: 2.75rem;
	line-height: 108%;
	letter-spacing: -0.0275rem;
	font-family: var(--f-dela);
	margin-bottom: 3.1875rem;
	text-align: center;
	@include mobile {
		font-size: 2rem;
		margin-bottom: 2.625rem;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
	}
}
.items {
	display: flex;
	flex-wrap: wrap;;
	justify-content: center;
	gap: 1rem;
	@include mobile {
		flex-direction: column;
		gap: 1.25rem;
	}
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
	@include mobile {
		width: 100%;
		border-radius: .5rem;
	}
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