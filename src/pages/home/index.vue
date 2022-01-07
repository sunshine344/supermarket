<template>
  <div class="home-container">
    <aside>
      <el-aside width="100%" >
        <el-header class="home-logo">
          <span>haha超市管理系统</span>
        </el-header>
        <el-menu
         :collapse="isCollapse"
         :router="flag"
         background-color="#001529"
         active-text-color="#6cabe7"
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
              <el-menu-item  index="productList">商品列表</el-menu-item>
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
        <div class="box list-box">

        </div>
      </section>
    </article>

  </div>
</template>
<script>
  import {
    userListApi,
    userDeleteApi
  } from '../../apis/userApi'
  export default {
    data() {
      return {
        isCollapse:true,
        query: {
          id: '',
          name: '',
          size: 20,
          page: 1
        },
        tableData: [],
        total: 0,
        flag:true
      }
    },

    created() {
      this.getList()
    },

    methods: {
      
      sizeChange(size) {
        // console.log(size)
        this.query.size = size
        this.getList()
      },
      currentChange(page) {
        // console.log(page)
        this.query.page = page
        this.getList()
      },
      // 删除
      async deleteEvt(scope) {
        let res = await userDeleteApi(this.tableData[scope.$index].id)
        // console.log(res)
        if (res.code === 200) {
          this.getList()
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }
      },
      async getList() {
        // 加载
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        // 获取列表数据
        // console.log(this.query)
        let res = await userListApi(this.query)
        // console.log(res)
        this.tableData = res.data.rows
        this.total = res.data.total
        setTimeout(() => {
          loading.close()
        })
      },
      queryEvt() {
        this.getList()
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "./index.less";

</style>
