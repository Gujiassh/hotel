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
        <el-select v-model="value"
                   placeholder="状态">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="8">
        <el-select v-model="sexValue"
                   placeholder="性别">
          <el-option v-for="item in sexOptions"
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
        <el-table-column fixed
                         prop="name"
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
        <el-table-column fixed="right"
                         label="操作"
                         width="120">
          <template #default>
            <el-button type="text"
                       size="small"
                       @click="dialogVisible=true">编辑</el-button>

          </template>
        </el-table-column>
      </el-table>
    </div>

    <div id="dialogBox"
         v-if="dialogVisible">
      <el-row>

        <el-col :span="24">
          <el-input v-model="input"
                    placeholder="用户名" />
        </el-col>

        <el-col :span="24">
          <el-input v-model="input"
                    placeholder="联系方式" />
        </el-col>
        <el-col :span="24">
          <el-input v-model="input"
                    placeholder="邮箱" />
        </el-col>
        <el-col :span="24">
          <el-input v-model="input"
                    placeholder="性别" />
        </el-col>
        <el-col :span="24">
          <el-input v-model="input"
                    placeholder="真实姓名" />
        </el-col>
        <el-col :span="24">
          <el-input v-model="input"
                    placeholder="身份证号码" />
        </el-col>
        <el-col :span="24">
          <el-input v-model="textarea"
                    :rows="2"
                    type="textarea"
                    placeholder="冻结理由" />
        </el-col>
        <el-col :span="14"></el-col>
        <el-col :span="5">
          <el-button @click="dialogVisible=false">取消</el-button>
        </el-col>
        <el-col :span="5">
          <el-button type="primary"
                     @click="dialogVisible=false">冻结</el-button>

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'usermanagement',
  setup() {
    const dialogVisible = ref(false)

    const searchData = ref('')
    const handleClick = () => {
      console.log('click')
    }
    return {
      searchData,
      dialogVisible,
      handleClick,
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
          name: '大西瓜',
          sex: '女',
          phone: '1234567',
          email: '11@123.com',
          status: '使用中',
          ID: '29278372992',
          detail: 'logo sda lzzzx  ssjc opac  suwnc  dsajfmv sa '
        },
        {
          name: '大西瓜',
          sex: '女',
          phone: '1234567',
          email: '11@123.com',
          status: '使用中',
          ID: '29278372992',
          detail: 'logo sda lzzzx  ssjc opac  suwnc  dsajfmv sa '
        },
        {
          name: '大西瓜',
          sex: '女',
          phone: '1234567',
          email: '11@123.com',
          status: '使用中',
          ID: '29278372992',
          detail: 'logo sda lzzzx  ssjc opac  suwnc  dsajfmv sa '
        },
        {
          name: '大西瓜',
          sex: '女',
          phone: '1234567',
          email: '11@123.com',
          status: '使用中',
          ID: '29278372992',
          detail: 'logo sda lzzzx  ssjc opac  suwnc  dsajfmv sa '
        },
        {
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

#dialogBox {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.el-input {
  margin-bottom: 5px;
}
.el-button {
  margin-top: 10px;
}
</style>
