'use strict';

const arrowDown = document.createElement('span'),
      arrowParent = document.querySelectorAll('.has-children');

arrowDown.classList.add('dropdown-arrow');
arrowDown.innerHTML = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.00911 5.72217C4.74529 5.72217 4.50126 5.63141 4.31329 5.46746L0.204307 1.81951C0.03942 1.67313 -0.0397257 1.45648 0.0196336 1.25739C0.191116 0.686486 0.900129 0.572305 1.28596 0.914849L4.93656 4.15584C4.97613 4.19097 5.04539 4.19097 5.08496 4.15584L8.71577 0.929487C9.1016 0.586944 9.80732 0.701125 9.9821 1.27203C10.0382 1.47404 9.95901 1.68777 9.79413 1.83415L5.70164 5.46746C5.51696 5.63141 5.26963 5.72217 5.00911 5.72217Z" fill="currentColor"/>
</svg>`

arrowParent.forEach(elem => {
    elem.firstElementChild.append(arrowDown);
})

