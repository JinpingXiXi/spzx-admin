<template>
  <div class="search-div">
    <!-- 搜索表单 -->
    <el-form label-width="70px" size="small">
      <el-form-item label="角色名称">
        <el-input style="width: 100%" placeholder="角色名称" v-model="queryDto.roleName"></el-input>
      </el-form-item>
      <el-row style="display:flex">
        <el-button type="primary" size="small" @click="fetchData">搜索</el-button>
        <el-button size="small">重置</el-button>
      </el-row>
    </el-form>
  </div>

  <!-- 添加按钮 -->
  <div class="tools-div">
    <el-button type="success" size="small">添 加</el-button>
  </div>

  <!--- 角色表格数据 -->
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="roleName" label="角色名称" width="180" />
    <el-table-column prop="roleCode" label="角色code" width="180" />
    <el-table-column prop="createTime" label="创建时间" />
    <el-table-column label="操作" align="center" width="280">
      <el-button type="primary" size="small">修改</el-button>
      <el-button type="danger" size="small">删除</el-button>
    </el-table-column>
  </el-table>

  <!--分页条-->
  <el-pagination
    v-model:current-page="pageNum"
    v-model:page-size="pageSize"
    :page-sizes="[5, 10, 15, 20]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="fetchData"
    @current-change="fetchData"
  />
</template>
  
<script setup>
import { onMounted, ref } from 'vue'
import { FindRoleListByPage } from '@/api/sysRole'
import { ElMessage } from 'element-plus'

// 分页条总记录数
let total = ref(0)
// 定义表格数据模型
let list = ref([])
// 当前页码
let pageNum = ref(1)
// 每页行数
let pageSize = ref(5)
//查询条件
let queryDto = ref({ roleName: '' })

// 钩子函数onMounted，页码打开后马上执行
onMounted(() => {
  //获取角色列表
  fetchData()
})

//获取角色列表
const fetchData = async () => {
  //发送ajax请求
  const { code, message, data } = await FindRoleListByPage(
    pageNum.value,
    pageSize.value,
    queryDto.value
  )
  if (code === 200) {
    list.value = data.list
    total.value = data.total
  } else {
    ElMessage.error(message)
  }
}
</script>
  
  <style scoped>
.search-div {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ebeef5;
  border-radius: 3px;
  background-color: #fff;
}

.tools-div {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ebeef5;
  border-radius: 3px;
  background-color: #fff;
}
</style>