<template>
	<div class="btn-template">
		<div class="bg" />
		<div class="wrap">{{ text }}</div>
	</div>
</template>

<script setup lang='ts'>
defineProps<{ text: string }>()
</script>

<style scoped lang='scss'>
.btn-template {
	position: relative;

}

.wrap {
	padding: 1rem 2rem;
	box-shadow: inset 0 0 0 .1875rem var(--c-black);
	background: var(--c-accent);
	font-size: 1rem;
	line-height: 108%;
	font-family: var(--f-dela);
	position: relative;
	transition: all .4s var(--t-ease);
	@include mobile {
		font-size: .875rem;
		padding: .75rem 1.5rem;
	}
}
.bg {
	position: absolute;
	inset: 0;
	background: var(--c-black);
	transform: translateX(-0.25rem) translateY(.25rem);
}
@include hover {
	.btn-template:hover .wrap {
		transform: translateX(-0.25rem) translateY(.25rem);
	}
}
</style>