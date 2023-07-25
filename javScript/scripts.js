                    //MENU

    // SHOW MENU

    let navMenu = document.getElementById('nav-menu');
    let navToggle = document.getElementById('nav-toggle');
    let navClose = document.getElementById('nav-close');

    // Show menu

    if(navToggle){
        navToggle.addEventListener('click', () =>{navMenu.classList.add('show-menu')});
    }

    // Hidden menu
    if(navClose){
        navClose.addEventListener("click",() =>{navMenu.classList.remove('show-menu')});
    }

    // Remove menu mobile

    let navLink = document.querySelectorAll('.nav_link');
    let linkAction = () =>{
        let navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    // Scroll sections active link

let sections = document.querySelectorAll('main section[id]');

let scrollActive = () => {
let scrollY = window.scrollY;
    sections.forEach(current => {
    let sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector(`.nav_menu a[href*="${sectionId}"]`);
        console.log(scrollY, sectionTop, sectionHeight, sections)
    if (scrollY > sectionTop && scrollY <= (sectionTop + sectionHeight)) {
        sectionsClass.classList.add('active-link');
    } else {
        sectionsClass.classList.remove('active-link');
    }
    });
};

window.addEventListener('scroll', scrollActive);
    
                // CLOCK
    
    // setInterval(renderClock, 1000);
    
    const clock = {
        hourSpan: document.querySelector('.hour'),
        minSpan: document.querySelector('.min'),
        secSpan: document.querySelector('.sec'),
        getClock: (clock) => {
        return String(clock).length === 1
            ? '0' + clock
            : clock;
        },
        renderClock: () => {
        const date = new Date();
        clock.hourSpan.innerText = clock.getClock(date.getHours());
        clock.minSpan.innerText = clock.getClock(date.getMinutes());
        clock.secSpan.innerText = clock.getClock(date.getSeconds());
        }
    };
    
    setInterval(clock.renderClock, 1000);
    
    // Change background header
    
    let blurHeader = () =>{
        let header =document.getElementById('header');
        // When the scroll is greater than 50vh, add the blur-header class to the header tag
        this.scrollY >= 50  ? header.classList.add('blur-header')
                            :header.classList.remove('blur-header');
    }
    window.addEventListener('scroll', blurHeader);
    
    // Show Scroll up
    
    let scrollUp = () =>{
        let scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 350vh, add the show-scroll class to the tag with the scrollup class
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);
    
    // Scroll reveal animation
    
    let sr = ScrollReveal({
        origin:'top',
        distance:'60px',
        duration:'3000',
        delay: 400,
        reset:true
    })
    
    sr.reveal('.home_data, .explore_data, .footer_container');
    sr.reveal('#homeCards', {delay: 600, distance: '100px', inteval: 100});
    sr.reveal('.about_data, .join_image, .container_valid', {origin: 'right'});
    sr.reveal('.about_image, .join_data, .contact_form', {origin: 'left'});
    sr.reveal('.popular_container', {interval: 200});
    
    

                                //ADDING HTML TO THE DOM


            // Variables declaration

// Discover content
let discover = `<div class="youtubeVideo">
<iframe  src="https://www.youtube.com/embed/wn1gtX4mtpk?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<button  type="button" class="button" onclick="removeDiscoverContent()">Close it<i class="ri-arrow-right-line"></i></button>`;

// Society content

let society =  `<div class="society-population">
<h3>What areas make up Spain?</h3>
<img src="img/about/mapapolitico (1).webp" alt="Spain" class="img-society-left">
<p>Spain consists of 17 Autonomous Regions (Andalusia, Aragón, Asturias, the Balearic Islands, the Canary Islands, Cantabria, Castilla y León, Castilla-La Mancha, Catalonia, the Region of Madrid, the Region of Valencia, Extremadura, Galicia, Navarra, Euskadi (the Basque Country), La Rioja, the Region of Murcia) and two Autonomous Cities (Ceuta and Melilla).<br><br>Most Autonomous Regions are divided into provinces (some have a single province) and they have administrative and financial autonomy, and legislative and executive power in certain spheres.
</p>
</div>
<div  class="society-population">
<h3>Which are the largest cities in Spain?</h3>
<p>Madrid and Barcelona are the largest cities in Spain. Madrid is also the national capital, with over three million inhabitants.<br><br>Most of the population of Spain lives in towns and cities. These are the largest:<br><br>
<img src="img/about/madrid-1999645.webp" alt="Spain" class="img-society-right">
Over 1.5 million inhabitants: Madrid and Barcelona.<br><br>Over 500,000 inhabitants: Valencia, Seville, Zaragoza, and Málaga.<br><br>Over 300,000 inhabitants: Murcia, Palma, Las Palmas de Gran Canaria, Bilbao, Alicante/Alacant, and Córdoba.<br><br>Spain also has many beautiful or interesting towns and villages which attract tourists from all over the world. They range from the group of World Heritage Cities to the peaceful medieval towns and the fishing villages of northern Spain. Some places are known for their vernacular architecture, such as the whitewashed towns and villages of Andalusia or the Black Villages of Guadalajara. Some are famous for their beauty and you can visit very quiet and peaceful villages in inland regions of Spain such as Aragón, Castilla y León, and Castilla-La Mancha. If you prefer the coast, there are relaxing destinations all along the coast in places like Andalusia, Catalonia, or the Region of Murcia.
</p>
</div>
<div  class="society-population">
<h3>What is the political system in Spain?</h3>
<img src="img/about/madrid-3544029_1280.webp" alt="Spain" class="img-society-left">
<p>Spain is a parliamentary monarchy, under King Felipe VI.<br><br>National sovereignty is held by the people, and citizens take part in public affairs through the representatives they choose in free elections, which are usually held every four years.<br>Spain became a member state of the European Union on 1 January 1986 (when it was the European Economic Community) and has held the Presidency of the Council in 1989, 1995, 2002, and 2010. In 2023 it will be Spain’s turn to hold the Presidency again.<br><br>Spain is an active participant in constructing the European project, with contributions backed by its policies in various areas, especially external relations with Latin America and the southern Mediterranean.
</p>
</div>
<button  type="button" class="button" onclick="removeAllContent()">Close it<i class="ri-arrow-right-line"></i></button>
`;

// History content

let historyAddContent = `                        <div class="explore-history" id="monuments">
<h3>Monuments and historical heritage</h3>
<img src="img/history/TEMPLO DIANA_5_11zon.webp" alt="Templo de Diana Merida" class="img-history-left">
<p>
    In Spain there are more than 15,600 monuments, archaeological sites, gardens, and historical complexes that have been declared Properties of Cultural Interest (BIC). It’s a rich, diverse heritage that’s extraordinarily valuable, and remains from the different civilisations, cultures, and historical eras that evolved on Spanish territory have been preserved: from Iberians and Celts to Romans and Arabs as well as Phoenicians, Greeks, and Visigoths who all left their mark. Within this mix unique artistic styles are also to be found, such as Asturian pre-Romanesque, Mudejar architecture and Andalusí art. So it’s no surprise that Spain is the country with the fourth largest number of UNESCO World Heritage sites in the world. From the cave paintings at the Altmira Cave and the findings at Atapuerca to the Segovia Aqueduct, the Alhambra Palace in Granada, and the Great Mosque of Córdoba, to the cathedrals of Seville and Burgos, and the Sagrada Familia in Barcelona. These are just a few examples of Spain’s multitude of cultural treasures that just have to be seen and experienced. The 15 Spanish World Heritage cities are definitely worth a special mention, as visiting them will never disappoint.
</p>
</div>
<div class="explore-history" id="museums">
<h3>Museums and art galleries</h3>
<img src="img/history/madrid-328114_1280.webp" alt="Museo del Prado Madrid" class="img-history-right">
<p>
    Spain's museums house some of the most important collections in the world, and are home to some exceptional works and true masterpieces. And if you want to get to know artists such as Velázquez, Goya, Dalí, Miró or Picasso, they’re not to be missed. In Madrid the ‘Art Walk’ comprising the Prado Museum, the Thyssen-Bornemisza Museum and the Reina Sofía National Museum, takes you on a journey through the history of art up to the present day. Contemporary art takes centre stage at places like Bilbao’s Guggenheim Museum , the MACBA in Barcelona, the IVAM in Valencia and Málaga’s Centro Pompidou. There are also numerous other art galleries and alternative cultural spaces, particularly in Madrid and Barcelona. If you want to immerse yourself in the world of Pablo Picasso, the Picasso museums of Málaga and Barcelona are simply unmissable. These are just a few examples taken from a long list. Spain has more than 1,500 extremely diverse museums and collections, many of which stand out as benchmarks in their category, and they attract millions of visitors each year.
</p>
</div>
<div class="explore-history" id="architecture">
<h3>Contemporary architecture</h3>
<img src="img/history/contemporary-art-552834_1280 (1).webp" alt="Expo Zaragoza" class="img-history-left">
<p>
    And Spain’s most avant-garde monuments never fail to surprise. These are buildings, constructions, and architectural spaces designed by prestigious architects who combine aesthetics with functionality. There are museums and cultural centres such as the Guggenheim Museum in Bilbao (Frank Gehry), the City of Arts and Sciences in Valencia (Santiago Calatrava), the MUSAC in León (Tuñón &amp; Mansilla), the Centro Botín (Renzo Piano), the Centro Niemeyer (Óscar Niemeyer), and the extensions to the Prado Museum (Rafael Moneo) or the Reina Sofía Museum (Jean Nouvel), to name a but a few. Also noteworthy are auditoriums and venues such as the Palau de Sant Jordi (Arata Isozaki) or the Kursaal (Rafael Moneo); wineries such as the Marqués de Riscal complex (Frank Gehry) or Bodegas Ysios (Santiago Calatrava); and public spaces such as the Metropol Parasol (locally known as the "Mushrooms" of Seville), and Terminal 4 at the Madrid-Barajas Adolfo Suárez airport. The list of places waiting to be discovered is a long one.
</p>
</div>
<div class="explore-history" id="cultural-routes">
<h3>Cultural routes</h3>
<img src="img/history/nature-3306920_1280.webp" alt="Camino de Santiago" class="img-history-right">
<p>
    Of all the many cultural routes in Spain, there is one that really stands out, and that has its own name: the Way of St James. The oldest pilgrim route in Europe, year after year it continues to attract thousands of travellers from all over the world, and has been awarded World Heritage status by UNESCO. Another great cultural route is the Vía de la Plata (the Silver Route) which runs from north to south, following the old Roman road of the same name. And then there are the Legado Andalusí routes, which reveal the impressive legacy of al-Andalus. Together with those mentioned, there are many other routes that offer great opportunities to discover Spain’s historical and cultural riches. A very varied list that also includes some twenty Council of Europe cultural routes.
</p>
</div>
<div class="explore-history" id="festivals">
<h3>Festivals, celebrations, and traditions</h3>
<img src="img/history/easter-656682_1280.webp" alt="Semana Santa Sevilla" class="img-history-left">
<p>
    In a country like Spain, the calendar of events is another example of cultural wealth. Throughout the year there are a whole host of important music, film, theatre, literature, dance and performing arts festivals of all kinds and genres. In the major cities you’ll also find big exhibitions, musical shows, and all sorts of special cultural events. Without forgetting the multitude of festivals, fairs, and popular celebrations that take place all over the country. Some have become internationally famous, as is the case of Las Fallas and Holy Week, and some have even been awarded Intangible World Heritage status by UNESCO.
</p>
</div>
<div class="explore-history" id="artists">
<h3>Artists and famous names</h3>
<img src="img/history/cervantes-539396_1280.webp" alt="Cervantes" class="img-history-right">
<p>
    Throughout history many Spaniards have left their distinctive mark in different artistic and cultural fields (Murillo, Zurbarán, Miró, Sorolla, Maruja Mallo, Cervantes, Lorca, Falla, Buñuel, Balenciaga, Ramón y Cajal, and many more). And today there are many who are still continuing to do so. Antonio López, Miquel Barceló, Paco de Lucía, Camarón de la Isla, Montserrat Caballé, Pedro Almodóvar, Blanca Li, Manuel Pertegaz, Severo Ochoa, Margarita Salas and Ana María Matute are just a few names on the long list of women and men who are dedicated to literature, painting, music, film, fashion, dance, science, and all kinds of art whose prestige and renown transcend frontiers.
</p>
</div>
<button  type="button" class="button" onclick="removeHistoryContent()">Close it<i class="ri-arrow-right-line"></i></button>`;

            // Functions

 // appends discover content to discover_it

function addDiscover(){
    document.getElementById("discover_it").innerHTML = discover;
}

// Remove content to Society

function removeDiscoverContent() {
    var div = document.getElementById("discover_it");
    div.innerHTML = "";
}

 // Add content to Society

function addSocietyPopulation(){
    document.getElementById("societyPopulation").innerHTML = society;
}

// Remove content to Society

function removeAllContent() {
    var div = document.getElementById("societyPopulation");
    div.innerHTML = "";
}

 // Add content to History

function addHistory(){
    document.getElementById("history-content").innerHTML = historyAddContent;
}

// Remove content to History

function removeHistoryContent() {
    var div = document.getElementById("history-content");
    div.innerHTML = "";
}

            // Listeners

document.getElementById ("discover-btn").addEventListener ("click", addDiscover, false);
document.getElementById ("societyPopulation-btn").addEventListener ("click", addSocietyPopulation, false);
document.getElementById ("history-btn").addEventListener ("click", addHistory, false);

                    // Carrousel

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slides.forEach(function(slide) {
        slide.style.display = "none";
    });
    slides[currentSlide].style.display = "block";
}
setInterval(nextSlide, 2000);

                    // Contact Form

