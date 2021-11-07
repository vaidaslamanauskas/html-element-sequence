function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomRGB() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

function color() {
  document.documentElement.style.setProperty('--color', randomRGB());
}

/*
document.querySelector("button").addEventListener('click', e => {
  disturb();  
});
*/

async function disturb(){
  
  await sleep(0);
  document.querySelector('[tabindex = "1"]').checked = true;
  console.log("splash!!");

  await sleep(200);
  document.querySelector('[tabindex = "2"]').checked = true;
  console.log("second splash!!");

  await sleep(200);
  document.querySelector('[tabindex = "3"]').checked = true;
  console.log("third splash!!");
  
  await sleep(200);
  document.querySelector('[tabindex = "4"]').checked = true;
  
  await sleep(200);
  document.querySelector('[tabindex = "5"]').cols = "3";
  
  await sleep(200);
  document.querySelector('[tabindex = "6"]').checked = true;
  
  await sleep(200);
  document.querySelector('[tabindex = "7"]').checked = true;
  
  await sleep(200);
  document.querySelector('[tabindex = "8"]').checked = true;
  
  await sleep(200);
  document.querySelector('[tabindex = "9"]').value = "100";
  
}

disturb();
