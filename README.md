# Quotes

With this web-app, you have access to the most amazing quotes. It provides a generator for your daily inspirational quote, several quotes from some famous authors and a list of quotes if you haven't had enough of quotes yet.

![Frontpage](https://evaz7.github.io/Quotes/spa/readmeimg/amazed.png)

## Projects
My [visitekaartje](https://evaz7.github.io/Quotes/visitekaartje/index.html)
My Amazing [quotes](https://evaz7.github.io/Quotes/spa/index.html) web app

## Use it
You can use this project to generate fresh quotes for your users, to spice up their day or to help them feel AMAZED again by thing's life has to offer. But you can also use it to sort and fetch data from an API, it has different section that each provide a different way of displaying the data variating from very controlled to putting it all in a list. You can use it as a homepage setup for a more detailed project, or just use the daily randomizer as a building block for your application.

## Install it
It is made in vanilla JavaScript with an API. Because of the API you will need to have access to it first. In order to do so:
1. You have to create and account on API-Ninjas  https://api-ninjas.com/
2. Then you will need the API link, which is: https://api.api-ninjas.com/v1/quotes?category=amazing
3. Add your personal API-key to the link, the key can be found on your personal API-Ninjas account.

## The external data source
The data source gives you tons and tons of different quotes, the API of API-Ninjas has a built-in randomizer that gives you up till 10 different quotes every time you refresh it. It also gives you an author name and a category within the string. You can change the category of the API very easily by just changing it within the link. There are tons of different categories to choose from!

----

## Progress(in Dutch)

## Week 1

Ik heb voor de de "Quotes" user story gekozen. De Case die ik heb gekozen is de quotes, de userstory gaat als volgt:

**Als student digital design, wil ik inspirerende web design quotes kunnen bekijken, zodat ik weer een beetje energie krijg wanneer ik het even niet meer zie zitten met al die hard-core deadlines die op me afkomen.**

### Ideeën

*Mijn idee is om een web app te maken met een daily quote, een overzicht van alle quotes met een sorteerfunctie en een overzichtje van quotes per auteur.*

### Schetsen

![breakdownschets 1](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/breakdown1.jpeg)

In de header staat een kleine nav met een link naar de “main” onderwerpen van de pagina. De titel/logo staat in het midden, de naam komt nog ;).

Bovenaan staat een daily quote die refreshed kan worden met de knop eronder.

De volgende section is een overzicht van alle auteurs met een foto/plaatje en de naam. Als je op een van de auteurs klikt veranderd het overzicht van quotes eronder met de info van de auteur daaronder(zit nog te twijfelen om de info boven de quotes te zetten of weg te laten? Auteurs nav of alleen buttons? Knop weglaten en scroll van maken?)

Onderaan op de pagina bevind zich een overzicht van alle quotes met 2 sorteerfuncties. Als een van deze of allebei is geselecteerd dan veranderd het overzicht eronder op basis hiervan. Filters nav of alleen buttons of een andere tag?

Alle quotes in de HTML ipv een <p> een <quote> geven?

*Alle features die hierbij horen:*

![features](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/interacties.jpeg)

### Process

- Als eerste heb ik deze week de data ingeladen vanuit de API, dit ging vrij gemakkelijk.
- Ik heb een idee bedacht op basis van de data.
- Ik heb een wireframe gemaakt van mijn idee en hier vervolgens een breakdown schets van gemaakt met toelichting.
- Ik heb schetsen gemaakt van mijn features.
- Ik heb een setup gemaakt van mijn HTML.

## Week 2

Deze week een kleine tegenslag omdat de API niet werkte zoals dat zou moeten en ik hiervoor een vervangende API heb moeten zoeken en implementeren. Ook heb ik hierdoor mijn idee deels moeten aanpassen. Het enige probleem met deze API is dat hij maar een array geeft van max 10 quotes en deze elke keer weer anders is als de API/ pagina wordt herladen.

### Ideeën

*Mijn idee is om een web app te maken met een dagelijkse quote, een overzicht van de 10 quotes uit de array van de categorie "Amazing" met een sorteerfunctie en een overzichtje van een quote per auteur met iconen.*

### Schetsen

Ik heb schetsen gemaakt van de verschillende states met wat annotaties.
![loadingstate](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/loadingstate.jpeg)
![errorstate](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/errorstate.jpeg)

ik heb een hifi prototype/ ontwerp in XD gemaakt.
![hifi ontwerp](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/errorstate.jpeg)

### Process

- Ik heb een mathrandom aangemaakt om een random quote te kunnen geven als daily quote. (Deze was alleen mogelijk met de oude API)
- Ik heb een refresh button gemakat zodat de gebruiker de "Daily quote" kan veranderen doordat de pagina refresht.
- Ik heb een nieuwe API gevonden.
- Ik heb heb mijn JavaScript aangepast op basis van deze nieuwe API en mijn API-KEY geïmplementeerd.
- Ik heb mijn HTML aangepast op basis van mijn nieuwe idee.
- Ik heb een begin gemaakt met de CSS voor de aplicatie en een ontwerp hiervoor gemaakt.
- Ik heb een naam bedacht voor de applicatie.
- Ik heb schetsen gemaakt en ideeën bedacht voor de verschillende states van de applicatie.
- Ik heb een hifi prototype/ ontwerp in XD gemaakt om straks beter aan de slag te kunnen met CSS.

### Feedback

- Functionaliteiten zien er leuk uit, sorteren op auteur en alfabet leuk idee. Alleen nog stylen met CSS zou het afmaken. -Menno
- Goed nagedacht over functionaliteiten. Pagina kan nog wat stijling gebruiken. Misschien een idee om te bepalen wat de belangrijkste informatie is en dit op een oogopslag proberen te laten zien. -Rachid

## Week 3

Deze week ben ik aan de slag gegaan met de stijling van mijn applicatie en een aantal (voor mij) nieuwe dingen in JavaScript zoals routes en ES modules.

### Ideeën

*misschien een extra filter toevoegen op basis van de auteurs en de auteurs dan toevoegen aan de lijst met alle quotes?*

### Wireframes

Wireflow en een bijbehorende activity diagram uitgewerkt.
![dailyquote](https://github.com/EvaZ7/Quotes/readmeimg/daily.png)
![quote by author](https://github.com/EvaZ7/Quotes/readmeimg/authors.png)
![all quotes](https://github.com/EvaZ7/Quotes/readmeimg/all.png)

### Process

- Ik ben verder gegaan met CSS, mijn stijling is nu zo goed als af.
- Ik heb mijn code opgedeeld in modules.
- ik heb routes gemaakt voor mijn auteur knoppen.
- Ik heb routes gemaakt voor mijn sorteer functie.
- Ik heb een alfabetische sorteerfunctie gemaakt voor alle quotes. https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
- Ik heb een functie geschreven voor het inladen van alle quotes.
- Ik heb een functie geschreven voor het inladen van quotes per auteur.
- Ik heb een functie geschreven voor het inladen van de namen van alle auteurs.

### Feedback

- Wat refactoren, maak gebruik van loops en schoon je code op in je render.js

### To do

- loading state
- error state
- wireframes etc.

## Week 4

Na het maken van mijn loading- en error-state ben ik tegen een aantal dingen aangelopen, mijn code werkte namelijk niet meer. Het probleem was namelijk dat ik te veel variablen had en met deze variablen ook nog eens let en const door elkaar ging gebruiken.

### Process

- Error state gemaakt.
- Loading state gemaakt.
- HTML elementen laten genereren met JavaScript.
- Loops gemaakt voor het genereren van deze element en de data hierin.
- Code opgeschoont en alle queryselectors eruit gehaald.
- Data plaatsen in HTML elementen met loops in JavaScript.
- README afgemaakt.

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
