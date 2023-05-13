<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px"
      >添加</el-button
    >
    <el-table style="width: 100%" border :data="list">
      <el-table-column type="index" label="序号" width="80px" align="center">
      </el-table-column>
      <el-table-column prop="tmName" label="品牌名称" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="品牌LOGO" width="width">
        <template slot-scope="scope">
          <img
            :src="scope.row.logoUrl"
            alt=""
            style="width: 100px; height: 100px"
          />
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="操作" width="width">
        <template>
          <el-button type="warning " icon="el-icon-edit">修改</el-button>
          <el-button type="warning " icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="page"
      :page-sizes="[3, 5, 10]"
      :page-size="limit"
      layout=" prev, pager, next, jumper,->,total, sizes"
      :total="total"
      style="margin: 20px; text-align: center"
      @current-change="getPageList"
      @size-change="handleSizeChange"
      :pager-count="7"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "trandeMark",
  data() {
    return {
      page: 1,
      limit: 3,
      total: 0,
      list: [],
    };
  },
  mounted() {
    this.getPageList();
  },

  methods: {
    //获取品牌列表参数
    async getPageList(pages = 1) {
      this.page = pages;
      const { page, limit } = this;
      let result = await this.$api.trademark.reqTrandeMarkList(page, limit);
      if (result.code == 200) {
        this.total = result.data.total;
        this.list = result.data.records;
      }
    },
    handleSizeChange(limit) {
      this.limit = limit;
      this.getPageList();
    },
  },
};
</script>

<style scoped></style>
