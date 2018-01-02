<style lang='less'>
    .el-card__header {padding: 10px 20px;}
    .key { width: 30%; display: inline-block; }
    .value { width: 68%; display: inline-block; }
    .item { margin-top: 10px; }
    .line { width: 350px; min-width: 350px; margin-top: 10px; display: inline-block;margin-left: 10px; }
    .p50 { width: 49%; display: inline-block; }

    /*不同类别字段关联不同颜色*/
    /*长度不通过*/
    .len-item {
        .key { color: green; }
    }
    /*必填不通过*/
    .required-item {
        .key { color: red; }
    }
    .pattern-item {
        .key { color: pink; }
    }
    .same-item {
        .key { color: purple; }
    }
    .enum-item {
        .key {color: rgb(15, 23, 181);}
    }
</style>
<template>
    <div class='line'>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Rule 字段: {{rule.field}}</span>
            </div>

            <!-- 字段名 -->
            <div class='item'>
                <div class='key'>字段名</div>
                <div class="value">
                    <el-input v-model="rule.field" placeholder="字段名"></el-input>
                </div>
            </div>

            <!-- 数据类型 -->
            <div :class='[rule.type + "-item"]'>
                <div class='item'>
                    <div class='key'>数据类型</div>
                    <div class='value'>
                        <el-select @change='keyChange' v-model="rule.type" placeholder="请选择">
                            <el-option
                                v-for="opt in dataTypeEnum"
                                :key="opt.value"
                                :label="opt.type"
                                :value="opt.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <!-- 根据数据类型显示的可自定义字段 -->
                <div class='item' v-if='rule.type === "pattern" '>
                    <div class='key'>正则表达式</div>
                    <div class="value">
                        <el-input v-model="rule.options.pattern" placeholder="正则表达式"></el-input>
                    </div>
                </div>
                <div class='item' v-if='rule.type === "enum" '>
                    <div class='key'>枚举</div>
                    <div class="value">
                        <el-input v-model="rule.options.enum" placeholder="枚举项用逗号隔开"></el-input>
                    </div>
                </div>
                <div class='item' v-if='rule.type === "same" '>
                    <div class='key'>值相同字段</div>
                    <div class="value">
                        <el-input v-model="rule.options.same" placeholder="值相同的字段"></el-input>
                    </div>
                </div>
                <!-- end -->
            </div>

            <!-- 长度限制 -->
            <div class='len-item'>
                <div class='item'>
                    <div class='key'>长度限制</div>
                    <div class="value">
                        <el-select v-model="rule.len" @change='keyChange' placeholder="请选择">
                            <el-option
                                v-for="opt in lenEnum"
                                :key="opt.value"
                                :label="opt.type"
                                :value="opt.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <!-- 根据长度类型显示的可自定义字段 -->
                <div class='item' v-if='rule.len === "len" '>
                    <div class='key'>固定长度</div>
                    <div class="value">
                        <el-input type='number' v-model="rule.options.len" placeholder="固定长度"></el-input>
                    </div>
                </div>
                <div class='item' v-else-if='rule.len === "min,max" '>
                    <div class='key'>范围</div>
                    <div class="value">
                        <div class='p50'>
                            <div class="key">
                                MIN
                            </div>
                            <div class="value" style='width: 100%'>
                                <el-input v-model="rule.options.min" placeholder="最小值"></el-input>
                            </div>
                        </div>
                        <div class='p50'>
                            <div class="key">
                                MAX
                            </div>
                            <div class="value" style='width: 100%'>
                                <el-input v-model="rule.options.max" placeholder="最大值"></el-input>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end -->
            </div>

            <!-- 是否必须 -->
            <div class='item required-item'>
                <div class='key'>IsRequired</div>
                <div class="value">
                    <el-checkbox v-model="rule.required"></el-checkbox>
                </div>
            </div>

            <!-- 触发方式 -->
            <!-- <div class="item">
                <div class='key'>触发方式</div>
                <div class="value">
                    <el-select v-model="rule.trigger" placeholder="请选择">
                        <el-option
                            v-for="ct in triggerType"
                            :key="ct.value"
                            :label="ct.type"
                            :value="ct.value">
                        </el-option>
                    </el-select>
                </div>
            </div> -->

            <!-- 验证不通过提示文字集合 -->
            <div>
                <!-- required ERROR -->
                <div class="item required-item" v-if='rule.required'>
                    <div class='key'>错误提示</div>
                    <div class="value">
                        <el-input v-model="rule.options.requiredErrorTxt" placeholder="错误提示"></el-input>
                    </div>
                </div>
                <!-- 长度 ERROR -->
                <div class='item len-item' v-if='rule.len !== "" '>
                    <div class='key'>长度错误提示</div>
                    <div class="value">
                        <el-input v-model="rule.options.lenErrorTxt" placeholder="长度错误提示"></el-input>
                    </div>
                </div>
                <!-- 正则 ERROR -->
                <div class='item pattern-item' v-if='rule.type === "pattern" '>
                    <div class='key'>正则错误提示</div>
                    <div class="value">
                        <el-input v-model="rule.options.patternErrorTxt" placeholder="正则错误提示"></el-input>
                    </div>
                </div>
                <!-- 正则 ERROR -->
                <div class='item same-item' v-if='rule.type === "same" '>
                    <div class='key'>相同值错误提示</div>
                    <div class="value">
                        <el-input v-model="rule.options.sameErrorTxt" placeholder="相同值错误提示"></el-input>
                    </div>
                </div>
            </div>
            <!-- 验证不通过提示文字集合end -->
        </el-card>
    </div>
</template>
<script>
    import { Tpl, DataTypeEnum, LenEnum, TriggerType } from '../utils/rule'
    export default {
        props: {
            rule: {
                type: Object,
                default: Tpl
            }
        },
        data () {
            return {
                // 长度限制枚举
                lenEnum: LenEnum,
                // 数据类型枚举
                dataTypeEnum: DataTypeEnum,
                triggerType: TriggerType
            }
        },
        methods: {
            keyChange (key) {
                let keys = key.split(',')
                let me = this
                Object
                // 所有key
                .keys(this.rule.options)
                // 需要置空的字段 -> key 符合并且非空
                .filter(item => keys.indexOf(item) !== -1 && me.rule.options[item] !== '')
                // 置空
                .forEach(item => {
                     me.rule.options[item] = ''
                })
            }
        }
    }
</script>