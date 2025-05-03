var now = new Date;

function createtime() {
    now.setTime(now.getTime() + 1e3); // 每秒增加一秒

    // 设置起始时间为 2025 年 4 月 24 日
    var e = new Date("04/24/2025 00:00:00"),
        t = Math.trunc(234e8 + (now - e) / 1e3 * 17), // 计算旅行者一号距离（千米）
        a = (t / 1496e5).toFixed(6), // 转换为天文单位
        o = new Date("04/24/2025 00:00:00"), // 同样以该日期为起点计算运行时间
        n = (now - o) / 1e3 / 60 / 60 / 24,
        r = Math.floor(n),
        i = (now - o) / 1e3 / 60 / 60 - 24 * r,
        s = Math.floor(i);

    1 == String(s).length && (s = "0" + s); // 补零小时

    var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s,
        l = Math.floor(d);

    1 == String(l).length && (l = "0" + l); // 补零分钟

    var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l,
        b = Math.round(g);

    1 == String(b).length && (b = "0" + b); // 补零秒数

    let c = "";

    // 切换图标和提示文字
    if (s >= 9 && s < 18) {
        // 白天：cup.svg
        c = `<img class='boardsign reduce-margin'   title='什么时候能够实现财富自由呀~'><br> 
             <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`;
    } else {
        // 晚上：gdh.svg
        c = `<img class='boardsign reduce-margin' title='下班了就该开开心心地玩耍~'><br> 
             <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`;
    }

    // 更新页面元素
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = c);
}

// 每秒执行一次
setInterval(() => {
    createtime();
}, 1000);