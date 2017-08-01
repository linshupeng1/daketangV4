$(document).ready(function(){
    $('#address-select').addressZH();
    $('#bank').bankselect();

    // $('#relationship').mobiscroll({
    //     display: 'bottom',
    //     mode: 'scroller',
    //     group: true,
    //     lang: 'zh',
    //     setText: '确定',
    //     cancelText: '取消',
    //     showInput: false,
    //     showLabel: false,
    //     wheels: [
    //         [
    //             {
	// 				label: '与投保人关系',
	// 				keys: [
    //                     '本人',
    //                     '配偶',
    //                     '父母',
    //                     '子女'
    //                 ],
	// 				values: [
    //                     '本人',
    //                     '配偶',
    //                     '父母',
    //                     '子女'
    //                 ],
	// 			}
    //         ]
    //     ],
    //     headerText: "与投保人关系" ,
    //     formatResult: function (data) {
    //         return data;
    //     },
    //     onSelect: function(data){
    //         console.log('在这个地方处理回执动作');
    //         //在这个地方处理回执动作
    //     }
    // });
    // $('#bank').mobiscroll({
    //     mode: 'scroller',
    //     group: true,
    //     lang: 'zh',
    //     setText: '确定',
    //     cancelText: '取消',
    //     showInput: false,
    //     showLabel: false,
    //     wheels: [
    //         [
    //             {
	// 				label: '交费银行',
	// 				keys: [
    //                     '中国农业银行',
    //                     '汉口银行',
    //                     '齐商银行',
    //                     '泰安商业银行',
    //                     '枣庄银行',
    //                     '中国银行',
    //                     '上海银行',
    //                     '中国建设银行',
    //                     '中国光大银行',
    //                     '广发银行',
    //                     '兴业银行',
    //                     '中信银行',
    //                     '招商银行',
    //                     '中国民生银行',
    //                     '交通银行',
    //                     '华夏银行',
    //                     '中国工商银行',
    //                     '平安银行',
    //                     '中国邮政储蓄银行',
    //                     '浦发银行',
    //                 ],
	// 				values: [
    //                     '<span class="bank-logo-abc"></span>',
    //                     '<span class="bank-logo-b1552"></span>',
    //                     '<span class="bank-logo-b1608"></span>',
    //                     '<span class="bank-logo-b1629"></span>',
    //                     '<span class="bank-logo-b1669"></span>',
    //                     '<span class="bank-logo-boc"></span>',
    //                     '<span class="bank-logo-bos"></span>',
    //                     '<span class="bank-logo-ccb"></span>',
    //                     '<span class="bank-logo-ceb_old"></span>',
    //                     '<span class="bank-logo-cgb"></span>',
    //                     '<span class="bank-logo-cib"></span>',
    //                     '<span class="bank-logo-citic"></span>',
    //                     '<span class="bank-logo-cmb"></span>',
    //                     '<span class="bank-logo-cmbc"></span>',
    //                     '<span class="bank-logo-comm"></span>',
    //                     '<span class="bank-logo-hxb"></span>',
    //                     '<span class="bank-logo-icbc"></span>',
    //                     '<span class="bank-logo-pingan"></span>',
    //                     '<span class="bank-logo-psbc"></span>',
    //                     '<span class="bank-logo-spdb"></span>'
    //                 ],
	// 			}
    //         ]
    //     ],
    //     headerText: "请选择交费银行" ,
    //     formatResult: function (data) {
    //         return data;
    //     },
    //     onSelect: function(data){
    //         console.log('在这个地方处理回执动作');
    //         //在这个地方处理回执动作
    //     }
    // });



    $('.agreement').on('click',function(){
        $(this).toggleClass('unchecked');
    });


    /**修改 12-26 wj**/

    //身高体重
    function infoCallBack(array) {
        return array[0];
    }

    var infoHeightIndex = 70,
        infoWeightIndex = 20;
    var infoHeightWheels = [
        [{
            label: '身高（cm）',
            keys: [],
            values: [],
        }]
    ];
    while (infoHeightIndex <= 230) {
        infoHeightWheels[0][0].values.push(infoHeightIndex.toFixed(0));
        infoHeightWheels[0][0].keys.push(infoHeightIndex.toFixed(0));
        infoHeightIndex += 1;
    }

    var infoWeightWheels = [
        [

            {
                label: '体重（kg）',
                keys: [],
                values: [],
            }
        ]
    ];
    while (infoWeightIndex <= 200) {
        infoWeightWheels[0][0].values.push(infoWeightIndex.toFixed(0));
        infoWeightWheels[0][0].keys.push(infoWeightIndex.toFixed(0));
        infoWeightIndex += 1;
    }

    var Heightopt = {
        display: 'bottom',
        mode: 'scroller',
        group: true,
        lang: 'zh',
        setText: '确定',
        cancelText: '取消',
        showInput: false,
        showLabel: true,
        wheels: infoHeightWheels,
        headerText: function () { return '选择身高'; } ,
        formatResult: function (array) { //返回自定义格式结果
            return infoCallBack(array);
        },
        onSelect: function(array){
            return infoCallBack(array);
        }
    };

    var Weightopt = {
        display: 'bottom',
        mode: 'scroller',
        group: true,
        lang: 'zh',
        setText: '确定',
        cancelText: '取消',
        showInput: false,
        showLabel: true,
        wheels: infoWeightWheels,
        headerText: function () { return  '选择体重'; } ,
        formatResult: function (array) { //返回自定义格式结果
            return infoCallBack(array);
        },
        onSelect: function(array){
            return infoCallBack(array);
        }
    };
    $('#infoHeight').mobiscroll(Heightopt).mobiscroll('setValue', ['170']);
    $('#infoWeight').mobiscroll(Weightopt).mobiscroll('setValue', ['60']);

    //点击下一步
    $('#inofEndBnt').click(function(){
        location.href ='sorry.html';
    });
});
