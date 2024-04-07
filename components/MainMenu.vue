<template>
	<v-menu>
		<template v-slot:activator="{ props }">
			<v-btn icon="mdi-menu" variant="text" v-bind="props"> </v-btn>
		</template>
		<v-list>
			<v-list-item
				v-for="(item, index) in menuItems"
				:key="index"
				:value="index"
			>
				<v-list-item-title
					class="d-flex justify-space-between"
					@click="item.clickFn"
				>
					<v-icon :icon="item.icon"></v-icon>
					<span class="ml-2">
						{{ item.title }}
					</span>
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
	<v-dialog v-model="isDialogShow" width="500">
		<template #default="{ isActive }">
			<v-card title="网站声明">
				<v-card-text>
					<p>
						1.
						本站链接为程序自动收集自互联网，链接跳转至官方网盘，网站本身不储存、复制、传播、控制编辑任何网盘文件，也不提供下载服务；
					</p>
					<p class="mt-2">
						2.本站遵守相关法律法规，坚决杜绝一切违规不良信息，如您发现任何涉嫌违规的网盘信息，请立即向网盘官方网站举报；
					</p>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text="关闭" @click="isActive.value = false"></v-btn>
				</v-card-actions>
			</v-card>
		</template>
	</v-dialog>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'
const theme = useTheme()
const themeCookie = useCookie('theme', { expires: new Date('9999-12-31') })

function toggleTheme () {
	const lightOrDark = theme.global.current.value.dark ? 'light' : 'dark'
  theme.global.name.value = lightOrDark
	themeCookie.value = lightOrDark
}

const isDialogShow = ref(false);
const menuItems = ref([
	{
		title: "网站声明",
		icon: "mdi-checkbox-blank-badge-outline",
		clickFn: () => (isDialogShow.value = true),
	},
	{
		title: "深浅切换",
		icon: "mdi-theme-light-dark",
		clickFn: toggleTheme,
	},
	// {
	// 	title: "意见反馈",
	// 	icon: "mdi-github",
	// 	clickFn: () =>
	// 		window.open("https://github.com/Justin3go/SearchSearchGo", "_blank"),
	// }
]);
</script>

<style lang="scss" scoped>
a:link {
	color: rgba(var(--v-theme-primary), 0.6)
}

a:visited {
	color: rgba(var(--v-theme-primary), 0.4)
}

a:hover {
	color: rgba(var(--v-theme-primary), 0.8)
}

a:active {
	color: rgba(var(--v-theme-primary), 1)
}
</style>
