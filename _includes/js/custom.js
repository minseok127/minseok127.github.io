document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const currentTheme = localStorage.getItem("theme");

  // 페이지 로드 시 기존 저장된 테마 적용 및 아이콘 설정
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", function() {
    let theme = document.documentElement.getAttribute("data-theme");

    if (theme === "dark") {
      // 라이트 모드로 전환
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    } else {
      // 다크 모드로 전환
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    }
  });
});
