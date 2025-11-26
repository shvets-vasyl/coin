<template>
  <main class="main-page">
		<div class="bg">
			<img class='inner-media' draggable='false'  src='/images/bg.png' />
		</div>
		<TheHeader />
		<TheHero />
		<TheServices />

		<TheFooter />
		<TheSocials />
  </main>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.main-page {
	position: relative;
}
.bg {
	position: fixed;
	inset: 0;
	z-index: -1;
}
</style>
