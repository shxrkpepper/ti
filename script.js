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
        code: "TOP", name: "赫拉克勒斯", data: "高认同、高剥削、低疲劳",
        history: "赫拉克勒斯以无穷的精力完成了十二项看似不可能的伟业，不知疲倦地克服一切艰难险阻。",
        high: "你是时代的领跑者，拥有极高的效能感和执行力，是天生的破局者。",
        low: "容易陷入“盲目优化”的怪圈，一旦停下就会产生强烈的戒断焦虑，丧失了“无用之美”的感受力。"
    },
    "H-H-H": { 
        code: "SOS", name: "普罗米修斯", data: "高认同、高剥削、高疲劳",
        history: "普罗米修斯被锁在高加索山上，白天长出肝脏投入战斗，夜晚被恶鹰无情啃食。",
        high: "你拥有英雄般的献身精神，为了目标不惜燃烧自己，这种生命力极其耀眼。",
        low: "长期处于“自我战争”中，灵魂已发出了断电信号，若不停止自燃，崩塌就在眼前。"
    },
    "L-H-H": { 
        code: "NPC", name: "西西弗斯", data: "低认同、高剥削、高疲劳",
        history: "西西弗斯日复一日地将巨石推向山顶，又眼睁睁看着它滚落，进行着永无止境且毫无意义的劳作。",
        high: "你拥有惊人的韧性，在无意义的荒诞中依然维持着生活的运转，你是现实主义的基石。",
        low: "精神长期处于“空转”状态，容易滑向彻底的虚无主义，感觉自己只是系统的耗材。"
    },
    "L-L-L": { 
        code: "BAI", name: "第欧根尼", data: "低认同、低剥削、低疲劳",
        history: "第欧根尼常年住在一个木桶里，面对世俗最高权力与恩赐，他唯一的请求是让对方不要挡住自己的阳光。",
        high: "你是主权完整的智者，看穿了消费主义和成就社会的陷阱，拥有他人渴望而不可得的松弛感。",
        low: "过度防御可能导致与社会支持系统的彻底脱节，陷入孤独的自我封闭。"
    },
    "H-L-H": { 
        code: "SAD", name: "达摩克利斯", data: "高认同、低剥削、高疲劳",
        history: "达摩克利斯的头顶始终悬挂着一把仅用一根马鬃拴着的锋利宝剑，时刻面临坠落的致命威胁。",
        high: "你对卓越有着极高的审美和追求，拥有丰富的内心世界和敏锐的危机感。",
        low: "脑内的宏大叙事与现实的停滞形成了巨大的张力，让你在焦虑中先战先衰，陷入瘫痪。"
    },
    "H-L-L": { 
        code: "JOY", name: "墨菲斯", data: "高认同、低剥削、低疲劳",
        history: "墨菲斯作为古希腊的梦神，能够在睡眠中为人编织出无比真实且绚丽的梦境幻象。",
        high: "你是天生的创意家，在荒凉的现实中能为自己构建出瑰丽的蓝图，灵魂从未被现实磨损。",
        low: "由于缺乏现实的“摩擦力”，你的理想容易变成毫无根基的泡影，无法产生真正的生命厚度。"
    },
    "L-L-H": { 
        code: "TOX", name: "拉奥孔", data: "低认同、低剥削、高疲劳",
        history: "拉奥孔看穿了木马计却拒绝参与狂欢，最终被神明派出的两条巨蛇紧紧缠绕并活活绞死。",
        high: "你拥有极强的共情力和清醒的洞察力，能敏锐感知环境的不合理，你是集体的“预警机”。",
        low: "过度敏感让你吸收了过多的环境毒性，他人的卷和焦会在你身上产生“替代性疲劳”。"
    },
    "L-H-L": { 
        code: "PRO", name: "远航的奥德修斯", data: "低认同、高剥削、低疲劳",
        history: "奥德修斯凭借极其务实和狡黠的生存智慧，在各种险境和神明怒火中周旋，最终保持理智回到故乡。",
        high: "你是极致的实用主义大师，总能以最小的代价绕过陷阱，拥有极强的生存智慧。",
        low: "极度的抽离和冷感可能让你丧失对生命本真的体悟，生活逐渐变成了一场只有关卡、没有风景的游戏。"
    }
};

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
    const key = `${scores.pi > 0 ? "H" : "L"}-${scores.sei > 0 ? "H" : "L"}-${scores.bd > 0 ? "H" : "L"}`;
    const role = roles[key];

    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('result-page').classList.add('active');

    document.getElementById('role-tag').innerText = `PBTI 类型：${role.code}`;
    document.getElementById('role-name').innerText = role.name;
    document.getElementById('data-structure').innerText = role.data;
    document.getElementById('role-history').innerText = role.history;
    document.getElementById('role-high').innerText = role.high;
    document.getElementById('role-low').innerText = role.low;

    sendData(role.name, role.code, scores);
}

function sendData(name, code, scores) {
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            access_key: "ab38a826-2811-46e5-9495-b660dd9bdc34",
            subject: "PBTI结果: " + name,
            message: `人物: ${name}\n代码: ${code}\n得分: PI:${scores.pi.toFixed(1)}, SEI:${scores.sei.toFixed(1)}, BD:${scores.bd.toFixed(1)}`
        })
    });
}