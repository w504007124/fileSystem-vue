<template>
  <div class="tab-pane">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部文件" name="first">
        <el-form
          ref="queryForm"
          :model="queryParams"
          :inline="true"
          label-width="120px"
        >
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item label="文件名">
                <el-input
                  v-model="queryParams.fileName"
                  type="text"
                  clearable
                />
              </el-form-item>
            </el-col>
            <el-col :span="16" style="text-align: right">
              <el-form-item>
                <el-button icon="el-icon-refresh" size="mini" @click="reset"
                  >重置</el-button
                >
                <el-button
                  type="cyan"
                  icon="el-icon-search"
                  size="mini"
                  @click="search"
                  >查询</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24" style="text-align: right">
              <el-button type="primary" size="mini" @click="uploadFiles()">
                上传文件
              </el-button>
              <el-button type="primary" size="mini" @click="downloadFile()">
                批量下载
              </el-button>
              <el-button type="danger" size="mini" @click="delFile()">
                删除
              </el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-table
          ref="multipleTable"
          :data="fileData"
          @selection-change="handleSelectionChange"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="fileName" label="文件名"> </el-table-column>
          <el-table-column prop="createTime" label="修改时间">
          </el-table-column>
          <el-table-column prop="fileSize" label="大小"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="download(scope.row)" type="text" size="small"
                >下载</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right;margin-top:10px">
          <el-pagination
            background
            layout="prev, pager, next, sizes, total"
            :total="total"
            :page-sizes="[10,20,50]"
            :page-size="queryParams.pageSize"
            :current-page="queryParams.pageNum"
            @current-change="changePage"
            @size-change="changeSize"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="上传文件" :visible.sync="uploadVisible" width="480px">
      <el-upload
        class="upload-demo"
        drag
        action="#"
        :http-request="param => uploadFile(param)"
        :before-remove="
          (file, fileList) => removeUrlList(file, fileList, fileLists)
        "
        :limit="1"
        :auto-upload="true">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip" />
      </el-upload>
      <span style="margin: 10px" v-if="fileLists.length > 0">
        <el-button
          type="primary"
          size="mini"
          @click="submitForm()"
        >保存</el-button>
        <el-button
          type="primary"
          size="mini"
          @click="cancelDialog()"
        >取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { filesMapper } from '../../api/files'
export default {
  data() {
    return {
      queryParams: {
        businessType: 1, // 0:图片，1:文件
        fileName: null,
        pageSize: 10,
        pageNum: 1,
      },
      activeName: 'first',
      total: 0,
      uploadVisible: false,
      fileLists: [],
      fileData: [
        {
          id: '1',
          fileName: '测试1',
          fileSize: '100m',
          createTime: '2022-05-05',
          fileUrl: null,
        },
        {
          id: '2',
          fileName: '测试2',
          fileSize: '200m',
          createTime: '2022-06-05',
          fileUrl: null,
        },
      ],
      multipleSelection: [],
    }
  },
  created() {
    this.getList();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    getList() {
      filesMapper.getList(this.queryParams).then((res) => {
        this.fileData = res.data
        this.total = res.data.total
      })
    },
    // 批量下载
    downloadFile() {
      if (this.multipleSelection.length === 0) {
        this.$message.error("请选择至少一条数据");
        return;
      }
      const commonReq = {
        fileList: this.multipleSelection
      };
      console.log('批量下载的文件：',commonReq);
      filesMapper.downloadFile(commonReq, '文件');
    },
    // 下载
    download(val) {
      filesMapper.download(val.fileUrl, val.fileName);
    },
    delFile() {
      const _this = this;
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          let ids = []
          _this.multipleSelection.forEach(item => {
            ids.push(item.id);
          })
          console.log("批量删除ids:",ids);
          filesMapper.batchDelFiles(ids);
        });
    },
    search() {
      this.queryParams.pageNum = 1
      this.getList()
    },
    reset() {
      this.queryParams.pageNum = 1
      this.queryParams.pageSize = 10
      this.queryParams.fileName = null
      this.queryParams.businessType = 1
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    
    changePage(page) {
      this.queryParams.pageNum = page;
      this.getList();
    },
    changeSize(size) {
      this.queryParams.pageSize = size;
      this.getList();
    },
    uploadFiles() {
      this.uploadVisible = true;
    },
    uploadFile(param) {
      const formData = new FormData();
      const id = param.file.uid;
      // console.log(this.fileLists);
      // for (let i = 0; i < this.fileLists.length; i++) {
      //   formData.append('files', this.fileLists[i].raw);
      // }
      formData.append('files', param.file);
      filesMapper.upload(formData).then((res) => {
        res.data.forEach(item => {
          const obj = {
            fileName: item.fileName,
            fileUrl: item.fileUrl,
            fileSize: item.fileSize,
            businessType: 1,
            id
          };
          this.fileLists.push(obj);
        })
      });
    },
    // 提交
    submitForm() {
      filesMapper.saveFiles(this.fileLists).then(() => {
        this.$message.success("保存成功");
        this.cancelDialog();
      })
    },
    cancelDialog() {
      this.uploadVisible = false;
    },
    // 删除文件
    removeUrlList(file, fileList, fileLists) {
      fileLists.filter(item => item.uid !== file.uid);
      fileLists.splice(
        fileLists.findIndex(item => item.uid === file.uid),
        1
      );
    },
  },
}
</script>

<style lang="less" scoped>
.tab-pane {
  line-height: 0px !important;
}
</style>
