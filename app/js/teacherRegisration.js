var api = '/api/orther/contact/handle';
Vue.http.options.emulateJSON = true;
var app = new Vue({
    el: '#app',
    data: {
        cur: 1,
        gender: [{ value: 1, label: text.regisration1 }, { value: 2, label: text.regisration2 }],
        nation: [
            { value: '1', label: text.regisration3 },
            { value: '2', label: text.regisration4 },
            { value: '3', label: text.regisration5 },
            { value: '4', label: text.regisration6 },
            { value: '5', label: text.regisration7 },
            { value: '6', label: text.regisration8 },
            { value: '7', label: text.regisration9 },
            { value: '8', label: text.regisration10 },
            { value: '9', label: text.regisration11 },
            { value: '10', label: text.regisration12 },
            { value: '11', label: text.regisration13 },
            { value: '12', label: text.regisration14 },
            { value: '13', label: text.regisration15 },
        ],
        card: [
            { value: 0, label: text.regisration16 },
            { value: 1, label: text.regisration17 },
            { value: 2, label: text.regisration18 },
            { value: 3, label: text.regisration19 },
            { value: 4, label: text.regisration20 },
            { value: 5, label: text.regisration21 },
        ],
        level: [{ value: '1', label: text.regisration22 }, { value: '2', label: text.regisration23 }],
        year: [{ value: '1', label: text.regisration24 }, { value: '2', label: text.regisration25 }, { value: '3', label: text.regisration26 }],
        grada: [
            { value: '1', label: text.regisration27 },
            { value: '2', label: text.regisration28 },
            { value: '3', label: text.regisration29 },
            { value: '4', label: text.regisration30 },
            { value: '5', label: text.regisration31 }
        ],
        school: [
            { value: 1, label: text.regisration32 },
            { value: 2, label: text.regisration33 },
            { value: 3, label: text.regisration34 },
            { value: 4, label: text.regisration35 },
            { value: 5, label: text.regisration36 },
            { value: 6, label: text.regisration37 },
            { value: 7, label: text.regisration38 },
        ],
        schoolFlag: null,
        work: '',
        json: {
            func: 'addUserInfo',
            type: '2',
            name: '',
            gender: '',
            country: '',
            residence: '',
            card_type: '',
            id_card: '',
            mobile: '',
            email: '',
            address: '',
            postcode: '',
            school: '',
            major: '',
            level_type: '',
            system: '',
            level: '',
            work_school: '',
            work_major: '',
            work_position: '',
            experience: '',
            achievement: ''
        }
    },
    methods: {
        genderCh: function(res) {
            this.json.gender = res;
        },
        nationCh: function(res) {
            this.json.country = res;
        },
        cardCh: function(res) {
            this.json.card_type = res;
        },
        levelCh: function(res) {
            this.json.level_type = res;
        },
        yearCh: function(res) {
            this.json.system = res;
        },
        gradaCh: function(res) {
            this.json.level = res;
        },
        schoolCh: function(res) {
            this.schoolFlag = res.value;
            if (res.value != 7) {
                this.json.work_school = res.label
            } else {
                this.json.work_school = ''
            }
        },
        submit: function() {
            if (this.schoolFlag == 7) {
                this.json.work_school = this.work;
            }
            if (!this.json.name) {
                promit.msg('app', text.regisration39)
                return
            }
            if (!this.json.gender) {
                promit.msg('app', text.regisration40)
                return
            }
            if (!this.json.country) {
                promit.msg('app', text.regisration41)
                return
            }
            if (!this.json.residence) {
                promit.msg('app', text.regisration42)
                return
            }
            if (this.json.card_type === '') {
                promit.msg('app', text.regisration43)
                return
            }
            if (!this.json.id_card) {
                promit.msg('app', text.regisration44)
                return
            }
            if (!this.json.mobile) {
                promit.msg('app', text.regisration45)
                return
            }
            if (!this.json.address) {
                promit.msg('app', text.regisration46)
                return
            }
            if (!this.json.postcode) {
                promit.msg('app', text.regisration47)
                return
            }
            if (!this.json.email) {
                promit.msg('app', text.regisration48)
                return
            }
            if (!this.json.school) {
                promit.msg('app', text.regisration49)
                return
            }
            if (!this.json.major) {
                promit.msg('app', text.regisration50)
                return
            }
            if (!this.json.level_type) {
                promit.msg('app', text.regisration51)
                return
            }
            if (!this.json.system) {
                promit.msg('app', text.regisration52)
                return
            }
            if (!this.json.level) {
                promit.msg('app', text.regisration53)
                return
            }
            if (!this.json.work_school) {
                promit.msg('app', text.regisration54)
                return
            }
            if (!this.json.work_major) {
                promit.msg('app', text.regisration55)
                return
            }
            if (!this.json.work_position) {
                promit.msg('app', text.regisration56)
                return
            }
            if (!this.json.experience) {
                promit.msg('app', text.regisration57)
                return
            }
            if (!this.json.achievement) {
                promit.msg('app', text.regisration58)
                return
            }
            this.$http.post(api, this.json).then(function(res) {
                if (res.body.code == 1) {
                    promit.msg('app', text.regisration59);
                    setTimeout(function() { window.location.href = "/cn/" }, 2500)
                } else {
                    promit.msg('app', res.body.data || res.body.message);
                }
            });
        },
    },
    created: function() {},
    mounted: function() {

    }

})