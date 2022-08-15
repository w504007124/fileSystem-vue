<template>
  <div class="tab-pane">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部图片" name="first">
        <el-form
          ref="queryForm"
          :model="queryParams"
          :inline="true"
          label-width="120px"
        >
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item label="图片名">
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
                上传图片
              </el-button>
              <!-- <el-button type="primary" size="mini" @click="downloadFile()">
                批量下载
              </el-button> -->
              <el-button type="danger" size="mini" @click="delFile()">
                删除
              </el-button>
            </el-col>
          </el-row>
        </el-form>
        <div class="content infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" style="overflow:auto">
          <div class="div-img infinite-list-item" v-for="(image, index) in imgData" 
            :key="index" >
              <img :src="image.url" 
                :preview="image.preview" 
                :preview-text="image.title">
              <p>{{image.title}}</p>
          </div>
        </div>
          <p v-if="loadingShow">加载中...</p>
          <p v-if="noMoreShow">没有更多了</p>
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>

<script>
// import { filesMapper } from '../../api/files'
export default {
  data() {
    return {
      queryParams: {
        businessType: 0, // 0:图片，1:文件
        fileName: null,
        pageSize: 10,
        pageNum: 1,
      },
      pagesTotal: 100,
      count: 10,
      loadingShow: false,
      imgData: [
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          title: "图片1",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        }
      ],
      activeName: 'first',
      total: 0,
      uploadVisible: false,
    }
  },
  computed: {
    noMoreShow () {
      debugger
      return this.count >= 100
    },
    busy () {
      debugger
      return this.loadingShow || this.noMoreShow
    }
  },
  // watch: {
  //   count: {
  //     immediate: true,
  //     handler(value) {
  //       if (value >= this.pagesTotal) {
  //         this.loadingShow = false;
  //         this.noMoreShow = true;
  //         this.busy = true;
  //       }
  //     }
  //   }
  // },
  created() {
    
  },
  methods: {
    loadMore() {
      this.loadingShow = true;
      setTimeout(() => {
        this.getList();
      }, 1000);
    },
    getList() {
      this.count+=10
      for(let i = 0 ;i < 10;i ++) {
        this.imgData.push({
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          title: "图片2",
          preview: "1"
        })
      }
      this.loadingShow = false;
    }
  }
}
</script>

<style lang="less" scoped>
.tab-pane {
  line-height: 0px !important;
}

.content {
  height: 330px;
  padding: 20px 0px;
  text-align: left;
}
.div-img {
  float: left;
}
.content img {
  width: 80px;
  height: 80px;
  padding: 0px 5px;
  cursor: pointer;
}
.content p {
  text-align: center;
  font-size: 9px;
  padding-bottom: 10px;
}
</style>
