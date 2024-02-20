import React from 'react'
import './ActionTable.css'
import bottomArrow from '../Images/bottomArrow.svg'
import topArrow from '../Images/topArrow.svg'

const ActionTable = () => {

    const actionTableHeader = ['No.', 'Time', 'IP', 'Action']

    const actionTableInfo = [
        {no: '1.', date: '2022/07/19', time: '17:57:59', ip: '185.243.*.*', action: 'Changed Password'},
        {no: '2.', date: '2022/07/19', time: '17:57:59', ip: '185.243.*.*', action: 'New phone Number'},
        {no: '3.', date: '2022/07/19', time: '17:57:59', ip: '185.243.*.*', action: 'Enabled  authenticaton'},
        {no: '4.', date: '2022/07/19', time: '17:57:59', ip: '185.243.*.*', action: 'Changed Password '},
        {no: '5.', date: '2022/07/20', time: '17:57:59', ip: '185.243.*.*', action: 'New Trade passcode'},
        {no: '6.', date: '2020/05/8', time: '9:32:00', ip: '185.243.*.*', action: 'Password Reset'}
    ]

  return (
    <table className='bh-actionTable'>
                <thead>
                    <tr>
                        {
                            actionTableHeader.map((item,index) => (
                             <th key={index}>
                                {item}
                                <span className="arrowContainer">
                                  <img src={topArrow} alt="topArrow" className='topArrow'/>
                                  <img src={bottomArrow} alt="bottomArrow" />
                                </span>
                             </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        actionTableInfo.map((item,index) => (
                          <tr key={index}>
                             <td>{item.no}</td>
                             <td> 
                               <span className='logDate'>{item.date}</span> 
                               <span className='logTime'>{item.time}</span> 
                            </td>
                            <td>{item.ip}</td>
                            <td>{item.action}</td>
                          </tr>
                        ))
                    }      
                </tbody>
            </table>
  )
}

export default ActionTable