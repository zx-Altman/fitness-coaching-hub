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
    { id: "incline_flye", name: "斜板哑铃飞鸟", equip: "哑铃", unit: "kg/只", primary: "chest", secondary: [],
      cues: ["肘微屈、角度全程固定", "弧线下放至胸肌有拉伸感，想象抱一个桶", "不追求大重量，感受挤压"] },
    { id: "pec_deck", name: "蝴蝶机夹胸", equip: "器械", unit: "kg", primary: "chest", secondary: [],
      cues: ["肘位与胸同高", "顶峰挤压1秒再回放", "不耸肩"] },
    { id: "dips", name: "双杠臂屈伸", equip: "自重", unit: "自重", primary: "chest", secondary: ["三头"],
      cues: ["身体前倾偏下胸，躯干竖直偏三头", "下放到上臂与地面平行即可", "肩部不适立即停止"] },
    { id: "lat_pulldown", name: "高位下拉", equip: "器械", unit: "kg", primary: "back", secondary: ["二头"],
      cues: ["挺胸，肘部导向髋部（想象肘插口袋）", "下拉至上胸位置", "身体不后仰晃动借力"] },
    { id: "pullup", name: "引体向上", equip: "自重", unit: "自重", primary: "back", secondary: ["二头"],
      cues: ["肩胛先下沉启动，再屈臂拉", "下巴过杠即可，不勉强", "离心下放2秒"] },
    { id: "seated_cable_row", name: "坐姿绳索划船", equip: "绳索", unit: "kg", primary: "back", secondary: ["二头"],
      cues: ["背挺直，肘贴身拉向腹部", "顶峰挤压1秒", "不靠后仰借力"] },
    { id: "db_row", name: "单臂哑铃划船", equip: "哑铃", unit: "kg/只", primary: "back", secondary: ["二头"],
      cues: ["支撑手撑凳，背部平直不转腰", "肘贴身拉向髋部", "顶峰挤压1秒"] },
    { id: "straight_arm_pulldown", name: "直臂下拉", equip: "绳索", unit: "kg", primary: "back", secondary: [],
      cues: ["肘微屈、角度锁定", "双臂弧线压向大腿", "感受背阔肌的拉伸与收缩，重量宜轻"] },
    { id: "reverse_pec_deck", name: "蝴蝶机反向飞鸟", equip: "器械", unit: "kg", primary: "shoulders", secondary: ["背"],
      cues: ["肘微屈，虎口相对", "向后展开至肩平面即可", "重量轻，专注后束挤压"] },
    { id: "db_shoulder_press", name: "坐姿哑铃推举", equip: "哑铃", unit: "kg/只", primary: "shoulders", secondary: ["三头"],
      cues: ["背贴靠垫，肋骨下压", "哑铃下放到耳侧，小臂全程垂直", "不靠腰椎过伸借力"] },
    { id: "lateral_raise", name: "站姿侧平举", equip: "哑铃", unit: "kg/只", primary: "shoulders", secondary: [],
      cues: ["肘领先、抬到肩平面即可", "不耸肩", "离心2秒，轻重量高次数"] },
    { id: "pushdown", name: "绳索下压", equip: "绳索", unit: "kg", primary: "triceps", secondary: [],
      cues: ["肘贴身固定，只有小臂动", "压到底顶峰1秒", "身体不前倾借力"] },
    { id: "db_curl", name: "哑铃弯举", equip: "哑铃", unit: "kg/只", primary: "biceps", secondary: [],
      cues: ["肘固定在身侧", "不晃腰借力", "离心2秒，顶端可外旋强化挤压"] },
    { id: "back_squat", name: "自由杠铃深蹲", equip: "自由", unit: "kg", primary: "legs", secondary: ["核心"],
      cues: ["瓦氏呼吸绷紧核心再下蹲（护腰关键）", "下蹲至大腿平行以下（活动度允许时）", "膝盖全程外展，严禁屁股眨眼", "保持 RIR 2，不冲极限"] },
    { id: "hack_squat", name: "哈克深蹲", equip: "器械", unit: "kg", primary: "legs", secondary: [],
      cues: ["背贴稳靠垫（对腰椎最友好的蹲类）", "脚位中偏上，深度至大腿平行", "膝盖不内扣"] },
    { id: "leg_press", name: "倒蹬", equip: "器械", unit: "kg", primary: "legs", secondary: [],
      cues: ["全脚掌踩实", "下放到臀部不卷离靠垫", "膝盖不内扣"] },
    { id: "leg_curl", name: "腿弯举", equip: "器械", unit: "kg", primary: "legs", secondary: [],
      cues: ["髋部贴稳不抬起", "顶峰停1秒", "离心控制2秒"] },
    { id: "leg_ext", name: "腿屈伸", equip: "器械", unit: "kg", primary: "legs", secondary: [],
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
    { date: "2026-10-27", title: "轻量腿（唤醒）", note: "RIR 3 收着练，目的是唤醒不是练透；腘绳肌留给自由架", exercises: [
      { ex: "hack_squat", sets: 3, weight: 40, reps: [10, 12], rir: 3, note: "有经验按RIR自选重量，40kg起步，轻了就加" },
      { ex: "bulgarian_split", sets: 3, weight: 12.5, reps: [10, 10], rir: 3, note: "双手各持一只" },
      { ex: "calf_raise", sets: 3, weight: 15, reps: [15, 15], rir: 3, note: "可选，想凑时长再做" }
    ]},
    { date: "2026-10-28", title: "Day 4 肩+手臂（满负荷）", note: "痊愈后首个满负荷日，RIR 1-2", exercises: [
      { ex: "db_shoulder_press", sets: 3, weight: 22.5, reps: [9, 7], rir: 1 },
      { ex: "lateral_raise", sets: 4, weight: 10, reps: [15, 13], rir: 1 },
      { ex: "reverse_pec_deck", sets: 3, weight: 40, reps: [13, 12], rir: 1 },
      { ex: "pushdown", sets: 3, weight: 35, reps: [15, 10], rir: 1, note: "与弯举做超级组" },
      { ex: "db_curl", sets: 3, weight: 12.5, reps: [11, 8], rir: 1, note: "与下压做超级组" }
    ]},
    { date: "2026-10-29", title: "休息", rest: true, note: "继续补觉，睡眠债还剩一点" },
    { date: "2026-10-30", title: "Day 5 背+胸（满负荷）", note: "练完看状态，周日攻坚前不熬夜", exercises: [
      { ex: "pullup", sets: 3, weight: 0, reps: [11, 8], rir: 1 },
      { ex: "seated_cable_row", sets: 3, weight: 45, reps: [10, 9], rir: 1 },
      { ex: "db_row", sets: 3, weight: 22.5, reps: [10, 9], rir: 1 },
      { ex: "dips", sets: 3, weight: 0, reps: [10, 8], rir: 1 },
      { ex: "straight_arm_pulldown", sets: 2, weight: 35, reps: [12, 12], rir: 1 }
    ]},
    { date: "2026-10-31", title: "轻量腿（护腰版）", note: "背贴靠垫器械为主，RIR3收着练，不碰自由深蹲——腰椎与核心留给明日70kg攻坚；下午练，40分钟内完成", exercises: [
      { ex: "leg_press", sets: 3, weight: 60, reps: [12, 12], rir: 3, note: "背全程贴实靠垫，60kg只是唤醒不是练透" },
      { ex: "leg_curl", sets: 3, weight: 50, reps: [12, 12], rir: 3, note: "顶峰停1秒" },
      { ex: "calf_raise", sets: 3, weight: 15, reps: [15, 15], rir: 3, note: "可选，想凑时长再做" }
    ]},
    { date: "2026-11-01", title: "70kg 攻坚战 · 自由卧推", note: "热身：空杆×15 → 40×8 → 50×5 → 60×3，组间充分休息3分钟", exercises: [
      { ex: "flat_bench", sets: 3, weight: 70, reps: [4, 5], rir: 1, note: "70×4 两组；最后一组可降 65×5 收尾" },
      { ex: "db_row", sets: 2, weight: 40, reps: [14, 12], rir: 2 },
      { ex: "incline_flye", sets: 3, weight: 12.5, reps: [10, 10], rir: 2 }
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
    ]}
  ]
};
