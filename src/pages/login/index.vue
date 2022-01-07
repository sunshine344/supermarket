<template>
    <div>
        <el-row >
            <el-col :span="24" >
                <el-input v-model="loginObj.id" placeholder="请输入用户名"></el-input> 
            </el-col>
        </el-row>
        <el-row >
            <el-col :span="24" >
                <el-input v-model="loginObj.password" placeholder="请输入用户密码"></el-input> 
            </el-col>
        </el-row>
        <div class="loginBtn">
            <el-button @click="loginEvt" type="success">登录</el-button>
        </div>

    </div>
</template>
<script>
import { userLoginApi } from '../../apis/loginApi'
import { MD5 } from 'crypto-js'
export default {
    data() {
        return {
            loginObj:{
                id:'' ,
                password:'' 
            }
            
        }
    },
    methods: {
        async loginEvt(){
            let res = await userLoginApi({
                id:this.loginObj.id,
                password:MD5(this.loginObj.password).toString()
            })
            // console.log(res)
            if(res.code === 200){
                this.$store.dispatch('common/tokenAct',res.data.token)
                this.$router.push('/home')
            }else{
                this.$message.error('用户名或密码错误！');
            }
            
        }
    },
   
}
</script>
<style lang="less" scoped>
    @import "./index.less";
</style>