<template>
  <el-container>
    <el-header>
      <el-row justify="space-between">
        <el-col :span="4">
          <h2>后台管理系统</h2>
        </el-col>
        <el-col :span="4">
          <el-row justify="space-between"
                  align="middle">
            <el-icon :size="25">
              <bell-filled />
            </el-icon>
            <el-avatar shape="square"
                       :src="squareUrl"></el-avatar>
            <span>欢迎您：{{username}}</span>
            <el-icon :size="25">
              <sold-out />
            </el-icon>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu default-active="1"
                     class="el-menu-vertical-demo"
                     @open="handleOpen"
                     @close="handleClose">

              <el-menu-item index="1"
                            @click="changePage">
                <span>首页</span>
              </el-menu-item>

              <el-menu-item index="2"
                            @click="changePage">
                <template #title>
                  <span>用户管理</span>
                </template>
              </el-menu-item>

              <el-sub-menu index="3">
                <template #title>
                  <span>业主管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1"
                                @click="changePage">业主信息</el-menu-item>
                  <el-menu-item @click="changePage"
                                index="1-2">民宿信息</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>

              <el-sub-menu index="4">
                <template #title>
                  <span>资金流水</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1"
                                @click="changePage">交易信息</el-menu-item>
                  <el-menu-item index="2-2"
                                @click="changePage">提现申请</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>

              <el-sub-menu index="5">
                <template #title>
                  <span>实名审核</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1"
                                @click="changePage">民宿信息审核</el-menu-item>
                  <el-menu-item index="3-2"
                                @click="changePage">实名制审核</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BellFilled, SoldOut } from '@element-plus/icons'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    BellFilled,
    SoldOut
  },
  setup() {
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath)
    }
    // 头像地址
    const squareUrl = ''
    // 用户名
    const username = '大西瓜'

    const userrouter = useRouter()
    let toPath = '/'
    const changePage = (pathIndex: any): void => {
      switch (pathIndex.index) {
        case '1':
          toPath = ''
          break
        case '2':
          toPath = 'usermanagement'
          break
        case '1-1':
          toPath = 'userinfo'
          break
        case '1-2':
          toPath = 'hotelInfo'
          break
        case '2-1':
          toPath = 'withdrawal'
          break
        case '2-2':
          toPath = 'withdrawalapply'
          break

        case '3-1':
          toPath = 'examine'
          break
      }
      userrouter.replace({ path: `/${toPath}` })
    }

    return {
      handleOpen,
      handleClose,
      changePage,
      squareUrl,
      username
    }
  }
})
</script>
<style>
.el-container {
  min-height: 100vh;
}
.el-header {
  background-color: #fff;
  color: var(--el-text-color-primary);
  line-height: 72px;
  height: 72px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.el-aside {
  background-color: #fff;
  color: var(--el-text-color-primary);
  text-align: center;
  min-height: 100%;
}

.el-main {
  background-color: #fff;
  color: var(--el-text-color-primary);
  min-height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
