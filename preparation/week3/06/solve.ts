/*
public static void findZigZagSequence(int [] a, int n){
    Arrays.sort(a);
    int mid = (n + 1)/2;
    int temp = a[mid];
    a[mid] = a[n - 1];
    a[n - 1] = temp;

    int st = mid + 1;
    int ed = n - 1;
    while(st <= ed){
        temp = a[st];
        a[st] = a[ed];
        a[ed] = temp;
        st = st + 1;
        ed = ed + 1;
    }
    for(int i = 0; i < n; i++){
        if(i > 0) System.out.print(" ");
        System.out.print(a[i]);
    }
    System.out.println();
}
*/
function findZigZagSequence(a: number[], n: number) {
    a.sort()
    const mid = (n + 1)/2
    const tmp = a[mid]
    a[mid] = a[n - 1];
    a[n - 1] = tmp;

    console.log(mid, n-1, a)

    let st = mid + 1;
    let ed = n - 1;
    while(st <= ed){
        const temp = a[st];
        a[st] = a[ed];
        a[ed] = temp;
        console.log(st, ed, a)
        st = st + 1;
        ed = ed + 1;
    }
    console.log(a)
}

findZigZagSequence([1,2,3,4,5,6,7], 7)