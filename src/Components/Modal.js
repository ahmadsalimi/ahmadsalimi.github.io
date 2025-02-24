import React, { Component } from 'react';

class Modal extends Component {

  render() {
    return (
      <div id="modal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cite</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <pre><code className="tex hljs"></code></pre>
            </div>
            <div className="modal-footer">
              <a className="btn btn-outline-primary my-1 js-copy-cite" href="#copy" target="_blank">
                <i className="fas fa-copy"></i> Copy
              </a>
              <a className="btn btn-outline-primary my-1 js-download-cite" href="#download" target="_blank">
                <i className="fas fa-download"></i> Download
              </a>
              <div id="modal-error"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
