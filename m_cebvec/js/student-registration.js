// var api = 'https://www.studybanks.com/api/orther/contact/handle';
var api = '/api/orther/contact/handle';
Vue.http.options.emulateJSON = true;
new Vue({
    el: '#my-app',
    data: {
        gender: [{
            value: 1,
            text: text.regisration1
        }, {
            value: 2,
            text: text.regisration2
        }],
        nation: [{
            value: '1',
            text: text.regisration3
        }, {
            value: '2',
            text: text.regisration4
        }, {
            value: '3',
            text: text.regisration5
        }, {
            value: '4',
            text: text.regisration6
        }, {
            value: '5',
            text: text.regisration7
        }, {
            value: '6',
            text: text.regisration8
        }, {
            value: '7',
            text: text.regisration9
        }, {
            value: '8',
            text: text.regisration10
        }, {
            value: '9',
            text: text.regisration11
        }, {
            value: '10',
            text: text.regisration12
        }, {
            value: '11',
            text: text.regisration13
        }, {
            value: '12',
            text: text.regisration14
        }, {
            value: '13',
            text: text.regisration15
        }, ],
        card: [{
            value: 0,
            text: text.regisration16
        }, {
            value: 1,
            text: text.regisration17
        }, {
            value: 2,
            text: text.regisration18
        }, {
            value: 3,
            text: text.regisration19
        }, {
            value: 4,
            text: text.regisration20
        }, {
            value: 5,
            text: text.regisration21
        }, ],
        level: [{
            value: '1',
            text: text.regisration22
        }, {
            value: '2',
            text: text.regisration23
        }],
        year: [{
            value: '1',
            text: text.regisration24
        }, {
            value: '2',
            text: text.regisration25
        }, {
            value: '3',
            text: text.regisration26
        }],
        grada: [{
            value: '1',
            text: text.regisration27
        }, {
            value: '2',
            text: text.regisration28
        }, {
            value: '3',
            text: text.regisration29
        }, {
            value: '4',
            text: text.regisration30
        }, {
            value: '5',
            text: text.regisration31
        }],
        school: [{
            value: 1,
            text: text.regisration32
        }, {
            value: 2,
            text: text.regisration33
        }, {
            value: 3,
            text: text.regisration34
        }, {
            value: 4,
            text: text.regisration35
        }, {
            value: 5,
            text: text.regisration36
        }, {
            value: 6,
            text: text.regisration37
        }, {
            value: 7,
            text: text.regisration38
        }, ],
        schoolFlag: '',
        work: '',
        json: {
            func: 'addUserInfo',
            type: '1',
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
            start_school: '',
            class: '',
            style: '普通全日制'
        },
        resCon: '',
        path: location.pathname.match(/\/\w+/g)[0],
        genderIndex: null,
        countryIndex: null,
        cardIndex: null,
        typeIndex: null,
        systemIndex: null,
        levelIndex: null,
        schoolIndex: null,
    },
    computed: {
        genTxt: function() {
            if (this.json.gender == 1) {
                return text.regisration1
            } else if (this.json.gender == 2) {
                return text.regisration2
            } else {
                return '';
            }
        },
        cardTxt: function() {
            if (this.json.card_type === 0) {
                return text.regisration16
            } else if (this.json.card_type == 1) {
                return text.regisration17
            } else if (this.json.card_type == 2) {
                return text.regisration18
            } else if (this.json.card_type == 3) {
                return text.regisration19
            } else if (this.json.card_type == 4) {
                return text.regisration20
            } else if (this.json.card_type == 5) {
                return text.regisration21
            } else {
                return ''
            }
        },
        levelTxt: function() {
            if (this.json.level_type == 1) {
                return text.regisration22
            } else if (this.json.level_type == 2) {
                return text.regisration23
            } else {
                return '';
            }
        },
        graTxt: function() {
            if (this.json.level == 1) {
                return text.regisration27
            } else if (this.json.level == 2) {
                return text.regisration28
            } else if (this.json.level == 3) {
                return text.regisration29
            } else if (this.json.level == 4) {
                return text.regisration30
            } else if (this.json.level == 5) {
                return text.regisration31
            } else {
                return '';
            }
        },
        schoolTxt: function() {
            if (this.schoolFlag == 1) {
                return text.regisration32
            } else if (this.schoolFlag == 2) {
                return text.regisration33
            } else if (this.schoolFlag == 3) {
                return text.regisration34
            } else if (this.schoolFlag == 4) {
                return text.regisration35
            } else if (this.schoolFlag == 5) {
                return text.regisration36
            } else if (this.schoolFlag == 6) {
                return text.regisration37
            } else if (this.schoolFlag == 7) {
                return text.regisration38
            } else {
                return ''
            }
        },
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
        showPicker(data, index, text,flag) {
            this.picker = this.$createPicker({
                data: [data],
                selectedIndex: index ? [index] : [],
                onSelect: function(selectedVal, selectedIndex, selectedText) {
                    this.selectHandle(selectedVal, selectedIndex, selectedText, text, flag)
                }.bind(this),
            });
            this.picker.show()
        },

        selectHandle(selectedVal, selectedIndex, selectedText) {
            if (arguments[3] == 'country' || arguments[3] == 'system') {
                this.json[arguments[3]] = selectedText[0];
            } else if (arguments[3] == 'school') {
                this.schoolFlag = selectedVal[0];
            } else {
                this.json[arguments[3]] = selectedVal[0];
            }
            if (arguments[4]) {
                this[arguments[4]] = selectedIndex[0];
            }
        },

        showDatePicker() {
            if (!this.datePicker) {
                this.datePicker = this.$createDatePicker({
                    min: new Date(1970, 7, 8),
                    max: new Date(2030, 9, 20),
                    value: new Date(),
                    onSelect: this.dateHandle,
                })
            }
            this.datePicker.show()
        },
        dateHandle(date, selectedVal, selectedText) {
            this.json.start_school = selectedVal[0] + '-' + selectedVal[1] + '-' + selectedVal[2];
        },

        submit: function() {
            if (this.schoolFlag == 7) {
                this.json.school = this.work;
            } else {
                this.json.school = this.schoolTxt;
            }
            if (!this.json.name) {
                layer.open({
                    content: text.regisration39,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.gender) {
                layer.open({
                    content: text.regisration40,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.country) {
                layer.open({
                    content: text.regisration41,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.residence) {
                layer.open({
                    content: text.regisration42,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (this.json.card_type === '') {
                layer.open({
                    content: text.regisration43,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.id_card) {
                layer.open({
                    content: text.regisration44,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.mobile) {
                layer.open({
                    content: text.regisration45,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.address) {
                layer.open({
                    content: text.regisration46,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.postcode) {
                layer.open({
                    content: text.regisration47,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.email) {
                layer.open({
                    content: text.regisration48,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.school) {
                layer.open({
                    content: text.regisration60,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.start_school) {
                layer.open({
                    content: text.regisration61,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.major) {
                layer.open({
                    content: text.regisration62,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.class) {
                layer.open({
                    content: text.regisration63,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.level_type) {
                layer.open({
                    content: text.regisration64,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.system) {
                layer.open({
                    content: text.regisration65,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (!this.json.level) {
                layer.open({
                    content: text.regisration66,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (this.json.card_type == 0 && !this.checkIdCard(this.json.id_card)) {
                layer.open({
                    content: text.pro1,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (this.json.card_type == 1 && !/^(P\d{7}|G\d{7,8}|TH\d{7,8}|S\d{7,8}|A\d{7,8}|L\d{7,8}|\d{9}|D\d+|1[4,5]\d{7}|E[A-Za-z]\d{7}|E\d{8})$/.test(this.json.id_card)) {
                layer.open({
                    content: text.pro1,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (this.json.card_type == 2 && !/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(this.json.id_card)) {
                layer.open({
                    content: text.pro1,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            if (this.json.card_type == 3 && !/^[0-9]{8}$/.test(this.json.id_card)) {
                layer.open({
                    content: text.pro1,
                    skin: 'msg',
                    time: 3 //2秒后自动关闭
                });
                return
            }
            this.$http.post(api, this.json).then(function(res) {
                if (res.body.code == 1) {
                    layer.open({
                        content: text.regisration59,
                        skin: 'msg',
                        time: 3 //2秒后自动关闭
                    });
                    // setTimeout(function() { window.location.href = this.path + '/' }.bind(this), 2000)
                } else {
                    layer.open({
                        content: res.body.data || res.body.message,
                        skin: 'msg',
                        time: 3 //2秒后自动关闭
                    });
                }
            }.bind(this));
        },
    }
})