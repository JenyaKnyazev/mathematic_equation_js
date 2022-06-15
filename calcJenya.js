function split(string){
    let arr =  [];
    arr.length=3;
    let i,r,part1,part2,ch;
    for(i=string.length-1;i>=0;i--)
        if(string[i]=="+"||string[i]=="-")
            break;
    if(i<0){
        for(i=string.length;i>=0;i--)
            if(string[i]=="*"||string[i]=="/")
                break;
    }
    ch=string[i];
    part1="";
    part2="";
    for(r=0;r<i;r++)
        part1+=string[r];
    for(r=i+1;r<string.length;r++)
        part2+=string[r];
    arr[0]=part1;
    arr[1]=ch;
    arr[2]=part2;
    return arr;
}
function calc(num1,op,num2){
    switch(op){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "/":
            return num1/num2;
    }
    return num1*num2;
}
function pars(string){
    let num ="";
    for(i=0;i<string.length;i++)
        if(!(string[i]>='0'&&string[i]<='9'))
            return string;
    for(i=0;i<string.length;i++)
        num+=string[i];
    return parseInt(num);
}
function calculator(string){
    let num=pars(string);
    if(isNaN(num)){
        let arr = split(string);
        return calc(calculator(arr[0]),arr[1],calculator(arr[2]));
    }else
        return num;
}
console.log(calculator("20/5+7"));