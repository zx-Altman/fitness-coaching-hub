// 训练教练台 · 数据文件（由教练 Claude 维护，推送后手机刷新即最新）
// 版本号与 index.html 中 data.js?v= 同步修改，用于绕过浏览器缓存
const FIT_DATA = {

  // ===== 肌群定义与每周容量参考区间（组/周，按主肌群计） =====
  muscles: [
    { id: "chest",     label: "胸",   range: [10, 20] },
    { id: "back",      label: "背",   range: [10, 20] },
    { id: "shoulders", label: "肩",   range: [8, 16] },
    { id: "biceps",    label: "二头", range: [6, 12] },
    { id: "triceps",   label: "三头", range: [6, 12] },
    { id: "legs",      label: "腿",   range: [12, 20] },
    { id: "core",      label: "核心", range: [3, 8] }
  ],

  // ===== 动作库（unit: 重量录入口径） =====
  exercises: [
    { id: "smith_incline", name: "史密斯上斜卧推", equip: "史密斯", unit: "kg/边", primary: "chest", secondary: ["肩(前束)", "三头"],
      cues: ["斗牛犬握法+护腕：杠压在掌根正上方，手腕中立", "肩胛后缩下沉，上背贴实凳面", "杠落到锁骨下方（上胸），小臂垂直地面", "推起不锁肘，顶峰挤压1秒"] },
    { id: "db_incline_press", name: "上斜哑铃卧推", equip: "哑铃", unit: "kg/只", primary: "chest", secondary: ["肩(前束)", "三头"],
      cues: ["哑铃下放到上胸两侧，肘与躯干约45-60°", "手腕全程中立", "控制下放2秒，不弹震"] },
    { id: "flat_bench", name: "自由杠铃平板卧推", equip: "自由", unit: "kg", primary: "chest", secondary: ["肩(前束)", "三头"],
      cues: ["斗牛犬握法+护腕（手腕挤压刺痛的解法）", "肩胛后缩下沉、挺胸、双脚踩实", "杠落胸骨中下段，沿略向后上的轨迹推起", "腰部不塌，RIR 2 内完成"] },
    { id: "spoto_press", name: "Spoto 停顿卧推", equip: "自由", unit: "kg", primary: "chest", secondary: ["肩(前束)", "三头"],
      cues: ["斗牛犬握法+护腕（同平板卧推）", "杠铃下放到胸上方1-2cm处悬停（不触胸）", "悬停1-2秒：废掉反弹借力，杠稳了再推", "无反弹会显重，RIR按停顿标准估（约常规的8-9折）"] },
    { id: "incline_flye", name: "斜板哑铃飞鸟", equip: "哑铃", unit: "kg/只", primary: "chest", secondary: [],
      cues: ["肘微屈、角度全程固定", "弧线下放至胸肌有拉伸感，想象抱一个桶", "不追求大重量，感受挤压"] },
    { id: "pec_deck", name: "蝴蝶机夹胸", equip: "器械", unit: "kg", step: 5, primary: "chest", secondary: [],
      cues: ["肘位与胸同高", "顶峰挤压1秒再回放", "不耸肩"] },
    { id: "pushup", name: "停顿俯卧撑", equip: "自重", unit: "自重", primary: "chest", secondary: ["肩(前束)", "三头"],
      cues: ["下到胸口离地一拳，底部停1秒", "无反弹发力（Spoto同款原则）", "躯干一条直线，肘约45°"] },
    { id: "dips", name: "双杠臂屈伸", equip: "自重", unit: "自重", primary: "chest", secondary: ["三头"],
      cues: ["身体前倾偏下胸，躯干竖直偏三头", "下放到上臂与地面平行即可", "肩部不适立即停止"] },
    { id: "lat_pulldown", name: "高位下拉", equip: "器械", unit: "kg", step: 5, primary: "back", secondary: ["二头"],
      cues: ["挺胸，肘部导向髋部（想象肘插口袋）", "下拉至上胸位置", "身体不后仰晃动借力"] },
    { id: "pullup", name: "引体向上", equip: "自重", unit: "自重", primary: "back", secondary: ["二头"],
      cues: ["肩胛先下沉启动，再屈臂拉", "下巴过杠即可，不勉强", "离心下放2秒"] },
    { id: "seated_cable_row", name: "坐姿绳索划船", equip: "绳索", unit: "kg", step: 2.3, primary: "back", secondary: ["二头"],
      cues: ["背挺直，肘贴身拉向腹部", "顶峰挤压1秒", "不靠后仰借力"] },
    { id: "db_row", name: "单臂哑铃划船", equip: "哑铃", unit: "kg/只", primary: "back", secondary: ["二头"],
      cues: ["支撑手撑凳，背部平直不转腰", "肘贴身拉向髋部", "顶峰挤压1秒"] },
    { id: "t_bar_row", name: "胸垫T杠划船", equip: "器械", unit: "kg", primary: "back", secondary: ["二头"],
      cues: ["胸全程贴实靠垫（腰椎零负荷，周末划船首选）", "肘贴身拉向髋部，顶峰挤压1秒", "下放2秒控制，不甩重量"] },
    { id: "straight_arm_pulldown", name: "直臂下拉", equip: "绳索", unit: "kg", step: 2.3, primary: "back", secondary: [],
      cues: ["肘微屈、角度锁定", "双臂弧线压向大腿", "感受背阔肌的拉伸与收缩，重量宜轻"] },
    { id: "reverse_pec_deck", name: "蝴蝶机反向飞鸟", equip: "器械", unit: "kg", step: 5, primary: "shoulders", secondary: ["背"],
      cues: ["肘微屈，虎口相对", "向后展开至肩平面即可", "重量轻，专注后束挤压"] },
    { id: "db_shoulder_press", name: "坐姿哑铃推举", equip: "哑铃", unit: "kg/只", primary: "shoulders", secondary: ["三头"],
      cues: ["背贴靠垫，肋骨下压", "哑铃下放到耳侧，小臂全程垂直", "不靠腰椎过伸借力"] },
    { id: "lateral_raise", name: "站姿侧平举", equip: "哑铃", unit: "kg/只", primary: "shoulders", secondary: [],
      cues: ["肘领先、抬到肩平面即可", "不耸肩", "离心2秒，轻重量高次数"] },
    { id: "pushdown", name: "绳索下压", equip: "绳索", unit: "kg", step: 2.3, primary: "triceps", secondary: [],
      cues: ["肘贴身固定，只有小臂动", "压到底顶峰1秒", "身体不前倾借力"] },
    { id: "db_curl", name: "哑铃弯举", equip: "哑铃", unit: "kg/只", primary: "biceps", secondary: [],
      cues: ["肘固定在身侧", "不晃腰借力", "离心2秒，顶端可外旋强化挤压"] },
    { id: "back_squat", name: "自由杠铃深蹲", equip: "自由", unit: "kg", primary: "legs", secondary: ["核心"],
      cues: ["瓦氏呼吸绷紧核心再下蹲（护腰关键）", "下蹲至大腿平行以下（活动度允许时）", "膝盖全程外展，严禁屁股眨眼", "保持 RIR 2，不冲极限"] },
    { id: "hack_squat", name: "哈克深蹲", equip: "器械", unit: "kg", step: 2.5, primary: "legs", secondary: [],
      cues: ["背贴稳靠垫（对腰椎最友好的蹲类）", "脚位中偏上，深度至大腿平行", "膝盖不内扣"] },
    { id: "leg_press", name: "倒蹬", equip: "器械", unit: "kg", step: 6.8, primary: "legs", secondary: [],
      cues: ["全脚掌踩实", "下放到臀部不卷离靠垫", "膝盖不内扣"] },
    { id: "leg_curl", name: "腿弯举", equip: "器械", unit: "kg", step: 6.8, primary: "legs", secondary: [],
      cues: ["髋部贴稳不抬起", "顶峰停1秒", "离心控制2秒"] },
    { id: "db_leg_curl", name: "哑铃腿弯举", equip: "哑铃", unit: "kg", primary: "legs", secondary: [],
      cues: ["俯卧凳上，双脚夹住哑铃", "弯起顶峰停1秒，离心3秒", "下周二的腘绳主力（客户馆无腿弯举机）"] },
    { id: "leg_ext", name: "腿屈伸", equip: "器械", unit: "kg", step: 5, primary: "legs", secondary: [],
      cues: ["顶端挤压1秒", "离心2秒回放", "重量适中不弹震"] },
    { id: "bulgarian_split", name: "保加利亚剪蹲", equip: "哑铃", unit: "kg/只", primary: "legs", secondary: [],
      cues: ["后脚搭凳，前腿主导发力", "躯干微前倾偏臀，竖直偏股四头", "前膝对准脚尖方向"] },
    { id: "db_goblet", name: "高脚杯深蹲", equip: "哑铃", unit: "kg", primary: "legs", secondary: ["核心"],
      cues: ["哑铃贴胸，双肘内收", "蹲到底部停1秒", "核心全程绷紧"] },
    { id: "calf_raise", name: "站姿哑铃提踵", equip: "哑铃", unit: "kg/只", primary: "legs", secondary: [],
      cues: ["下放到小腿有拉伸感", "顶端顶峰1秒", "不弹跳借力"] },
    { id: "lying_leg_raise", name: "仰卧举腿", equip: "自重", unit: "自重", primary: "core", secondary: [],
      cues: ["下背贴地，不塌腰", "下放不触地保持张力", "慢下快收"] },
    { id: "vacuum", name: "站姿真空腹", equip: "自重", unit: "自重", primary: "core", secondary: [],
      cues: ["呼尽气后收腹吸住15秒", "专注下腹收紧", "空腹练效果最好"] }
  ],

  // ===== 训练处方（按日期，教练每周更新） =====
  plans: [
    { date: "2026-11-02", title: "腿日（哈克主项）", note: "新周期第一练：结构性修正落地，腿容量回归主分化", exercises: [
      { ex: "hack_squat", sets: 4, weight: 50, reps: [10, 8], rir: 2, note: "起步50kg轻了就加，按RIR收口；背贴稳靠垫，膝盖不内扣" },
      { ex: "leg_curl", sets: 3, weight: 52.5, reps: [12, 12], rir: 2 },
      { ex: "leg_ext", sets: 3, weight: 39, reps: [12, 12], rir: 2 },
      { ex: "calf_raise", sets: 3, weight: 15, reps: [15, 15], rir: 2, note: "可选，想凑时长再做" },
      { ex: "lying_leg_raise", sets: 2, weight: 0, reps: [14, 14], rir: 2, note: "收尾" }
    ]},
    { date: "2026-11-03", title: "休息", rest: true, note: "" },
    { date: "2026-11-04", title: "Day 1 胸+背（停顿版）", note: "距周日攻坚72h，胸三头已恢复；停顿版无反弹会显重，RIR按停顿标准估", exercises: [
      { ex: "smith_incline", sets: 3, weight: 22.5, reps: [8, 6], rir: 2, note: "停顿版：杠落到上胸停1秒再推，轨迹稳定优先" },
      { ex: "lat_pulldown", sets: 3, weight: 45, reps: [10, 9], rir: 2 },
      { ex: "db_incline_press", sets: 3, weight: 22.5, reps: [9, 7], rir: 2 },
      { ex: "db_row", sets: 3, weight: 22.5, reps: [10, 9], rir: 2 },
      { ex: "straight_arm_pulldown", sets: 2, weight: 35, reps: [12, 12], rir: 2 }
    ]},
    { date: "2026-11-05", title: "休息", rest: true, note: "" },
    { date: "2026-11-06", title: "Day 4 肩+手臂", note: "三头直接容量下调（卧推频率上升，护肘）", exercises: [
      { ex: "db_shoulder_press", sets: 3, weight: 22.5, reps: [9, 8], rir: 1 },
      { ex: "lateral_raise", sets: 4, weight: 10, reps: [15, 13], rir: 1 },
      { ex: "reverse_pec_deck", sets: 3, weight: 40, reps: [14, 12], rir: 1 },
      { ex: "pushdown", sets: 2, weight: 40, reps: [10, 10], rir: 1, note: "降为2组护肘，与弯举做超级组" },
      { ex: "db_curl", sets: 3, weight: 12.5, reps: [10, 8], rir: 1, note: "与下压做超级组" }
    ]},
    { date: "2026-11-07", title: "自由深蹲回归日", note: "断训3周回归：只找回模式不冲重量。热身：空杆×10 → 50×8 → 65×5；高杠（左肩刚恢复，不用低杠）", exercises: [
      { ex: "back_squat", sets: 4, weight: 70, reps: [8, 8], rir: 2, note: "回归起点70kg不碰75；瓦氏呼吸护腰，深度到位不眨眼" },
      { ex: "leg_curl", sets: 3, weight: 52.5, reps: [12, 12], rir: 2, note: "补腘绳缺口：周一此槽位被蹬腿替代，本周后侧链零直接容量" },
      { ex: "calf_raise", sets: 2, weight: 15, reps: [15, 15], rir: 2 },
      { ex: "lying_leg_raise", sets: 2, weight: 0, reps: [14, 14], rir: 2, note: "收尾" }
    ]},
    { date: "2026-11-08", title: "Spoto 停顿卧推 · 首秀", note: "热身：空杆×15 → 40×8 → 50×5；悬停胸上1-2cm停1-2秒，废掉反弹", exercises: [
      { ex: "spoto_press", sets: 4, weight: 55, reps: [6, 4], rir: 2, note: "55kg≈70%极限；无反弹会显重，别用常规RIR估" },
      { ex: "t_bar_row", sets: 3, weight: 40, reps: [10, 10], rir: 2, note: "胸垫T杠；若无此器械换哑铃划船45kg×10" },
      { ex: "incline_flye", sets: 3, weight: 12.5, reps: [10, 10], rir: 2 }
    ]},
    { date: "2026-11-09", title: "休息", rest: true, note: "Spoto后胸三头恢复 + 深蹲DOMS消退期" },
    { date: "2026-11-10", title: "腿日（哈克渐进）", note: "回归课DOMS残留属正常。裁决测试：徒手蹲→空杆→50kg热身，酸胀逐组松开则照练；仍尖锐疼则本课与周三胸背对调", exercises: [
      { ex: "hack_squat", sets: 4, weight: 118, reps: [11, 10], rir: 2, note: "已执行(11-10实际120×12×2+120×10)：下周基准122.5×12" },
      { ex: "leg_curl", sets: 3, weight: 52.5, reps: [12, 12], rir: 2, note: "补腘绳：客户馆基准" },
      { ex: "leg_ext", sets: 2, weight: 39, reps: [12, 12], rir: 2, note: "降至2组：周六已有深蹲，控总量" },
      { ex: "lying_leg_raise", sets: 2, weight: 0, reps: [14, 14], rir: 2, note: "收尾" }
    ]},
    { date: "2026-11-11", title: "Day 1 胸+背（停顿版·升档）", note: "周四改休息（用户定），本课提前到周三：距周日Spoto约80h；与周二腿为不同肌群连练，允许", exercises: [
      { ex: "smith_incline", sets: 3, weight: 25, reps: [8, 6], rir: 2, note: "停顿1秒；首组若8次做不到稳回22.5，不硬撑" },
      { ex: "lat_pulldown", sets: 3, weight: 45, reps: [10, 9], rir: 2 },
      { ex: "db_incline_press", sets: 3, weight: 22.5, reps: [10, 8], rir: 2, note: "上周22.5×10为PR，目标三组均匀" },
      { ex: "db_row", sets: 3, weight: 25, reps: [10, 9], rir: 2, note: "上周首组25×10成立，本周正式以25为主" },
      { ex: "straight_arm_pulldown", sets: 2, weight: 35, reps: [12, 12], rir: 2 }
    ]},
    { date: "2026-11-12", title: "Day 1 胸+背（停顿版·升档·补课）", note: "周三聚餐顺延：本课从11-11挪来；距周日Spoto已4天全恢复；停顿版正式升25/边", exercises: [
      { ex: "smith_incline", sets: 3, weight: 25, reps: [8, 6], rir: 2, note: "停顿1秒；首组若8次做不到稳回22.5，不硬撑；左肩外侧再现疼即停推类" },
      { ex: "lat_pulldown", sets: 3, weight: 45, reps: [10, 9], rir: 2 },
      { ex: "db_incline_press", sets: 3, weight: 22.5, reps: [10, 8], rir: 2, note: "上周22.5×10为PR，目标三组均匀" },
      { ex: "db_row", sets: 3, weight: 25, reps: [10, 9], rir: 2, note: "上周首组25×10成立，本周正式以25为主" },
      { ex: "straight_arm_pulldown", sets: 2, weight: 35, reps: [12, 12], rir: 2 }
    ]},
    { date: "2026-11-13", title: "Day 4b 侧后束+手臂（去推类版）", note: "周四补课后<24h内不推类（前束/三头让位）：本课去掉推举与下压，保侧后束与二头", exercises: [
      { ex: "lateral_raise", sets: 4, weight: 12.5, reps: [10, 8], rir: 1, note: "升重试探：首组10×10做不到就回10kg做到16+；侧束发沉就降一档" },
      { ex: "reverse_pec_deck", sets: 3, weight: 40, reps: [15, 12], rir: 1 },
      { ex: "db_curl", sets: 3, weight: 12.5, reps: [10, 9], rir: 1 },
      { ex: "lying_leg_raise", sets: 2, weight: 0, reps: [15, 15], rir: 2, note: "收尾补核心" }
    ]},
    { date: "2026-11-14", title: "酒店腿课（维持版）", note: "本周末仅酒店馆可用（哑铃≤12kg+可调凳）：负重受限，用节奏和单侧补强度；75kg深蹲回归顺延至下周六", exercises: [
      { ex: "bulgarian_split", sets: 4, weight: 12, reps: [15, 12], rir: 2, note: "每手12kg：下3秒+底停1秒，用节奏补负荷；RIR按节奏版估" },
      { ex: "db_leg_curl", sets: 3, weight: 12, reps: [15, 12], rir: 2, note: "俯卧凳上双脚夹哑铃；离心3秒——腘绳本周唯一的直接刺激" },
      { ex: "calf_raise", sets: 3, weight: 12, reps: [20, 15], rir: 2, note: "单腿提踵，顶端停2秒" },
      { ex: "lying_leg_raise", sets: 2, weight: 0, reps: [15, 15], rir: 2, note: "收尾" }
    ]},
    { date: "2026-11-15", title: "酒店上肢课（维持版+肩部补课）", note: "周五侧后束课未执行，并入本课；停顿俯卧撑=Spoto同款「无反弹发力」，保持动作模式不生锈", exercises: [
      { ex: "pushup", sets: 4, weight: 0, reps: [15, 12], rir: 2, note: "胸口离地一拳停1秒再推——这就是悬停卧推的徒手版；做不到12次就垫高双手" },
      { ex: "lateral_raise", sets: 4, weight: 10, reps: [15, 13], rir: 1, note: "周五欠账；10kg基础重量（12.5试探留到正常馆）" },
      { ex: "reverse_pec_deck", sets: 3, weight: 7.5, reps: [15, 15], rir: 1, note: "酒店馆可能无反向飞鸟机：换俯身哑铃反向飞鸟7.5kg/只" },
      { ex: "db_curl", sets: 3, weight: 12, reps: [12, 10], rir: 1 }
    ]}
  ],

  // ===== 历史打卡（种子数据，首次打开自动灌入；此后以手机端为准） =====
  seed: [
    { date: "2026-10-12", title: "Day 1 胸+背", note: "此前连练4天，累积疲劳高", entries: [
      { ex: "smith_incline", sets: [{ w: 25, reps: 8, rir: 2 }, { w: 25, reps: 8, rir: 2 }, { w: 25, reps: 8, rir: 1 }, { w: 25, reps: 7, rir: 1 }] },
      { ex: "lat_pulldown", sets: [{ w: 45, reps: 9, rir: 1 }, { w: 45, reps: 8, rir: 1 }, { w: 45, reps: 7, rir: 1 }] },
      { ex: "db_incline_press", sets: [{ w: 22.5, reps: 10, rir: 2 }, { w: 22.5, reps: 8, rir: 2 }, { w: 22.5, reps: 7, rir: 1 }] },
      { ex: "db_row", sets: [{ w: 22.5, reps: 10, rir: 3 }, { w: 22.5, reps: 10, rir: 2 }, { w: 22.5, reps: 10, rir: 2 }] },
      { ex: "pec_deck", sets: [{ w: 30, reps: 14, rir: 4 }, { w: 40, reps: 10, rir: 2 }] }
    ]},
    { date: "2026-10-14", title: "Day 4 肩+手臂", note: "", entries: [
      { ex: "db_shoulder_press", sets: [{ w: 22.5, reps: 9, rir: 2 }, { w: 22.5, reps: 8, rir: 2 }, { w: 22.5, reps: 7, rir: 1 }] },
      { ex: "lateral_raise", sets: [{ w: 10, reps: 15, rir: 2 }, { w: 10, reps: 14, rir: 2 }, { w: 10, reps: 13, rir: 2 }, { w: 10, reps: 13, rir: 2 }] },
      { ex: "reverse_pec_deck", sets: [{ w: 40, reps: 13, rir: 2 }, { w: 40, reps: 13, rir: 2 }, { w: 40, reps: 12, rir: 2 }, { w: 40, reps: 12, rir: 0 }] },
      { ex: "pushdown", sets: [{ w: 35, reps: 15, rir: 1 }, { w: 35, reps: 12, rir: 1 }, { w: 35, reps: 10, rir: 1 }] },
      { ex: "db_curl", sets: [{ w: 12.5, reps: 11, rir: 1 }, { w: 12.5, reps: 10, rir: 1 }, { w: 12.5, reps: 8, rir: 1 }] }
    ]},
    { date: "2026-10-16", title: "Day 5 背+胸", note: "练后加腹肌，饭后投篮40分钟", entries: [
      { ex: "pullup", sets: [{ w: 0, reps: 11, rir: 1 }, { w: 0, reps: 9, rir: 2 }, { w: 0, reps: 8, rir: 2 }] },
      { ex: "seated_cable_row", sets: [{ w: 45, reps: 10, rir: 2 }, { w: 45, reps: 9, rir: 1 }, { w: 45, reps: 9, rir: 1 }] },
      { ex: "db_row", sets: [{ w: 22.5, reps: 10, rir: 2 }, { w: 22.5, reps: 10, rir: 1 }, { w: 22.5, reps: 9, rir: 1 }] },
      { ex: "dips", sets: [{ w: 0, reps: 10, rir: 2 }, { w: 0, reps: 8, rir: 2 }, { w: 0, reps: 8, rir: 2 }] },
      { ex: "straight_arm_pulldown", sets: [{ w: 35, reps: 12, rir: 2 }, { w: 35, reps: 12, rir: 2 }] }
    ]},
    { date: "2026-10-17", title: "周末下肢（自由深蹲）", note: "泡沫轴放松+核心收尾", entries: [
      { ex: "back_squat", sets: [{ w: 75, reps: 8, rir: 2 }, { w: 75, reps: 8, rir: 2 }, { w: 75, reps: 8, rir: 2 }, { w: 75, reps: 8, rir: 2 }] },
      { ex: "leg_press", sets: [{ w: 66, reps: 12, rir: 2 }, { w: 66, reps: 12, rir: 2 }, { w: 66, reps: 12, rir: 2 }] },
      { ex: "leg_curl", sets: [{ w: 66, reps: 10, rir: 2 }, { w: 66, reps: 10, rir: 2 }] },
      { ex: "leg_ext", sets: [{ w: 39, reps: 10, rir: 2 }, { w: 39, reps: 10, rir: 2 }] },
      { ex: "lying_leg_raise", sets: [{ w: 0, reps: 14, rir: 2 }, { w: 0, reps: 14, rir: 2 }, { w: 0, reps: 14, rir: 2 }] }
    ]},
    { date: "2026-10-18", title: "自由卧推破局专场", note: "连续两组推起70kg×4，打破一年多瓶颈；练后投篮30分钟", entries: [
      { ex: "flat_bench", sets: [{ w: 60, reps: 7, rir: 2 }, { w: 70, reps: 4, rir: 1 }, { w: 70, reps: 4, rir: 0 }, { w: 65, reps: 4, rir: 0 }] },
      { ex: "db_row", sets: [{ w: 40, reps: 14, rir: 2 }, { w: 45, reps: 12, rir: 2 }] },
      { ex: "incline_flye", sets: [{ w: 12.5, reps: 10, rir: 2 }, { w: 12.5, reps: 10, rir: 2 }, { w: 12.5, reps: 10, rir: 2 }] },
      { ex: "lat_pulldown", sets: [{ w: 45, reps: 8, rir: 2 }, { w: 45, reps: 8, rir: 2 }] }
    ]},
    { date: "2026-10-23", title: "回归·背", note: "咽炎第5天，痰已消失；划船超回归处方已记录", entries: [
      { ex: "lat_pulldown", sets: [{ w: 35, reps: 12, rir: 3 }, { w: 35, reps: 12, rir: 3 }, { w: 35, reps: 12, rir: 3 }] },
      { ex: "seated_cable_row", sets: [{ w: 40, reps: 10, rir: 2 }, { w: 40, reps: 10, rir: 2 }, { w: 40, reps: 10, rir: 2 }] }
    ]},
    { date: "2026-10-24", title: "回归·肩（酒店哑铃房）", note: "器械最重12kg，用次数做到位RIR；当晚熬夜至3:30", entries: [
      { ex: "db_shoulder_press", sets: [{ w: 12, reps: 14, rir: 3 }, { w: 12, reps: 14, rir: 3 }, { w: 12, reps: 14, rir: 3 }] },
      { ex: "lateral_raise", sets: [{ w: 10, reps: 12, rir: 2 }, { w: 8, reps: 14, rir: 2 }, { w: 8, reps: 14, rir: 2 }] },
      { ex: "db_curl", sets: [{ w: 12, reps: 11, rir: 2 }, { w: 12, reps: 11, rir: 2 }] }
    ]},
    { date: "2026-10-26", title: "Day 1 胸+背（80~90%）", note: "病后回归首个正式日，力量近零损失；练后香蕉+蛋白粉+2鸡蛋", entries: [
      { ex: "smith_incline", sets: [{ w: 22.5, reps: 8, rir: 2 }, { w: 22.5, reps: 8, rir: 2 }, { w: 22.5, reps: 8, rir: 2 }, { w: 20, reps: 7, rir: 2 }] },
      { ex: "lat_pulldown", sets: [{ w: 40, reps: 10, rir: 2 }, { w: 40, reps: 10, rir: 2 }, { w: 40, reps: 10, rir: 2 }] },
      { ex: "db_incline_press", sets: [{ w: 20, reps: 11, rir: 2 }, { w: 22.5, reps: 8, rir: 2 }, { w: 22.5, reps: 8, rir: 2 }] },
      { ex: "db_row", sets: [{ w: 22.5, reps: 10, rir: 2 }, { w: 22.5, reps: 10, rir: 2 }, { w: 22.5, reps: 10, rir: 2 }] }
    ]},
    { date: "2026-10-28", title: "Day 4 肩+手臂（满负荷）", note: "痊愈后首个满负荷日，耗时38分钟，肩臂满血", entries: [
      { ex: "db_shoulder_press", sets: [{ w: 22.5, reps: 8, rir: 2 }, { w: 22.5, reps: 7, rir: 1 }, { w: 22.5, reps: 8, rir: 1 }] },
      { ex: "lateral_raise", sets: [{ w: 10, reps: 14, rir: 2 }, { w: 10, reps: 13, rir: 2 }, { w: 10, reps: 11, rir: 0 }, { w: 10, reps: 12, rir: 0 }] },
      { ex: "reverse_pec_deck", sets: [{ w: 40, reps: 14, rir: 1 }, { w: 40, reps: 12, rir: 1 }, { w: 40, reps: 11, rir: 1 }] },
      { ex: "pushdown", sets: [{ w: 40, reps: 10, rir: 1 }, { w: 40, reps: 10, rir: 0 }, { w: 35, reps: 10, rir: 2 }] },
      { ex: "db_curl", sets: [{ w: 12.5, reps: 8, rir: 0 }, { w: 12.5, reps: 7, rir: 0 }, { w: 10, reps: 10, rir: 2 }] }
    ]},
    { date: "2026-10-30", title: "Day 5 背+胸（满负荷）", note: "背部满血，引体第2组11次RIR0；双杠受周三三头疲劳影响低于处方属预判内", entries: [
      { ex: "pullup", sets: [{ w: 0, reps: 11, rir: 1 }, { w: 0, reps: 11, rir: 0 }, { w: 0, reps: 7, rir: 1 }] },
      { ex: "seated_cable_row", sets: [{ w: 45, reps: 10, rir: 2 }, { w: 45, reps: 10, rir: 2 }, { w: 45, reps: 9, rir: 2 }] },
      { ex: "db_row", sets: [{ w: 22.5, reps: 10, rir: 2 }, { w: 22.5, reps: 10, rir: 1 }, { w: 22.5, reps: 10, rir: 1 }] },
      { ex: "dips", sets: [{ w: 0, reps: 8, rir: 2 }, { w: 0, reps: 7, rir: 1 }, { w: 0, reps: 7, rir: 1 }] },
      { ex: "straight_arm_pulldown", sets: [{ w: 35, reps: 12, rir: 2 }, { w: 35, reps: 12, rir: 2 }] }
    ]}
  ]
};
