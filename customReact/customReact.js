function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type); // create element using type
    // domElement.innerHTML = reactElement.children; // set text content using children
    // domElement.setAttribute('href',reactElement.props.href); // set href attribute
    // domElement.setAttribute('target',reactElement.props.target);//  set target attribute
    // container.appendChild(domElement); // append the created element to the container


    const domElement = document.createElement(reactElement.type); // create element using type 
    domElement.innerHTML = reactElement.children; // set text content using children
    for(let prop in reactElement.props){ // loop through props and set attributes
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement); // append the created element to the container
}
const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:'Click me to visit Google'
}

const mainConatainer = document.getElementById("root");

customRender(reactElement,mainConatainer); // react Element ko container me render karna

