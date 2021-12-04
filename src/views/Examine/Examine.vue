<template>
  <div>

    <div style="width: 100%">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column fixed
                         prop="name"
                         label="序号"
                         width="120" />
        <el-table-column prop="sex"
                         label="业主姓名"
                         width="120" />
        <el-table-column prop="phone"
                         label="民宿名称"
                         width="300" />
        <el-table-column prop="email"
                         label="营业执照"
                         width="300" />
        <el-table-column prop="status"
                         label="状态"
                         width="120" />
        <el-table-column fixed="right"
                         label="操作"
                         width="120">
          <template #default>
            <el-button type="text"
                       size="small"
                       @click="handleClick">通过</el-button>
            <el-button type="text"
                       size="small"
                       @click="dialogVisible=true">驳回</el-button>

          </template>
        </el-table-column>
      </el-table>

      <div id="dialogBox"
           v-if="dialogVisible">
        <el-row>
          <el-col :span="24">
            <el-input v-model="textarea"
                      :rows="2"
                      type="textarea"
                      placeholder="驳回内容" />
          </el-col>
          <el-col :span="14"></el-col>
          <el-col :span="5">
            <el-button @click="dialogVisible=false">取消</el-button>
          </el-col>
          <el-col :span="5">
            <el-button type="primary"
                       @click="dialogVisible=false">确认</el-button>

          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'usermanagement',
  setup() {
    const searchData = ref('')
    const dialogVisible = ref(false)

    const handleClick = () => {
      // do something
    }
    return {
      searchData,
      handleClick,
      dialogVisible,
      centerDialogVisible: ref(false),
      textarea: ref(''),
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
  width: 400px;
  height: 100px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.el-input {
  margin-top: 5p0x;
}
.el-button {
  margin-top: 10px;
}
</style>
