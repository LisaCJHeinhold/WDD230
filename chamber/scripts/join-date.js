  // Get the current date
  var joinDate = new Date();

  // Format the date as needed (YYYY-MM-DD)
  var formattedDate = joinDate.toISOString().split('T')[0];

  // Set the value of the hidden input field
  document.querySelector('#dateField').value = formattedDate;
