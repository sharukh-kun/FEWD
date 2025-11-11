function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    if(b==0){
        throw new error('Arithmatic error b value should not be zero');
    }else{
        return a/b;
    }
}

module.exports={
    add,
    sub,
    mult,
    div
};