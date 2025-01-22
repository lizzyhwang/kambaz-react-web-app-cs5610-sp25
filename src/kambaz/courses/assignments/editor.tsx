export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-select-one-genre">
              <option selected value="ASSIGNMENTS">
                Assignments</option>
              <option value="QUIZZES">Quizzes</option>
              <option value="EXAMS">Exams</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-select-one-genre">
              <option selected value="PERCENTAGE">
                Percentage</option>
              <option value="LETTER">Letter Grade</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-select-one-genre">
              <option selected value="ONLINE">
                Online</option>
            </select>

            <br></br>
            <br></br>

            <label>Online Entry Options</label><br />
            <input type="checkbox" name="check-submission-type" id="wd-text-entry" />
            <label htmlFor="wd-chkbox-comedy">Text Entry</label><br />

            <input type="checkbox" name="check-submission-type" id="wd-website-url" />
            <label htmlFor="wd-chkbox-drama">Website URL</label><br />

            <input type="checkbox" name="check-submission-type" id="wd-media-recordings" />
            <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br />

            <input type="checkbox" name="check-submission-type" id="wd-student-annotation" />
            <label htmlFor="wd-chkbox-fantasy">Student Annotation</label><br />

            <input type="checkbox" name="check-submission-type" id="wd-file-upload" />
            <label htmlFor="wd-chkbox-fantasy">File Upload</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label>Assign to</label>
            <br></br>
            <input id="wd-assign-to" value="Everyone" />

            <br></br><br></br>

            <label htmlFor="wd-due-date"> Due </label>
            <br></br>
            <input type="date"
              id="wd-due-date" />
            <br /><br></br>

            <tr>
              <td>
                <label htmlFor="wd-available-from"> Available From </label>
                <br></br>
                <input type="date"
                  id="wd-available-from" />
                <br />
              </td>
              <td>
                <label htmlFor="wd-available-until"> Available Until </label>
                <br></br>
                <input type="date"
                  id="wd-available-until" />
                <br />
              </td>
            </tr>
          </td>
        </tr>
      </table >
      <hr />
      <div>
        <button type="button"
          id="wd-cancel">
          Cancel
        </button>
        <button type="button"
          id="wd-save">
          Save
        </button>
      </div>
    </div >
  );
}
