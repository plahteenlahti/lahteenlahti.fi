---
title: "Kultainen leikkaus mallina esteettisestä kokemuksesta käyttöliittymäsuunnittelussa"
date: "2020-12-18"
tags: ["Design", "Cognitive Science", "Kultainen leikkaus"]
lang: "fi"
---

### 1. Johdanto

Teemme päivittäin päätöksiä esteettisten preferenssiemme johdattelemina (Palmer, 2013). Päädymme esimerkiksi ostamaan kotiimme taideteoksia niiden synnyttämien esteettisten kokemusten pohjalta, emme siksi, että ne tuottaisivat meille hyötyä jollakin muulla tavalla. Esteettisyyden vaikutus tiedonkäsittelyymme ja päätöksentekoomme on vahvaa ja monimuotoista, josta hyvänä esimerkkinä on useiden kuluttajatuotteiden muotoilu. Esteettisesti miellyttävät tuotteet myyvät paremmin kuin vastaavat tuotteet paremmilla ominaisuuksilla (Tractinsky, 1997; Creusen, 2005). Arvostamme myös muita ominaisuuksia esteettisyyden pohjalta. Koemme esimerkiksi käyttöliittymät käytettävyydeltään paremmiksi niiden ollessa ulkonäöltään miellyttäviä (Sonderegger, 2010; Tractinsky, 1997). Tämän esteettisen kokemuksen ja visuaalisen esteettisyyden tekijöiden tarkastelu on tämän tutkielman tarkastelun kohde. Tutkielman aihetta on rajattu keskittymällä tunnetuimpaan visuaalisen esteettisyyden malliin: kultaiseen leikkaukseen ja sen hyödyntämiseen digitaalisten käyttöliittymien suunnittelussa.

Käyttöliittymät kuuluvat vahvasti ihmisen ja tietokoneen välisen vuorovaikutuksen tutkimukseen. Usein tarkastelun kohteena ovat käyttöliittymien tehokkuudesta vastuussa olevat tekijät kuten virheet, ymmärrettävyys, oppiminen, ja ajallinen suoriutuminen (Michailidou, 2008; Tractinsky, 2003). Pelkkään käytettävyyteen ja tehokkuuden tarkasteluun painottunut käyttöliittymätutkimus on kuitenkin vuosien aikana tehnyt tilaa myös käyttöliittymien esteettisten ominaisuuksien tutkimiselle. Tarkastelun kohteena on kuitenkin usein ollut esteettisyyden vaikutus muihin käyttöliittymän arvioinnin mittareihin. Käyttöliittymien esteettisyyttä määrittävien tekijöiden tarkastelu on jäänyt vähäiseksi (Tractinsky, 2003). Tutkimukset esimerkiksi siitä, miten visuaalisesti miellyttävät käyttöliittymät tarjoavat subjektiivisesti paremman käytettävyyden, konkretisoivat vahvasti esillä ollutta lähestymistapaa (Michailidou, 2008). Vaikka kyseisen kaltaiset tutkimukset argumentoivat vahvasti esteettisen kokemuksen tärkeydestä ihmisen tiedonkäsittelyssä, eivät tutkimukset esteettisyyden tekijöistä ole ainakaan toistaiseksi saavuttaneet suurta mielenkiintoa tutkijoiden parissa (Palmer, 2013). Syynä tähän on esteettisyyden vaikea operationalisointi ja vahva subjektiivisuus – selkeiden esteettisyyden mittareiden määrittäminen ei ole toistaiseksi onnistunut eikä saatujen tutkimustulosten yleistettävyys ole korkea. Tämän lisäksi käyttöliittymien esteettisyyttä arvioivissa tutkimuksissa esteettisyydestä vastuussa olevat menetelmät määritellään usein _ad hoc_, pohjautuen usein vain kevyesti aikaisempiin esteettisyyden teorioihin (Karvonen, 2000).

Tässä tutkielmassa tarkastellaan tutkimuksia, jotka pureutuvat tähän esteettisen kokemuksen tutkimukseen, sivuten estetiikan tutkimisen ja saatujen tulosten soveltamisen haasteita. Aluksi tarkastellaan estetiikkaa ja esteettisen kokemuksen määritelmää, joita on tutkittu erityisesti filosofiassa. Tämän jälkeen tutkielmassa esitellään kultaisen leikkauksen malli ja sitä koskeva tutkimusta. Tutkielmassa tarkastellaan esteettisyyttä vain visuaalisen estetiikan näkökulmasta, rajaten tarkastelun komposition eli asettelun vaikutukseen. Kultaisen leikkauksen yksinkertaisuus ja sovellettavuus käyttöliittymien elementtien suhteiden ja sijoittelun arviointiin tekevät siitä tutkielman kannalta aiheellisen. Myös pitkä historia esimerkiksi taiteessa ja varhain tehdyt tutkimukset tekevät kultaisesta leikkauksesta tarkastelun arvoisen esteettisen kokemuksen mallin. Lopuksi tutkielmassa käsitellään kultaista leikkausta käyttöliittymien esteettisten kokemusten mallien kautta.

### 2. Estetiikkatiede ja esteettisen kokemuksen määritelmä

