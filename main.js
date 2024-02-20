import './reset.css'
import './style.css'
import './bee.scss'
import './animated-text.scss'
import logoCGV from './cgv-contest-2024.png'
import spellingBeeTitle from './spelling-bee-title.png'
import thirdGrade from './3-grade.png'
import fourthGrade from './4-grade.png'
import congratulations from './congratulations.png'
import missClaudia from './miss-claudia.png'

window.onload = function() {
      try {
        var url_string = (window.location.href).toLowerCase()
        var url = new URL(url_string)
        var student = url.searchParams.get("student")

        const students = [
          {id:'mcf3', name:'Montserrat', lastname:'Cabello Fuentes', grade:'3'},
          {id:'rmg3', name:'Romina', lastname:'Martínez González', grade:'3'},
          {id:'remo3', name:'Reyna Elena', lastname:'Montes de Oca', grade:'3'},
          {id:'mfvm3', name:'María Fernanda', lastname:'Valle Martínez', grade:'3'},
          {id:'bam3', name:'Barbara', lastname:'Aguilar Muñoz', grade:'3'},
          {id:'eoc3', name:'Elyan', lastname:'Ortiz Crespo', grade:'3'},
          {id:'vern3', name:'Valeria Elizabeth', lastname:'Ramírez Núñez', grade:'3'},
          {id:'jmrc3', name:'Jimena Mariel', lastname:'Reyes Castillo', grade:'3'},
          {id:'vgh3', name:'Verania', lastname:'Gaytán Herrera', grade:'3'},
          {id:'rsga3', name:'Renata Sofía', lastname:'Guerrero Aguilar', grade:'3'},
          {id:'emg3', name:'Emilia', lastname:'Mata García', grade:'3'},
          {id:'lrl3', name:'Liam', lastname:'Ríos López', grade:'3'},
          {id:'idc4', name:'Ivanna', lastname:'Díaz Cepeda', grade:'4'},
          {id:'jslt4', name:'Jesús Samuel', lastname:'Limón Trócoli', grade:'4'},
          {id:'cdrq4', name:'Christian Daniel', lastname:'Ramírez Quezada', grade:'4'},
          {id:'larv4', name:'Lían Antonio', lastname:'Ramírez Vargas', grade:'4'}
        ]

        const result = students.find(({
        id }) => id === student)

        document.getElementById("name").innerText = result.name;
        document.getElementById("lastname").innerText = result.lastname;

        if (result.grade === '3') {
          document.getElementById('grade-img').src = thirdGrade
        } else {
          document.getElementById('grade-img').src = fourthGrade
        }
        
      } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
      }
}

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${logoCGV}" class="logo" alt="Spelling Bee" />
    <img src="${spellingBeeTitle}" alt="Spelling Bee" />
      
      <div class="bee">
        <div class="bee-body">
          <div class="blink"></div>
          <div class="mouth"></div>
          <div class="antenae"></div>
          <div class="bee-left"></div>
          <div class="bee-right"></div>
        </div>
      </div>
    
    <img id="grade-img" alt="Grade" />
    
    <div style="padding: 15px 0">
      <h1 class="name-text"><span id="name">name</span></h1>
      <h1 class="name-text"><span id="lastname">lastname</span></h1>
    </div>
    
    <img src="${congratulations}" alt="Congratulations" />
     <img src="${missClaudia}" alt="Miss Claudia Medina" />

  </div>
`
