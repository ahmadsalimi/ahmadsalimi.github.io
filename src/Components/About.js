import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var title = this.props.data.title;
         var profile_pic_url = this.props.data.image_url;
         var affiliation = this.props.data.affiliation;
         var location = this.props.data.location;
         var social = this.props.data.social;
         var cv_url = this.props.data.cv_url;
         var about = this.props.data.about;
         var interests = this.props.data.interests;
         var education = this.props.data.education;
         var email = this.props.data.email;
      }

      return (
         <section id="about" className="home-section wg-about">
            <div className="container">
               <div className="row">
                  <div className="col-12 col-lg-4">
                     <div id="profile" className='py-2'>
                        <img className="avatar avatar-circle" src={profile_pic_url} alt="{name}" />
                        <div className="portrait-title">
                           <h2>{name}</h2>
                           <h3>{title}</h3>
                           <h3>
                              <span>{affiliation}</span>
                           </h3>
                           <h3>{location}</h3>
                           <h3><i className="fas fa-envelope"></i> {email}</h3>
                        </div>
                        <ul className="network-icon" aria-hidden="true">
                           <li key="contact">
                              <a href="/#contact" >
                                 <i className="fas fa-envelope big-icon"></i>
                              </a>
                           </li>
                           {social && social.map((item) => {
                              return (
                                 <li key={item.name}>
                                    <a href={item.url} target="_blank" rel="noopener">
                                       <i className={item.className + " big-icon"}></i>
                                    </a>
                                 </li>
                              )
                           })}
                           <li key="cv">
                              <a href={cv_url} target="_blank" rel="noopener">
                                 <i className="ai ai-cv big-icon"></i>
                              </a>
                           </li>
                        </ul>
                        <br />
                        <div className='portrait-title'>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-8">
                     <p dangerouslySetInnerHTML={{ __html: about}} style={{textAlign: 'justify'}}></p>
                     <div className="row">
                        <div className="col-md-5">
                           <h3>Interests</h3>
                           <ul className="ul-interests">
                              {interests && interests.map((item) => {
                                 return (
                                    <li key={item}>
                                       <span>{item}</span>
                                    </li>
                                 )
                              })}
                           </ul>
                        </div>
                        <div className="col-md-7">
                           <h3>Education</h3>
                           <ul className="ul-edu fa-ul">
                              {education && education.map((item) => {
                                 return (
                                    <li key={item.id}>
                                       <i className="fa-li fas fa-graduation-cap"></i>
                                       <div className="description">
                                          <p className="course">{item.degree}, {item.years}</p>
                                          <p className="institution">{item.school}</p>
                                          <p className="institution">{item.description}</p>
                                       </div>
                                    </li>
                                 )
                              })}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
