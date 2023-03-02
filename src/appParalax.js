<Parallax pages={3}>
<ParallaxLayer
    offset={0}
    speed={1}
    factor={2}
    style={{
      backgroundColor: `#36117e`,
      backgroundSize: 'cover',
    }}
/>
<ParallaxLayer
  offset={1}
  speed={.5}
  factor={2}
  style={{
    backgroundColor: `#36117e`,
    backgroundSize: 'cover',
  }}
/>
<ParallaxLayer
    offset={1}
    speed={.5}
    factor={1}
    style={{
      backgroundColor: `#dbc8ff`,
      backgroundSize: 'cover',
    }}
/>      


<ParallaxLayer offset={0} speed={.75}>
  <Home />
</ParallaxLayer>
<ParallaxLayer offset={1} speed={-1} sticky={{ start: 1, end: 1.25 }} style={{justifyContent: 'flex-start' }}>
    <About/>
</ParallaxLayer>
<ParallaxLayer offset={2} speed={1.25}  >
  <Community/>
</ParallaxLayer>

</Parallax>