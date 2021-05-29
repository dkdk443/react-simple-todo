import React from 'react'

export default function TodoFilter() {
  return (
    <div>
      <div class="tabs">
        <ul>
          <li className="is-active"><a>TODO</a></li>
          <li><a>DOING</a></li>
          <li><a>DONE</a></li>
        </ul>
      </div>
    </div>
  )
}
