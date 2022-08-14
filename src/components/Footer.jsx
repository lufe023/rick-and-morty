import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='Container'>
    <div class="footerContainer footerA">
    <ul class="footerList">
      <h3>Credit to</h3>
      <li><a target="blank" href="https://rickandmortyapi.com/">The Rick and Morty API</a></li>
      <li><a target="blank" href="https://fontmeme.com/fuentes/fuente-get-schwifty/">Font Meme</a></li>
      <li><a target="blank" href="https://git-scm.com/">Git</a></li>
      <li><a target="blank" href="https://github.com/">Github</a></li>
      <li><a target="blank" href="https://www.netlify.com/">Netlify</a></li>
      </ul>
      
     <ul class="footerList">
      <h3>Used Technologies</h3>
      <li><a href="#">HTML</a></li>
      <li><a href="#">JSX</a></li>
      <li><a href="#">JavaScript</a></li>
      <li><a href="#">CSS</a></li>
      <h3>Author</h3>
      <li><a href="https://github.com/lufe023">Portafolio GitHub</a></li>
      <li><a href="mailto:lufe023@gmail.com">lufe023@gmail.com</a></li>
      </ul>
      </div>
      
      <div class="footerContainer footerB">
        <div class="Up">
        <a href="#top">Up</a>
        </div>
        
        <h3>Project Datails</h3>
        <p>This app based in React JS was realized by <a target="blank" href="https://www.linkedin.com/in/luis-fernando-g%C3%B3mez-mateo-156443209/">Luis Fernando Gómez</a> as a task for the Teacher <a target="blank" href="https://www.linkedin.com/in/benjamin-flores-48541182/">Benjamin Flores</a>. it was an important requirement for <a target="blank" href="https://www.academlo.com/">Academlo</a>.
        </p>
        
        <h4>Features</h4>
        <p>
       
          <li className='feactures__items'>It shows the location of movie characters, with the dimension</li>
          <li className='feactures__items'>It use cards for show the status of de character and picture</li>
          <li className='feactures__items'>Is faithful to the design provided by the master on figma</li>
          <li className='feactures__items'>Responsive design</li>
          </p>
          </div>
          </div>
    </footer>
  )
}

export default Footer