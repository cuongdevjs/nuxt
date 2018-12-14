const loaddingHelper = {
	data() {
		return {
			changedData: false,
			watching: false
		}
	},
	methods: {
		message200() {
			this.$notify({
				type: 'success',
				title: 'Success',
				message: 'Completed!'
			})
		},
		messageDelete200() {
			this.$notify({
				type: 'success',
				title: 'Success',
				message: 'Delete Completed!'
			})
		},
		message403(params) {
			var title =
        params !== undefined ? params : 'You do not have permission to access!'
			this.$notify.error({
				title: title,
				message: ''
			})
		},
		message404() {
			this.$notify({
				type: 'warning',
				title: 'Fail',
				message: '404 Not found.'
			})
		},

		notify(title, message, type) {
			this.$message({
				title: title,
				message: message,
				type: type
			})
		},
		messageError(params) {
			var title = params !== undefined ? params : 'Error'
			this.$notify.error({
				title: title,
				message: 'Oops! Something went wrong !'
			})
		},
		messageValidate() {
			this.$notify.error({
				title: 'Error',
				message: 'Check your submit!'
			})
		},
		messageCancel() {
			this.$message({
				type: 'info',
				message: 'Canceled!'
			})
		}
	}
}

export default loaddingHelper
