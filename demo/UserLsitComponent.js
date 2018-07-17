Vue.component('user-list', {
	props: [
		'user'
	],
	template: '<div>{{ user.id }} <input type="text" v-model="user.name"> </div>'
});