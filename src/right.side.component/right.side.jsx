import "./right.side.styles.scss";

const RightSide = () => {
    return ( 
       <div className="right-side-container">
            <h1 className="name-title">SARA VULETIC</h1>
            <div className="line-top"></div>
            <h2>Profil</h2>
            <p className="profil-text">Conscientious and ambitious. Desire to progress and improve. Always 
            smiling and kind. I like to work and meet new people. I worked in the 
            Serbian Army for more than three years as a professional soldier. And 
            acquired various skills. Multitasking. I hope we will cooperate well.
            </p>
            <div className="line-two"></div>
            <h2>Work Experience</h2>
            <div className="work-experience-info">
            <div className="jobs">
                <p>Profesional soldier - Mija Stanimirovic - Nis</p>
                <p>The Military Service - Training center - Leskovac</p>
                <p>Security agent - Agency CIM - Nis</p>
            </div>
            <div className="job-dates">
                <p>sep 2020 - jan 2023</p>
                <p>mar 2020 - avg 2020</p>
                <p>jun 2018 - jan 2020</p>
            </div>
            </div>
            <div className="line-three"></div>
            <h2>Education and Qualifications</h2>
            <div className="school-experience-info">
            <div className="school">
               <p>Technical computer control - IV degree - (Machine direction) <br/>
                High school Prota Stevan Dimitrijevic - Aleksinac</p>
            </div>
            <div className="school-dates">
                <p>sep 2012 - jun 2016</p>
            </div>        
            </div>
            <div className="line-four"></div>
            <h2 className="title-languages">Languages</h2>
            <div className="languages">
            <p>English - native speaker</p>
            <p>Italian - working knowledge</p>
            <p>Turkish - working knowledge</p>
            </div>
            <div className="line-five"></div>
            <h2 className="title-interests">Interests</h2>
            <p>IT (Java script - CSS), Photography, Modelling, Photoshop&Design</p>
            <div className="line-six"></div>
            <h2 className="title-skills">Skills</h2>
            <div className="skills">
            <p>Microsoft Office - Expert</p>
            <p>Microsoft Office Excel - Expert</p>
            <p>Google Analytics - Experienced</p>
        </div>
     </div>
     
  )
}

export default RightSide;