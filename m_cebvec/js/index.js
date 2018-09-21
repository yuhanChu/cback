"use strict";

new Vue({
	el: "#app",
	data: function data() {
		return {
			footerShow: 1,
			showAside: false,
			showApply: false,
			showRegister: false,
			video: document.getElementById("video"),
			showAll: false
		};
	},

	methods: {
		play: function play() {
			if (video.requestFullScreen) {
				this.video.requestFullScreen();
			} else if (video.mozRequestFullScreen) {
				this.video.mozRequestFullScreen();
			} else if (video.webkitRequestFullScreen) {
				this.video.webkitRequestFullScreen();
			}
			this.video.play();
		}
	}
});