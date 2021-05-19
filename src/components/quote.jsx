/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react"

export default class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: this.props.quote,
    }
  }

  render() {
    return (
      <section className="quote">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="quote__description">{this.props.quote.description}</p>
              <p className="quote__author text-right">-{this.props.quote.author}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
