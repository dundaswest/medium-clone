import React, { Component } from 'react';
import MediumEditor from 'medium-editor';

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      text: '',
      description: '',
      imgSrc: null,
      loading: false,
    };
  }

  componentDidMount() {
    const editor = new MediumEditor(/* dom, */ '.medium-editable', {
      autoLink: true,
      delay: 1000,
      targetBlank: true,
      toolbar: {
        buttons: [
          'bold',
          'italic',
          'quote',
          'underline',
          'anchor',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'strikethrough',
          'subscript',
          'superscript',
          'pre',
          'image',
          'html',
          'justifyCenter',
        ],
        diffLeft: 25,
        diffTop: 10,
      },
      anchor: {
        placeholderText: 'Type a link',
        customClassOption: 'btn',
        customClassOptionText: 'Create Button',
      },
      paste: {
        cleanPastedHTML: true,
        cleanAttrs: ['style', 'dir'],
        cleanTags: ['label', 'meta'],
        unwrapTags: ['sub', 'sup'],
      },
      anchorPreview: {
        hideDelay: 300,
      },
      placeholder: {
        text: 'Tell your story...',
      },
    });
    editor.subscribe('editableInput', (ev, editable) => {
      if (typeof document !== 'undefined') {
        this.setState({
          title: document.getElementById('editor-title').value,
          text: editor.getContent(0),
          description: `${editor
            .getContent(0)
            .substring(0, 30)
            .toString()}...`,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid main-container">
          <div className="row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
            <div
              id="main-post"
              className="col-xs-10 col-md-8 col-md-offset-2 col-xs-offset-1 main-content"
            >
              <div className="post-metadata">
                <img className="avatar-image" height="40" width="40" />
                <div className="post-info">
                  <div data-react-classname="PopoverLink" data-react-props="">
                    <span className="popover-link" data-reactroot="">
                      <a href="" />
                    </span>
                  </div>
                  <small />
                </div>
              </div>
              <form className="editor-form main-editor" autoComplete="off">
                <div
                  className={
                    this.state.imgSrc != null
                      ? 'file-upload-previewer'
                      : 'file-upload-previewer hidden'
                  }
                >
                  <img src="" alt="" id="image_preview" />
                </div>
                <div className="existing-img-previewer" id="existing-img-previewer" />
                <div className="form-group">
                  <span className="picture_upload">
                    <i className="fa fa-camera" onClick={console.log('hoi')} />
                  </span>
                </div>
                <div className="form-group">
                  <textarea
                    col="1"
                    className="editor-title"
                    id="editor-title"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group">
                  <textarea id="medium-editable" className="medium-editable" />
                </div>
                <div className="hidden">
                  <input
                    type="file"
                    onChange={() => this.previewImg()}
                    id="file"
                    ref="fileUploader"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
