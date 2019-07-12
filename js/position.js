let flag = true;
let check = document.getElementById('checkB');
let hamb = document.getElementById('menuB');
check.addEventListener('click',function () {
    if (flag){
        hamb.setAttribute('style','position:fixed;left: none;right: 0;!important');
        check.setAttribute('style','position:fixed;left: none;right: 0;!important');
        console.log('fix');
        flag=!flag;
    } else {
        hamb.setAttribute('style','position:absolute');
        check.setAttribute('style','position:absolute');
        flag=!flag;
    }
})