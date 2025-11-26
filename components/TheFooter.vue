<template>
	<div class="footer">
		<p class="copy">©coincast {{ new Date().getFullYear() }}. <span>All rights reserved.</span></p>
		<p><span>Build by</span> blackfire</p>
	</div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang='scss'>
.footer {
	display: flex;
	justify-content: space-between;
	padding: 0 4rem 3.875rem;
	font-family: var(--f-fixel);
	font-size: .75rem;
	line-height: 124%;
}
.footer span {
	opacity: 0.6;
}
</style>