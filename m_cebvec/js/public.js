"use strict";

var cn = {
    "regisration1": "男",
    "regisration2": "女",
    'regisration3': "中国",
    'regisration4': "中国(香港)",
    'regisration5': "中国(台湾)",
    'regisration6': "中国(澳门)",
    'regisration7': "英国",
    'regisration8': "澳大利亚",
    'regisration9': "加拿大",
    'regisration10': "美国",
    'regisration11': "德国",
    'regisration12': "印度",
    'regisration13': "泰国",
    'regisration14': "菲律宾",
    'regisration15': "阿拉伯联合酋长国",
    'regisration16': "居民身份证",
    'regisration17': "护照",
    'regisration18': "港澳居民来往内地通行证",
    'regisration19': "台湾居民来往大陆通行证",
    'regisration20': "外国人居留证",
    'regisration21': "外国人出入境证",
    'regisration22': "普通高等教育",
    'regisration23': "普通中等教育",
    'regisration24': "3年制",
    'regisration25': "4年制",
    'regisration26': "5年制",
    'regisration27': "专科",
    'regisration28': "本科",
    'regisration29': "硕士",
    'regisration30': "博士",
    'regisration31': "其他",
    'regisration32': "上海城建职业学院",
    'regisration33': "成都职业技术学院",
    'regisration34': "黑龙江建筑职业学院",
    'regisration35': "黑龙江农业经济学院",
    'regisration36': "上海工商职业技术学院",
    'regisration37': "顺德职业技术学院",
    'regisration38': "其他（请填写）",
    'regisration39': "请填写名称",
    'regisration40': "请选择性别",
    'regisration41': "请选择国籍",
    'regisration42': "请填写户籍所在地",
    'regisration43': "请选择证件类型",
    'regisration44': "请填写证件号码",
    'regisration45': "请填写移动电话",
    'regisration46': "请填写通讯地址",
    'regisration47': "请填写邮编",
    'regisration48': "请填写邮箱",
    'regisration49': "请填写最高学历学校",
    'regisration50': "请填写最高学历学校专业",
    'regisration51': "请选择最高学历学历类别",
    'regisration52': "请选择最高学历学制",
    'regisration53': "请选择最高学历层次",
    'regisration54': "请选择工作学校",
    'regisration55': "请填写工作学校专业",
    'regisration56': "请填写职务",
    'regisration57': "请填写工作经历",
    'regisration58': "请填写学习成果",
    'regisration59': "您的信息已提交，工作人员会尽快跟你联系",
    'regisration60': "请选择所在学校",
    'regisration61': "请选择入学日期",
    'regisration62': "请填写所在专业",
    'regisration63': "请填写年级",
    'regisration64': "请选择学历类别",
    'regisration65': "请选择学制",
    'regisration66': "请选择层次",
    'header1': '中英职业教育卓越中心',
    'pro1': '证件号码格式有误',
    'new1': "上海工商职业技术学院与英国尼斯港塔尔伯特学院签署合作备忘录",
    "new2": "英国尼斯港塔尔波特学院及中英职业教育卓越中心代表团到访我校",
    "new3": "中英对接持续助力学院国际化发展",
    "new4": "上海城建职业学院被推举为中英职业教育合作发展联盟副主席单位",
    "new5": "黑龙江建筑职业技术学院院长王力教授当选中英职业教育合作发展联盟副主席",
    "new6": "中国职业教育对外合作联盟-中英职业教育合作发展联盟在京成立",
    "new7": "英国上议院、国际贸易部对英国教育机构开展对华教育合作（CEBVEC）支持函书",
    'profession1': "财经商贸",
    'profession2': "国际金融",
    'profession3': "信用管理",
    'profession4': "会计",
    'profession5': "工商企业管理",
    'profession6': "广告策划与营销",
    'profession7': "工程物流管理",
    'profession8': "土木建筑",
    'profession9': "建筑设计",
    'profession10': "建筑装饰工程技术",
    'profession11': "风景园林设计",
    'profession12': "建筑智能化工程技术",
    'profession13': "给排水工程技术",
    'profession14': "装备制造",
    'profession15': "机械制造与自动化",
    'profession16': "精密机械技术",
    'profession17': "焊接技术与自动化",
    'profession18': "模具设计与制造",
    'profession19': "工业网络技术",
    'profession20': "电子信息",
    'profession21': "电子信息工程技术",
    'profession22': "智能产品开发",
    'profession23': "电子制造技术与设备",
    'profession24': "声像工程技术",
    'profession25': "物联网应用技术",
    'profession26': "信息安全与管理",
    'profession27': "设施农业与装备",
    'profession28': "现代农业技术",
    'profession29': "休闲农业",
    'profession30': "园艺技术",
    'profession31': "医药卫生",
    'profession32': "护理",
    'profession33': "药学",
    'profession34': "医学生物技术",
    'profession35': "医疗设备应用技术",
    'profession36': "康复工程技术",
    'profession37': "文化艺术",
    'profession38': "艺术设计",
    'profession39': "视觉传播设计与制作",
    'profession40': "服装与服饰设计",
    'profession41': "环境艺术设计",
    'profession42': "公共艺术设计",
    'profession43': "表演艺术",
    'profession44': "音乐制作",
    'profession45': "舞台艺术设计与制作",
    'profession46': "新闻传播",
    'profession47': "网络新闻与传播",
    'profession48': "数字媒体设备管理",
    'profession49': "新闻采编与制作",
    'profession50': "影视动画",
    'profession51': "传播与策划",
    'profession52': "旅游",
    'profession53': "旅游管理",
    'profession54': "酒店管理",
    'profession55': "烹调工艺与营养",
    'profession56': "西餐工艺",
    'profession57': "会展策划与管理",
    'profession58': "教育与体育",
    'profession59': "早期教育",
    'profession60': "旅游英语",
    'profession61': "运动防护",
    'profession62': "体育保健与康复",
    'profession63': "公共管理与服务",
    'profession64': "社会工作",
    'profession65': "社会福利事业管理",
    'profession66': "社区管理与服务",
    'profession67': "劳动与社会保障",
    'profession68': "生物与化工",
    'profession69': "化工生物技术",
    'profession70': "药品生物技术",
    'profession71': "高分子合成技术",
    'profession72': "化工装备技术",
    'profession73': "精细化工技术",
    'profession74': "轻工纺织",
    'profession75': "鞋类设计与工艺",
    'profession76': "数字图文信息技",
    'profession77': "家用纺织品设计",
    'profession78': "服装设计与工艺",
    'profession79': "精细化工技术",
    'profession80': "食品药品与粮食",
    'profession81': "食品加工技术",
    'profession82': "食品质量与安全",
    'profession83': "食品营养与卫生",
    'profession84': "药品生产技术",
    'profession85': "制药设备应用技术",
    'profession86': "公安与司法",
    'profession87': "信息网络安全监察",
    'profession88': "特警",
    'profession89': "公共安全管理",
    'profession90': "刑事科学技术",
    'profession91': "交通运输",
    'profession92': "智能交通技术运用",
    'profession93': "新能源汽车运用与维修",
    'profession94': "港口与航运管理",
    'profession95': "空中乘务",
    'profession96': "能源动力与材料",
    'profession97': "电力系统自动化技术",
    'profession98': "城市热能应用技术",
    'profession99': "风力发电工程技术",
    'profession100': "复合材料工程技术",
    'profession101': "新型建筑材料技术",
    'profession102': "资源环境与安全",
    'profession103': "测绘地理信息技",
    'profession104': "大气探测技术",
    'profession105': "环境监测与控制技术",
    'profession106': "环境工程技术",
    'profession107': "安全健康与环保",
    'profession108': "水利",
    'profession109': "水利水电工程管理",
    'profession110': "港口航道与治河工程",
    'profession111': "水利机电设备运行与管理",
    'profession112': "农林牧渔"
};
var en = {
    "regisration1": "男",
    "regisration2": "女",
    'regisration3': "中国",
    'regisration4': "中国(香港)",
    'regisration5': "中国(台湾)",
    'regisration6': "中国(澳门)",
    'regisration7': "英国",
    'regisration8': "澳大利亚",
    'regisration9': "加拿大",
    'regisration10': "美国",
    'regisration11': "德国",
    'regisration12': "印度",
    'regisration13': "泰国",
    'regisration14': "菲律宾",
    'regisration15': "阿拉伯联合酋长国",
    'regisration16': "居民身份证",
    'regisration17': "护照",
    'regisration18': "港澳居民来往内地通行证",
    'regisration19': "台湾居民来往大陆通行证",
    'regisration20': "外国人居留证",
    'regisration21': "外国人出入境证",
    'regisration22': "普通高等教育",
    'regisration23': "普通中等教育",
    'regisration24': "3年制",
    'regisration25': "4年制",
    'regisration26': "5年制",
    'regisration27': "专科",
    'regisration28': "本科",
    'regisration29': "硕士",
    'regisration30': "博士",
    'regisration31': "其他",
    'regisration32': "上海城建职业学院",
    'regisration33': "成都职业技术学院",
    'regisration34': "黑龙江建筑职业学院",
    'regisration35': "黑龙江农业经济学院",
    'regisration36': "上海工商职业技术学院",
    'regisration37': "顺德职业技术学院",
    'regisration38': "其他（请填写）",
    'regisration39': "请填写名称",
    'regisration40': "请选择性别",
    'regisration41': "请选择国籍",
    'regisration42': "请填写户籍所在地",
    'regisration43': "请选择证件类型",
    'regisration44': "请填写证件号码",
    'regisration45': "请填写移动电话",
    'regisration46': "请填写通讯地址",
    'regisration47': "请填写邮编",
    'regisration48': "请填写邮箱",
    'regisration49': "请填写最高学历学校",
    'regisration50': "请填写最高学历学校专业",
    'regisration51': "请选择最高学历学历类别",
    'regisration52': "请选择最高学历学制",
    'regisration53': "请选择最高学历层次",
    'regisration54': "请选择工作学校",
    'regisration55': "请填写工作学校专业",
    'regisration56': "请填写职务",
    'regisration57': "请填写工作经历",
    'regisration58': "请填写学习成果",
    'regisration59': "您的信息已提交，工作人员会尽快跟你联系",
    'regisration60': "请选择所在学校",
    'regisration61': "请选择入学日期",
    'regisration62': "请填写所在专业",
    'regisration63': "请填写年级",
    'regisration64': "请选择学历类别",
    'regisration65': "请选择学制",
    'regisration66': "请选择层次",
    'header1': '中英职业教育卓越中心',
    'pro1': '证件号码格式有误',
    'new1': "上海工商职业技术学院与英国尼斯港塔尔伯特学院签署合作备忘录",
    "new2": "英国尼斯港塔尔波特学院及中英职业教育卓越中心代表团到访我校",
    "new3": "中英对接持续助力学院国际化发展",
    "new4": "上海城建职业学院被推举为中英职业教育合作发展联盟副主席单位",
    "new5": "黑龙江建筑职业技术学院院长王力教授当选中英职业教育合作发展联盟副主席",
    "new6": "中国职业教育对外合作联盟-中英职业教育合作发展联盟在京成立",
    "new7": "英国上议院、国际贸易部对英国教育机构开展对华教育合作（CEBVEC）支持函书",
    'profession1': "财经商贸",
    'profession2': "国际金融",
    'profession3': "信用管理",
    'profession4': "会计",
    'profession5': "工商企业管理",
    'profession6': "广告策划与营销",
    'profession7': "工程物流管理",
    'profession8': "土木建筑",
    'profession9': "建筑设计",
    'profession10': "建筑装饰工程技术",
    'profession11': "风景园林设计",
    'profession12': "建筑智能化工程技术",
    'profession13': "给排水工程技术",
    'profession14': "装备制造",
    'profession15': "机械制造与自动化",
    'profession16': "精密机械技术",
    'profession17': "焊接技术与自动化",
    'profession18': "模具设计与制造",
    'profession19': "工业网络技术",
    'profession20': "电子信息",
    'profession21': "电子信息工程技术",
    'profession22': "智能产品开发",
    'profession23': "电子制造技术与设备",
    'profession24': "声像工程技术",
    'profession25': "物联网应用技术",
    'profession26': "信息安全与管理",
    'profession27': "设施农业与装备",
    'profession28': "现代农业技术",
    'profession29': "休闲农业",
    'profession30': "园艺技术",
    'profession31': "医药卫生",
    'profession32': "护理",
    'profession33': "药学",
    'profession34': "医学生物技术",
    'profession35': "医疗设备应用技术",
    'profession36': "康复工程技术",
    'profession37': "文化艺术",
    'profession38': "艺术设计",
    'profession39': "视觉传播设计与制作",
    'profession40': "服装与服饰设计",
    'profession41': "环境艺术设计",
    'profession42': "公共艺术设计",
    'profession43': "表演艺术",
    'profession44': "音乐制作",
    'profession45': "舞台艺术设计与制作",
    'profession46': "新闻传播",
    'profession47': "网络新闻与传播",
    'profession48': "数字媒体设备管理",
    'profession49': "新闻采编与制作",
    'profession50': "影视动画",
    'profession51': "传播与策划",
    'profession52': "旅游",
    'profession53': "旅游管理",
    'profession54': "酒店管理",
    'profession55': "烹调工艺与营养",
    'profession56': "西餐工艺",
    'profession57': "会展策划与管理",
    'profession58': "教育与体育",
    'profession59': "早期教育",
    'profession60': "旅游英语",
    'profession61': "运动防护",
    'profession62': "体育保健与康复",
    'profession63': "公共管理与服务",
    'profession64': "社会工作",
    'profession65': "社会福利事业管理",
    'profession66': "社区管理与服务",
    'profession67': "劳动与社会保障",
    'profession68': "生物与化工",
    'profession69': "化工生物技术",
    'profession70': "药品生物技术",
    'profession71': "高分子合成技术",
    'profession72': "化工装备技术",
    'profession73': "精细化工技术",
    'profession74': "轻工纺织",
    'profession75': "鞋类设计与工艺",
    'profession76': "数字图文信息技",
    'profession77': "家用纺织品设计",
    'profession78': "服装设计与工艺",
    'profession79': "精细化工技术",
    'profession80': "食品药品与粮食",
    'profession81': "食品加工技术",
    'profession82': "食品质量与安全",
    'profession83': "食品营养与卫生",
    'profession84': "药品生产技术",
    'profession85': "制药设备应用技术",
    'profession86': "公安与司法",
    'profession87': "信息网络安全监察",
    'profession88': "特警",
    'profession89': "公共安全管理",
    'profession90': "刑事科学技术",
    'profession91': "交通运输",
    'profession92': "智能交通技术运用",
    'profession93': "新能源汽车运用与维修",
    'profession94': "港口与航运管理",
    'profession95': "空中乘务",
    'profession96': "能源动力与材料",
    'profession97': "电力系统自动化技术",
    'profession98': "城市热能应用技术",
    'profession99': "风力发电工程技术",
    'profession100': "复合材料工程技术",
    'profession101': "新型建筑材料技术",
    'profession102': "资源环境与安全",
    'profession103': "测绘地理信息技",
    'profession104': "大气探测技术",
    'profession105': "环境监测与控制技术",
    'profession106': "环境工程技术",
    'profession107': "安全健康与环保",
    'profession108': "水利",
    'profession109': "水利水电工程管理",
    'profession110': "港口航道与治河工程",
    'profession111': "水利机电设备运行与管理",
    'profession112': "农林牧渔"
};
var lang = location.pathname.match(/\/\w+/g)[0];
var text = location.pathname.match(/\/\w+/g)[0] == '/cn' ? cn : en;
var pageBottom = function() {
    var template = "<div class=\"page-bottom\">\n                <p>\u5730\u5740\uFF1A\u4E2D\u56FD\xB7\u5317\u4EAC\u79D1\u6280\u4F1A\u5C55\u4E2D\u5FC32\u53F7\u697C19\u5C42</p>\n                <p>\xA9 2018 CEBVE</p>\n                <p>\n                    <a href=\"javascript:void(0)\">\u9690\u79C1\u4E0E\u9002\u7528\u6761\u6B3E</a>\n                    <span>\u7248\u6743\u6240\u6709</span>\n                    <span>\u4EACICP\u590715063355\u53F7</span>\n                </p>\n            </div>";
    return Vue.component("pageBottom", {
        template: template
    });
}();
var myAside = function() {
    var template = "<div id=\"aside\">\n            <transition name=\"fade\">\n                <div class=\"mask\" v-show=\"value\" @click=\"close\"></div>\n            </transition>\n            <transition name=\"left\">\n            <div class=\"aside-wrapper\" v-show=\"value\">\n                <div class=\"aside-logo\">\n                    <img src=\"../images/index/aside-logo.png\">\n                </div>\n                <cube-scroll ref=\"scroll\">\n                    <ul>\n                        <li>\n                            <p class=\"one active\"><a href=\"./\">\u9996\u9875</a></p>\n                        </li>\n                        <li>\n                            <p class=\"one\"><a href=\"major.html\">\u4E2D\u82F1\u4E13\u4E1A</a></p>\n                        </li>\n                        <li>\n                            <p class=\"one\"><a href=\"expert.html\">\u56FD\u9645\u6559\u5E08</a></p>\n                            <div class=\"two\">\n                                <a href=\"expert.html\">\u6559\u80B2\u4E13\u5BB6</a>\n                                <a href=\"teacher_training.html\">\u6559\u80B2\u57F9\u8BAD</a>\n                            </div>\n                        </li>\n                        <li>\n                            <p class=\"one\"><a href=\"major_build.html\">\u4E13\u4E1A\u5171\u5EFA</a></p>\n                        </li>\n                        <li>\n                            <p class=\"one\"><a href=\"summary-cebvec.html\">\u5173\u4E8E\u6211\u4EEC</a></p>\n                            <div class=\"two\">\n                                <a href=\"summary-cebvec.html\">CEBVEC\u7B80\u4ECB</a>\n                                <a href=\"about_NPTC.html\">NPTC\u4ECB\u7ECD</a>\n                                <a href=\"news.html\">\u65B0\u95FB\u8D44\u8BAF</a>\n                                <a href=\"contact.html\">\u8054\u7CFB\u6211\u4EEC</a>\n                            </div>\n                        </li>\n                    </ul>\n                </cube-scroll>\n            </div>\n            </transition>\n        </div>";
    return Vue.component("myAside", {
        template: template,
        props: ['value'],
        methods: {
            close: function close() {
                this.$emit("input", false);
            }
        }
    });
}();
var myApply = function() {
    var template = "<div class=\"my-apply\">\n            <transition name=\"fade\">\n            <div class=\"mask\" v-show=\"value\" @click=\"close\"></div></transition>\n            <transition name=\"bottomIn\">\n            <div class=\"apply-box\" v-show=\"value\">\n                <div class=\"cubeic-close\" @click=\"close\"></div>\n                <p class=\"title\">\u8BF7\u7559\u4E0B\u60A8\u7684\u8054\u7CFB\u65B9\u5F0F\uFF0C\u65B9\u4FBF\u6211\u4EEC\u8054\u7CFB\u5230\u60A8</p>\n                <cube-input placeholder=\"\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D\"></cube-input>\n                <cube-input placeholder=\"\u8BF7\u8F93\u5165\u60A8\u7684\u5355\u4F4D\"></cube-input>\n                <cube-input placeholder=\"\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u65B9\u5F0F\"></cube-input>\n                <p class=\"error\" :style=\"{visibility:error?'':'hidden'}\">\uFF0A\u63D0\u4EA4\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5</p>\n                <div class=\"apply-btn\">\n                    <a href=\"javascript:void(0)\">\u7533\u8BF7</a>\n                </div>\n            </div>\n            </transition>\n        </div>";
    return Vue.component("myApply", {
        template: template,
        props: ['value'],
        data: function data() {
            return {
                error: false
            };
        },

        methods: {
            close: function close() {
                this.$emit("input", false);
            }
        }
    });
}();
var myRegister = function() {
    var template = "<div class=\"my-register\">\n            <transition name=\"fade\">\n            <div class=\"mask\" @click=\"close\" v-show=\"value\"></div></transition>\n            <transition name=\"bounce\">\n            <div class=\"register-box\" v-show=\"value\">\n                <span class=\"cubeic-close\" @click=\"close\"></span>\n                <a class=\"register-btn\" href=\"teacher-registration.html\">\n                    <div class=\"img\">\n                        <img src=\"../images/index/icon5.png\">\n                    </div>\n                    <p>\u8001\u5E08\u6CE8\u518C</p>\n                </a>\n                <a class=\"register-btn\" href=\"student-registration.html\">\n                    <div class=\"img\">\n                        <img src=\"../images/index/icon6.png\">\n                    </div>\n                    <p>\u5B66\u751F\u6CE8\u518C</p>\n                </a>\n            </div>\n            </transition>\n        </div>";
    return Vue.component("myRegister", {
        template: template,
        props: ['value'],
        methods: {
            close: function close() {
                this.$emit("input", false);
            }
        }
    });
}();
var myHeader = function() {
    var template = "<div class=\"my-header\">\n            <div class=\"cubeic-back\" @click=\"back\"></div>\n            <p class=\"title\"><slot>\u6807\u9898</slot></p>\n        </div>";
    return Vue.component("myHeader", {
        template: template,
        methods: {
            back: function back() {
                window.history.back();
            }
        }
    });
}();