import React from 'react';

var d = new Date();
var year = d.getFullYear();

function footer(){
    return (<footer><p>copyright ©{year}</p></footer>);
}

export default footer