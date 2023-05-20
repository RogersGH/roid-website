document.documentElement.setAttribute('data-scroll', window.scrollY);


window.addEventListener('scroll', function() {
    document.documentElement.setAttribute('data-scroll', window.scrollY);
});


window.addEventListener("load", (event) => {
    console.log("TEST2")
    const span = (text, index) => {
        const node = document.createElement('span');
        node.textContent = text;
        node.style.setProperty('--index', index);
        return node;
    }
    
    const byLetter = text => [...text].map(span);
    const splitTargets = document.querySelectorAll('[split]');
    
    splitTargets.forEach(function(node) {
        let nodes = byLetter(node.innerText)
    
        for(var i = 0 ; i < nodes.length ; i++) {
            nodes[i].style.setProperty('--total', nodes.length);
        }


        if (nodes)
            node.firstChild.replaceWith(...nodes)
    });

    
}, true);
