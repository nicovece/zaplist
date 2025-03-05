function newItem() {
  //javascript
  //1. Adding a new item to the list of items:
  let li = document.createElement('li');
  let inputValue = document.getElementById('input').value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    let list = document.querySelector('#list');
    list.appendChild(li);
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    li.classList.toggle('strike');
  }

  li.addEventListener('dblclick', crossOut);

  //3(i). Adding the delete button "X":
  let crossOutButton = document.createElement('crossOutButton');
  crossOutButton.appendChild(document.createTextNode('X'));
  li.appendChild(crossOutButton);

  crossOutButton.addEventListener('click', deleteListItem);
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.classList.add('delete');
  }
  // 4. Reordering the items:
  $('#list').sortable();
}

/* JQuery version */
function newZapItem() {
  let list = $('#list');
  let li = $('<li></li>');
  let input = $('#input');
  let inputValue = input.val();
  let messages = $('.messages');
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
  li.append(inputValue).append(crossOutButton);

  /* Insert list item */
  if (inputValue === '') {
    messages
      .addClass('alert')
      .html('<p class="alert">You must write something!</p>');
    // $("#button").append('<p class="alert">You must write something!</p>');
    // alert("You must write something!");
  } else {
    list.append(li);
  }

  /* Clear message on input */
  $('#input').on('input', function () {
    messages.removeClass('alert').html('');
  });

  /* Cross out item */
  li.on('dblclick', function () {
    li.toggleClass('strike');
  });

  /* Delete and remove item */
  crossOutButton.on('click', function () {
    li.addClass('delete').remove();
  });

  /* make the list sortable */
  list.sortable();

  console.log('newZapItem' + inputValue);
}
