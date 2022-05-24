function hideSelf() {
 let hideBtn = document.body.querySelector('.hide-self-button');
 return hideBtn.onclick = function(){
   hideBtn.setAttribute('hidden', 'true');
 };
}