<template>
  <div>
    <!-- 头部 -->
    <el-row :gutter="20"
            style=" padding-bottom: 20px">
      <!-- 搜索框 -->
      <el-col :span="8">
        <el-input v-model="searchData"
                  placeholder="搜索" />
      </el-col>

      <el-col :span="8">
        <el-input v-model="realyName"
                  placeholder="真实名字" />
      </el-col>

      <el-col :span="8">
        <el-input v-model="phoneNum"
                  placeholder="电话号码" />
      </el-col>

      <el-col :span="8">
        <el-select v-model="sexValue"
                   style="margin-top: 20px"
                   placeholder="性别">
          <el-option v-for="item in sexOptions"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="8"
              style="margin-top: 20px">
        <el-select v-model="userStatusValue"
                   placeholder="用户状态">
          <el-option v-for="item in userStatusOptions"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div style="width: 100%">
      <el-table :data="tableData"
                style="width: 100%">

        <el-table-column prop="account"
                         label="账号"
                         width="120" />
        <el-table-column prop="name"
                         label="姓名"
                         width="120" />
        <el-table-column prop="sex"
                         label="性别"
                         width="120" />
        <el-table-column prop="phone"
                         label="电话号码"
                         width="120" />
        <el-table-column prop="email"
                         label="邮箱"
                         width="120" />
        <el-table-column prop="ID"
                         label="身份证号码"
                         width="120" />
        <el-table-column prop="status"
                         label="状态"
                         width="120" />
        <el-table-column prop="detail"
                         label="详情"
                         width="600" />
        <el-table-column label="操作"
                         width="120">
          <template #default>
            <el-button type="text"
                       size="small"
                       @click="handleClick">更多</el-button>
            <el-button type="text"
                       size="small"
                       @click="handleClick">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'userinfo',
  setup() {
    const searchData = ref('')

    const handleClick = () => {
      console.log('')
    }
    return {
      searchData,
      handleClick,
      phoneNum: ref(''),
      realyName: ref(''),
      userStatusOptions: ref([
        {
          value: 'Option1',
          label: '状态1'
        },
        {
          value: 'Option1',
          label: '状态1'
        }
      ]),
      userStatusValue: ref(''),
      options: ref([
        {
          value: 'Option1',
          label: '状态1'
        },
        {
          value: 'Option2',
          label: '状态2'
        },
        {
          value: 'Option3',
          label: '状态3'
        }
      ]),
      value: ref(''),
      sexOptions: ref([
        {
          value: '男',
          label: '男'
        },
        {
          value: '女',
          label: '女'
        }
      ]),
      sexValue: ref(''),
      tableData: [
        {
          account: 'sadasd',
          name: '大西瓜',
          sex: '女',
          phone: '1234567',
          email: '11@123.com',
          status: '使用中',
          ID: '29278372992',
          detail: 'logo sda lzzzx  ssjc opac  suwnc  dsajfmv sa '
        },
        {
          account: 'sadasd',
          name: '大西瓜',
          sex: '女',
          phone: '1234567',
          email: '11@123.com',
          status: '使用中',
          ID: '29278372992',
          detail: 'logo sda lzzzx  ssjc opac  suwnc  dsajfmv sa '
        },
        {
          account: 'sadasd',
          name: '大西瓜',
          sex: '女',
          phone: '1234567',
          email: '11@123.com',
          status: '使用中',
          ID: '29278372992',
          detail: 'logo sda lzzzx  ssjc opac  suwnc  dsajfmv sa '
        },
        {
          account: 'sadasd',
          name: '大西瓜',
          sex: '女',
          phone: '1234567',
          email: '11@123.com',
          status: '使用中',
          ID: '29278372992',
          detail: 'logo sda lzzzx  ssjc opac  suwnc  dsajfmv sa '
        },
        {
          account: 'sadasd',
          name: '大西瓜',
          sex: '女',
          phone: '1234567',
          email: '11@123.com',
          status: '使用中',
          ID: '29278372992',
          detail: 'logo sda lzzzx  ssjc opac  suwnc  dsajfmv sa '
        }
      ]
    }
  }
})
</script>

<style lang="less" scoped>
.demo-input-label {
  display: inline-block;
  width: 130px;
}

.demo-input-suffix {
  margin-bottom: 16px;
}
</style>
