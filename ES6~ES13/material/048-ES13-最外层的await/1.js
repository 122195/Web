/*
 * @作者: kerwin
 */
function ajax(){
    return new Promise((resolve)=>{
     setTimeout(()=>{
         resolve("data-11111")
     },2000)
    })
}

let data = await ajax()

export default {
    name:"moduleA",
    data
}