Esteettisen preferenssin tutkimus on yksi psykologian vanhimpia tutkimuskohteita, jonka pioneerina voidaan nähdä Gustav Fechner (Philips, 2010). Tämän 1800-luvun loppupuolella toteuttamia esteettisyyden kokeita pidetään myös ensimmäisinä kokeellisen psykologian tutkimuksissa. Fechnerin jälkeen esteettinen kokemuksen ja estetiikan tutkimus psykologiassa ovat kuitenkin vähentynyt huomattavasti (Palmer, 2013). Ennen Fechnerin kokeellisia tutkimuksia on estetiikka ollut tutkimuksen kohteena filosofiassa, jossa se määritelmän mukaan on ”tutkimusta ihmisen mielen ja tunteiden suhteesta kauneuden aistimiseen” (Liu, 2003; Palmer 2013). Vaikka estetiikka määritellään yleisesti kauneusarvoja tutkivaksi filosofian osa-alueeksi, on koetun kauneuden tutkimukseen vahvasti liitetty taide ja ihmisen sekä taiteen suhde toisiinsa (Palmer, 2012). Tällainen rajaus asettaa monia ongelmia tarkasteltaessa esteettistä kokemusta kontekstissa, jossa esteettisen kokemuksen lähteinä eivät ole yksiselitteisesti taiteeksi määriteltävät ärsykkeet. Toinen ongelma on kauneuden määritteleminen. Palmer huomauttaa estetiikan määritelmien nojautuvan abstraktiin ”kauneuden aistiminen”-käsitteen ymmärtämiseen. Estetiikasta tulee tällöin ei-mitattaviin kvalioihin pohjautuvaa ja täten huonosti operationalisoitavaa.

Osittain tästä epämääräisestä määritelmästä johtuen on esteettisyyden tutkimuksessa merkittäviä eroja eri tieteenalojen välillä. Viime aikoina, johtuen sekä tästä eri tieteiden välisestä ristiriidasta että kokeellisten menetelmien osittaisesta poissulkemisesta, on estetiikkaa pyritty määrittelemään uudelleen psykologisessa tutkimuksessa. Tämä on tapahtunut osana uuden _”poikkitieteellisen estetiikkatieteen”_ syntymistä (Shimamura, 2012; Palmer, 2013). Shimamuran ja Palmerin perusteet estetiikkatieteelle määritellään vuonna 2013 julkaistussa teoksessa, joka kokoaa yhteen estetiikan, neurotieteen sekä psykologian harjoittajia pyrkien yhdistämään kyseisten tieteiden löydökset estetiikasta. Pyrkimys on erityisesti aikaisempaa syvempään estetiikan ymmärryksen luomisessa.

Uusi aikaisempaa kattavampi määritelmä esteettisyydelle ja estetiikalle saadaankin estetiikkatieteen kautta. Shimamuran mukaan termi kuuluisi laajentaa käsittämään kaikki ”hedoniset reaktiot” sensorisiin kokemuksiin samalla katkaisten kytkökset taiteeseen (Shimamura, 2012). Hedonisella reaktiolla tarkoitetaan tässä määritelmässä yksilön preferensseistä syntyvää päätöstä esteettisyydestä; esineestä pidetään tai ei pidetä. Tällainen hyvin lavea määritelmä mahdollistaa estetiikan tutkimuskysymysten laajentamisen menetelmiltään aikaisempaa laajemmiksi. Tässä tutkielmassa estetiikka ja esteettisyyttä käsitelläänkin jatkossa juuri Shimamuran ja Palmerin estetiikkatieteen määritelmien mukaisina. Estetiikkatieteen mahdollistaessa estetiikan laajentamisen aikaisempaa useampiin kohteisiin kuten esimerkiksi käyttöliittymiin (Shimamura, 2012; Weed, 2013)

### 3. Visuaalisen esteettisyyden teoriat

Visuaalista havaitsemista voidaan sekä neuraalisen että kognitiivisen lähestymisen kannalta tarkastella yhdistelmänä ylhäältä alaspäin (top-down) ja alhaalta ylöspäin (bottom-up) eteneviä tiedonkäsittelyn prosesseja (Shimamura, 2012; Liu, 2003). Alhaalta ylöspäin etenevissä prosesseissa alemman tason tiedonkäsittely jatkuu matalan tason havaitsemisesta vastaavilta aivoalueilta kohti korkeamman tason aivoalueita, jotka vastaavat aistien prosessoinnista. Erityisesti estetiikan tutkimuksessa Fechnerin kokeet preferensseistä perusmuotojen ja värien suhteen voidaan nähdä alhaalta ylöspäin eteneviin prosesseihin painottuvina. Fechnerin toiveissa olikin muodostaa ymmärrys muodon visuaalisen ominaisuuksien suhteesta esteettiseen kokemukseen (Philips, 2010; Shimamura, 2012; Liu, 2003).

Kritiikkinä esteettisyyden alhaalta ylöspäin etenevälle prosessoinnille on esitetty, että esteettinen responssi kompleksiseen esineeseen, kuten taiteeseen, ei ole vain osiensa summa (Liu, 2003). Vastakkaisessa näkemyksessä, ylhäältä alaspäin etenevässä prosessoinnissa korkeamman tason tiedonkäsittelyprosessit ja esimerkiksi muisti vaikuttavat alemman tason tiedonkäsittelyyn. Esimerkkinä tästä on esineiden tunnistaminen aikaisemman tiedon pohjalta. Siinä missä Fechner voidaan nähdä esimerkkinä altaalta ylöspäin etenevien prosessien kannattajasta, voidaan 1900-luvun alun Gestalt-psykologia nähdä ylhäältä alaspäin näkemystä kannattavana vaihtoehtona (Shimamura, 2012). Kolmen kyseistä suuntausta edustaneen saksalaisen psykologin, Max Wertheimerin, Kurt Koffkan ja Wolfgang Köhlerin, mukaan visuaalista havaintoa ei voitu ymmärtää pelkällä atomistisella lähestymisellä, vaan holistinen ymmärrys elementtien järjestyksestä oli edellytys visuaalisen havainnon rakentamiseksi.

