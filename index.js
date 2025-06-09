// How can we write Vanilla js

// Type 1|| Inline styles via element.style
const button=document.querySelector('.my-button');
button.style.backgroundColor='blue';
button.style.color='pink';
button.style.padding='10px 20px';

// Type 2|| Dynamically injecting global styles
const style=document.createElement('style');
style.innerHTML=`
.my-button{
background-color:blue;
color:pink;
padding:10px 20px
}
`;
document.head.appendChild(style);

// Type 3|| Modifying Classes with classList
const button=document.querySelector('.my-button');
button.classList.add('active');
button.classList.remove('inactive');
button.classList.toggle('highlisted');





