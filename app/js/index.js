var api = '/api/orther/contact/handle';
Vue.http.options.emulateJSON = true;
var app = new Vue({
    el: '#app',
    data: {
        cur: 1,
        playShow: false,
        applyShow: false,
        error: '',
        nameEmpty: false,
        contactEmpty: false,
        companyEmpty: false,
        sendJson: {
            func: 'addData',
            type: 1,
            name: '',
            contact: '',
            company: '',
            remomark: '',
        },
        timer: null,
        swTile: '',
        swCon: '',
        swUrl: '',
        text:text,
        path:location.pathname.match(/\/\w+/g)[0],
    },
    methods: {
        videoEnd: function() {
            this.playShow = false;
        },
        videoPlay: function() {
            this.playShow = true;
            this.vi.play();
        },
        applyOpen: function() {
            this.applyShow = true;
            document.body.setAttribute('class', 'hidd')
        },
        applyClose: function() {
            this.applyShow = false;
            this.sendJson.name = '';
            this.sendJson.company = '';
            this.sendJson.contact = '';
            document.body.removeAttribute('class', 'hidd')
        },
        inFocus: function(n) {
            if (this[n]) {
                this[n] = false;
            }
        },
        submit: function() {
            clearTimeout(this.timer);
            if (!this.sendJson.name) {
                this.error = '* '+this.text.home1;
                this.nameEmpty = true;
                this.timer = setTimeout(function() { this.error = '' }.bind(this), 2000);
                return
            }
            if (!this.sendJson.company) {
                this.error = '* '+this.text.home2;
                this.companyEmpty = true;
                this.timer = setTimeout(function() { this.error = '' }.bind(this), 2000);
                return
            }
            if (!this.sendJson.contact) {
                this.error = '* '+this.text.home3;
                this.contactEmpty = true;
                this.timer = setTimeout(function() { this.error = '' }.bind(this), 2000);
                return
            }
            this.$http.post(api, this.sendJson).then(function(res) {
                if (res.body.code == 1) {
                    promit.msg('app', this.text.home1)
                    this.applyClose()
                } else {
                    this.error = '* ' + res.body.data || res.body.message;
                    this.timer = setTimeout(function() { this.error = '' }.bind(this), 2500);
                }
            }.bind(this));
        },
    },
    created: function() {
    },
    mounted: function() {
        var _this = this;
        this.vi = document.getElementById('my-video');
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            // centeredSlides: true,
            spaceBetween: 0,
            loop: true,
            grabCursor: true,
            prevButton: '.sw-pre',
            nextButton: '.sw-next',
            onSlideChangeEnd: function(swiper) {
                if (swiper.realIndex == 0) {
                    _this.swUrl = _this.path+'/news1.html';
                    _this.swTile = _this.text.lang33;
                    _this.swCon = _this.text.lang34;
                } else if (swiper.realIndex == 1) {
                    _this.swUrl = _this.path+'/news2.html';
                    _this.swTile = _this.text.lang35;
                    _this.swCon = _this.text.lang36
                } else if (swiper.realIndex == 2) {
                    _this.swUrl = _this.path+'/news2.html';
                    _this.swTile = _this.text.lang37;
                    _this.swCon = _this.text.lang38
                } else if (swiper.realIndex == 3) {
                    _this.swUrl = 'http://www.succ.edu.cn/Home/News/view/xwid/2cb38aee8c8c7b631b217a8e09f99251';
                    _this.swTile = _this.text.lang39;
                    _this.swCon = _this.text.lang40
                } else if (swiper.realIndex == 4) {
                    _this.swUrl = 'http://www.sicp.sh.cn/index.php/cms/item-view-id-3143.shtml';
                    _this.swTile = _this.text.lang41;
                    _this.swCon = _this.text.lang42;
                }
            }
        });
    }

})