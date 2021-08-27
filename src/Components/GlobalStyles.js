import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset};


@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai|Jua&display=swap');
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
}

::selection {
   background: rgba(255, 255, 255, 1);
}


a{
    text-decoration:none;
    color:inherit

}

*{
    box-sizing:border-box;
}

button {
    outline: none;
border: none;
}

input {
    border: none;
    outline: none;
}

textarea {
    border:none;
    outline:none;
    resize: none;
    &:focus {
        border:none;
        outline:none;
    }
}

body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    background-color:#151515;
    color: rgba(255, 255, 255, 1);
    overflow-x: hidden;
    display: flex;
    justify-content: center;
}

.dD{
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: transparent;
}


/* text animation */

@keyframes animated-text{
  from{width: 0;}
  to{width: 100%;}
}

/* cursor animations */

@keyframes animated-cursor{
  from{border-bottom-color: rgba(249, 212, 110, 1);}
  to{border-bottom-color: transparent;}
}

`;

export default globalStyles;