Esteettisen kokemuksen ei voida sanoa koostuvan pääsääntöisesti yhdestäkään yksittäisestä tekijästä eikä ole mahdollista rajata sen prosessointia selkeästi pelkästään alhaalta ylöspäin tai ylhäältä alaspäin tapahtuvaksi prosessoinniksi (Liu, 2003). Lista erilaisista esteettisyyden kokemuksen syntyä kuvaavista teorioista on laaja, kattaen esimerkiksi evoluutiopsykologisia näkemyksiä että ekologisia ja sosiologisia määrittelyjä (Liu, 2003). Tämän tutkielman viitekehyksessä esteettisen kokemuksen syntymistä tarkastellaan kuitenkin pääsääntöisesti alhaalta ylöspäin etenevänä prosessina.

### 4. Kultainen leikkaus

Kultainen leikkaus (myös kultainen suhde) on yksi vanhimpia matemaattisia malleja (Konechi, 2003). Se on historian aikana ollut esillä useissa eri tieteenaloissa ja sitä pidetään edelleen myös yhtenä esteettisesti miellyttävimmistä suhteista tuottaa asetelmia esimerkiksi valokuvissa (Konechi, 2003; Svobodova, 2014; Boselie, 1992). Mallia on myös sovellettu mallina esteettisestä ihanteesta käyttöliittymien suunnittelussa (Lee, 2015).

Kultainen leikkaus on yksinkertainen yhtälö, jonka avulla voidaan määritellä kahden luvun suhde. Esimerkiksi janan tapauksessa kultainen leikkaus saadaan, kun jaetaan jana kahteen osaan niin, että lyhyemmän osan suhde pidempään osaan on sama kuin pidemmän osion suhde koko tarkasteltavaan janaan. Malli voidaan havainnollistaa seuraavalla kaavalla.

_Tarkasteltavan janan pituuden ollessa 1 ja sen pidemmän jako-osan ollessa x, niin lyhyempi jako-osa on tällöin 1-x ja x on toteutettava yhtälö ${1 \over x} = {1 - x \over x}$_

_Tällöin $x^{2} + x -1 = 0$_

_Tämän toisen asteen yhtälön positiivinen ratkaisu on:_

$$
x = {1 \over 2} = (1 + \sqrt{5}))
$$

_Tiivistetysti kaava voidaan esittää seuraavasti:_

$$
{1 \over x} = {1 \over 2} (1 + \sqrt{5}) \approx 1,618
$$

Kultainen leikkaus lähestyy siis suhdelukua 1:1,618. Huomioitavan arvoista on, että kyseinen suhde on hyvin lähellä suhdetta 1:1,5, jota myös hyödynnetään hyvin usein juuri esimerkiksi valokuvien kompositiossa (Svobodova, 2014; Boselie, 1984; Boselie, 1992). Boselien tutkimuksen mukaan tätä suhdetta preferoidaan yhtä paljon kuin kultaista leikkausta (Boselie, 1992).

Kultainen leikkaus on laajennettavissa janojen lisäksi muihinkin muotoihin. Niin sanotun kultaisen suorakulmion sivujen pituudet ovat suhteessa toisiinsa kultaisen leikkauksen kautta. Kuten kultaisella leikkauksella, on myös kultaisella suorakulmiolla uskottu olevan vahvoja yhteyksiä esteettisyyteen (McManus, 1997). Käytännössä katsoen kultaista leikkausta on löydetty tai on löydettävissä lähes mistä tahansa taiteen ja rakentamisen kontekstista (Green, 1995). Esimerkiksi Leonardo da Vincin Mona Lisan on väitetty seuraavan kultaista leikkausta kuten myös antiikin kreikkalaisten rakentaman Parthenonin (Boselie, 1992). On kuitenkin kyseenalaista, kuinka oikeellisia nämä väitökset ovat (Boselie, 1992; Di Dio 2007; Green, 1995; Konechi, 2003).

#### 4.1 Miten kultaista leikkausta on tutkittu

Runsas esiintyminen monissa eri yhteyksissä on syy miksi kultaista leikkausta on tutkittu runsaasti (Boselie, 1992). Tutkimukset voidaan karkeasti jaotella kahteen kategoriaan: geometrisia kuvioita arviointiin perustuviin preferenssitutkimuksiin ja tutkimuksiin, joissa kultainen leikkausta arvioidaan kuvissa tai taideteoksissa (Green, 1995). Useimmat tutkimuksista ovat tarkastelleet pääsääntöisesti eri suhteilla varustettuja geometrisia muotoja: kolmioita, suorakulmioita ja janoja. Näissä tapauksissa validiteetti on korkeampi ja esteettisen kokemuksen voidaan vahvemmin argumentoida johtuvan muotojen mittasuhteista. Se, voidaanko näistä alemman tason muotojen preferensseistä tehdä yleistyksiä korkeamman tason esityksiin, kuten esimerkiksi taideteoksiin, on kuitenkin kyseenalaista (Stieger, 2015). Menetelmällisesti tutkimukset ovat rajautuneet miellyttävimmän hahmon valitsemiseen (kumpi muodoista on miellyttävämpi), hahmon tuottamiseen (jaa jana ’kauniisti’).

Kultaisen leikkauksen tutkiminen on kulkenut rytmillä, jossa jokaista kultaisen leikkauksen esteettisyyden kumoavaa tutkimusta kohden on saatu kourallinen uusia tutkimuksia, jotka ovat kyseenalaistaneet menetelmiä tai kritisoineet tutkimusten tapaa esittää tulokset kumoamista suosien (Green, 1995). Sama ilmiö on toistunut myös toiseen suuntaan ja kultaisen leikkauksen historia sisältääkin monia”julistavia” tutkimuksia, jotka ovat pyrkineet kumomaan kaiken siihen aikaisemman tutkimuksen (Boselie, 1992). Historian saatossa myös monet tutkimukset on voitu kumota jo pelkästään huonon dokumentoinnin ja melko epätarkkojen menetelmien valossa. Esimerkiksi Fechnerin tutkimusten tuloksista on löydettävissä lähes yhtä monta eri tulkintaa kuin on viittauksiakin (Green, 1995). Kultaisen leikkauksen kritiikki onkin pitkälti rakentunut juuri näihin henkilökohtaisiin tulkintoihin tuloksista ja menetelmistä aitojen tulosten vertailun sijaan. (Green, 1995).

