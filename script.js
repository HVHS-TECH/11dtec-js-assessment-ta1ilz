// 1. Create and inject the custom font and global styles
const style = document.createElement('style');
style.textContent = `
  @font-face { 
    font-family: "MyFont"; 
    src: url("sansation_light.woff"); 
  }
  body { 
    margin: 0; 
    font-family: "MyFont", Arial, sans-serif; 
    background-color: #2b1810; 
    color: #f9f3eb; 
  }
  .topbar { 
    background-color: #1c0f0a; 
    padding: 15px; 
    text-align: center; 
    border-bottom: 1px solid #ebdcb9; 
  }
  .topbar a { 
    color: #f9f3eb; 
    margin: 0 10px; 
    text-decoration: none; 
    font-weight: bold; 
    transition: color 0.3s ease; 
  }
  .topbar a:hover { 
    color: #ebdcb9; 
  }
  .topbar form { 
    margin-top: 10px; 
  }
  .topbar input[type="text"] { 
    padding: 8px; 
    width: 200px; 
    background-color: #3d251a; 
    border: 1px solid #ebdcb9; 
    color: #f9f3eb; 
    border-radius: 4px; 
  }
  .topbar input[type="submit"] { 
    padding: 8px 12px; 
    background-color: #5c3a21; 
    border: 1px solid #ebdcb9; 
    color: #f9f3eb; 
    cursor: pointer; 
    border-radius: 4px; 
    font-weight: bold; 
  }
  .topbar input[type="submit"]:hover { 
    background-color: #7a4f31; 
  }
  .content { 
    text-align: center; 
    padding: 20px; 
    max-width: 800px; 
    margin: 0 auto; 
  }
  h1, h2 { 
    color: #ebdcb9; 
  }
  .doughnuts { 
    margin-top: 20px; 
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 12px; 
  }
  .doughnuts div { 
    width: 220px; 
    padding: 15px; 
    background-color: #3d251a; 
    border: 1px solid #5c3a21; 
    border-radius: 8px; 
    box-shadow: 0 4px 6px rgba(0,0,0,0.3); 
    font-weight: bold; 
    transition: transform 0.2s ease; 
  }
  .doughnuts div:hover { 
    transform: translateY(-3px); 
    border-color: #ebdcb9; 
  }
  img { 
    margin: 20px 10px; 
    border: 3px solid #5c3a21; 
    border-radius: 12px; 
    box-shadow: 0 4px 8px rgba(0,0,0,0.5); 
  }
  .links a { 
    display: inline-block; 
    margin: 10px; 
    padding: 10px 16px; 
    background-color: #5c3a21; 
    border: 1px solid #ebdcb9; 
    color: #f9f3eb; 
    text-decoration: none; 
    border-radius: 6px; 
    font-weight: bold; 
    transition: background-color 0.2s ease; 
  }
  .links a:hover { 
    background-color: #ebdcb9; 
    color: #2b1810; 
  }
  .footer { 
    margin-top: 40px; 
    padding: 20px; 
    text-align: center; 
    background-color: #1c0f0a; 
    border-top: 1px solid #ebdcb9; 
  }
`;
document.head.appendChild(style);

// 2. Set Document Metadata
document.title = "Vikum's Doughnut Haven";
const metaViewport = document.createElement('meta');
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(metaViewport);

// 3. Build Topbar Section
const topbar = document.createElement('div');
topbar.className = 'topbar';

const nav = document.createElement('nav');
const menuLink = document.createElement('a');
menuLink.href = '#Menu';
menuLink.textContent = 'Menu';
const orderLink = document.createElement('a');
orderLink.href = '#Order';
orderLink.textContent = 'Order';
nav.appendChild(menuLink);
nav.appendChild(orderLink);

const searchForm = document.createElement('form');
searchForm.action = 'https://www.google.com/search';
searchForm.method = 'get';
searchForm.target = '_blank';

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.name = 'q';
searchInput.placeholder = 'Doughnut finder 2.0';

const searchSubmit = document.createElement('input');
searchSubmit.type = 'submit';
searchSubmit.value = 'Search';

searchForm.appendChild(searchInput);
searchForm.appendChild(searchSubmit);
topbar.appendChild(nav);
topbar.appendChild(searchForm);

// 4. Build Main Content Section
const content = document.createElement('div');
content.className = 'content';

const bannerImg = document.createElement('img');
bannerImg.src = 'Doughlectable.png';
bannerImg.alt = 'Doughlectable sign reading Doughlectable in stylized lettering on a warm brown background suggesting a cozy doughnut shop';
bannerImg.width = 600;
bannerImg.height = 200;

const mainHeading = document.createElement('h1');
mainHeading.textContent = 'Doughnut Haven';

const introText = document.createElement('p');
introText.textContent = 'This page is about delicious doughnuts and some of the finest treats in the world.';

const menuHeading = document.createElement('h2');
menuHeading.textContent = 'Top Doughnuts';

const doughnutsGrid = document.createElement('div');
doughnutsGrid.className = 'doughnuts';

const doughnutFlavours = [
  'Chocolate Glazed', 'Vanilla Custard', 'Maple Bacon', 
  'Boston Cream', 'Red Velvet', 'Cinnamon Twist'
];

doughnutFlavours.forEach(flavour => {
  const item = document.createElement('div');
  item.textContent = flavour;
  doughnutsGrid.appendChild(item);
});

const chocImg = document.createElement('img');
chocImg.src = 'chocolate_glazed.jpg';
chocImg.alt = 'Chocolate Glazed Doughnut';
chocImg.width = 330;
chocImg.height = 240;

const vanillaImg = document.createElement('img');
vanillaImg.src = 'vanilla_custard.jpg';
vanillaImg.alt = 'Vanilla Custard Doughnut';
vanillaImg.width = 330;
vanillaImg.height = 240;

const linksContainer = document.createElement('div');
linksContainer.className = 'links';

for (let i = 0; i < 2; i++) {
  const wikiLink = document.createElement('a');
  wikiLink.href = 'https://wikipedia.org';
  wikiLink.target = '_blank';
  wikiLink.textContent = 'Doughnuts';
  linksContainer.appendChild(wikiLink);
}

const aboutHeading = document.createElement('h2');
aboutHeading.textContent = 'About';

const aboutText = document.createElement('p');
aboutText.textContent = 'I made this page because I like doughnuts';

// Assemble Content Components
content.append(
  bannerImg, mainHeading, introText, menuHeading, 
  doughnutsGrid, chocImg, vanillaImg, linksContainer, 
  aboutHeading, aboutText
);

// 5. Build Footer Section
const footer = document.createElement('div');
footer.className = 'footer';
const footerText = document.createElement('p');
footerText.textContent = '©Vikum';
footer.appendChild(footerText);

// 6. Append everything directly into the document body
document.body.append(topbar, content, footer);