// get data

let nameInput = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let success = document.getElementById('success');
let errorNodes = document.querySelectorAll('.error');

// Validate data

function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = 'Name cannot be blank';
        nameInput.classList.add('error-border');
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = 'Invalid email address';
        email.classList.add('error-border');
        errorFlag = true;
    }
    if(message.value.length < 1){
        errorNodes[2].innerText = 'Please enter message';
        message.classList.add('error-border');
        errorFlag = true;
    }
    if(errorFlag){
        unSuccess.innerText = 'Need to be fully filled';
    }
    if(!errorFlag){
        success.innerText = 'Success!';
    }
}

// Clear error or success messages

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = '';
    }
    success.innerText = '';
    nameInput.classList.remove('error-border');
    email.classList.remove('error-border');
    message.classList.remove('error-border');
}

// Check email

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

                    // Rate form

let btnValidate = document.querySelector('.validate_button');
let postValidate = document.querySelector('.post-valid');
let widgetValidate = document.querySelector('.star-widget');
let editBtnValidate = document.querySelector('.edit-valid');

btnValidate.onclick = () => {
    widgetValidate.style.display = 'none';
    postValidate.style.display = 'block';
    editBtnValidate.onclick = () => {
        widgetValidate.style.display = 'block';
        postValidate.style.display = 'none';
    }
        return false;
    }
