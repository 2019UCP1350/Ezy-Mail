import React, { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import axios from "../Api/axios";
import "react-quill/dist/quill.snow.css";
import { useHistory } from "react-router-dom";
import "../css/EmailInput.css";
import { Context as AuthContext } from "../context/AuthContext";

function EmailInput() {
  let history = useHistory();
  const [to, setTo] = useState([]);
  const [cc, setCc] = useState([]);
  const [subject, setSubject] = useState("");
  const [schedule, setSchedule] = useState("1");
  const [content, setContent] = useState("");
  const [btn, setBtn] = useState("composebutton");
  const {
    state: { email },
    tryLocalLogin,
  } = useContext(AuthContext);
  useEffect(() => {
    try {
      const auth_checker = async () => {
        await tryLocalLogin();
      };
      auth_checker();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const submit = async () => {
    if (to.length ) {
      setBtn("composebutton compose--loading");
      try {
        var result = await axios.post("/addlist", {
          to,
          cc,
          subject,
          schedule,
          content,
          email,
        });
        if (result.error) {
          alert("Verify Your email");
        } else {
          history.push("/history");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Enter valid fields");
    }
  };
  const file1 = (event) => {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        lines.forEach((element) => {
          setTo([...to, element]);
        });
      };
      reader.readAsText(file);
    }
  };
  const file2 = (event) => {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        lines.forEach((element) => {
          setCc([...cc, element]);
        });
      };
      reader.readAsText(file);
    }
  };
  return (
    <div className="cardinput">
      <div className="input1">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="To"
            value={to}
            onChange={({ target }) => {
              console.log("hi raghav");
              setTo([target.value]);
            }}
            required
          />
          <label htmlFor="to" className="form__label">
            To
          </label>
        </div>
        <div className="form__group field">
          <label htmlFor="fileUpload"> Upload file</label>
          <input
            type="file"
            id="fileUpload"
            onChange={file1}
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="The file should contain a single email in single line"
          />
        </div>
      </div>
      <div className="input1">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="cc"
            value={cc}
            onChange={({ target }) => {
              setCc([target.value]);
            }}
            required
          />
          <label htmlFor="cc" className="form__label">
            CC
          </label>
        </div>
        <div className="form__group field">
          <label htmlFor="fileUpload"> Upload file</label>
          <input
            type="file"
            onChange={file2}
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="The file should contain a single email in single line"
          />
        </div>
      </div>
      <div className="input1">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Subject"
            value={subject}
            onChange={({ target }) => {
              setSubject(target.value);
            }}
            required
          />
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
        </div>
      </div>
      <div className="input1">
        <div className="form__group field">
          <select
            className="form__field"
            onChange={({ target }) => {
              setSchedule(target.value);
            }}
            required
            defaultValue="1"
          >
            <option value="1" >
              Recurring schedule
            </option>
            <option value="2">Weekly schedule</option>
            <option value="3">Monthly schedule</option>
            <option value="4">Yearly schedule</option>
          </select>
        </div>
      </div>
      <div className="input2">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={(value) => setContent(value)}
        />
      </div>
      <button type="button" className={btn} onClick={submit}>
        <span className="button_text">Send Mail</span>
      </button>
    </div>
  );
}

export default EmailInput;
