const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
  element.addEventListener('click', () => {
    let command = element.dataset['element'];
    
    if (command == 'createLink' || command == 'insertImage') {
      let url = prompt('Enter the link here:', 'http://');
      document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, '');
    }
  });
});

const myData = document.getElementById('data');
let contentData = myData.innerHTML;
const nameInput = document.getElementsByClassName('name');
let name = nameInput.value;
const saveData = document.querySelector('.btn-submit');

saveData.addEventListener('click', () => {
  const resp = fetch('https://apply.switchmaven.com/api/save', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, contentData })
  }).then(resp => resp.json)
  name = '';
  contentData.value = '';
  console.log(resp);
})

const renderBtn = document.querySelector('.btn-render');
renderBtn.addEventListener('click', () => {
  const resp = fetch(`https://apply.switchmaven.com/api/retrieve/name`, {
  method: 'GET',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  })

  contentData = resp.length - 1;
  console.log(resp);

})