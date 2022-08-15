import { createHttp } from '../utils/apiRequest'

class FilesMapper {
  constructor () {
    this.createHttp = createHttp
  }

  /**
   * 获取文件列表
   * @returns 
   */
  getList (data) {
    return this.createHttp({
      method: 'post',
      data,
      url: '/files/getFileLists'
    })
  }

  /**
   * 下载
   * @param {*} id 
   * @param {*} filename 
   * @returns 
   */
  download (fileUrl, filename) {
    return this.createHttp({
      url: '/files/download',
      method: 'get',
      params: {fileUrl},
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      responseType: 'blob'
    }).then((data) => {
      debugger
      const content = data
      const blob = new Blob([content])
      if ('download' in document.createElement('a')) {
        const elink = document.createElement('a')
        elink.download = filename
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href)
        document.body.removeChild(elink)
      } else {
        navigator.msSaveBlob(blob, filename)
      }
    }).catch((r) => {
      console.error(r)
    })
  }
  
  /**
   * 批量下载zip
   * @param {*} commonReq 
   * @param {*} fileName 
   * @returns 
   */
  downloadFile(commonReq,fileName) {
    return this.createHttp({
      url: '/files/downloadZip',
      method: 'post',
      data: commonReq,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      responseType: 'blob'
    }).then((res) => {
      // 这里res.data是返回的blob对象
      const blob = new Blob([res], { type: 'application/zip' });
      // let tempName = res.headers["content-disposition"].split(";")[1].split("filename=")[1];
      const downloadElement = document.createElement('a');
      const href = window.URL.createObjectURL(blob); // 创建下载的链接
      downloadElement.href = href;
      downloadElement.download = fileName; // 下载后文件名
      document.body.appendChild(downloadElement);
      downloadElement.click(); // 点击下载
      document.body.removeChild(downloadElement); // 下载完成移除元素
      window.URL.revokeObjectURL(href); // 释放掉blob对象
    })
  }

  /**
   * 上传
   * @param {*} data 
   * @returns 
   */
  upload(data) {
    return this.createHttp({
      url: '/files/batchUpload',
      method: 'post',
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  /**
   *  保存文件
   * @param {*} data 
   * @returns 
   */
  saveFiles(data) {
    return this.createHttp({
      url: '/files/saveFiles',
      method: 'post',
      data: data
    })
  }

  /**
   * 批量删除
   * @param {*} ids 
   * @returns 
   */
  batchDelFiles(ids) {
    return this.createHttp({
      url: `/files/delFiles/${ids}`,
      method: 'delete'
    })
  }
}

const filesMapper = new FilesMapper()

export { filesMapper }