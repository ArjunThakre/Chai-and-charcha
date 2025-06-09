const { Children } = require("react")

function customrender(reactElement,maincontainer){
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appenedChild(domElement);
    */

     const domElement= document.createElement(reactElement.type)
     domElement.innerHTML=reactElement.Children
     
     for(const prop in reactElement.props){
        if(prop === Children)continue;
        domElement.setAttribute(prop,reactElement.props[prop])
     }
     CSSContainerRule.appenedChild(domElement);
}




const reactElement={
    type: 'a',
    props: {
        href:'http://google.com',
        target: '_blank'
    },
    Children: "click me to visit google"

}

const maincontainer = document.querySelector('#root')

customrender(reactElement,maincontainer)

