import React from 'react';

// const Collapse = (props) => {
//
//     return (<div>
//
//         <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
//                 Link with href
//         </a>
//         <div className="collapse show" id={props.href}>
//             {props.children}
//         </div>
//     </div>);
// };

/*
 *İlk constructor --->state initialization
 * render metodu ilk defa calisti
 * onClick eventi calisti
 * setState state nesnesini güncelledi-->triggered render
 * render metodu güncel JSX i sayfada gosteriyor
 */

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: 'test content',
    };
  }
  render() {
    return (
      <div>
        <a
          className="btn btn-primary w-100"
          data-bs-toggle="collapse"
          href={'#'.concat(this.props.href)}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
        <div className="collapse show" id={this.props.href}>
          {this.props.children}
          {this.state.showContent}
        </div>
      </div>
    );
  }
}

export default Collapse;
