import React from 'react'

export default function TodoForm() {
  return (
    <div>
      <>
        <div className="container">
          <div className="section">
            <div className="field">
              <div className="control">
               <input class="input is-rounded" type="text" placeholder="Rounded input" />
              </div>
            </div>
            <div className="field is-horizontal">
             <div className="field">
              <label htmlFor="">重要度</label>
               <div className="control">
                <div className="select" name="" id="">

                  <select name="" id="">
                    <option value="">S</option>
                    <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                  </select>
                </div>
              </div>
            </div>
             <div className="field">
              <label htmlFor="">緊急度</label>
               <div className="control">
                <div className="select" name="" id="">

                  <select name="" id="">
                    <option value="">S</option>
                    <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                  </select>
                </div>
              </div>
            </div>
            </div>

            <div class="field">
            <p class="control">
              <button class="button is-success">
                追加
              </button>
            </p>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}
