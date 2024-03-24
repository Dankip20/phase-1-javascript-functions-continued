// code your solution here
function saturdayFun(act = 'roller-skate'){
  let acti = `This Saturday, I want to ${act}!`
  return acti
}
function mondayWork(act = 'go to the office'){
  let acti = `This Monday, I will ${act}.`
  return acti
}

function wrapAdjective(emph="*"){
  return function (msg= "Special"){
      return `You are ${emph}${msg}${emph}!`
  }
}


