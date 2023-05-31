<template>
  <div>
    <OmOsHero />
    <OmOsContent />
    <OmOsQuote />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Om os | Saltoft Ingeniør A/S',
      meta: [
        { hid: 'description', name: 'description', content: 'Her kan man læse omkring Mathias Saltoft Koch, som ejer virksomheden Saltoft Ingeniør og hvilken baggrund han kommer fra.' },
        { name: 'keywords', content: 'Om Saltoft Ingeniør, Mathias, virksomhedens baggrund, om os' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { property: 'og:title', content: 'Saltoft Ingeniør, byggeteknisk virksomhed' },
        { property: 'og:description', content: 'Forstå Saltoft Ingeniørs baggrund og hvor ejeren kommer fra.' }
      ]
    }
  }
}
</script>
