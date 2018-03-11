import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

import './index.css'

const SHOWN = 'shown'
const HIDDEN = 'hidden'
const modalRoot = document.querySelector('#root')

class Modal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.el = document.createElement('div')
    this.el.id = 'J-modal-container'
    this.el.classList.add('modal-wrapper')

    let status
    if (props.show) {
      status = SHOWN
    } else {
      status = HIDDEN
    }

    this.state = {
      status
    }
  }

  isShow() {
    return this.state.status === SHOWN
  }

  show = () => {
    this.setState({
      status: SHOWN
    })
  }

  hide = () => {
    this.setState({
      status: HIDDEN
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.isShow()) {
      this.show()
    } else if (!nextProps.show && this.isShow()) {
      this.hide()
    }
  }

  append = () => {
    modalRoot.appendChild(this.el)
  }

  remove = () => {
    modalRoot.removeChild(this.el)
  }

  componentDidMount() {
    if(this.isShow()) {
      this.append()
    }
  }

  componentWillUnmount() {
    this.remove()
  }

  render() {
    const tpl = (
      <CSSTransition
        in={this.isShow()}
        timeout={500}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={{
          enter: 'animated scale-in',
          enterActive: 'scale-in-active',
          exit: 'animated scale-out',
          exitActive: 'scale-out-active'
        }}
        onEnter={this.append}
        onExited={this.remove}
      >
        <div className="modal-container" onClick={this.props.onClose}>
          <div className="modal" onClick={e => {
            e.stopPropagation()
          }}>
            <h2 className="modal_title">modal title</h2>
            <div className="modal_content">{this.props.children}</div>
          </div>
        </div>
      </CSSTransition>
    )

    return ReactDOM.createPortal(tpl, this.el)
  }
}

export default Modal
