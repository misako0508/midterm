function fizzbuzz(n){
    if (n % 3 == 0 && n % 15 == !0){
        return "fizz";
    }else(n % 5 == 0 && n % 15 == !0){
        return "buzz";
    }else{(n % 15 == 0){
        return "fizzbuzz";
    }else{
        return n;
    }
}