Laajimman selvityksen kultaista leikkausta tarkastelevista psykologian tutkimuksista on suorittanut Green, joka on käynyt lävitse kultaista leikkausta koskevat tutkimukset vuosilta 1865–1995 (Green, 1995). Green toteaa listatuissa tutkimuksissa esitettyjen tuloksien olevan niin herkkiä, että potentiaalisesti merkittävän psykologisen tekijän olemassaoloa ei voisi näillä todeta. Green myös jatkaa:

_”On the other hand, one might argue that there has been something of a concerted effort among some psychologists to show that there is nothing to the alleged effects of the golden section; that the unreliability of the effects is due to research practices geared to show it to be a fraud, rather than to an inherent weakness in the effect.”_

Greenin mukaan useissa listatuista tutkimuksista ilmenee selkeää halua kumota tämä _”numerologinen fantasia”_ ja näissä tutkimuksissa ilmenee selkeää huolimattomuutta. Tavoitteena ei kuitenkaan ole ollut objektiivisesti todistaa ilmiön olemattomuutta. Tämä ei kuitenkaan todista myöskään kultaisen leikkauksen puolesta.

Tutkimuksissa, joissa kultaiselle leikkaukselle löytyy todistetusti preferenssiä, on tulos useimmiten keskiarvoinen: valitun joukon preferenssi konvergoituu kohti kultaista leikkausta ja preferenssien hajonta voi olla hyvinkin suurta (Green, 1995). Selkeää yksilöllistä preferenssiä kultaiselle leikkaukselle löytyy vain muutamasta kokeesta. Tulosten vertailua vaikeuttavat se, että kokeissa joissa kultainen leikkaus on keskiarvoisesti korkein, on useimmiten jätetty ilmoittamatta moodi tai esiintymistiheys. Green toteaa lopuksi kultaisen leikkauksen olevan potentiaalisesti todellinen ilmiö, joka on kuitenkin myös hyvin herkällä pohjalla. Sitä, onko kultaisen leikkauksen preferenssi opittua vai sisäistä, on vaikeaa sanoa. Vaikkakin kultainen leikkaus esiintyy pääsääntöisesti länsimaisessa kulttuurissa, on todisteita ilmiön esiintymisestä myös muissa kulttuureissa (Konecni, 2005; Green, 1995). Lopuksi Green toteaa, että menetelmät, joita on sovellettu kultaisen leikkauksen ja esteettisen kokemuksen yhteyden tutkimukseen, ovat liian karkeita skeptikkojen tai ilmiöön uskovien väitteiden kumoamiseksi, eikä ilmiötä voida kumota tai todistaa pelkän ulkoisen toiminnan tarkastelulla.

#### 4.1.1 Konecnin tutkimukset taiteilijoilla

Nykypäiväisistä empiirisesti kultaista leikkausta tutkivista tutkimuksista laajin koeasetelma esiintyy Konecnin vuoden 1997 tutkimuksissa (Konecni, 1997). Kolmen erillisen koeasetelman koostuvassa tutkimuksessa Fechnerin aikaisemmin kehittämiä esteettisyyden menetelmiä. Ensimmäisessä tutkimuksessa sovellettiin aikaisemminkin kultaisen leikkauksen tutkimisessa käytettyjä menetelmiä (kuten suorakulmioiden tuottaminen, linjan jakaminen kahtia) sekä uusiin menetelmiin (kuten kultaisella leikkauksella ja ilman toteutettujen maljakoiden arviointi) pohjautuvia. Tutkimuksen otoskoko oli 260 opiskelijaa. Aikaisempiin menetelmiin pohjautuneissa tutkimuksissa ei löydetty todisteita kultaisen leikkauksen yhteydestä kauneuteen. Myöskään maljakoiden arvioinnissa ei löytynyt selkeää mieltymystä kultaisella leikkauksella toteutettuja kohtaan. Toisessa Konecnin 2003 suorittamassa tutkimuksessa testattiin kultaisen leikkauksen esiintymistä ammattitaiteilijoiden toteuttamissa kuvituksissa (Konecni, 2003). Taiteilijoiden tehtävänä oli toteuttaa kuvituksia heille esitetyistä esineistä ja maalauksista, joissa kultainen leikkaus ilmeni selkeästi. Saadut tulokset todistavat kultaisen leikkauksen puolesta. Tuotettujen kuvitusten suhteellinen tarkkuus kriteereinä olleiden mittasuhteiden kopioimisessa oli korkea ja kultainen leikkaus esiintyi useimmissa hyvin tarkasti. Tutkimuksen kritiikki kohdistuukin siihen, ettei kyseinen koeasetelma todista kultaisen leikkauksen olevan miellyttävämpi.

Konecnin tutkimusten tulokset on otettava varauksella ja Konecni itsekin toteaa kultaisen leikkauksen olemassaolon olevan hienovarainen mutta häilyvä. Huomioitavaa on, että yhdessäkään tutkimuksista ei saatu merkittävää näyttöä kultaisen leikkauksen suhteesta esteettiseen kokemukseen (Konecni, 1997; Konecni, 2003). Positiivisia tuloksia tuottaneiden kokeiden tulokset viestivätkin ennemmin kultaisen leikkauksen esiintymisestä taiteessa kuin siitä, että kultainen leikkaus olisi poikkeuksellisen miellyttävä. Aikaisemmin mainittu Greenin johtopäätös menetelmien karkeudesta pätee tässäkin; kultaisen leikkauksen mahdollinen olemassaolo on luultavimmin mahdotonta todentaa pelkästään tutkaillen ulkoista toimintaa.

