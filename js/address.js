(function ($) {
    var ctrlgroup = [];
    $.fn.addressZH = function () {
        $(this).each(
            function () {
                var ctrlId, _that, state, $tabs, $ul, $head, $body, $finish, $cancel, $panle, $cover, onClick, onSelect, setItems, onTab, onFinish, onCancel;
                ctrlId = ctrlgroup.length;
                ctrlgroup.push(ctrlId);
                _that = $(this);
                state = false;
                $tabs = null;
                $ul = null;
                $head = null;
                $body = null;
                $finish = null;
                $cancel = null;
                $panle = null;
                $cover = null;
                onClick = function () {
                    if (state) {
                        $panle.show();
                        $cover.show();
                    } else {
                        state = [];
                        $('body').append('<div class="address-ctrl-cover" id="address-ctrl-cover' + ctrlId + '"></div><div class="address-ctrl" id="addctrl' + ctrlId + '"><div class="address-title">请选择地址</div><div class="address-head"><span class="active">省</span></div><div id="addressbody' + ctrlId + '" class="address-body"><ul></ul></div><div class="address-foot"><a class="check-a" id="addressfinish' + ctrlId + '">完成</a><a class="cancel-a" id="addresscancel' + ctrlId + '">取消</a></div></div>');
                        $panle = $('#addctrl' + ctrlId);
                        $head = $panle.find('.address-head');
                        $body = $panle.find('.address-body');
                        $cover = $('#address-ctrl-cover' + ctrlId);
                        $tabs = $head.find('span');
                        $ul = $body.find('ul');
                        $finish = $('#addressfinish' + ctrlId);
                        $cancel = $('#addresscancel' + ctrlId);
                        for (var index = 0; index < province.length; index++) {
                            var element = province[index];
                            if ( salesProvince.indexOf(element.pn) != -1 ){
                                $ul.append('<li data-id="' + element.pi + '">' + element.pn + '</li>');
                            }
                        }
                        $body.on('click', 'li', onSelect);
                        $head.on('click', 'span', onTab);
                        $finish.on('click', onFinish);
                        $cancel.on('click', onCancel);
                    }
                };
                onSelect = function () {
                    var _this = $(this),
                        index = _this.parent().index();
                    if (state[index] === _this.html()) return;
                    state[index] = _this.html();
                    $tabs.eq(index).html(state[index]);
                    state.length = index + 1;
                    console.log(state);
                    setItems(index, _this.data('id'));
                };
                setItems = function (index, id) {
                    var i, element;
                    if (index === 2) return;
                    id = typeof id === 'string' ? Number(id) : id;
                    if (index === 0) {
                        if ($tabs.length === 1) {
                            $head.append('<span></span>');
                            $body.append('<ul></ul>');
                            $tabs = $head.find('span');
                            $ul = $body.find('ul');
                        } else if ($tabs.length === 3) {
                            $tabs.eq(2).remove();
                            $ul.eq(2).remove();
                            $tabs = $head.find('span');
                            $ul = $body.find('ul');
                        }

                        $tabs.eq(1).html('市');
                        $ul.eq(1).html('');
                        for (i = 0; i < city.length; i++) {
                            element = city[i];
                            if (id === element.pi && salesDistrict.indexOf(element.cn) != -1) {
                                $ul.eq(1).append('<li data-id="' + element.ci + '">' + element.cn + '</li>');
                            }
                        }
                    } else if (index === 1) {
                        if ($tabs.length === 2) {
                            $head.append('<span></span>');
                            $body.append('<ul></ul>');
                            $tabs = $head.find('span');
                            $ul = $body.find('ul');
                        }
                        $tabs.eq(2).html('区');
                        $ul.eq(2).html('');
                        for (i = 0; i < district.length; i++) {
                            element = district[i];
                            if (id === element.ci  ) {
                                $ul.eq(2).append('<li data-id="' + element.Id + '">' + element.dn + '</li>');
                            }
                        }
                    }
                    $ul.eq(index + 1).show().siblings().hide();
                    $tabs.eq(index + 1).addClass('active').siblings().removeClass('active');
                };
                onTab = function () {
                    var _this = $(this),
                        index = _this.index();
                    $ul.eq(index).show().siblings().hide();
                    $tabs.eq(index).addClass('active').siblings().removeClass('active');
                };
                onFinish = function () {
                    var result = '';
                    $panle.hide();
                    $cover.hide();
                    if (state.length === 2 && state[0] === state[1]) {
                        result = state[1];
                    } else if (state.length === 3 && state[0] === state[1]) {
                        result = state[1] + state[2];
                    } else {
                        result = state.join('');
                    }
                    //_that.attr('data-p',state[0]);
                    //_that.attr('data-c',state[1]);
                    //_that.attr('data-d',state[2]);
                    $('#address-p').val(state[0]);
                    $('#address-c').val(state[1]);
                    $('#address-d').val(state[2]);
                    _that.val(result);
                };
                onCancel = function () {
                    $panle.hide();
                    $cover.hide();
                };
                _that.on('click', onClick);
            }
        );
    };
})(jQuery);

