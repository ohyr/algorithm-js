function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);

  const idMap = [];
  for (let i = 0; i < id_list.length; i++) {
    idMap[id_list[i]] = i;
  }

  const reportCnt = new Array(id_list.length);
  for (let i = 0; i < id_list.length; i++) {
    const tmp = new Array(id_list.length).fill(false);
    reportCnt[i] = tmp;
  }
  const reportList = new Array(id_list.length);
  for (let i = 0; i < id_list.length; i++) {
    const tmp = new Array(id_list.length).fill(false);
    reportList[i] = tmp;
  }
  for (let i = 0; i < report.length; i++) {
    const r = report[i].split(" ");
    const user = idMap[r[0]];
    const reported = idMap[r[1]];
    reportList[user][reported] = true;
    reportCnt[reported][user] = true;
  }

  const rCnt = new Array(id_list.length).fill(0);
  for (let i = 0; i < reportCnt.length; i++) {
    let cnt = 0;
    for (let j = 0; j < reportCnt[i].length; j++) {
      if (reportCnt[i][j]) {
        cnt++;
      }
    }
    rCnt[i] = cnt;
  }

  for (let i = 0; i < reportList.length; i++) {
    const r = reportList[i];

    let cnt = 0;
    for (let j = 0; j < r.length; j++) {
      if (r[j] && rCnt[j] >= k) {
        cnt++;
      }
    }
    answer[i] = cnt;
  }

  return answer;
}
