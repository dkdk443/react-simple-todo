import React from 'react'

export default function TodoFilter(props) {
  return (
    <div>
      <div className="tabs">
        <ul>
          <li className="is-active" onClick={() => props.handleStatus('ALL')}><a>ALL</a></li>
          <li onClick={() => props.handleStatus(1)}><a>TODO</a></li>
          <li onClick={() => props.handleStatus(2)}><a>DOING</a></li>
          <li onClick={() => props.handleStatus(3)}><a>DONE</a></li>
        </ul>
      </div>
    </div>
  )
}
