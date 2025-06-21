document.addEventListener('DOMContentLoaded', () => {
  const guestForm = document.getElementById('guestForm');
  const guestNameInput = document.getElementById('guestNameInput');
  const categorySelect = document.getElementById('categorySelect');
  const guestList = document.getElementById('guestList');

  const MAX_GUESTS = 10;

  guestForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = guestNameInput.value.trim();
    const category = categorySelect.value;

    // Validation
    if (!name || !category) {
      alert('Please enter a name and select a category.');
      return;
    }

    // Check if limit is reached
    if (guestList.children.length >= MAX_GUESTS) {
      alert('Maximum number of guests reached (10).');
      return;
    }

    // Create guest <li>
    const listItem = document.createElement('li');
    listItem.classList.add(category); // styling by category

    // Guest name + category
    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${name} (${category})`;

    // Timestamp
    const timeSpan = document.createElement('small');
    const time = new Date();
    timeSpan.textContent = ` — Added at ${time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    // RSVP button
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = 'Not Attending';
    rsvpBtn.className = 'rsvp';
    rsvpBtn.addEventListener('click', () => {
      rsvpBtn.textContent =
        rsvpBtn.textContent === 'Attending' ? 'Not Attending' : 'Attending';
    });

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove';
    removeBtn.addEventListener('click', () => {
      listItem.remove();
    });

    // Build and display the list item
    listItem.appendChild(nameSpan);
    listItem.appendChild(timeSpan);
    listItem.appendChild(rsvpBtn);
    listItem.appendChild(removeBtn);
    guestList.appendChild(listItem);

    // Clear form
    guestForm.reset();
  });
});
