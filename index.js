let limit = 20, n = -4, m = -4, mIsPos=m>0, nIsPos=n>0;;
outerLoop: for (let i = 0;;) {
    
    if(nIsPos){
        if(!(i <= n))
        break;
    } else {
        if(!(i >= n))
        break;
    }
    for (let j = 0;;) {
        
        if(mIsPos){
            if(!(j <= m))
            break;
        } else {
            if(!(j >= m))
            break;
        }

        if (!limit--) break outerLoop;
        console.log(i, j);
        mIsPos?j++:j--;
    }
    nIsPos?i++:i--;
}