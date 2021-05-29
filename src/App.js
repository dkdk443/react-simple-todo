import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
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
        <div class="tabs">
        <ul>
          <li className="is-active"><a>TODO</a></li>
          <li><a>DOING</a></li>
          <li><a>DONE</a></li>
        </ul>
        </div>
        <section>
          <ul className="todolist">
            <li className="todo">aaaa</li>
            <li className="todo">aaaaaaaaaaa</li>
            <li className="todo is-done">aaaaaaaaa</li>
          </ul>
        </section>
      </>
    </div>
  );
}

export default App;
