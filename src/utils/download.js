import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import moment from "moment";

export const formatDate = "YYYY-MM-DD";
export const EXCEL_TYPE = {
  ALL: 0, // 全部
  OVERVIEW: 1, // 楼宇总览数据
  FIX_DESK_DISTRIBUTION: 2, // 固定工位状态分布
  UNASSIGNED_DESK_RATIO: 3, // 未分配工位比例
  DEPT_DISTRIBUTION: 4, // 工位所属部门分布
  FLOOR_DISTRIBUTION: 5, // 楼层工位分布
};
export const DATA_NAMES = {
  [EXCEL_TYPE.ALL]: "全部",
  [EXCEL_TYPE.OVERVIEW]: "楼宇总览数据",
  [EXCEL_TYPE.FIX_DESK_DISTRIBUTION]: "固定工位状态分布",
  [EXCEL_TYPE.UNASSIGNED_DESK_RATIO]: "未分配工位比例",
  [EXCEL_TYPE.DEPT_DISTRIBUTION]: "工位所属部门分布",
  [EXCEL_TYPE.FLOOR_DISTRIBUTION]: "楼层工位分布",
};

/**
 * (1)bizcharts 提供下载接口
 *  chartIns.downloadImage();
 * @param {Object} chartInstance bizcharts 实例对象
 * @param {Object}imageInfo {width: number, height: number} 导出的图片宽高信息
 * @param {String} title 导出的图片名称
 */
export const downloadImage = (chartInstance, imageInfo, title) => {
  const canvas = document.createElement("canvas");
  canvas.height = imageInfo.height;
  canvas.width = imageInfo.width;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(chartInstance.get("canvas")._cfg.el, 0, 0);
  const image = canvas.toDataURL("image/png");
  const $a = document.createElement("a");
  $a.setAttribute("href", image);
  $a.setAttribute("download", title);
  $a.click();
};

/**
 * description
 * @param domInstanceArr: dom
 * @param title: 文件名
 */
export const html2Image = (domInstance, title) => {
  const dom = domInstance.current;
  const domWidth = dom.offsetWidth;
  const domHeight = dom.offsetHeight;
  html2canvas(dom, {
    width: domWidth + 50,
    height: domHeight + 50,
    logging: false,
    background: "red",
  }).then((canvas) => {
    const image = canvas.toDataURL("image/png");
    const $a = document.createElement("a");
    $a.setAttribute("href", image);
    $a.setAttribute("download", title);
    $a.click();
  });
};

/**
 * description
 * @param domInstanceArr: [{name: dom, title: 'title'}]
 */
export const domToImagesZip = async (domInstanceArr) => {
  const zip = new JSZip();
  const promiseArr = domInstanceArr.map((v) => {
    return new Promise((resolve) => {
      html2canvas(v.name.current).then((canvas) => {
        canvas.toBlob((blob) => {
          resolve({ promise: blob, title: v.title });
        });
      });
    });
  });

  Promise.all(promiseArr).then((res) => {
    res.forEach((v, i) => {
      zip.file(
        `${i + 1}_${v.title}_${moment().format(formatDate)}.png`,
        v.promise
      );
    });
    zip.generateAsync({ type: "blob" }).then((content) => {
      // see FileSaver.js
      saveAs(content, "楼层工位分布.zip");
    });
  });
};

/**
 * 导出Excel
 * @param params: 后端所需参数
 * @param fileName: 下载的文件名
 */
export const exportZipOrExcel = async (params, fileName) => {
  const { type, date } = params;
  const res = await exportStatisticsData(params); // 接口请求
  const extension = type === 0 ? "zip" : "xls";
  saveAs.saveAs(res, `${fileName || DATA_NAMES[type]}_${date}.${extension}`);
};
