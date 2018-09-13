var api = 'https://www.studybanks.com/api/orther/contact/handle';
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
        },
        cardType: false,
    },
    methods: {
        checkIdCard: function(id) {
            var idcard = String(id);
            var City = [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65, 71, 81, 82, 91];
            var iSum = 0;
            var idcity = null;
            var idCardLength = idcard.length;
            //长度验证
            var patt1 = new RegExp(/^\d{17}(\d|x|X)$/i);
            var patt2 = new RegExp(/^\d{15}$/i);
            if (!patt1.test(idcard) && !patt2.test(idcard)) {
                return false;
            }
            //地区验证
            for (var i = 0; i < City.length; i++) {
                if (String(City[i]) === idcard.slice(0, 2)) {
                    idcity = idcard.slice(0, 2);
                    break;
                }
            }
            if (idcity == null) {
                return false;
            }
            // 15位身份证验证生日，转换为18位
            if (idCardLength == 15) {
                idcard = idcard.slice(0, 6) + "19" + idcard.slice(6, 15); //15to18
                var Bit18 = getVerifyBit(idcard); //算出第18位校验码
                idcard = idcard + Bit18;
            }
            // 判断是否大于2078年，小于1900年
            var year = idcard.slice(6, 10);
            if (year < 1900 || year > 2078) {
                return false;
            }
            //身份证编码规范验证
            var idcard_base = idcard.slice(0, 17);
            var idcard_v = idcard.slice(17, 18);
            if (idcard_v == 'x' || idcard_v == 'X') {
                idcard_v = 'X';
            }
            if (idcard_v !== getVerifyBit(idcard_base)) {
                return false;
            }
            //alert ('yes');
            return true;
            /* 身份证18位编码规则：dddddd yyyymmdd xxx y */
            function getVerifyBit(idcard_base) {
                if (idcard_base.length != 17) {
                    return false;
                }
                //加权因子
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                //校验码对应值
                var verify_number_list = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
                var checksum = 0;
                for (var i = 0; i < idcard_base.length; i++) {
                    checksum += idcard_base.slice(i, i + 1) * factor[i];
                }
                var mod = checksum % 11;
                var verify_number = verify_number_list[mod];
                return verify_number;
            }
        },
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
        cardFouse: function() {
            if (this.cardType) {
                this.cardType = false;
                this.json.id_card = '';
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
            if (this.json.card_type == 0 && !this.checkIdCard(this.json.id_card)) {
                this.cardType = true;
                promit.msg('app', text.pro1)
                return
            }
            if (this.json.card_type == 1 && !/^(P\d{7}|G\d{7,8}|TH\d{7,8}|S\d{7,8}|A\d{7,8}|L\d{7,8}|\d{9}|D\d+|1[4,5]\d{7}|E[A-Za-z]\d{7}|E\d{8})$/.test(this.json.id_card)) {
                this.cardType = true;
                promit.msg('app', text.pro1)
                return
            }
            if (this.json.card_type == 2 && !/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(this.json.id_card)) {
                this.cardType = true;
                promit.msg('app', text.pro1)
                return
            }
            if (this.json.card_type == 3 && !/^[0-9]{8}$/.test(this.json.id_card)) {
                this.cardType = true;
                promit.msg('app', text.pro1)
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
    created: function() {

    },
    mounted: function() {

    }

})