<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-input v-model="input1"
                  placeholder="搜索" />
      </el-col>
      <el-col :span="6">
        <el-select v-model="value"
                   placeholder="提现状态">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="24">
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column type="index"
                           width="180" />
          <el-table-column prop="date"
                           label="Date"
                           width="180" />
          <el-table-column prop="name"
                           label="Name"
                           width="180" />
          <el-table-column prop="address"
                           label="Address" />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'withdrawalapply',
  components: {},
  setup() {
    const input1 = ref('')
    return {
      input1,
      options: ref([
        {
          value: '提现状态',
          label: '提现状态'
        },
        {
          value: '123',
          label: 'hh'
        },
        {
          value: '12',
          label: 'hj'
        }
      ]),
      value: ref(''),
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  }
})
</script>

<style  scoped>
</style>
