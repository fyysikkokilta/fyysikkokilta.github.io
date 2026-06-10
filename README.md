# Fyysikkokillan varjo-opinto-opas

Tämä on Fyysikkokillan epävirallisen varjo-opinto-oppaan repo. Sivusto on tehty Jekyllillä ja julkaistaan GitHub Pagesilla.

Oppaaseen voi lisätä esimerkiksi kurssisivuja, tutkinto-ohjelmien sivuja ja käännöksiä suomeksi, englanniksi tai ruotsiksi.

## Pika-aloitus

Asenna riippuvuudet:

```bash
bundle install
```

Käynnistä paikallinen esikatselu:

```bash
bundle exec jekyll serve
```

Jekyll kertoo terminaalissa paikallisen osoitteen, yleensä `http://127.0.0.1:4000/`. Avaa osoite selaimessa ja tarkista muutokset ennen julkaisua.

Jos `bundle install` ei onnistu, niin ainakin itse sain sen toimimaan `sudo`:lla (ei virallinen suositus).

## Tärkeimmät kansiot

- `index.md`, `index_en.md`, `index_sv.md`: etusivut eri kielillä.
- `kurssit/`: kurssisivut ja kurssilistaussivut.
- `ohjelmat/`: opinto-ohjelmien ja tutkintorakenteiden sivut.
- `_includes/`: Jekyllin uudelleenkäytettävät osat, kuten kurssilinkit ja kielenvaihto.
- `_layouts/`: sivupohjat.
- `assets/`: tyylit ja JavaScript.
- `kuvat/`: kuvat.

Hakemistoa `_site/` ei tarvitse muokata käsin. Jekyll generoi sen automaattisesti.

## Git-työnkulku

Muokkauksen tekeminen voi mennä esimerkiksi näin. Ohje on tarkoitettu niille, jotka eivät ole käyttäneet Gitiä vielä paljon.

Tee muutokset mieluiten omassa haarassa:

```bash
git switch -c haaran-nimi
```

Tarkista nykyinen haara:

```bash
git branch
```

Tarkista muutokset:

```bash
git status
git diff
```

Lisää muutokset commitiin:

```bash
git add README.md kurssit/MS-E1461.md
```

Vaihtoehtoisesti voit lisätä myös kaikki muutokset kerralla:

```bash
git add .
```

Tee commit:

```bash
git commit -m "Lisätty kurssi MS-E1461"
```

Hyvä commit-viesti kertoo lyhyesti, mitä muuttui. Esimerkiksi:

- `Lisätty ruotsinkielinen kurssisivu`
- `Päivitetty kurssilistan suodattimet`
- `Korjattu opinto-ohjelman linkkejä`

Työnnä uusi haara GitHubiin:

```bash
git push --set-upstream origin haaran-nimi
```

Kun muutokset on tarkistettu ja ne halutaan yhdistää päähaaraan:

```bash
git switch master
git pull
git merge haaran-nimi
git push
```

## Sivujen kirjoittaminen

Sivut kirjoitetaan Markdownilla. Jokaisen sivun alussa on YAML-front matter eli kolmen viivan väliin kirjoitettu metatieto-osio.

Esimerkki tavallisesta sivusta:

```markdown
---
layout: page
title: "Sivun otsikko"
translation_key: joku-yksilöllinen-nimi
lang: fi
permalink: /oma-sivu/
---

Tähän tulee sivun sisältö.
```

Tärkeät kentät:

- `layout: page`: käyttää tavallista sivupohjaa `page`.
- `title`: sivun otsikko.
- `translation_key`: yhdistää saman sivun eri kieliversiot toisiinsa. Esim. `courses`. Käytä samaa nimeä kaikissa saman sivun eri kieliversioissa, mutta älä missään muissa sivuissa. (Tätä ei tarvita kurssisivuilla)
- `lang`: sivun kieli, esimerkiksi `fi`, `en` tai `sv`.
- `permalink`: sivun lopullinen osoite. (Muuta harkiten)

## Kurssisivujen kirjoittaminen

Kurssisivut ovat hakemistossa `kurssit/`. Tiedostonimi kannattaa tehdä kurssikoodin mukaan:

- `MS-E1461.md`: oletuskielinen kurssisivu.
- `MS-E1461_fi.md`: suomenkielinen versio, jos oletuskieli on jokin muu.
- `MS-E1461_sv.md`: ruotsinkielinen versio.
- `MS-E1461_en.md`: englanninkielinen versio.

