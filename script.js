// 1. 定义题库与计分数据
const quizData = [
  {
    id: 1,
    text: "在社交聚会中，你通常会主动与陌生人交谈。",
    options: [
      { label: "非常赞同", scores: { E: 2, I: 0 } },
      { label: "赞同", scores: { E: 1, I: 0 } },
      { label: "中立", scores: { E: 0, I: 0 } },
      { label: "不赞同", scores: { E: 0, I: 1 } },
      { label: "非常不赞同", scores: { E: 0, I: 2 } }
    ]
  },
  {
    id: 2,
    text: "你更喜欢按部就班地执行计划，而不是随性而为。",
    options: [
      { label: "非常赞同", scores: { J: 2, P: 0 } },
      { label: "赞同", scores: { J: 1, P: 0 } },
      { label: "中立", scores: { J: 0, P: 0 } },
      { label: "不赞同", scores: { J: 0, P: 1 } },
      { label: "非常不赞同", scores: { J: 0, P: 2 } }
    ]
  }
];

// 2. 初始化全局变量
let userScores = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
};
let currentQuestionIndex = 0;

// 获取网页中的 HTML 元素
const questionTextEl = document.getElementById("question-text");
const optionsAreaEl = document.getElementById("options-area");

// 3. 渲染题目的函数
function renderQuestion() {
  // 检查是否已经答完所有题目
  if (currentQuestionIndex >= quizData.length) {
    calculateFinalResult();
    return;
  }

  // 获取当前题目的数据
  const currentQ = quizData[currentQuestionIndex];
  
  // 替换网页上的题目文字
  questionTextEl.textContent = currentQ.text;
  
  // 清空上一题的旧选项按钮
  optionsAreaEl.innerHTML = "";

  // 循环生成当前题目的 5 个选项按钮
  currentQ.options.forEach(function(option) {
    const btn = document.createElement("button");
    btn.textContent = option.label;
    // 为按钮添加点击事件
    btn.onclick = function() {
      handleOptionClick(option.scores);
    };
    optionsAreaEl.appendChild(btn);
  });
}

// 4. 处理用户点击的函数
function handleOptionClick(scores) {
  // 把用户点击选项对应的分数累加到总分池中
  for (const key in scores) {
    userScores[key] += scores[key];
  }
  
  // 题目序号加 1，并渲染下一题
  currentQuestionIndex++;
  renderQuestion();
}

// 5. 计算并展示最终结果的函数
function calculateFinalResult() {
  let finalType = "";
  
  finalType += (userScores.E >= userScores.I) ? "E" : "I";
  finalType += (userScores.S >= userScores.N) ? "S" : "N"; 
  finalType += (userScores.T >= userScores.F) ? "T" : "F";
  finalType += (userScores.J >= userScores.P) ? "J" : "P";
  
  // 在页面上显示最终结果
  questionTextEl.textContent = "测试完成！你的性格类型是：" + finalType;
  optionsAreaEl.innerHTML = "<p>请注意：这只是一个包含两道题的演示版本。</p>";
}

// 6. 启动整个程序（这是最关键的一步，负责消除“加载中...”）
renderQuestion();