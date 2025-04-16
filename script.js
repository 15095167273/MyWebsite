// 为主题切换按钮添加监听事件，实现主题颜色切换
document.getElementById('btn-blue').addEventListener('click', function() {
  document.documentElement.style.setProperty('--primary-color', '#1e90ff');
  document.documentElement.style.setProperty('--accent-color', '#ff4081');
});
document.getElementById('btn-purple').addEventListener('click', function() {
  document.documentElement.style.setProperty('--primary-color', '#9c27b0');
  document.documentElement.style.setProperty('--accent-color', '#e040fb');
});
document.getElementById('btn-green').addEventListener('click', function() {
  document.documentElement.style.setProperty('--primary-color', '#4caf50');
  document.documentElement.style.setProperty('--accent-color', '#ffeb3b');
});
