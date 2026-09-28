export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  starburst: string[];
  cakeFrosting: string;
  cakeBody: string;
  balloonColors: string[];
}

export const THEMES: Record<string, Theme> = {
  default: {
    primary: "#ff4d8d",
    secondary: "#ffc93c",
    accent: "#2ec4b6",
    background:
      "radial-gradient(circle at 18% 12%, #ffe3c9 0%, transparent 42%), radial-gradient(circle at 82% 16%, #ffe0ef 0%, transparent 42%), radial-gradient(circle at 50% 92%, #d6f6ef 0%, transparent 46%)",
    starburst: ["#ffc93c", "#ff4d8d", "#2ec4b6", "#8a63d2", "#ffc93c"],
    cakeFrosting: "linear-gradient(180deg, #ffb3d1 0%, #ff4d8d 100%)",
    cakeBody: "linear-gradient(180deg, #a3536b 0%, #7c3a52 100%)",
    balloonColors: ["#ff4d8d", "#ffc93c", "#2ec4b6", "#8a63d2"],
  },
  halloween: {
    primary: "#ff6b00",
    secondary: "#8b5cf6",
    accent: "#facc15",
    background:
      "radial-gradient(circle at 18% 12%, #1a0a2e 0%, transparent 42%), radial-gradient(circle at 82% 16%, #2d1b4e 0%, transparent 42%), radial-gradient(circle at 50% 92%, #0d0d0d 0%, transparent 46%)",
    starburst: ["#ff6b00", "#8b5cf6", "#facc15", "#ff4d8d", "#2ec4b6"],
    cakeFrosting: "linear-gradient(180deg, #ff6b00 0%, #cc5500 100%)",
    cakeBody: "linear-gradient(180deg, #2d1b4e 0%, #1a0a2e 100%)",
    balloonColors: ["#ff6b00", "#8b5cf6", "#facc15", "#1a0a2e"],
  },
  christmas: {
    primary: "#dc2626",
    secondary: "#16a34a",
    accent: "#facc15",
    background:
      "radial-gradient(circle at 18% 12%, #fef2f2 0%, transparent 42%), radial-gradient(circle at 82% 16%, #f0fdf4 0%, transparent 42%), radial-gradient(circle at 50% 92%, #fefce8 0%, transparent 46%)",
    starburst: ["#dc2626", "#16a34a", "#facc15", "#ff4d8d", "#2ec4b6"],
    cakeFrosting: "linear-gradient(180deg, #dc2626 0%, #b91c1c 100%)",
    cakeBody: "linear-gradient(180deg, #16a34a 0%, #15803d 100%)",
    balloonColors: ["#dc2626", "#16a34a", "#facc15", "#ffffff"],
  },
  valentine: {
    primary: "#e11d48",
    secondary: "#f43f5e",
    accent: "#fda4af",
    background:
      "radial-gradient(circle at 18% 12%, #fff1f2 0%, transparent 42%), radial-gradient(circle at 82% 16%, #ffe4e6 0%, transparent 42%), radial-gradient(circle at 50% 92%, #fecdd3 0%, transparent 46%)",
    starburst: ["#e11d48", "#f43f5e", "#fda4af", "#ff4d8d", "#ffc93c"],
    cakeFrosting: "linear-gradient(180deg, #f43f5e 0%, #e11d48 100%)",
    cakeBody: "linear-gradient(180deg, #be123c 0%, #9f1239 100%)",
    balloonColors: ["#e11d48", "#f43f5e", "#fda4af", "#fff1f2"],
  },
  newyear: {
    primary: "#facc15",
    secondary: "#f97316",
    accent: "#ef4444",
    background:
      "radial-gradient(circle at 18% 12%, #1c1917 0%, transparent 42%), radial-gradient(circle at 82% 16%, #292524 0%, transparent 42%), radial-gradient(circle at 50% 92%, #0c0a09 0%, transparent 46%)",
    starburst: ["#facc15", "#f97316", "#ef4444", "#22c55e", "#3b82f6"],
    cakeFrosting: "linear-gradient(180deg, #facc15 0%, #eab308 100%)",
    cakeBody: "linear-gradient(180deg, #292524 0%, #1c1917 100%)",
    balloonColors: ["#facc15", "#f97316", "#ef4444", "#22c55e"],
  },
  womensday: {
    primary: "#a855f7",
    secondary: "#ec4899",
    accent: "#f9a8d4",
    background:
      "radial-gradient(circle at 18% 12%, #faf5ff 0%, transparent 42%), radial-gradient(circle at 82% 16%, #fdf2f8 0%, transparent 42%), radial-gradient(circle at 50% 92%, #fce7f3 0%, transparent 46%)",
    starburst: ["#a855f7", "#ec4899", "#f9a8d4", "#c084fc", "#f472b6"],
    cakeFrosting: "linear-gradient(180deg, #a855f7 0%, #9333ea 100%)",
    cakeBody: "linear-gradient(180deg, #ec4899 0%, #db2777 100%)",
    balloonColors: ["#a855f7", "#ec4899", "#f9a8d4", "#c084fc"],
  },
};

export interface ScheduleEntry {
  month: number;
  day: number;
  name: string;
  message?: string;
  theme?: string;
}

