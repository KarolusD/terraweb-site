<?php include('contact.php');?>
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1">
    <title>Terraweb.pl</title>
    <meta name="description" content="Tworzymy wasze strony internetowe. Zbuduj swoją przyszłośc z nami.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">

    <script>
        (function(e){function t(t,n,r,o){"use strict";function a(){for(var e,n=0;u.length>n;n++)u[n].href&&u[n].href.indexOf(t)>-1&&(e=!0);e?i.media=r||"all":setTimeout(a)}var i=e.document.createElement("link"),l=n||e.document.getElementsByTagName("script")[0],u=e.document.styleSheets;return i.rel="stylesheet",i.href=t,i.media="only x",i.onload=o||null,l.parentNode.insertBefore(i,l),a(),i}var n=function(r,o){"use strict";if(r&&3===r.length){var a=e.navigator,i=e.Image,l=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||e.opera&&-1===a.userAgent.indexOf("Chrome")||-1!==a.userAgent.indexOf("Series40")),u=new i;u.onerror=function(){n.method="png",n.href=r[2],t(r[2])},u.onload=function(){var e=1===u.width&&1===u.height,a=r[e&&l?0:e?1:2];n.method=e&&l?"svg":e?"datapng":"png",n.href=a,t(a,null,null,o)},u.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",document.documentElement.className+=" grunticon"}};n.loadCSS=t,e.grunticon=n})(this);(function(e,t){"use strict";var n=t.document,r="grunticon:",o=function(e){if(n.attachEvent?"complete"===n.readyState:"loading"!==n.readyState)e();else{var t=!1;n.addEventListener("readystatechange",function(){t||(t=!0,e())},!1)}},a=function(e){return t.document.querySelector('link[href$="'+e+'"]')},c=function(e){var t,n,o,a,c,i,u={};if(t=e.sheet,!t)return u;n=t.cssRules?t.cssRules:t.rules;for(var l=0;n.length>l;l++)o=n[l].cssText,a=r+n[l].selectorText,c=o.split(");")[0].match(/US\-ASCII\,([^"']+)/),c&&c[1]&&(i=decodeURIComponent(c[1]),u[a]=i);return u},i=function(e){var t,o,a;o="data-grunticon-embed";for(var c in e)if(a=c.slice(r.length),t=n.querySelectorAll(a+"["+o+"]"),t.length)for(var i=0;t.length>i;i++)t[i].innerHTML=e[c],t[i].style.backgroundImage="none",t[i].removeAttribute(o);return t},u=function(t){"svg"===e.method&&o(function(){i(c(a(e.href))),"function"==typeof t&&t()})};e.embedIcons=i,e.getCSS=a,e.getIcons=c,e.ready=o,e.svgLoadedCallback=u,e.embedSVG=u})(grunticon,this);
			
			grunticon(["icons/icons.data.svg.css", "icons/icons.data.png.css", "icons/icons.fallback.css"]);
		</script>
		<noscript><link href="icons/icons.fallback.css" rel="stylesheet"></noscript>

</head>

<body class="main">

<header class="site-header">
    <div class="site-logo logo">
        <a href="/">
            <div data-aos="fade-down" class="icon-terraweb-logo" style="width: 180px; height: 21.26px;"></div>
        </a>
    </div>
    <nav class="site-nav">
        <ul data-aos="fade-down" class="site-nav__list nav" id="nav">
            <li class="site-nav__item"><a href="#poczatek" class="site-nav__link active">początek</a></li>
            <li class="site-nav__item"><a href="#czym-sie-zajmujemy" class="site-nav__link">czym się zajmujemy</a></li>
            <li class="site-nav__item"><a href="#oferta" class="site-nav__link">oferta</a></li>
            <li class="site-nav__item"><a href="#portfolio" class="site-nav__link">portfolio</a></li>
            <li class="site-nav__item"><a href="#kontakt" class="site-nav__link">kontakt</a></li>
        </ul>

        <div class="site-hamburger">
            <div class="site-hamburger__bar bar1"></div>
            <div class="site-hamburger__bar bar2"></div>
            <div class="site-hamburger__bar bar3"></div>
        </div>
    </nav>
</header>


<div class="site-header hamburger-menu">
    <nav class="site-nav">
        <ul class="site-nav__list site-nav__list--vertical nav" id="nav2">
            <li class="site-nav__item site-nav__item--vertical"><a href="#poczatek" class="site-nav__link active">początek</a>
            </li>
            <li class="site-nav__item site-nav__item--vertical"><a href="#czym-sie-zajmujemy" class="site-nav__link">czym
                    się zajmujemy</a></li>
            <li class="site-nav__item site-nav__item--vertical"><a href="#oferta" class="site-nav__link">oferta</a></li>
            <li class="site-nav__item site-nav__item--vertical"><a href="#portfolio"
                                                                   class="site-nav__link">portfolio</a></li>
            <li class="site-nav__item site-nav__item--vertical"><a href="#kontakt" class="site-nav__link">kontakt</a>
            </li>
        </ul>
    </nav>
</div>


<div class="site-pagination">
    <ul data-aos="fade-left" id="pagination" class="pagination">
        <li class="pagination-item"><a class="active" href="#poczatek">01</a></li>
        <li class="pagination-item"><a href="#czym-sie-zajmujemy">02</a></li>
        <li class="pagination-item"><a href="#oferta">03</a></li>
        <li class="pagination-item"><a href="#section-04">04</a></li>
        <li class="pagination-item"><a href="#section-05">05</a></li>
        <li class="pagination-item"><a href="#portfolio">06</a></li>
        <li class="pagination-item"><a href="#kontakt">07</a></li>
    </ul>
</div>

<section id="poczatek" class="site-section section-01">

    <div data-aos="zoom-out" class="site-section__image"></div>

    <div class="site-section__info-wrapper wrapper-01">

        <article data-aos="fade-right" class="site-section__article">

            <h1 class="article__h1">
                <span class="article__number number">01</span>
                tworzymy
                <span class="distinction-color">wasze</span>
                strony internetowe</h1>

            <div class="article__cta">
                <p class="article__paragraph link">zbuduj swoją przyszłość z nami</p>
                <button class="article__btn btn btn--primary czym-sie-zajmujemy">poznaj nas</button>
            </div>

        </article>

    </div>

    <div class="icon-scroll-ico czym-sie-zajmujemy" style="width: 32px; height: 32px;"></div>

</section>

<section data-aos="fade-up" id="czym-sie-zajmujemy" class="site-section section-02">

    <h2 class="site-section__section-title animation">
            <span class="section-title__number number number--corner-number">
                02
            </span>
        czym się zajmujemy?
    </h2>

    <div class="site-section__info-wrapper wrapper-02">

        <article data-aos="fade-right" class="site-section__article article-02">

            <div class="site-section__image image--under"></div>
            <h1 class="article__h1 article-02">
                <span class="article__number number">02</span> kreujemy wizerunek
                <span class="distinction-color">twojej</span> firmy
            </h1>

            <div class="article__cta">
                <p class="article__paragraph link">dobierz ofertę do swoich potrzeb</p>
                <button class="article__btn btn btn--primary oferta">zobacz ofertę</button>
            </div>

        </article>

        <aside class="site-section__aside aside-02">

            <div data-aos="fade-up" class="aside__tiles tworzenie-stron-www">
                <h3 class="tiles__title">tworzenie stron www</h3>
                <p class="tiles__paragraph">Zajmujemy się profesjonalnym tworzeniem witryn
                    internetowych m.in. strony produktowe, blogi, strony "wizytówki".</p>
                <div class="icon-arrow-right" style="width: 32px; height: 32px;"></div>
            </div>

            <div data-aos="fade-up" class="aside__tiles identyfikacja-wizualna">
                <h3 class="tiles__title">identyfikacja wizualna</h3>
                <p class="tiles__paragraph">Projektujemy logotypy, wizytówki, ulotki, rekalmy,
                    papier firmowy i wiele innych.</p>
                <div class="icon-arrow-right" style="width: 32px; height: 32px;"></div>
            </div>

            <div data-aos="fade-up" class="aside__tiles uslugi-dodatkowe">
                <h3 class="tiles__title">usługi dodatkowe</h3>
                <p class="tiles__paragraph">Świadczymy również różne usługi dodatkowe, zajrzyj
                    tutaj, jeśli potrzebujesz czegoś więcej.</p>
                <div class="icon-arrow-right" style="width: 32px; height: 32px;"></div>
            </div>

        </aside>

    </div>

</section>

<section data-aos="fade-up" id="oferta" class="site-section section-03">

    <h2 class="site-section__section-title article">
            <span data-aos="zoom-out-right" class="article__number number number--corner-number">
                03
            </span>
        tworzenie stron www
    </h2>

    <div class="flex-wrapper">
        <div data-aos="fade-right" class="flex-wrapper__offer-item">
            <div class="icon-terra-mini-ico icon" style="width: 64px; height: 64px;"></div>
            <h3 class="offer-item__title">pakiet terra <span class="distinction-color distinction-color--word-break">mini</span>
            </h3>

            <ul class="offer-item__list">
                <li class="list__item list__item--tooltip tooltip-01">Własna domena*</li>
                <li class="list__item list__item--tooltip tooltip-02">Niezawodny hosting*</li>
                <li class="list__item">Projekt graficzny</li>
                <li class="list__item">One page</li>
                <li class="list__item">Responsywność</li>
                <li class="list__item">Formularz kontaktowy</li>
                <li class="list__item">Optymalizacja pod kątem Google</li>
                <li class="list__item">Galeria zdjęć</li>
            </ul>

            <button class="btn btn--secondary kontakt">zapytaj o ofertę</button>

        </div>

        <div data-aos="fade-up" class="flex-wrapper__offer-item offer-item--main">
            <div class="icon-terra-standard-ico icon" style="width: 64px; height: 64px;"></div>
            <h3 class="offer-item__title">pakiet terra <span class="distinction-color distinction-color--word-break">standard</span>
            </h3>

            <p class="offer-item__plus link">terra <span class="distinction-color">mini</span> plus:</p>
            <ul class="offer-item__list">
                <li class="list__item list__item--tooltip tooltip-03">Certyfikat SSL*</li>
                <li class="list__item">Statystyki odwiedzin</li>
                <li class="list__item">Do 4 podstron</li>
                <li class="list__item">Logo + wizytówka na życzenie</li>
                <li class="list__item">Mapa z lokalizacją firmy</li>
                <li class="list__item">System zarządzania treścią (CMS)</li>
                <li class="list__item">Animowany slider</li>

            </ul>

            <button class="btn btn--secondary main-color kontakt">zapytaj o ofertę</button>

        </div>

        <div data-aos="fade-left" class="flex-wrapper__offer-item">
            <div class="icon-terra-premiumico icon" style="width: 64px; height: 64px;"></div>
            <h3 class="offer-item__title">pakiet terra <span class="distinction-color distinction-color--word-break">premium</span>
            </h3>

            <p class="offer-item__plus link">terra <span class="distinction-color">standard</span> plus:</p>
            <ul class="offer-item__list">
                <li class="list__item">Pomoc z social media</li>
                <li class="list__item">Wsparcie techniczne 12 m-cy</li>
                <li class="list__item">Bez limitu podstron</li>
                <li class="list__item">Interaktywna mapa</li>
                <li class="list__item">Spersonalizowany projekt</li>

            </ul>

            <button class="btn btn--secondary kontakt">zapytaj o ofertę</button>

        </div>
    </div>

</section>

<section data-aos="fade-up" id="section-04" class="site-section section-04">

    <h2 class="site-section__section-title article">
            <span data-aos="zoom-out-right" class="article__number number number--corner-number">
                04
            </span>
        identyfikacja wizualna
    </h2>

    <div class="flex-wrapper">
        <div data-aos="fade-right" class="flex-wrapper__offer-item">
            <div class="icon-logo icon" style="width: 64px; height: 64px;"></div>
            <h3 class="offer-item__title">projekty logo</h3>

            <p class="offer-item__paragraph">
                Projektujemy logotypy i sygnety.
                Proces projektowy trwa około 2 tygodni, prezentowane jest 1, 3 lub 5 propozycji
                w zależności od potrzeb.
            </p>

            <button class="btn btn--secondary kontakt">zapytaj o ofertę</button>

        </div>

        <div data-aos="fade-up" class="flex-wrapper__offer-item">
            <div class="icon-wizytowka icon" style="width: 64px; height: 64px;"></div>
            <h3 class="offer-item__title">projekty wizytówek</h3>

            <p class="offer-item__paragraph">
                Projektujemy wizytówki z wizerunkiem Twojej marki.
                Zgłoś się do Nas bez znaczenia czy masz swój pomysł czy nie.
                Proces projektowy trwa około tygodnia.
            </p>


            <button class="btn btn--secondary kontakt">zapytaj o ofertę</button>

        </div>

        <div data-aos="fade-left" class="flex-wrapper__offer-item">
            <div class="icon-druk icon" style="width: 64px; height: 64px;"></div>
            <h3 class="offer-item__title">projekty do druku</h3>

            <p class="offer-item__paragraph">
                Projektujemy broszury, ulotki, papier firmowy i wiele innych.
                Proces trwa od tygodnia do około 3 tygodni
                w zależności od założeń danego projektu.
            </p>

            <button class="btn btn--secondary kontakt">zapytaj o ofertę</button>

        </div>

    </div>

</section>

<section id="section-05" class="site-section section-05">

    <h2 class="site-section__section-title article">
            <span data-aos="zoom-out-right" class="article__number number number--corner-number">
                05
            </span>
        usługi dodatkowe
    </h2>

    <div class="flex-wrapper">
        <div data-aos="fade-right" class="flex-wrapper__offer-item">
            <div class="icon-social_media icon" style="width: 64px; height: 64px;"></div>
            <h3 class="offer-item__title">social media</h3>

            <p class="offer-item__paragraph">
                Chciałbyś zaistnieć w social media?
                Zakładamy konto i pomagamy w jego prowadzeniu.
            </p>

        </div>

        <div data-aos="fade-up" class="flex-wrapper__offer-item">
            <div class="icon-allegro icon" style="width: 64px; height: 64px;"></div>
            <h3 class="offer-item__title">szablony aukcji allegro</h3>

            <p class="offer-item__paragraph">
                Szablony spełniające wymogi Allegro 2018.
                Profesjonalne, indywidualne projekty.
                Pozwól Nam zmaksymalizować Twoją sprzedaż.
            </p>

        </div>

        <div data-aos="fade-left" class="flex-wrapper__offer-item">
            <div class="icon-narzedzia icon" style="width: 64px; height: 64px;"></div>
            <h3 class="offer-item__title">Dodatkowe narzędzia web</h3>

            <p class="offer-item__paragraph">
                Indywidualnie dostosowane dla Twojego biznesu np. system z notatkami, generatory plików CSV itp.
            </p>

        </div>

    </div>

</section>

<section data-aos="fade-up" id="portfolio" class="site-section section-06">

    <h2 class="site-section__section-title">
            <span data-aos="zoom-out-right" class="section-title__number number number--corner-number">
                06
            </span>
        nasze projekty
    </h2>

    <div class="site-section__info-wrapper wrapper-02 wrapper-06">

        <article data-aos="fade-right" class="site-section__article article-02 article-06">

            <div class="site-section__image image--under"></div>
            <h1 class="article__h1 article-02 article-06">
                <span class="article__number number">06</span> odkryj nasze
                <span class="distinction-color">portfolio</span>
            </h1>

            <div class="article__cta">
                <p class="article__paragraph link">jesteś zainteresowany współpracą?</p>
                <button class="article__btn btn btn--primary kontakt">skontaktuj się</button>
            </div>

        </article>

        <aside data-aos="fade-left" class="site-section__aside aside-06">

            <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->

                    <div id="1" class="swiper-slide"
                         style="background-image:url(./images/jmmeble.png)">
                        <div class="project-desc">
                            <h3 class="subtitle" data-swiper-parallax="-200"><a style="color:#fff" href="http://jmmeble.pl/kontakt">jmmeble</a></h3>
                            <div class="text" data-swiper-parallax="-100">
                                <p>Strona produktowa marki meblowej</p>
                            </div>
                        </div>
                    </div>

                    <div id="2" class="swiper-slide"
                         style="background-image:url(./images/bike-for-man.png)">
                        <div class="project-desc title">
                            <h3 class="subtitle" data-swiper-parallax="-200">bike for man</h3>
                            <div class="text" data-swiper-parallax="-100">
                                <p>Strona produktowa marki rowerowej (koncept)</p>
                            </div>
                        </div>
                    </div>

                    <div id="3" class="swiper-slide"
                         style="background-image:url(https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss056e162821.jpg)">
                        <div class="project-desc title">
                            <h3 class="subtitle" data-swiper-parallax="-200">Subtitle</h3>
                            <div class="text" data-swiper-parallax="-100">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Opis projektu tutaj</p>
                            </div>
                        </div>
                    </div>
                    ...
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

            </div>
        </aside>

    </div>

    <div id="fullscreen-swiper-backdrop"></div>
    <div id="fullscreen-swiper"></div>

</section>

<section id="kontakt" class="site-section section-07">

    <div data-aos="zoom-in">

        <h2 class="site-section__section-title article">
                <span data-aos="zoom-out-right" class="article__number number number--corner-number">
                    07
                </span>
            skontaktuj się
        </h2>

        <div class="site-section__info-wrapper">

            <article data-aos="fade-right" class="site-section__article article-07">

                <div class="contact">
                    <h2 class="contact__title">kontakt</h2>

                    <h3 class="contact__subtitle">e-mail</h3>
                    <p class="contact__info">terraweb@mail.pl</p>
                    <p class="contact__info">terraweb2@mail.pl</p>

                    <h3 class="contact__subtitle">telefon</h3>
                    <p class="contact__info">+48 111 111 111</p>
                    <p class="contact__info">+48 222 222 222</p>
                </div>

            </article>

            <aside data-aos="fade-left" class="site-section__aside aside-07">

                <form autocomplete="off" class="contact-form" method="post" action="#kontakt">
                    <label for="input-name">Podaj swoje imię</label>
                    <input name='name' autocomplete="nope" type="text"
                           id="input-name" <?= $sName ? "value='$sName'" : "" ?> required/>

                    <label for="input-number">Twój numer kontaktowy</label>
                    <input name='phone' autocomplete="nope" type="tel"
                           id="input-number" <?= $sNumber ? "value='$sNumber'" : "" ?>/>

                    <label for="input-email">Podaj swój e-mail</label>
                    <input name='email' type="email" id="input-email" required <?= $sEmail ? "value='$sEmail'" : "" ?> required/>

                    <label for="textarea-1">Napisz co Cię interesuję</label> 
                    <textarea name='message' autocomplete="nope" id="textarea-1"
                              required><?= $sMessage ? $sMessage : "" ?></textarea>

                    <button type="submit" id="send" class="button article__btn btn btn--secondary large fl-toggle">
                        wyślij wiadomość
                    </button>

                    <?php if (isset($bErrorName)) : ?>
                        <?php if ($bErrorName) : ?>
                            <?php foreach ($aMessageReturn as $sMessage) : ?>
                                <p><?= $sMessage ?></p>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    <?php endif; ?>

                    <?php if (isset($_GET['send'])): ?>
                        <p>Wiadomość poprawnie wysłana</p>
                    <?php endif; ?>
                </form>


            </aside>

        </div>
    </div>


</section>

<script src="js/vendor/smooth-scroll.js"></script>
<script src="js/vendor/aos.js"></script>
<script src="js/vendor/swiper.min.js"></script>
<script src="js/vendor/float-labels.js"></script>
<script src="js/app.js"></script>

<script>
    var floatlabels = new FloatLabels('form', {
        customEvent: null,
        customLabel: null,
        customPlaceholder: null,
        exclude: '.no-label',
        inputRegex: /email|number|password|search|tel|text|url/,
        prefix: 'fl-',
        prioritize: 'label',
        requiredClass: 'required',
        style: 1,
        transform: 'input, select, textarea',
    });

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

    AOS.init();

</script>

</body>

</html>