#### 4.1.2 Assioaatiotutkimukset

Konecnin vuoden 2006 tutkimuksen jälkeenkin on kultaista leikkausta tutkittu (Stieger, 2015). Stiegerin vuoden 2015 tutkimuksessa kultaiselle leikkaukselle ei löydetty isompaa preferenssiä kuin muille suhdeluvuille (Stieger, 2015). Stiegerin tutkimukset hyödynsivät IAT-menetelmää (Implicit Association Test), jolla on mahdollista tarkkailla implisiittisesti tapahtuvaa arviointia (Stiegler, 2015; Fiedler, 2006). IAT-tutkimuksissa koehenkilöille esitetään sarja ärsykkeitä, jotka koehenkilöiden pitää kategorisoida koehenkilön näkökulmasta oikeaan kategoriaan. Yhden ärsykkeen kategorisointiin varattu aika on niin lyhyt, että aikapaineen alla koehenkilöiden päätöksenteko on vahvasti tuttuuden, symmetrian ja yksinkertaisuuden muokkaamaa, pienentäen näin tietoisen tiedonkäsittelyn osuutta kategorisoinnissa. Stiegerin mukaan IAT-menetelmällä voidaan sivuuttaa Greenin ulkoisen tarkkailun menetelmiin kohdistunut kritiikki. Stiegerin mukaan IAT-menetelmällä voidaan tuoda paremmin esille matalan tason tiedonkäsittelyyn pohjautuva päätöksenteko.

Stiegerin tutkimukset koostuivat kolmesta erillisestä osatutkimuksesta. Jokaisessa tutkimuksessa koehenkilöille esitettiin taideteoksia, joiden keskeinen elementti oli sijoitettu joko kultaista leikkausta noudattaen teokseen (ensimmäinen ja toinen koeasetelma) tai sitten ¾ -suhteessa. Tutkimuksessa havainnointiin sekä koehenkilöiden eksplisiittistä että implisiittistä preferenssiä taideteoksiin. Tutkimusten tulokset olivat kultaisen leikkauksen kannalta huonot. Yhdessäkään tutkimuksessa ei havaittu todisteita preferenssistä kultaisesta leikkausta kohtaan implisiittisesti tai eksplisiittisesti. Kultainen leikkaus ei myöskään eronnut merkittävästi ¾-suhteesta ja monesti jopa symmetrisesti sijoitetun elementin sisältäneet teokset arvioitiin miellyttävämmäksi. Stiegerin mukaan implisiittinen preferenssi kallistuisi enemmän symmetrian puolelle lisäten kuitenkin arvostuksen kultaista leikkausta kohtaan olevan opittua esimerkiksi taiteen kautta. Stieger itse huomauttaa, että IAT-menetelmäkään ei välttämättä sovellu kultaisen leikkauksen vaikutuksen havaitsemiseen johtuen ärsykkeen, tässä tapauksessa taideteoksen, lyhyestä esittämisestä. Stieglerin mukaan IAT-menetelmässä keskeisenä tekijänä oleva ärsykkeen lyhyt esitysaika saattaa estää kultaisen leikkauksen “avautumisen” koehenkilöille. Tällöin kultainen leikkaus voitaisiin havaita vain tietoisen havaitsemisen kautta. Stiegerin tutkimuksessa ei kuitenkaan löydetty todisteita, että kultaista leikkausta preferoitaisiin pidemmällä esitysajallakaan. IAT-menetelmä on saanut osakseen myös kritiikkiä ja sen reliabiliteettia ja validiteettia on kyseenalaistettu useissa tutkimuksissa. (Fiedler, 2006; Blanton, 2007; Rezaei, 2011).

### 4.2 Kultaisen leikkauksen neuraalinen perusta

Aikaisemmin esiteltyjen tutkimusten perusteella on mahdollista, että kultainen leikkaus bottom-up–suuntainen prosessi, jolloin sen vaikutuksia on vaikeaa todentaa pelkästään ulkoista toimintaa tarkkailemalla. On mahdollista, että kyseessä on niin pieni ilmiö, ettei sen vaikutusta voida esittää suoraviivaisesti käyttäytymissä ilmeneväksi (Stiegler, 2015; Green, 1995; Konecni, 2005). Ilmiön tutkiminen on aloitettava matalimman tason tiedonkäsittelyä tarkastelemalla. Käytännössä tämä tarkoittaa kultaisen leikkauksen hermostollisten vasteiden paikantamista aivokuvantamismenetelmin.

Esteettisen kokemuksen hermostolliset vastineet ovat yksi vahvasti viime aikoina esillä ollut lisäys esteettisen kokemuksen tutkimukseen (Chatterjee, 2011; Zeki, 1999; Palmer, 2013; Ramachandran, 1999; Di Dio, 2007). Neuroestetiikkana kulkevan tieteen juuret voidaan nähdä Ramachandranin ja Zekin neurologisissa malleissa, jotka pyrkivät argumentoimaan neuraalisen perustan kriittisyydestä esteettisen kokemuksen ymmärtämisessä (Zeki, 1999; Ramachandran, 1999;). Erityisesti Zeki argumentoi vahvasti neuraalisten mekanismien tärkeydestä estetiikan teorioiden suhteen, todeten teorioiden jäävän keskeneräisiksi ilman kantaa neuraalisesta pohjasta (Zeki, 1999). Esteettisyyden on ihmisen tiedonkäsittelyn tuloksena rakennuttava sitä tuottavan järjestelmän eli aivojen säännöstön varaan. Palmerin kuitenkin kyseenalaistaa tämän hermostollisten vastineiden etsimisen järkevyyden. Palmerin mukaan esteettisyyden kokemuksen aiheuttavan aktivaation paikantaminen vaatii ensin kyseisen toiminnan ilmenemisen paikantamista käyttäytymisestä ja tämän jälkeen näiden kahden riippuvuuden osoittamisen. Jos esteettisyyden kokemukselle ei voida löytää käyttäytymisen mittareita ei myöskään korrelaatiota voida osoittaa.

