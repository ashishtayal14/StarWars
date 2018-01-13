import React from 'react'
import PropTypes from 'prop-types'
import { bindHandlers } from 'react-bind-handlers'

class Modal extends React.PureComponent {
  onClose(e) {
    e.preventDefault()
    this.props.onClose()
  }
  render() {
    const {
            onClose,
      header,
      children,
      isOpen,
        } = this.props

    return isOpen ? (
      <div>

        <div className='loginBox col-md-4 col-sm-4'>                    
          <div >{children}</div>
        </div>

      </div>
    ) :
      null
  }
}
Modal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  header: PropTypes.string,
}
export default bindHandlers(Modal)
