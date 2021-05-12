/**
 * 获取格式为 yyyy-MM-dd 的日期格式
 * n < 0，获取n天前的日期；n = 0，获取当天的日期；n > 0，获取n天后的日期
 * @param {number} n - 距当天日期的相差天数
 * @returns {string}
 */
export function GetDateStrAddDays(n) {
  const dd = new Date();
  dd.setDate(dd.getDate() + n);
  const y = dd.getFullYear();
  const m = (dd.getMonth() + 1) < 10 ? `0${dd.getMonth() + 1}` : (dd.getMonth() + 1);
  const d = dd.getDate() < 10 ? `0${dd.getDate()}` : dd.getDate();
  return `${y}-${m}-${d}`;
}

/**
 * 获取格式为 HH:mm:ss 的日期时间格式
 * @returns {string}
 */
export function GetTimeStr() {
  const dd = new Date();
  const h = dd.getHours() < 10 ? `0${dd.getHours()}` : dd.getHours();
  const m = dd.getMinutes() < 10 ? `0${dd.getMinutes()}` : dd.getMinutes();
  const s = dd.getSeconds() < 10 ? `0${dd.getSeconds()}` : dd.getSeconds();
  return `${h}:${m}:${s}`;
}

/**
 * 获取格式为 yyyy-MM-dd HH:mm:ss 的日期时间格式
 * n < 0，获取n天前的日期时间；n = 0，获取当天的日期时间；n > 0，获取n天后的日期时间
 * @param {number} n - 距当天日期时间的相差天数
 * @returns {string}
 */
export function GetDateTimeStrAddDays(n) {
  const yMd = GetDateStrAddDays(n);
  const hms = GetTimeStr();
  return `${yMd} ${hms}`;
}
