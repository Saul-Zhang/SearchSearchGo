<template>
	<div class="empty-container d-flex justify-space-around align-center">
	
		<v-card
			class="empty-card"
			title="CloudSeeker"
			text="欢迎体验新一代网盘搜索引擎，感受找寻资源的快乐..."
			min-width="200"
			variant="outlined"
		></v-card>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.empty-container {
	height: 80vh;
	svg {
		opacity: 0.8;
		width: 75%;
		height: 100%;
	}
	.empty-card {
		margin-bottom: 20%;
		margin-right: 10%;
	}
}
</style>
