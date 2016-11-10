function distance(p1, p2){
    if(p1 = p2){
     return 0;
    }else{
       let a = (Math.abs(p1.x - p2.x)) + (Math.abs(p1.y - p2.y));
            return a;
     }
}
