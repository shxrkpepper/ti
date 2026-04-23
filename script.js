const quizData = [
    { text: "相比于吵闹的咖啡馆，我更偏向于在安静的图书馆里学习。", w: { pi: 0, sei: 0, bd: 0 } },
    { text: "在处理小组任务时，我会追求高效完成，即使有时我并不觉得这能让我获得成长。", w: { pi: -5, sei: 7, bd: -2 } },
    { text: "我常为未来的竞争感到焦虑，却迟迟无法投入实际的学习行动中。", w: { pi: 4, sei: -4, bd: 7 } },
    { text: "除了专业课，我会主动寻找一些实用的技能或网课来学习。", w: { pi: 3, sei: 3, bd: 1 } },
    { text: "为了完成任务，我会强迫自己熬夜或放弃休息，即使任务毫无意义。", w: { pi: -5, sei: 8, bd: 6 } },
    { text: "即使我不去参与激烈的竞争，周围那种‘人人都在卷’的氛围也让我感到疲惫。", w: { pi: -5, sei: -3, bd: 7 } },
    { text: "每当有空闲时间，我都能彻底放下学习或工作的念头，尽情享受当下。", w: { pi: -3, sei: -6, bd: -9 } },
    { text: "我挺喜欢那种比别人更早完成任务后的轻松感。", w: { pi: 2, sei: 2, bd: -1 } },
    { text: "我常在脑海中构思未来成功的样子，这能让我获得满足感，即便还没开始行动。", w: { pi: 8, sei: -6, bd: -4 } },
    { text: "当我在为绩点或实习等明确目标忙碌时，我感到的是充实而非疲惫。", w: { pi: 6, sei: 4, bd: -7 } },
    { text: "在记录笔记时，我更习惯使用平板等电子工具，而不是纸笔。", w: { pi: 0, sei: 0, bd: 0 } },
    { text: "我觉得做一个普通人也挺好，并不一定非要追求卓越或成功。", w: { pi: -4, sei: -2, bd: 0 } },
    { text: "我一直在努力优化自己，但有时我感觉自己像是一根即将烧完的蜡烛。", w: { pi: 6, sei: 5, bd: 7 } },
    { text: "即便是在期末周这种紧张时期，我也会保证基本的睡眠和三餐。", w: { pi: 0, sei: -4, bd: -2 } },
    { text: "我习惯为接下来的学习或生活制定相对明确的计划。", w: { pi: 1, sei: 2, bd: 0 } }
];

const roles = {
    "H-H-L": { 
        name: "赫拉克勒斯", 
        data: "高认同、高剥削、低疲劳",
        history: "赫拉克勒斯以无穷的精力完成了十二项看似不可能的伟业，不知疲倦地克服一切艰难险阻。",
        model: "纯血的成就主体。坚信个人的努力可以克服一切障碍，不知疲倦地打怪升级，沉浸在自我效能感爆棚的亢奋中，尚未意识到这种无限的任务其实是系统设置的无底洞。"
    },
    "H-H-H": { 
        name: "普罗米修斯", 
        data: "高认同、高剥削、高疲劳",
        history: "普罗米修斯被锁在高加索山上，白天长出肝脏投入战斗，夜晚被恶鹰无情啃食。",
        model: "崩塌中的成就主体。在拼命内卷与抑郁性瘫痪之间反复挣扎，极度渴望成功并疯狂压榨自己，但神经系统已经发出断电信号，呈现投入与放弃共存的病理特征。"
    },
    "L-H-H": { 
        name: "西西弗斯", 
        data: "低认同、高剥削、高疲劳",
        history: "西西弗斯日复一日地将巨石推向山顶，又眼睁睁看着它滚落，进行着永无止境且毫无意义的劳作。",
        model: "被动运转的系统齿轮。已经看透系统幻象，不再相信成功学，但迫于外部生存压力只能被动服从指令，在无意义的重复中走向精神和肉体的双重枯竭。"
    },
    "L-L-L": { 
        name: "第欧根尼", 
        data: "低认同、低剥削、低疲劳",
        history: "第欧根尼常年住在一个木桶里，面对世俗最高权力与恩赐，他唯一的请求是让对方不要挡住自己的阳光。",
        model: "主权完整的闲暇者。以极端但自洽的方式彻底拒绝了社会的成就评判体系，成功夺回了不做的自由，在竞争环境中既不卷也不焦虑，保持绝对的防御姿态。"
    },
    "H-L-H": { 
        name: "达摩克利斯", 
        data: "高认同、低剥削、高疲劳",
        history: "达摩克利斯的头顶始终悬挂着一把仅用一根马鬃拴着的锋利宝剑，时刻面临坠落的致命威胁。",
        model: "深陷内耗的焦虑者。脑海中充满宏大目标和同辈压力，但在现实中迟迟无法推进行动。隐形的压力之剑让他们时刻处于极度恐慌中，最终导致未战先衰的彻底疲惫与瘫痪。"
    },
    "H-L-L": { 
        name: "墨菲斯", 
        data: "高认同、低剥削、低疲劳",
        history: "墨菲斯作为古希腊的梦神，能够在睡眠中为人编织出无比真实且绚丽的梦境幻象。",
        model: "活在期许中的无痛空想家。极度认同成功叙事并在脑海中构筑了宏伟蓝图，但没有真正开启自我榨取。缺乏真实的行动摩擦使得他们屏蔽了系统的压力反馈，沉浸在完美的幻梦中且未体验到神经枯竭。"
    },
    "L-L-H": { 
        name: "拉奥孔", 
        data: "低认同、低剥削、高疲劳",
        history: "拉奥孔看穿了木马计却拒绝参与狂欢，最终被神明派出的两条巨蛇紧紧缠绕并活活绞死。",
        model: "因环境毒性而窒息的清醒者。看透内卷且拒绝参与，但置身于疯狂竞争和焦虑蔓延的集体环境中，系统性的压迫感如巨蛇般勒紧了他们，带来了严重的替代性精神耗竭。"
    },
    "L-H-L": { 
        name: "远航的奥德修斯", 
        data: "低认同、高剥削、低疲劳",
        history: "奥德修斯凭借极其务实和狡黠的生存智慧，在各种险境和神明怒火中周旋，最终保持理智回到故乡。",
        model: "抽离情感的实用主义玩家。不相信宏大叙事，仅把现实看作一场必须通关的游戏。投入极高精力解决问题，但内心对这些外部标签保持绝对的冷感与抽离，从而在高强度运转下免于精神崩塌。"
    }
};

