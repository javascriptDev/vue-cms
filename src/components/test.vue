<template>
    <div class="login-form">
        <el-form :model='ruleForm' :rules='rules' ref="ruleForm" label-width="100px">
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item label="再次密码" prop="repwd">
                <el-input v-model="ruleForm.repwd"></el-input>
            </el-form-item>

        </el-form>
        <div class="signin">
            <input type="submit" on-click={reset} value="重置" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            /*
             * 变量替换释义 : <el-form model={ruleForm} rules={rules} ref="form"></el-form>
             * 自动生成的代码需要替换如下字段
             *
             * YOUR_FORM_REFERENCE     -> form
             * YOUR_FORM_KEY_IN_DATA     -> ruleForm
             */
            const Vrepwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('再次密码不能为空'))
                } else {
                    this.$refs.ruleForm.validateField('pwd')
                }
                callback()
            }
            const Vpwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'))
                } else if (value !== this.ruleForm.repwd) {
                    callback(new Error('两次密码不一样。'))
                } else {
                    callback()
                }
            }
            return {
                ruleForm: {
                    pwd: '',
                    repwd: ''
                },
                rules: {
                    "pwd": [{
                        "required": true,
                        "type": "string",
                        "message": "密码不能为空"
                    }, {
                        "type": "string",
                        "len": 3,
                        "message": "长度错误"
                    }],
                    "repwd": [{
                        "required": true,
                        "type": "string",
                        "message": "再次密码不能为空"
                    }, {
                        "type": "string",
                        "min": 1,
                        "max": 4,
                        "message": "长度错误"
                    }],
                }
            }
        }
    }
</script>