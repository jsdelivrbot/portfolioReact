import React,{Component} from 'react';
export default class Developer extends Component{
  render(){
    return(
      <div className='developer-bg'>
      <div className="contain content">
          <header className="heading-panel-container">
            <h2 className="page-title">Front-End DEveloper</h2>
            <p>Front-end developer with styling + markup lenguage experience and JavaScript frameworks</p>
          </header>
          <article className="track-record">
            <div className="row">
              <div className="col-sm-12">
               <h3 className="timeline-title">Track Record</h3>
               <section id="timeline">
                    <div className="pin top-pin">
                      <span className="circle-bg"></span>
                      <span className="pin-circle"></span>
                    </div>
                    <div className="timeline-block">
                        <div className="timeline-content"><h3>Devbootcamp</h3>
                        <p>An immersive program with  HTML, CSS, Ruby, JavaScript, git and SQL. It also focuses on teaching meta-skills such as problem-solving approaches, pair programming, and giving and receiving feedback. approximate 65% pair programming, 25% group projects, and 10% individual work.</p></div>
                    </div>
                    <div className="timeline-block">
                        <div className="timeline-content"><h3>Webdugout an MSEDP division</h3>
                        <p>
                        Work as a web designer in Webdugout a division of M.S.E.D.P, responsibilities included  Project management working closely with clients to achieve optimal results. Designed mock-up prototypes to fully present client the look and feel of the website, followed by working with an in-house developed C.M.S system to create the entire functional website. Using web  technologies (html, javascript,jquery,css)
                        </p></div>
                    </div>
                    <div className="timeline-block">
                      <div className="timeline-content">  <h3>Ketherine Gibbs</h3>
                        <p>Computer and Art Design courses Graphic Design for Print Media workshop Graphic Design workshop Workshop on Photoshop for Designers
                        </p></div>
                    </div>
                    <div className="timeline-block">
                        <div className="timeline-content"><h3>High School</h3>
                        <p>
                        Took an elective for Computer Repair Technician this  course focuses on computer repair and troubleshooting, build and repair personal computers
                        </p></div>
                    </div>
               </section>
              </div>
            </div>
          </article>

        </div>
      </div>
    )
  }
}