// 页面切换
document.getElementById('start-btn').onclick = () => {
    document.getElementById('start-page').classList.remove('active');
    document.getElementById('quiz-page').classList.add('active');
    renderQuestions();
};

function renderQuestions() {
    const list = document.getElementById('questions-list');
    quizData.forEach((q, idx) => {
        const item = document.createElement('div');
        item.className = 'question-item';
        item.innerHTML = `
            <p class="q-text">${idx + 1}. ${q.text}</p>
            <div class="likert-scale">
                <span class="scale-label disagree">不赞同</span>
                <div class="options-group">
                    ${[1,2,3,4,5].map(v => `
                        <label class="circle-btn v${v}">
                            <input type="radio" name="q${idx}" value="${v}" required>
                            <span></span>
                        </label>
                    `).join('')}
                </div>
                <span class="scale-label agree">赞同</span>
            </div>
        `;
        list.appendChild(item);
    });
}

document.getElementById('submit-btn').onclick = () => {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    if (answers.length < quizData.length) {
        alert("请完成所有题目后再提交哦！");
        return;
    }

    let finalScores = { pi: 0, sei: 0, bd: 0 };
    answers.forEach((ans) => {
        const qIdx = parseInt(ans.name.replace('q', ''));
        const val = parseInt(ans.value);
        const w = quizData[qIdx].w;
        const factor = (val - 3) / 2;
        
        finalScores.pi += w.pi * factor;
        finalScores.sei += w.sei * factor;
        finalScores.bd += w.bd * factor;
    });

    showResult(finalScores);
};

function showResult(scores) {
    const PI_L = scores.pi > 0 ? "H" : "L";
    const SEI_L = scores.sei > 0 ? "H" : "L";
    const BD_L = scores.bd > 0 ? "H" : "L";
    const key = `${PI_L}-${SEI_L}-${BD_L}`;
    const role = roles[key];

    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('result-page').classList.add('active');

    document.getElementById('role-tag').innerText = `${role.data} (${key})`;
    document.getElementById('role-name').innerText = role.name;
    document.getElementById('role-history').innerText = role.history;
    document.getElementById('role-model').innerText = role.model;

    // 发送数据 (Web3Forms)
    sendData(role.name, key, scores);
}

function sendData(name, key, scores) {
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            access_key: "ab38a826-2811-46e5-9495-b660dd9bdc34",
            subject: "新测试结果: " + name,
            message: `人物: ${name}\n组合: ${key}\n得分: PI:${scores.pi.toFixed(1)}, SEI:${scores.sei.toFixed(1)}, BD:${scores.bd.toFixed(1)}`
        })
    });
}