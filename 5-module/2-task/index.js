function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let spoiler = document.querySelector('#text');
  btn.addEventListener('click', function(){
    spoiler.toggleAttribute('hidden');
  });
}
