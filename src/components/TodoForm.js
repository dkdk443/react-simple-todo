import React, {useState} from 'react'

export default function TodoForm(props) {
  let text = props.newTask;
  const handleChange = (e) => {
    // setText(e.target.value);
    props.newTask(e.target.value);
  }
  const addTask = (text) => {
    props.addTask();
    props.newTask(text);
    
  }
  return (
    <div>
      <>
        <div className="container">
          <div className="section">
            <div className="field">
              <div className="control">
                <input
                  className="input is-rounded"
                  type="text"
                  placeholder="Rounded input"
          
                  onChange={(e) => handleChange(e)}
                />
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

            <div className="field">
            <p className="control">
              <button className="button is-success" onClick={() => addTask(text)}>
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
