<template>
	<div class="empty-container d-flex justify-space-around align-center">
		<v-card
			class="empty-card"
			title="暂无相关数据"
			text="你可以试试更简短的关键词或者使用相似的词语..."
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
    margin-left: 10%;
	}
}
</style>
