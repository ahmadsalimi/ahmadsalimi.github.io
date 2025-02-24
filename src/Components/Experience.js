import React, { Component } from 'react';

class JobDescription extends Component {
  render() {
    if (this.props.data) {
      var description = this.props.data;
    }
    if (typeof description === 'object' && description.type === 'list') {
      return (
        <div>
          <p dangerouslySetInnerHTML={{ __html: description.heading }}></p>
          <ul>
            {description.items.map((item, index) => (
              <li key={index}>
                <JobDescription data={item} />
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return <p dangerouslySetInnerHTML={{ __html: description }}></p>
  }
}



class Experience extends Component {
  render() {
    if (this.props.data) {
      var experience = this.props.data.experience;
    }

    return (
      <section id="experience" className="home-section wg-experience"  >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 section-heading">
              <h1>Experience</h1>
            </div>
            <div className="col-12 col-lg-8">
              {experience && experience.map((exp, index) => (
                <div key={exp.company} className="row experience">
                  <div className="col-auto text-center flex-column d-none d-sm-flex">
                    <div className="row h-50">
                      <div className={"col" + (index > 0 ? " border-right" : "")}>&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                    <div className="m-2">
                      <span className="badge badge-pill border ">&nbsp;</span>
                    </div>
                    <div className="row h-50">
                      <div className={"col" + (index < experience.length - 1 ? " border-right" : "")}>&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col py-2">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title exp-title text-muted mt-0 mb-1">{exp.role}</h4>
                        <h4 className="card-title exp-company text-muted my-0">{exp.company}</h4>
                        <div className="text-muted exp-meta">
                          {exp.from} – {exp.to ? exp.to : "Present"}
                        </div>
                        <div className="text-muted exp-meta">
                          {exp.location}
                        </div>
                        <div className="card-text">
                          <JobDescription data={exp.description} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
