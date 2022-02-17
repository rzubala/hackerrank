function findZigZagSequence(a: number[], n: number) {
    a.sort()
    const mid = (n + 1)/2 - 1
    const tmp = a[mid]
    a[mid] = a[n - 1];
    a[n - 1] = tmp;

    let st = mid + 1;
    let ed = n-2;
    while(st <= ed){
        const temp = a[st];
        a[st] = a[ed];
        a[ed] = temp;
        st = st + 1;
        ed = ed - 1;
    }
    console.log(a)
}

findZigZagSequence([1,2,3,4,5,6,7], 7)