Kultaisen leikkausta on tutkittu ainakin yhdessä neuroestetiikan tutkimuksessa. Di Dio hyödynsi fMRI:tä taiteen vaikutusten tutkimiseen aivojen aktivaatioon (Di Dio, 2007). Koeasetelmassa koehenkilöille esitettiin antiikin kreikan sekä renessanssin ajan veistoksia, joiden alkuperäisiä mittasuhteita oli muutettu kultaista leikkausta noudattaviksi. Koeasetelmassa arvioitiin koehenkilöiden (n = 14) subjektiivista ja objektiivista esteettisyyden kokemusta. Tutkimuksessa saatiin näyttöä objektiivisesta esteettisyydestä, eli tiettyjen piirteiden voitiin sanovat spesifisti aktivoivan aivojen alueita jotka vastasivat esteettisyyden kokemisesta. Vastaavasti kultaisen leikkauksen ei havaittu aiheuttavan näiden alueiden aktivaatiota (Di Dio, 2007).

### 5. Kultainen leikkaus käyttöliittymäsuunnittelussa

Yksinkertaisuudestaan johtuen voidaan kultaista leikkausta soveltaa useisiin eri muotoihin ja kohteisiin. Esiintyminen arkkitehtuurissa, taiteessa, tuotteissa sekä hieman näkökulmasta riippuen myös luonnossa vahvistavat tätä väitettä. Huomioitavaa on, että esiintyminen näissä tapauksissa on usein kuitenkin ollut keinotekoista: useimmat taiteilijat ovat tietoisesti sisällyttäneet kultaisen leikkauksen teoksiinsa usein juurikin maksimaalista esteettistä kokemusta tavoitellen eikä todisteita kultaista leikkausta luonnollisesti mukailevista tuotoksista pystytä toistaiseksi varmentamaan (Green, 1995; Stieger, 2015). Koska preferenssi kultaista leikkausta kohtaan voi olla myös opittu, monimutkaistuu ongelma entisestään (Green, 1995).

Vaikka tulokset kultaisen leikkauksen esteettisyydestä ovatkin ristiriitaisia, voidaan sitä ehdotetusti käyttää ainakin alkupään suunnittelumallina teollisessa muotoilussa (Bloch, 1995). Suunnittelumalleja on jo pitkään käytetty viestimään todistettua tietämystä käyttöliittymien suunnittelussa ja avustamaan suunnittelijoita käyttöliittymien suunnittelussa (Van Welie, 2001). Mallien avulla suunnittelijoiden on mahdollista välttää käyttöliittymien suunnittelussa ilmenevät ongelmat sekä tehdä oikeita päätöksiä käyttöliittymien suhteen. Edellytyksenä oleva todistettavuus on kultaisen leikkauksen puute, mikä aiheuttaa hankaluuksia kultaisen leikkauksen omaksumisessa suunnittelumalliksi (Van Welie, 2001). Selkeä näyttö kultaisen leikkauksen vaikutuksen esteettisyyden mittarina puuttuu ja vaatii lisäselvitystä. Jotta kultaisen leikkauksen soveltuvuus käyttöliittymiin voitaisiin todeta, vaadittaisiin kokeellisia tutkimuksia, joissa kultaista leikkausta sovellettaisiin juurikin tässä kontekstissa.

#### 5.1. Käyttöliittymien esteettisyyden taustatekijät

Käyttöliittymien esteettisyys vaikuttaa siihen miten käyttäjät ovat vuorovaikutuksessa sen kanssa (Miniukovich, 2015). Käyttöliittymäsuunnittelijat pyrkivätkin rakentamaan visuaalisesti esteettisen kokonaisuuden, joka implisiittisesti auttaa käyttäjää navigoimaan haluamaansa osaan käyttöliittymään ja ymmärtämään tälle mahdolliset toiminnot. Esteettisyys on tärkeä tekijä myös lähestyttävyyden kannalta ja epämiellyttävänä koettu käyttöliittymä nostaakin käyttäjän kynnystä vuorovaikutukseen (Faraday 2009). Tämän lisäksi myös kulttuuriset seikat vaikuttavat merkittävästi käyttöliittymän esteettisyyteen ja itämaisissa kulttuureissa pohjoismaalaisen minimalistinen käyttöliittymä voidaan nähdä halpana ja rumana (Karvonen 2000, Reinecke 2013).

Käyttöliittymien esteettisyydelle on esitetty useita mittareita kuten: visuaalinen epäjärjestys, väriskaala, päävärien määrä, kuvio/tausta-kontrasti, symmetria, tasapaino, järjestys, yhteenkuuluvuus, mittasuhde ja yksinkertaisuus (Miniukovich, 2015). Useissa tapauksissa mittarit ovat peräisin ihmisen ja tietokoneen vuorovaikutuksen tai psykologian kompleksisuutta ja epämiellyttävyyttä tarkastelleista tutkimuksista. Näiden mittareiden lisäksi käyttöliittymien esteettisyyttä voidaan tarkastella myös ajallisesti (Miniukovich, 2015). Tutkimuksia esimerkiksi käyttöliittymien esteettisyyden ensivaikutelman yhteydestä koettuun kokonaisesteettisyyteen on löytänyt Tractinsky et al. (Tractinsky, 2006). Tulosten mukaan puolen sekunnin ensivaikutelma esteettisyydestä korreloi vahvasti myös 10 sekunnin aikana saadun ensivaikutelman kanssa.

