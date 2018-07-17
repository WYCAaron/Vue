var vm = new Vue({
	el: '#app',
	data: {
		message: 'message',
		message2: 'message2',
		message3: 'message3',
		isShow: false,
		selected: '',
		users: [
			{
				id: 1,
				name: 'user1'
			},
			{
				id: 2,
				name: 'user2'
			},
			{
				id: 3,
				name: 'user3'
			}
		]
	},
	methods: {
		getUser: function (user) {
			alert(user.id, user.name);
		},
		changeMessage: function () {
			this.message = 'MESSAGE';
			this.message2 = 'MESSAGE2';
			this.message3 = 'MESSAGE3';
			this.isShow = true;
		},
		valueChange: function (e) {
			// e.stopPropagation();
			console.log('冒泡事件');
		},
		divClick: function () {
			console.log('冒泡事件 div');
		},
		submit: function () {
			alert(13);
		},
	},

	computed: {
		reverseMessage: {
			get: function () {
				console.log('compute message get');
				return this.message + '!!!';
			},
			set: function (newValue) {
				console.log('compute message set');
				this.message = newValue;
			}
		},
		reverseMessage2: function () {
			console.log('compute message2');
			return this.message2 + '!!!';
		},
		reverseMessage3: function () {
			console.log('compute message3');
			return this.message3 + '!!!';
		},
		fullMessage: function () {
			console.log('compute full message');
			return this.message + ' ' + this.message2;
		},
		fullMessage2: function () {
			alert('compute full message');
			return this.message + ' ' + this.message2;
		},
		reverseUsers: function () {
			return this.users.concat({id: 4, name: 'user4'});
		},
		computeColor: function () {
			return {
				messageColor: this.isShow
			}
		}
	},

	created() {
		console.log(this);
	}
});

// vm.$watch('message', function (newValue, oldValue) {
// 	alert(oldValue);
// 	alert(newValue);
// });
