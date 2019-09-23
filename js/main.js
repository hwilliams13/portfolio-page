console.log("Up and running!");


function resetButtons() {
    document.getElementById('journey-a').setAttribute('class', 'nav-button-a');
    document.getElementById('projects-a').setAttribute('class', 'nav-button-a');
    document.getElementById('resume-a').setAttribute('class', 'nav-button-a');
    document.getElementById('contact-a').setAttribute('class', 'nav-button-a');
}

function resetArticleSections() {
    document.getElementById('intro-section').setAttribute('class', 'article-section-collapsed');
    document.getElementById('my-journey-section').setAttribute('class', 'article-section-collapsed');
    document.getElementById('projects-section').setAttribute('class', 'article-section-collapsed');
    document.getElementById('resume-section').setAttribute('class', 'article-section-collapsed');
    document.getElementById('contact-me-section').setAttribute('class', 'article-section-collapsed');
}

function resetArticleHeadings() {
    document.getElementById('intro-heading').setAttribute('class', 'article-heading-collapsed');
    document.getElementById('my-journey-heading').setAttribute('class', 'article-heading-collapsed');
    document.getElementById('projects-heading').setAttribute('class', 'article-heading-collapsed');
    document.getElementById('resume-heading').setAttribute('class', 'article-heading-collapsed');
    document.getElementById('contact-me-heading').setAttribute('class', 'article-heading-collapsed');
}

function resetArticleParagraphs() {
    document.getElementById('intro-paragraph').setAttribute('class', 'article-paragraph-collapsed');
    document.getElementById('my-journey-paragraph').setAttribute('class', 'article-paragraph-collapsed');
    document.getElementById('projects-paragraph').setAttribute('class', 'article-paragraph-collapsed');
    document.getElementById('resume-paragraph').setAttribute('class', 'article-paragraph-collapsed');
    document.getElementById('contact-me-paragraph').setAttribute('class', 'article-paragraph-collapsed');
}


function select() {

    var item = this.getAttribute('id');
    
    resetButtons();
    resetArticleSections();
    resetArticleHeadings();
    resetArticleParagraphs();

    if (item == 'my-journey') {
        document.getElementById('journey-a').setAttribute('class', 'nav-button-a-selected');
        document.getElementById('my-journey-section').setAttribute('class', 'article-section');
        document.getElementById('my-journey-heading').setAttribute('class', 'article-heading');
        document.getElementById('my-journey-paragraph').setAttribute('class', 'article-paragraph');
    }
    if (item == 'projects') {
        document.getElementById('projects-a').setAttribute('class', 'nav-button-a-selected');
        document.getElementById('projects-section').setAttribute('class', 'article-section');
        document.getElementById('projects-heading').setAttribute('class', 'article-heading');
        document.getElementById('projects-paragraph').setAttribute('class', 'article-paragraph');
    }
    if (item == 'resume') {
        document.getElementById('resume-a').setAttribute('class', 'nav-button-a-selected');
        document.getElementById('resume-section').setAttribute('class', 'article-section');
        document.getElementById('resume-heading').setAttribute('class', 'article-heading');
        document.getElementById('resume-paragraph').setAttribute('class', 'article-paragraph');
    }
    if (item == 'contact-me') {
        document.getElementById('contact-a').setAttribute('class', 'nav-button-a-selected');
        document.getElementById('contact-me-section').setAttribute('class', 'article-section');
        document.getElementById('contact-me-heading').setAttribute('class', 'article-heading');
        document.getElementById('contact-me-paragraph').setAttribute('class', 'article-paragraph');
    }
    if (item == 'profile-picture') {
        
        document.getElementById('intro-section').setAttribute('class', 'article-section');
        document.getElementById('intro-heading').setAttribute('class', 'article-heading');
        document.getElementById('intro-paragraph').setAttribute('class', 'article-paragraph');
    }
    
}



/* document.getElementById('c1').addEventListener('click', select); */ 

document.getElementById('my-journey').addEventListener('click', select);
document.getElementById('projects').addEventListener('click', select);
document.getElementById('resume').addEventListener('click', select);
document.getElementById('contact-me').addEventListener('click', select);
document.getElementById('profile-picture').addEventListener('click', select);