Käyttöliittymien suunnittelu on monimutkainen, kallis ja aikaavievä prosessi (Sears, 1995; Cross, 2004). Suunnittelun aikana voidaan kohdata useita ongelmia, joihin taas on johdettavissa useita ratkaisuja. Monesti kohdattuihin ongelmiin on useimmiten löydettävissä valmiita ratkaisumalleja, joiden käyttö kuitenkin vaatii melko suuren määrän tietämystä. Laajan ongelma-avaruuden ja ratkaisujen läpikäyminen manuaalisesti ei myöskään ole mahdollista saati järkevää (Poltrock, 1994). Ratkaisuna tähän voidaan nähdä laskennallinen optimointi, joka pohjautuu tutkimuksista saatujen mallien soveltamiseen ongelmien ratkaisussa. Yksi mahdollinen tapa ratkaista suunnittelun ongelma on siis muuttaa kyseinen ongelma parametrilistaksi, jota matemaattiseen malliin pohjautuva optimoija käy lävitse matemaattisen mallin avulla ja generoi näistä saatujen tuloksien avulla erilaisia käyttöliittymäehdotuksia.

#### 5.2 Ngo et al. kehittämä käyttöliittymien visuaalisen esteettisyyden malli

Käyttöliittymien elementtien sijoittelun esteettisyyttä arvioivista malleista yksi merkittävimpiä on Ngo et al. kehittämä, jonka esteettisyyden mittarit ovat samoja kuin taiteessa käytetyt (Ngo, 2003). Malli koostuu neljästätoista mittarista, jotka voivat saada arvoja nollan (huono) ja yhden välillä (hyvä). Yksi mittareista on mittasuhde, joka arvioi sitä kuinka kaukana arvioitava elementti on esteettisenä pidetystä elementistä, kuten neliöstä tai kultaisesta suorakulmiosta. Ngo et al. kehittämä malli onkin ainoa laskennalliseen esteettisyyden malli, jossa kultainen leikkaus esiintyy esteettisyyden mittarina vaikkakin vain yhdellä tavalla soveltaa kultaista leikkausta. On huomioitava, että Ngo et al. mallissa kultainen leikkaus on osa yksi viidestä eri mittasuhteesta joita kohti malli pyrkii optimoimaan, ja syitä sen sisällyttämiseksi ei ole mallissa esitelty.

Ngo et al. kehittämän mallia testattiin koeasetelmassa, johon osallistui 79 opiskelijaa. Opiskelijoille ei ollut aikaisempaa kokemusta käyttöliittymien esteettisyyden suunnittelun käsitteistä. Kokeessa koehenkilöille näytettiin viisi eri arvioitavaa käyttöliittymää 20 sekunnin ajan. Koehenkilöt arvioivat käyttöliittymän esteettisyyden asteikolla low-medium-high. Koeasetelman perusteella saatiin heikkoa näyttöä esteettisyyden positiivisesta vaikutuksesta käyttöliittymän käytettävyyteen. Kultaista leikkausta osuutta ei erikseen mainita koeasetelman tuloksissa, mutta koeasetelmassa mittasuhteilla ei havaittu merkitseviä vaikutuksia esteettisyyten.

### 7. Pohdinta

Tämä tutkielma on esitellyt läpileikkauksen kultaista leikkausta käsittelevistä tutkimuksista ja pyrkinyt muodostamaan holistisen kuvan kultaiseen leikkaukseen ja sen synnyttämän esteettisen kokemukseen ajan saatossa kohdistuneesta tutkimuksen laadusta ja menetelmistä. Tässä tutkielmassa esitettyjen tutkimusten perusteella kultainen leikkauksen ei voida sanoa olevan luotettava mittari esteettisestä kokemuksesta. Ilmiönä kultainen leikkausta on tutkittu historian saatossa useasti ja useilla eri menetelmillä. Vahvinta näyttöä ilmiöstä esiintyy vanhemmissa tutkimuksissa, joissa monissa hyödynnetään havaintopsykologian menetelmiä. Nykypäivän menetelmien ja esimerkiksi aivokuvantamisen avulla kultaisen leikkauksen esteettisyyttä ei ole kuitenkaan pystytty ilmiönä todistamaan.

Huolimatta vajaasta tutkimuksellisesta näytöstä tai ehkä siitä osittain johtuen näyttää kultainen saavan vielä nykypäivänäkin paljon huomiota osakseen. Tutkielmassa aikaisemmin käsitelty esteettisyyden hermostollisen perustan tutkiminen tulee todennäköisesti olemaan ainoa keino, jolla kultainen leikkaus voidaan ilmiönä joko todentaa tai kumota.

Esitetyn tutkimuksen valossa nn kyseenalaista onko kultaisen leikkauksen käyttäminen esteettisyyden mallina esimerkiksi käyttöliittymäsuunnittelussa tarkoituksenmukaista. Koska tutkimusten perusteella kultainen leikkaus ei ole muista mittasuhteista merkittävistä poikkea mittasuhde, ei sen vaikutus käyttöliittymän esteettisyyteenkään todennäköisesti ole merkittävä. Kultaista leikkausta käyttöliittymäsuunnittelussa käsitteleviä tutkimuksia ja kultaista leikkausta hyödyntäviä malleja löytyy myös melko vähän.

### 8. Lähteet

Blanton, H., Jaccard, J., Christie, C., & Gonzales, P. M. (2007). Plausible assumptions, questionable assumptions and post hoc rationalizations: Will the real IAT, please stand up?. Journal of Experimental Social Psychology, 43(3), 399-409.

\
Boselie, F. (1984). The aesthetic attractivity of the golden section. Psychological Research, 45(4), 367-375.

\
Boselie, F. (1992). The golden section has no special aesthetic attractivity!. Empirical Studies of the Arts, 10(1), 1-18.

