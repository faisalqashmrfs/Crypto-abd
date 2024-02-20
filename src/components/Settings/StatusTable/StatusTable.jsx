import React from 'react'
import './StatusTable.css'
import bottomArrow from '../Images/bottomArrow.svg'
import topArrow from '../Images/topArrow.svg'

const StatusTable = () => {

    const statusTableHeader = ['No.', 'Time', 'IP', 'Action']

    const statusTableInfo = [
        {no: '1.', date: '2022/07/19', time: '17:57:59', ip: '185.243.*.*', state: 'Succeed'},
        {no: '2.', date: '2022/07/19', time: '17:57:59', ip: '185.243.*.*', state: 'Failed'},
        {no: '3.', date: '2022/07/19', time: '17:57:59', ip: '185.243.*.*', state: 'Succeed'},
        {no: '4.', date: '2022/07/19', time: '17:57:59', ip: '185.243.*.*', state: 'Failed'},
        {no: '5.', date: '2022/07/20', time: '17:57:59', ip: '185.243.*.*', state: 'Succeed'}
    ]

  return (
    <table className='bh-statusTable'>
        <thead>
            <tr>
                {
                    statusTableHeader.map((header,index) => (
                    <th key={index}>
                        {header}
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
                statusTableInfo.map((status,index) => (
                    <tr key={index}>
                       <td>{status.no}</td>
                       <td className='secondCell'> 
                          <span className='logDate'>{status.date}</span> 
                          <span className='logTime'>{status.time}</span> 
                       </td>
                       <td>{status.ip}</td>
                       <td>
                         <button className={status.state === 'Succeed' ? 'succeedBtn' : 'failedBtn'}>{status.state}</button> 
                       </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default StatusTable