import React, { Component } from 'react'
import './Header.scss'



export default class Header extends Component {

  render () {
    const {
      title,
      userName,
      renderIcon
    } = this.props

    return (
      <div className="Header">
        <div className='Header-Body'>
          <div className='flex-1 d-flex flex-row justify-content-start align-items-center'>
            {renderIcon && renderIcon()}
            <div className='Header-Title'>
              {title}
            </div>
          </div>
          <div className='flex-1 d-flex flex-row justify-content-end align-items-center'>
            {userName && (
              <div className='Header-UserName'>
                {userName}
              </div>
            )}
            <a className='btn btn-primary Header-ExitBtn' href="#">
              Выйти
            </a>
          </div>
        </div>        
      </div>
    )
  }
}