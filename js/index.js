const siteContent = {
  nav: {
    'nav-item-0': 'Prepend',
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'nav-item-7': 'Obligation',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.nav['img-src']);


let newElementHolder = document.createElement('a');
newElementHolder.href = '#';
document.querySelector('nav').appendChild(newElementHolder);
newElementHolder = document.createElement('a');
newElementHolder.href = '#';
document.querySelector('nav').prepend(newElementHolder);

document.querySelectorAll('nav a').forEach((tag, index) => {
  const element = tag;
  element.textContent = siteContent.nav[`nav-item-${index}`];
  element.style.color = 'green';
});

document.querySelector('.cta .cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta .cta-text button').textContent = siteContent.cta.button;
document.querySelector('#cta-img').src = siteContent.cta['img-src'];

const topContent = document.querySelectorAll('.top-content .text-content');
topContent[0].innerHTML = `<h4>${siteContent['main-content']['features-h4']}</h4>
  <p>${siteContent['main-content']['features-content']}</p>`;
topContent[1].innerHTML = `<h4>${siteContent['main-content']['about-h4']}</h4>
  <p>${siteContent['main-content']['about-content']}</p>`;

document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src'];

const bottomContent = document.querySelectorAll('.bottom-content .text-content');
bottomContent[0].innerHTML = `<h4>${siteContent['main-content']['services-h4']}</h4>
  <p>${siteContent['main-content']['services-content']}</p>`;
bottomContent[1].innerHTML = `<h4>${siteContent['main-content']['product-h4']}</h4>
  <p>${siteContent['main-content']['product-content']}</p>`;
bottomContent[2].innerHTML = `<h4>${siteContent['main-content']['vision-h4']}</h4>
  <p>${siteContent['main-content']['vision-content']}</p>`;

const contact = document.querySelector('.contact');
contact.innerHTML = `<h4>${siteContent.contact['contact-h4']}</h4>
  <p>${siteContent.contact.address}</p>
  <p>${siteContent.contact.phone}</p>
  <p>${siteContent.contact.email}</p>`;

document.querySelector('footer p').textContent = siteContent.footer.copyright;
