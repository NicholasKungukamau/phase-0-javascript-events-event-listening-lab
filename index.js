    // const input = document.getElementById('input');
    // input.addEventListener('click', function() {
    //   alert('I was clicked!');
    // });

// const input = document.querySelector('input');

// function clickAlert() {
//   input.addEventListener('click', clickAlert);
//  return  alert('I was clicked!');
// }

const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}