export const SCHEDULE: ScheduleEntry[] = [
  { month: 1, day: 4, name: "Phan Thị Thanh Thảo", theme: "womensday" },
  { month: 1, day: 5, name: "Nguyễn Thành Hưng" },
  { month: 1, day: 8, name: "Nguyễn Minh Hà", theme: "womensday" },
  { month: 2, day: 22, name: "Dương Thanh Nam" },
  {
    month: 2,
    day: 14,
    name: "Valentine",
    theme: "valentine",
    message: "Valentine vui vẻ! Yêu thương và hạnh phúc nhé 💕",
  },
  { month: 3, day: 5, name: "Hoàng Văn Thao" },
  {
    month: 3,
    day: 8,
    name: "Ngày Quốc tế Phụ nữ",
    theme: "womensday",
    message: "Chúc mừng ngày 8/3! Luôn xinh đẹp và hạnh phúc nhé 💜",
  },
  { month: 4, day: 12, name: "Nguyễn Thị Tú Phương", theme: "womensday" },
  { month: 6, day: 13, name: "Nguyễn Việt Dũng" },
  { month: 9, day: 2, name: "Nguyễn Việt Quốc An" },
  { month: 9, day: 4, name: "Nguyễn Chiến Thắng" },
  { month: 9, day: 4, name: "Nguyễn Thị Thanh Tâm", theme: "womensday" },
  { month: 9, day: 8, name: "Nguyễn Thị Hằng", theme: "womensday" },
  { month: 10, day: 16, name: "Phạm Hoàng Duy Vũ" },
  { month: 10, day: 20, name: "Nguyễn Tiến Đạt" },
  { month: 10, day: 30, name: "Nguyễn Sơn Hải" },
  {
    month: 10,
    day: 31,
    name: "Halloween",
    theme: "halloween",
    message: "Happy Halloween! 🎃 Trick or treat?",
  },
  { month: 11, day: 5, name: "Nguyễn Tuấn Hưng" },
  { month: 11, day: 14, name: "Trần Ngọc Sơn" },
  {
    month: 12,
    day: 25,
    name: "Giáng Sinh",
    theme: "christmas",
    message: "Merry Christmas! 🎄 Chúc Giáng Sinh an lành!",
  },
  {
    month: 12,
    day: 31,
    name: "Giao Thừa",
    theme: "newyear",
    message: "Chúc Mừng Năm Mới! 🎆 Năm mới vạn sự như ý!",
  },
  {
    month: 1,
    day: 1,
    name: "Tết Dương lịch",
    theme: "newyear",
    message: "Chúc Mừng Năm Mới 2025! 🎆 Năm mới an khang thịnh vượng!",
  },
  { month: 12, day: 26, name: "Cao Tuấn Anh" },
];

export const DEFAULT_MESSAGE =
  "Chúc mừng sinh nhật! Chúc bạn một ngày thật rực rỡ, ngập tràn tiếng cười và những điều ngọt ngào nhất.";

export interface MatchResult {
  names: string;
  message: string;
  theme: Theme;
}

export function getTodayMatch(): MatchResult | null {
  const now = new Date();
  const vnTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })
  );
  const month = vnTime.getMonth() + 1;
  const day = vnTime.getDate();

  const matches = SCHEDULE.filter((s) => s.month === month && s.day === day);
  if (matches.length === 0) return null;

  const names = matches
    .filter((m) => !["Halloween", "Giáng Sinh", "Giao Thừa", "Tết Dương lịch", "Valentine", "Ngày Quốc tế Phụ nữ"].includes(m.name))
    .map((m) => m.name)
    .join(" & ");

  const primaryMatch = matches[0];
  const themeKey = primaryMatch.theme || "default";

  return {
    names,
    message: primaryMatch.message || DEFAULT_MESSAGE,
    theme: THEMES[themeKey] || THEMES.default,
  };
}

export function getNextBirthdays(): {
  name: string;
  daysLeft: number;
  month: number;
  day: number;
}[] {
  const now = new Date();
  const vnTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })
  );
  const currentMonth = vnTime.getMonth() + 1;
  const currentDay = vnTime.getDate();

  const birthdays = SCHEDULE.filter(
    (s) =>
      !["Halloween", "Giáng Sinh", "Giao Thừa", "Tết Dương lịch", "Valentine", "Ngày Quốc tế Phụ nữ"].includes(s.name)
  );

  const results: { name: string; daysLeft: number; month: number; day: number }[] = [];

  for (const b of birthdays) {
    let birthdayThisYear = new Date(vnTime.getFullYear(), b.month - 1, b.day);
    if (
      birthdayThisYear < vnTime ||
      (birthdayThisYear.getMonth() + 1 === currentMonth &&
        birthdayThisYear.getDate() < currentDay)
    ) {
      birthdayThisYear = new Date(
        vnTime.getFullYear() + 1,
        b.month - 1,
        b.day
      );
    }
    const diffMs = birthdayThisYear.getTime() - vnTime.getTime();
    const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    results.push({ name: b.name, daysLeft, month: b.month, day: b.day });
  }

  results.sort((a, b) => a.daysLeft - b.daysLeft);
  return results.slice(0, 3);
}
