function breakingRecords(scores) {
    var min = scores[0], max = scores[0];
    var minCnt = 0, maxCnt = 0;
    for (var _i = 0, _a = scores.slice(1); _i < _a.length; _i++) {
        var score = _a[_i];
        if (score < min) {
            min = score;
            minCnt++;
        }
        if (score > max) {
            max = score;
            maxCnt++;
        }
    }
    return [maxCnt, minCnt];
}
