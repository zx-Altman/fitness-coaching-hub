# 训练教练台 · Fitness Coaching Hub

私人力量训练与营养追踪应用：当日处方、训练中逐组录入（重量×次数×RIR）、
自动对比上次、达标加重量提示、PR 标记、失败组标记、每周/分肌群容量统计、
近5周肌群热力图、动作库（发力要点+示意图）、日常记录（体重/睡眠/饮水/补剂）。

## 结构

- `index.html` — 单文件应用（无依赖，双击即可本地打开）
- `data.js` — 数据文件（动作库 / 每周训练处方 / 种子历史），由教练 Claude 维护

## PWA 与手机使用

1. 用 iPhone Safari / Android Chrome 打开 GitHub Pages 地址：`https://zx-altman.github.io/fitness-coaching-hub/`
2. **iPhone Safari**：点击底部「分享」按钮 →「添加到主屏幕」（自动识别杠铃图标，以原生独立 App 模式运行，无 Safari 顶底工具栏）。
3. **Android Chrome**：点击右上角菜单 →「安装应用」或「添加到主屏幕」。
4. **离线缓存**：内置 Service Worker，在健身房无信号/信号弱时依然能秒开应用并进行组间打卡与历史查询。

## 与教练的闭环

1. 当天在「今日」页点开始训练，逐组记录
2. 完成后自动复制打卡文本 → 粘贴给 Claude
3. Claude 更新处方 → 修改 `data.js`（同步改 `index.html` 中 `data.js?v=` 版本号）→ 推送
4. 手机下拉刷新即最新处方

## 数据存储

训练记录与日常记录存在浏览器 localStorage（本机）。换手机前可在
「记录」页点「导出全部数据（备份）」，把 JSON 粘贴保存或发给 Claude。

## 本地使用

```bash
cd site && python3 -m http.server 8000
```