var salesProvince = ['安徽省','北京市','重庆市','福建省','甘肃省','广东省','广西壮族自治区','河北省','河南省','黑龙江省','湖北省',
    '湖南省','海南省','吉林省','江苏省','江西省','辽宁省','内蒙古自治区','宁夏回族自治区','上海市','山东省','山西省','陕西省','四川省',
    '天津市','新疆维吾尔自治区','云南省','浙江省'],
    salesDistrict =['合肥市','蚌埠市','淮南市','马鞍山市','安庆市','池州市','滁州市','六安市','宣城市','北京市','重庆市',
        '厦门市','福州市','泉州市','漳州市','莆田市','兰州市','酒泉市','平凉市','张掖市','广州市','深圳市','佛山市','东莞市','珠海市','汕头市','惠州市','湛江市','江门市','茂名市','梅州市','潮州市','阳江市',
        '南宁市','柳州市','桂林市','玉林市','石家庄市','唐山市','保定市','邯郸市','秦皇岛市','沧州市','承德市','廊坊市','邢台市','衡水市','张家口市','郑州市','洛阳市','开封市','许昌市','新乡市','哈尔滨市','大庆市','齐齐哈尔市','鸡西市','佳木斯市','牡丹江市','七台河市','双鸭山市','绥化市',
    '武汉市','宜昌市','襄阳市','荆州市','恩施土家族苗族自治州','荆门市','十堰市','随州市','咸宁市','长沙市','株洲市','岳阳市','衡阳市','湘潭市','常德市','益阳市','海口市','长春市','吉林市','白山市','通化市','延边朝鲜族自治州','南京市','苏州市','无锡市','徐州市','南通市','常州市','泰州市','镇江市','盐城市','扬州市','连云港市','淮安市',
    '南昌市','赣州市','九江市','吉安市','上饶市','宜春市','沈阳市','大连市','鞍山市','抚顺市','本溪市','丹东市','锦州市','营口市','葫芦岛市','盘锦市','铁岭市','呼和浩特市','包头市','鄂尔多斯市','巴彦淖尔市','赤峰市','呼伦贝尔市','银川市','上海市',
    '济南市','青岛市','烟台市','淄博市','潍坊市','东营市','威海市','济宁市','临沂市','德州市','泰安市','聊城市','枣庄市','日照市','太原市','晋中市','阳泉市','运城市','长治市','西安市','宝鸡市','延安市','成都市','绵阳市','巴中市','广元市','乐山市','凉山彝族自治州','内江市','遂宁市',
    '天津市','乌鲁木齐市','昌吉回族自治州','伊犁哈萨克自治州','昆明市','大理白族自治州','保山市','楚雄彝族自治州','红河哈尼族彝族自治州','普洱市','西双版纳傣族自治州','玉溪市','杭州市','宁波市','温州市','绍兴市','台州市','湖州市','金华市','丽水市','衢州市','舟山市'];
