#  SA.02: Week 2 Code Challenge – Event Guest List Manager
---

## Learning Goals

- Build a functioning guest list application
- Use `event.preventDefault()` to suppress default form behavior
- Practice capturing user input
- Dynamically update the page using JavaScript and the DOM

---

##  Project Description

The **Event Guest List Manager** is a simple interactive web app that lets users manage guests for an event. It allows adding names, categorizing guests, toggling RSVP status, and deleting guests — all dynamically without reloading the page.

---

##  Deliverables & Functionality

As a user:

- I can type a guest’s name into the input field.
- I can select a category (Friend, Family, or Guest).
- I can click a submit button to add the guest.
- I see the guest's name and category appear in a list.
- Each guest entry has a “Remove” button.
- I get alerted if I try to add more than **10 guests**.
- I can toggle each guest's RSVP status between “Attending” and “Not Attending”.

---

## Stretch Features Implemented

- Category color tags: `Friend`, `Family`, `Guest`
- Display the time when a guest was added

---

## How to Use the App

1. **Open `index.html`** in any modern web browser (e.g. Chrome).
2. **Enter a guest's name** in the text input field.
3. **Choose a category** from the dropdown: Friend, Family, or Guest.
4. Click the **"Add Guest"** button.
5. The guest will appear in a list below the form, with:
   - Their name and selected category
   - A **timestamp** showing when they were added
   - A **"Not Attending"** button (which toggles to "Attending")
   - A **"Remove"** button to delete the guest
6. Repeat steps to add up to **10 guests**. After that, the app will alert you.
7. Click the **RSVP** button to toggle status or the **Remove** button to delete any guest.
