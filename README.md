## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**Answer :** 
Difference between **getElementById** and **getElementsByClassName** : 

getElementById is used for implementing a DOM element through a specified id name that is passed. Since html elements id are considered as unique, getElementById generally contains one unique DOM element.
On the other hand getElementsByClassName is used to grab DOM elements through a class name. It creates a html collection of one or more than one elements that are grabbed by the specified class name.
getElementById grabs one unique DOM element by it's id name and getElementsByClassName grabs one or more than one DOM elements and make a html collection by a specified class name. It's the basic difference between getElementById and getElementByClassName.

Difference between **querySelector** and **querySelectorAll** : 
querySelector is used to select a DOM element by a specific selector or a group selector. It grabs top most element or the first element that matches the selection.
On the other hand querySelectorAll selects one or more than one DOM element by a specific selector or a group selector and makes a Node list with selected elements.
querySelector selects one element by a specific selector or a group selector, while querySelectorAll selects multiple elements and make a Node list of the selected elements. It's the basic deference between querySelector and querySelectorAll.

## 2. How do you **create and insert a new element into the DOM**?
**Answer:**
To insert a new element to the DOM, first I have to grab the element within which the  created element would be inserted. To grab a element I can use **getElementById** to determine where would I insert new element.
To create a new element I will use createElement() method. In the method I will pass a legal html tag name to create element out of it. But it just created the element and will not be seen in the DOM yet. To insert it to the DOM I should use appendChild() method with previously selected element where the new element should be inserted. And as so I can create and insert a new element into the DOM.

Example:
let targetField = document.getElementById('target'); // Determine where the new element should be placed
let newElement = document.createElement('div'); // created new element as div
targetField.appendChild(newElement); // inserted to the DOM

## 3. What is **Event Bubbling** and how does it work?
**Answer:**
Event bubbling is a feature of browser that propagates events from where the event happens up through the parent in the DOM tree. It works by determining where the first event occured (the target element) and bubbles up to the parent of the target event. It will only work if the parent and the other child of the parent also have event handlers. 

## 4. What is **Event Delegation** in JavaScript? Why is it useful?
**Answer:**
Event Delegation technic is often very useful in JavaScript. It's used to handle DOM events. It lets us to add one event handler to control multiple events of the parent child. It basically works by the event bubbling feature.

## 5. What is the difference between **preventDefault() and stopPropagation()** methods?
**Answer:**
preventDefault() and stopPropagation() these two methods are two different things. They both are used in event handlers though but they are different from each other. The preventDefault() just stops default actions that browser takes. Like preventing page to reload after completing form.
On the other hand stopPropagation() method is used to stop event bubbling. As event bubbling feature propagates events all the way up to the parent or root element (if they have event handlers), sometimes we need to stop the bubbling. Thus we use stopPropagation().
So preventDefault() and stopPropagation() methods are two different methods.