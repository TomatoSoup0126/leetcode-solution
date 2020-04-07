function countByTime(second) {

  for (let i = 1; i <= second; i++) {

    setTimeout(function () {

      console.log(i)

    }, 1000*i)
    
  }


  
}

countByTime(5)