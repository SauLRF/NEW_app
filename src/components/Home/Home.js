import React, { Component } from 'react'
import './Home.scss'

import Header from '../Header/Header.js'


import { ReactComponent as Star } from '../../images/star.svg'

import { ReactComponent as House } from '../../images/house.svg'


import { ReactComponent as Broadcast } from '../../images/broadcast.svg'

import { ReactComponent as Appointment } from '../../images/appointment.svg'

const TITLE="Домашняя";
const SECTIONS = [
    { title: 'Приёмы', href: '/appointments', Icon: Appointment },
    { title: 'События', href: '/events', Icon: Star  },
    { title: 'Оповещения', href: '/notifications', Icon: Broadcast },
  ];

  export default class Home extends Component {
       render(){
            return (
                 <div className="Home">
                     <Header
                       title={TITLE}
                       userName="Ruslan Sattarov Faritovich"
                       className="Home-Header"
                       renderIcon={()=>(<House className="Header-Icon"/>)} 
                     />  
                   <div className="Home-Body">
                         WELCOME TO APP
                        </div>      
                   <div className="Home-Footer">
                     <div className="SectionNavigation">
                        {SECTIONS.map(({title,Icon})=>{
                            return( <a className='SectionNavigation-Item Section' href='#'>
                                 <Icon className="Section-Icon"/>
                                 <span className="Section-Title">{title}</span>
                             </a>)
                        })}
                    </div>
                   </div>
                </div>
            )
       }
  }