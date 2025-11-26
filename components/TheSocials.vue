<template>
	<div class="socials">
			<a v-for="social in socials" :key="social.id" :href="social.link" target="_blank" class="soc">
				<Component class="soc-icon" :is="social.icon" />
				<IconSocBg class="bg-icon" />
			</a>
		</div>
</template>

<script setup lang='ts'>
import IconSocIG from '@/components/icon/SocIG.vue'
import IconSocTG from '@/components/icon/SocTg.vue'
import IconSocFB from '@/components/icon/SocFB.vue'

const socials = [
	{ id: 1, link: 'https://www.facebook.com/coincast.exchange#', icon: IconSocFB },
	{ id: 2, link: 'https://www.instagram.com/coincast.exchange?igsh=MTQ4eGZ6NG1ndDZucQ%3D%3D&utm_source=qr', icon: IconSocIG },
	{ id: 3, link: 'https://t.me/CoinCastExchange', icon: IconSocTG },
]
</script>

<style scoped lang='scss'>
.socials {
	position: fixed;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	gap: .75rem;
	z-index: 10;
}
.soc {
	width: 4.1875rem;
	height: 4.1875rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bg-icon {
	position: absolute;
	width: 100%;
	transition: all .4s var(--t-ease);
}
.soc-icon {
	width: 1.5rem;
	position: relative;
	z-index: 2;
	top: -0.0625rem;
	left: .0625rem;
}
@include hover {
	.soc:hover .bg-icon {
		transform: rotate(90deg);
	}
}
</style>