export default function Modules() {
  return (
    <div>
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>

        <select id="wd-select-one-genre">
          <option selected value="PUBLISH-ALL">
            Publish All</option>
        </select>

        <button>+ Module</button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack - Chapter 1</li>
                <li className="wd-content-item">Full Stack - Chapter 2</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Create a user interface with html</li>
                <li className="wd-content-item">Have fun</li>
              </ul>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Super Mario Brothers Level 1</li>
                <li className="wd-content-item">Bowser's Castle</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Win Mario Kart</li>
                <li className="wd-content-item">Unlock all of the characters</li>
              </ul>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Watch Wreck it Ralph</li>
                <li className="wd-content-item">Are you "Going Turbo"?</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