Esimerkki kurssisivun alusta:

```markdown
---
layout: page
title: "MS-E1461: Hilbert Spaces"
course_code: MS-E1461
short_title: Hilbert Spaces
credits: 5
last_reviewed: 2025
lang: en
default_lang: en
permalink: /kurssit/MS-E1461/
---
```

Tärkeät kurssikentät:

- `course_code`: kurssikoodi. Tämä yhdistää saman kurssin kieliversiot.
- `short_title`: lyhyt nimi, jota käytetään kurssilistassa.
- `credits`: opintopisteet.
- `last_reviewed`: vuosi, jonka tietojen perusteella sivu on viimeksi tarkistettu.
- `lang`: tämän sivun kieli. (Eroaa oletuskielestä `default_lang` vain, kun sivu on käännös)
- `default_lang`: kurssin opetuskieli. (Virallinen kieli)
- `permalink`: sivun osoite.

Kurssilistaus hakee kurssit automaattisesti sivuilta, joilla on `course_code`. Kurssia ei siis tarvitse lisätä erikseen listaan.

## Kurssisivun sisältö

Kurssisivuilla kannattaa käyttää suunnilleen samaa rakennetta, jotta opas pysyy helppona lukea:

```markdown
| **Kurssin nimi** | Kurssin nimi |
|------------------|--------------|
| **Kurssikoodi** | MS-E1461 |
| **Lyhenne** | Hilbert |
| **Ajankohta** | Periodi I |
| **Luennoitsija** | Etunimi Sukunimi |

## Kuvaus

### Viralliset osaamistavoitteet
(Kopioi esim. Sisusta)

### Virallinen sisältö
(Kopioi esim. Sisusta)

## Kurssimateriaali

### Virallinen materiaali

### Lisämateriaali

## Sisältö ja työläys

### Kokonaistyöläys

{% include stars.html count=3 %}

### Viikkosisältö

## Käytännön järjestelyt

## Liittyvät kurssit

### Viralliset esitiedot

### Lisäesitiedot

### Samankaltaisia kursseja

## Trivia

## Aikaleima
```

Tätä ei tarvitse noudattaa orjallisesti, mutta yhtenäinen rakenne helpottaa kurssien vertailua.

## Linkit kurssien välillä

Kurssilinkit tehdään näin:

```liquid
{% include k.html id="MS-E1461" %}
```

Jos haluat muuttaa linkin tekstiä:

```liquid
{% include k.html id="MS-E1461" t="MS-E1461: Hilbert Spaces" %}
```

Jos haluat, että linkki on ensisijaisesti tiettyyn kieliversioon:

```liquid
{% include k.html id="MS-E1461" f="sv" %}
```

Työläyttä voi kuvata palkilla (asteikolla 1-5):

```liquid
{% include stars.html count=3 %}
```

## Kieliversiot

Kielenvaihto toimii kahdella tavalla:

- Kurssisivuilla sama `course_code` yhdistää eri kieliversiot.
- Muilla sivuilla sama `translation_key` yhdistää eri kieliversiot.

Käytä kielikoodeja:

- `fi`: suomi
- `en`: englanti
- `sv`: ruotsi

Suositellut kiinteät osoitteet (permalink):

- Suomenkielinen etusivu: `/`
- Englanninkielinen etusivu: `/en/`
- Ruotsinkielinen etusivu: `/sv/`
- Oletuskielinen kurssisivu: `/kurssit/KURSSIKOODI/`
- Suomenkielinen käännös tarvittaessa: `/fi/kurssit/KURSSIKOODI/`
- Ruotsinkielinen käännös: `/sv/kurssit/KURSSIKOODI/`

Tärkeintä on, että permalink on yksilöllinen.

## Ennen commitia

Käy ainakin nämä läpi:

- Käynnistä sivusto komennolla `bundle exec jekyll serve`.
- Tarkista, että muokkaamasi sivu avautuu selaimessa.
- Tarkista, että kielenvaihto toimii, jos lisäsit käännöksiä.
- Tarkista, että kurssilista näyttää uuden kurssin.
- Tarkista, että linkit eivät johda väärille sivuille.
- Aja `git diff` ja varmista, että commitissa on vain tarkoitettuja muutoksia.

## Julkaisu

GitHub Pages julkaisee sivuston päähaarasta. Kun muutokset on yhdistetty päähaaraan ja työnnetty GitHubiin, julkaisu tapahtuu yleensä automaattisesti hetken kuluttua (noin parissa minuutissa).
