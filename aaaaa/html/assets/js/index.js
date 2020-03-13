const API = 'http://127.0.0.1:8000'
const request = new XMLHttpRequest()

request.open('GET', API, true)

request.onreadystatechange = function () {

    if (request.readyState === 4) {
  
      if (request.status === 200) {
  
        const json = JSON.parse(request.responseText)
  
        document.querySelector('.ul').innerHTML+=`<li id = "${json}">${json}</li>`
  
        console.log(json)
  
        console.log(request.responseText)
  
        console.log('请求成功')
  
      } else {
  
        console.log('请求错误')
  
      }
  
    }
}