\
Bloch, P. H. (1995). Seeking the ideal form: Product design and consumer response. The Journal of Marketing, 16-29.

\
Chatterjee, A. (2011). Neuroaesthetics: a coming of age story. Journal of Cognitive Neuroscience, 23(1), 53-62.

\
Creusen, M. E., & Schoormans, J. P. (2005). The different roles of product appearance in consumer choice. Journal of product innovation management, 22(1), 63-81.

\
Cross, N. (2004). Expertise in design: an overview. Design studies, 25(5), 427-441.

\
Di Dio, C., Macaluso, E., & Rizzolatti, G. (2007). The golden beauty: brain response to classical and renaissance sculptures. PloS one, 2(11), e1201.

\
Faraday, P., & Sutcliffe, A. (1998, September). Making contact points between text and images. In Proceedings of the sixth ACM international conference on Multimedia (pp. 29-37). ACM.

\
Fiedler, K., Messner, C., & Bluemke, M. (2006). Unresolved problems with the “I”, the “A”, and the “T”: A logical and psychometric critique of the Implicit Association Test (IAT). European Review of Social Psychology, 17(1), 74-147.

\
Green, C. D. (1995). All that glitters: A review of psychological research on the aesthetics of the golden section. PERCEPTION-LONDON-, 24, 937-937.

\
Karvonen, K. (2000, November). The beauty of simplicity. In Proceedings on the 2000 conference on Universal Usability (pp. 85-90). ACM.

\
Konecni, V. J. (2003). The golden section: Elusive, but detectable. Creativity Research Journal, 15(2-3), 267-275.

\
Konecni, V. J. (2005). On the "Golden Section". Visual Arts Research, 76-87.

\
Lee, C. B., & Lee, K. (2015). LG's G3 GUI. interactions, 22(1), 12-15.

\
Liu, Yili. "Engineering aesthetics and aesthetic ergonomics: theoretical foundations and a dual-process research methodology." Ergonomics 46.13-14 (2003): 1273-1292.

\
McManus, I. C., & Weatherby, P. (1997). The golden section and the aesthetics of form and composition: a cognitive model. Empirical Studies of the Arts, 15(2), 209-232.

\
Michailidou, E., Harper, S., & Bechhofer, S. (2008, September). Visual complexity and aesthetic perception of web pages. In Proceedings of the 26th annual ACM international conference on Design of communication (pp. 215-224). ACM.

\
Miniukovich, A., & De Angeli, A. (2015, April). Computation of Interface Aesthetics. In Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems (pp. 1163-1172). ACM.

\
Ngo, D. C. L., Teo, L. S., & Byrne, J. G. (2003). Modelling interface aesthetics. Information Sciences, 152, 25-46.

\
Palmer, S. E., Schloss, K. B., & Sammartino, J. (2013). Visual aesthetics and human preference. Annual review of psychology, 64, 77-107.

\
Phillips, F., Norman, J. F., & Beers, A. M. (2010). Fechner's aesthetics revisited. Seeing and perceiving, 23(3), 263-271.

\
Poltrock, S. E., & Grudin, J. (1994). Organizational obstacles to interface design and development: two participant-observer studies. ACM Transactions on Computer-Human Interaction (TOCHI), 1(1), 52-80.

\
Ramachandran, V. S., & Hirstein, W. (1999). The science of art: A neurological theory of aesthetic experience. Journal of consciousness Studies, 6(6-7), 15-51.

\
Reinecke, K., & Bernstein, A. (2013). Knowing what a user likes: A design science approach to interfaces that automatically adapt to culture. Mis Quarterly, 37(2), 427-453.

\
Rezaei, A. R. (2011). Validity and reliability of the IAT: Measuring gender and ethnic stereotypes. Computers in human behavior, 27(5), 1937-1941.

\
Sears, A. (1995, December). AIDE: A step toward metric-based interface development tools. In \
 \
Proceedings of the 8th annual ACM symposium on User interface and software technology (pp. 101-110). ACM.

\
Shimamura, A. P., & Palmer, S. E. (Eds.). (2012). Aesthetic science: Connecting minds, brains, and experience. Oxford University Press.

\
Sonderegger, A., & Sauer, J. (2010). The influence of design aesthetics in usability testing: Effects on user performance and perceived usability. Applied ergonomics, 41(3), 403-410.

\
Stieger, S., & Swami, V. (2015). Time to let go? No automatic aesthetic preference for the golden ratio in art pictures. Psychology of Aesthetics, Creativity, and the Arts, 9(1), 91.

\
Svobodova, K., Sklenicka, P., Molnarova, K., & Vojar, J. (2014). Does the composition of landscape photographs affect visual preferences? The rule of the golden section and the position of the horizon. Journal of Environmental Psychology, 38, 143-152.

\
Tractinsky, N., Cokhavi, A., Kirschenbaum, M., & Sharfi, T. (2006). Evaluating the consistency of immediate aesthetic perceptions of web pages. International journal of human-computer studies, 64(11), 1071-1083.

\
Tractinsky, N. (1997, March). Aesthetics and apparent usability: empirically assessing cultural and methodological issues. In Proceedings of the ACM SIGCHI Conference on Human factors in computing systems (pp. 115-122). ACM. \

Van Welie, M., Van Der Veer, G. C., & Eliëns, A. (2001). Patterns as tools for user interface design. In Tools for Working with Guidelines (pp. 313-324). Springer London.

\
Weed, E. (2013). Stephen E. Palmer and Arthur P. Shimamura, eds. Aesthetic Science (review). Estetika: The Central European Journal of Aesthetics, (1), 128-133.

\
Zeki, S., & Nash, J. (1999). Inner vision: An exploration of art and the brain (Vol. 415). Oxford: Oxford University Press.
