// 获取请求头中的 CSRF Token 和 Cookie
const csrfToken = $request.headers['csrf-token'] || "";  // 假设 token 在请求头
const cookie = $request.headers['Cookie'] || "";

// 将 token 和 cookie 信息输出到日志
console.log("CSRF Token:", csrfToken);
console.log("Cookie:", cookie);

// 可以使用通知弹窗查看
$notify("Follow 签到", "CSRF Token", csrfToken);
$notify("Follow 签到", "Cookie", cookie);

$done({});