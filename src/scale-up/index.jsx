// 做一个先弹出modal(scale)，然后再出现关闭按钮(opacity)的动画，关闭反序
import React from 'react'
import Modal from './modal'

class ScaleUp extends React.Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  close = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div>
        <h2>弹出动画</h2>
        <button onClick={this.toggleShow}>trigger</button>
        <Modal show={this.state.show}
            onClose={this.close}>
          <div>this is modal content</div>
        </Modal>
      </div>
    )
  }
}

export default ScaleUp
