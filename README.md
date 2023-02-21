# Web App From Scratch @cmda-minor-web 2021 - 2022

In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API, manipulated and finally shown in the UI of the App. You will learn to apply interface principles when building and testing the interface. With the gained knowledge you will be able to build interactive prototypes, based on a user story and real data. Also you will gain a better understanding of how API's, frameworks and libraries work.

## Opdrachten
Mijn [visitekaartje](https://evaz7.github.io/Quotes/visitekaartje/index.html)
Mijn [quotes](https://evaz7.github.io/Quotes/spa/index.html)

## Assignment

1. [Visitekaartje](https://github.com/cmda-minor-web/web-app-from-scratch-2223/blob/main/course/week-1.md#1-visitekaartje): Ontwerp en maak met HTML, CSS en JS een visitekaartje.
2. [Squadpagina](https://github.com/cmda-minor-web/web-app-from-scratch-2223/blob/main/course/week-1.md#2-squadpagina): Ontwerp en maak met je team een squadpagina waarin je de verschillende visitekaartjes toont.
3. [Single Page App](https://github.com/cmda-minor-web/web-app-from-scratch-2223/blob/master/course/week-2.md): Design and build a single page web app based on a User Story.

---

## Program

| Planning | Maandag | Dinsdag | Vrijdag  |
|---|---|---|---|
| [Week 1 - Hellooo 🤸](https://github.com/cmda-minor-web/web-app-from-scratch-2223/blob/master/course/week-1.md) | Introduction + visitekaartje | Squadpagina | Teambespreking |
| [Week 2 - Hello API 🐒](https://github.com/cmda-minor-web/web-app-from-scratch-2223/blob/master/course/week-2.md) | College + briefing opdracht | College + Work | Feedbackgesprekken |
| Voorjaarsvakantie |  |  |  |
| [Week 3 - Refactor 🛠](https://github.com/cmda-minor-web/web-app-from-scratch-2223/blob/master/course/week-3.md)  | College + work  | College + work | Feedbackgesprekken  |
| [Week 4 - Wrapping up 🎁](https://github.com/cmda-minor-web/web-app-from-scratch-2223/blob/master/course/week-4.md)  | College + work  | Review + work | Beoordelingsgesprekken  |

## Best Practices

All work during this course will be tested against our [Best Practices for JavaScript](https://github.com/cmda-minor-web/best-practices/blob/master/javascript.md).

## Rubric

Your efforts will be graded using a single point rubric (see below). You will have to pass the criterion (centre column) to pass the course. During the test you will be consulted and will be given feedback on things we think deficient and things we think are an improvement on the criterion.

| Deficiency | Criterion | Improvement |
|:--|:--|:--|
|  | *User Interface* - you design, build and test the user interface by applying interface design principles |  |
|  | *Code structure* - you write modular, consistent and efficient HTML, CSS and JavaScript code by applying structure and best practices. You manage state for the application and the UI |  |
|  | *Data management* - you understand how you can work with an external API using asynchronous code. You can retrieve data, manipulate and dynamically convert it to structured html |  |
|  | *Project* - your app is working and published on GitHub Pages. Your project is thoroughly documented in the `README.md` file in your repository.  |  |

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
![loadingstate](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/loadingstate.jpeg)
![errorstate](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/errorstate.jpeg)

### Process

- Ik ben verder gegaan met CSS, mijn stijling is nu zo goed als af.
- Ik heb mijn code opgedeeld in modules.
- ik heb routes gemaakt voor mijn auteur knoppen.
- Ik heb routes gemaakt voor mijn sorteer functie.
- Ik heb een alfabetische sorteerfunctie gemaakt voor alle quotes.
- Ik heb een functie geschreven voor het inladen van alle quotes.
- Ik heb een functie geschreven voor het inladen van quotes per auteur.
- Ik heb een functie geschreven voor het inladen van de namen van alle auteurs.

### Feedback

-
https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/

### To do

- loading state
- error state
- wireframes etc.

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
