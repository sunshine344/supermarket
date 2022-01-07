<template>
    <div class="home-container">
      <aside>
        <el-aside width="100%">
          <el-header class="home-logo">
            <span>haha超市管理系统</span>
          </el-header>
          <el-menu
           background-color="#001529"
           active-text-color="#6cabe7"
           :router="flag"
           text-color="#fff">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message icon-home"></i>首页</template>
              <el-menu-item-group>
                <el-menu-item index="home">首页</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-message icon-goods"></i>商品管理</template>
              <el-menu-item-group>
                <el-menu-item  index="2-1">商品列表</el-menu-item>
                <el-menu-item  index="2-2">商品编辑</el-menu-item>
                <el-menu-item  index="2-3">供应商</el-menu-item>
                <el-menu-item  index="2-4">商品推荐</el-menu-item>
                <el-menu-item  index="2-5">商品视频</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-message icon-purchase"></i>采购管理</template>
              <el-menu-item-group>
                <el-menu-item  index="3-1">采购单列表</el-menu-item>
                <el-menu-item  index="3-2">采购单编辑</el-menu-item>
                <el-menu-item  index="3-3">收货单管理</el-menu-item>
                <el-menu-item  index="3-4">收货单编辑</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-message icon-user"></i>用户管理</template>
              <el-menu-item-group>
                <el-menu-item index="user">用户列表</el-menu-item>
                <el-menu-item index="useredit">用户编辑</el-menu-item>
                <el-menu-item index="4-3">用户角色</el-menu-item>
                <el-menu-item index="4-4">用户地址</el-menu-item>
                <el-menu-item index="4-5">用户优惠</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
        </el-menu>
        </el-aside>
      </aside>
      <article>
        <header>
          
        </header>
        <section>
          <div class="box">
            <el-form :model="userObj" 
              :rules="rules" 
              ref="ruleForm" 
              label-width="100px" 
              class="demo-ruleForm"
              size="small">
              <el-row :gutter="20">
                <!-- 用户编码 -->
                <el-col :xs="24" :md="8" :lg="6" :xl="4">
                  <el-form-item label="用户编码" prop="id">
                    <el-input v-model="userObj.id"></el-input>
                  </el-form-item>
                </el-col>
                <!-- 用户姓名 -->
                <el-col :xs="24" :md="8" :lg="6" :xl="4">
                  <el-form-item label="用户姓名" prop="name">
                    <el-input v-model="userObj.name"></el-input>
                  </el-form-item>
                </el-col>
                <!-- 用户密码 -->
                <el-col :xs="24" :md="8" :lg="6" :xl="4">
                  <el-form-item label="用户密码" prop="password">
                    <el-input v-model="userObj.password"></el-input>
                  </el-form-item>
                </el-col>
                <!-- 用户生日 -->
                <el-col :xs="24" :md="8" :lg="6" :xl="4">
                  <el-form-item label="用户生日" prop="birthday">
                    <el-date-picker v-model="userObj.birthday" type="date" placeholder="选择生日">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <!-- 用户性别 -->
                <el-col :xs="24" :md="8" :lg="6" :xl="4">
                  <el-form-item label="用户性别" prop="sex">
                    <el-select v-model="userObj.sex" clearable placeholder="请选择性别">
                      <el-option label="女" value="女" />
                      <el-option label="男" value="男" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <!-- 公司部门 -->
                <el-col :xs="24" :md="8" :lg="6" :xl="4">
                  <el-form-item label="公司部门" prop="dept">
                    <el-select v-model="userObj.dept" clearable placeholder="请选择部门">
                      <el-option v-for="it in deptList" :key="it.name" :label="it.name" :value="it.name" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <!-- 职位 -->
                <el-col :xs="24" :md="8" :lg="6" :xl="4">
                  <el-form-item label="职位" prop="duties">
                    <el-select v-model="userObj.duties" clearable placeholder="请选择职位">
                      <el-option v-for="it in dutiesList" :key="it" :label="it" :value="it" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <!-- 联系电话 -->
                <el-col :xs="24" :md="8" :lg="6" :xl="4">
                  <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="userObj.phone"></el-input>
                  </el-form-item>
                </el-col>
                <!-- 邮箱 -->
                <el-col :xs="24" :md="8" :lg="6" :xl="4">
                  <el-form-item label="邮箱" prop="email">
                    <el-input v-model="userObj.email"></el-input>
                  </el-form-item>
                </el-col>
                <!-- 用户权限 -->
                <el-col :span="24">
                  <el-form-item label="用户权限" prop="role">
                    <el-checkbox-group v-model="userObj.role">
                      <el-checkbox v-for="role in roleList"
                       :key="role.id"
                       :label="role.id">{{role.name}}
                      </el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
                <!-- 地址 -->
                <el-col :span="24">
                  <el-form-item label="地址" prop="address">
                    <el-input v-model="userObj.address"></el-input>
                  </el-form-item>
                </el-col>
                <!-- 备注 -->
                <el-col :span="24">
                  <el-form-item label="备注" prop="remark">
                      <el-input v-model="userObj.remark"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <!-- 按钮 -->
            <el-button size="small" type="primary" @click="submitForm">提交</el-button>
            <!-- <el-button @click="resetForm">重置</el-button> -->
          </div>
        </section>
      </article>
  
    </div>
  </template>
  <script>
      import { userDeptApi,userRoleApi,userSaveApi } from '../../apis/userApi'
    export default {
      data() {
  
        let phoneVdt = (rule, value, callback) => {
          if (!/^1[3-9]{1}[0-9]{9}$/.test(value)) {
            callback(new Error('请输入正确手机号'))
          } else {
            // if (this.userObj.phone !== '') {
            //     this.$refs.ruleForm.validateField('phone')
            // }
            callback()
          }
        }
        return {
          flag:true,
          userObj: {
            id: '',
            name: '',
            password: '',
            sex: '',
            address: '',
            birthday: '',
            dept: '',
            duties: '',
            phone: '',
            email: '',
            token: '',
            role: [],
            remark: ''
          },
          rules: {
            id: [{
                required: true,
                message: '请输入用户编码',
                trigger: 'blur'
              },
              {
                min: 5,
                max: 20,
                message: '长度在 5 到 20 个字符',
                trigger: 'change'
              }
            ],
            name: [{
                required: true,
                message: '请输入用户编码',
                trigger: 'blur'
              },
              {
                min: 2,
                max: 12,
                message: '长度在 2 到 12 个字符',
                trigger: 'change'
              }
            ],
            password: [{
                required: true,
                message: '请输入用户密码',
                trigger: 'blur'
              },
              {
                min: 6,
                max: 12,
                message: '长度在 6 到 12 个字符',
                trigger: 'change'
              }
            ],
            phone: [{
              validator: phoneVdt,
              trigger: 'change'
            }]
          },
          deptList:[],
          dutiesList:[],
          roleList:[]
        }
      },
      // 观察部门的变化，获取职位
      watch: {
        'userObj.dept'(value) {
          let list = (this.deptList.find(it => it.name === value) || {list:[]}).list
          this.dutiesList = list
        }
      },
      async created() {
        // 公司部门
        let res = await userDeptApi()
        if(res.code === 200){
          this.deptList = res.data
        }
        // 用户权限
        let role = await userRoleApi()
        if(role.code === 200){
          this.roleList = role.data.rows
        }
        // console.log(this.roleList)
      },
      
      methods: {
        toUserList(index){
          console.log(index)
        },
        submitForm(){
          this.$refs.ruleForm.validate().then(async () => {
            let res = await userSaveApi(this.userObj)
            // console.log(res)
            if(res.code === 200){
              this.$message({
                  message: '保存成功',
                  type: 'success'
              })
              this.resetForm()
            }
          }).catch(err => {
            console.log(err)
          })
        },
        resetForm(){
          this.$refs.ruleForm.resetFields()
        }
      },
  
    }
  
  </script>
  
  <style lang="less" scoped>
    @import "./index.less";
  
  </style>
  