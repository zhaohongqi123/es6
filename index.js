/* const scanf=require('scanf');
console.log('请输入两个数，计算两个数的和：请按回车继续');
scanf('%d');
console.log('输入a:');
let a=scanf('%d');
console.log('输入b:');
let b=scanf('%d');
if(a>b){
    console.log('最大值是a:'+a);
}else if(b>a){
    console.log('最大值是b:'+b);
}else{
    console.log('a=b='+a);
}

let arr=[1,2,3];
console.log('数组arr:长度为'+arr.length+'\n分别是:'+arr);

for(let i = o;i<arr.length;i++){
    let xinglong = arr [i];
    console.log(xinglong)
}*/


/*const scanf=require('scanf');
console.log('欢迎进入xxx系统');
let arr = [];
while(1){
    console.log('1---添加一个幸运数字');
    console.log('2---显示全部幸运数字');
    console.log('3---删除最后一个数字');
    console.log('4---退出');
    let con=scanf('%d');
    if(con === 1){
        
        console.log('1---添加一个幸运数字');
        let x = scanf('%d');
        arr.push(x);
        console.log('添加成功'+arr);
        scanf('%d');
    }
    if(con === 2){
        console.log('2---幸运数字');
        for(let i = 0;i<arr.length;i++){
            let F = arr[i];
            console.log(F);
        }
        scanf('%d');
    }
    if(con === 3){
        console.log('3---删除最后一个数字');
        arr.pop();//删除数组中最后一个数字
        console.log('删除成功');
        scanf('%d');
    }
    if(con === 4){
        console.log('4---退出');
        break;
    }
}*/

/*const scanf=require('scanf');
let xinglong={
    a:1,//横坐标
    b:2,//纵坐标
}
console.log(xinglong);
console.log('坐标:('+xinglong.a+','+xinglong.b+')');*/

/*const scanf=require('scanf');
console.log('欢迎进入xxx系统');
let arr = [];
while(1){
    console.log('1---添加一个坐标');
    console.log('2---显示全部坐标');
    console.log('3---删除最后一个坐标');
    console.log('4---退出');
    let con=scanf('%d');
    if(con === 1){
        console.log('1---添加一个坐标');
        console.log('输入横坐标：');
        let x = scanf('%d');
        console.log('输入纵坐标：');
        let y = scanf('%d');
        
    }
    if(con === 2){
        console.log('2---显示坐标');
        for(let i = 0;i<arr.length;i++){
            let F = arr[i];
            console.log(`第${i+1}坐标为(${F.x},${F.y})`);
        }
        console.log('点击回车继续')
        scanf('%d');
    }
    if(con === 3){
        console.log('3---删除最后一个数字');
        arr.pop(); //删除数组中最后一个数字
        console.log('删除坐标成功');
        scanf('%d');
    }
    if(con === 4){
        console.log('4---退出');
        break;
    }
}*/


const scanf=require('scanf');
console.log('欢迎进学生成绩管理系统');
let arr=[];
while(1){
    console.log('1---添加一个学生学科成绩');
    console.log('2---显示全部学生学科成绩');
    console.log('3---删除最后一个学生学科成绩');
    console.log('4---退出');
    let con=scanf('%d'); 
    if(con===1){
        console.log('1---添加一个学生学科成绩');
        console.log('请输入学生姓名：');
        let xingming=scanf('%s');
        console.log('请输入语文成绩：');
        let yuwen=scanf('%d');
        console.log('请输入数学成绩：');
        let shuxue=scanf('%d');
        let student={
            'xingming':xingming,
            'yuwen':yuwen,
            'shuxue':shuxue
        };
    arr.push(student); 
    console.log('添加成绩成功');
    scanf('%d');
}
    if(con===2){
    console.log('2---显示全部学生学科成绩');
    for(let i=0;i<arr.length;i++){
        let F=arr[i];
    
    console.log(`学生：${F.xingming}\n语文：${F.yuwen}\n数学：${F.shuxue}`);
}
    console.log('点击回车继续');
    scanf('%d');
    }
    if(con===3){
        console.log('3---删除最后一个学生学科成绩');
        arr.pop(); 
        console.log('删除最后一名学生成绩成功');        
        scanf('%d');
}
    if(con===4){
        console.log('退出');
        break;
    }
}
