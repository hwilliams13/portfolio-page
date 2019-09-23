console.log("Up and running!");

function buttonSelected() {
    var item = this.getAttribute('id');
    return item;
}


function select() {
    document.getElementsByClassName('nav-button-a-selected').setAttribute('class', 'nav-button-a');
    document.getElementsByClassName('article-section').setAttribute('class', 'article-section-collapsed');
    document.getElementsByClassName('article-heading').setAttribute('class', 'article-heading-collapsed');
    document.getElementsByClassName('article-paragraph').setAttribute('class', 'article-paragraph-collapsed');

    if (buttonSelected() == 'my-journey') {
        document.getElementById('journey-a').setAttribute('class', 'nav-button-a-selected');
        document.getElementById('my-journey-section').setAttribute('class', 'article-section');
        document.getElementById('my-journey-heading').setAttribute('class', 'article-heading');
        document.getElementById('my-journey-paragraph').setAttribute('class', 'article-paragraph');
    }
    if (buttonSelected() == 'projects') {
        document.getElementById('projects-a').setAttribute('class', 'nav-button-a-selected');
        document.getElementById('projects-section').setAttribute('class', 'article-section');
        document.getElementById('projects-heading').setAttribute('class', 'article-heading');
        document.getElementById('projects-paragraph').setAttribute('class', 'article-paragraph');
    }
    if (buttonSelected() == 'resume') {
        document.getElementById('resume-a').setAttribute('class', 'nav-button-a-selected');
        document.getElementById('resume-section').setAttribute('class', 'article-section');
        document.getElementById('resume-heading').setAttribute('class', 'article-heading');
        document.getElementById('resume-paragraph').setAttribute('class', 'article-paragraph');
    }
    if (buttonSelected() == 'contact-me') {
        document.getElementById('contact-a').setAttribute('class', 'nav-button-a-selected');
        document.getElementById('contact-me-section').setAttribute('class', 'article-section');
        document.getElementById('contact-me-heading').setAttribute('class', 'article-heading');
        document.getElementById('contact-me-paragraph').setAttribute('class', 'article-paragraph');
    }

    
}



/* document.getElementById('c1').addEventListener('click', select); */ 

document.getElementsByClassName('nav-button').addEventListener('click', select);