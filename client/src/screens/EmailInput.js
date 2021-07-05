import React, { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import axios from "../Api/axios";
import "react-quill/dist/quill.snow.css";
import "../css/EmailInput.css";
import { Context as AuthContext } from "../context/AuthContext";
function EmailInput() {
    const [to, setTo] = useState([]);
    const [cc, setCc] = useState([]);
    const [subject, setSubject] = useState("");
    const [schedule, setSchedule] = useState("");
    const [content, setContent] = useState("");
    const {
        state: { email },
        tryLocalLogin,
    } = useContext(AuthContext);
    useEffect(() => {
        tryLocalLogin();
    }, []);
    const submit = async () => {
        if (to.length && cc.length)
            try {
                await axios.post("/addlist", {
                    to,
                    cc,
                    subject,
                    schedule,
                    content,
                    email,
                });
            } catch (error) {
                console.log(error);
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
                        onChange={({ target }) => { console.log("hi raghav"); setTo([target.value]) }}
                        required
                    />
                    <label htmlFor="to" className="form__label">
                        To
                    </label>
                </div>
                <div className="form__group field">
                    <label for="fileUpload"> Upload file</label>
                    <input type="file" id="fileUpload" onChange={file1} data-bs-toggle="tooltip" data-bs-placement="bottom" title="The file should contain a single email in single line" />
                </div>
            </div>
            <div className="input1">
                <div className="form__group field">
                    <input
                        type="input"
                        className="form__field"
                        placeholder="cc"
                        value={cc}
                        onChange={({ target }) => { setCc([target.value]) }}
                        required
                    />
                    <label htmlFor="cc" className="form__label">
                        CC
                    </label>
                </div>
                <div className="form__group field">
                    <label for="fileUpload"> Upload file</label>
                    <input type="file" onChange={file2} data-bs-toggle="tooltip" data-bs-placement="bottom" title="The file should contain a single email in single line" />
                </div>
            </div>
            <div className="input1">
                <div className="form__group field">
                    <input
                        type="input"
                        className="form__field"
                        placeholder="Subject"
                        value={subject}
                        onChange={({ target }) => { setSubject(target.value) }}
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
                        value={schedule}
                        onChange={({ target }) => { setSchedule(target.value) }}
                        required
                    >
                        <option option value="" selected disabled hidden></option>
                        <option value="1">Recurring schedule</option>
                        <option value="2">Weekly schedule</option>
                        <option value="3">Monthly schedule</option>
                        <option value="4">Yearly schedule</option>
                    </select>
                    <label htmlFor="schedule" className="form__label">
                        <p style={{ fontSize: "20px" }}>Schedule</p>
                    </label>
                </div>
            </div>
            <div className="input2">
                <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={(value) => setContent(value)}
                />
            </div>

            <div className="input1" onClick={submit}>
                <div className="button">
                    <div className="button__text">Send Mail</div>

                    <div className="button__wrapper">
                        <div className="button__arrow"></div>
                        <div className="button__border-circle"></div>
                        <div className="button__mask-circle">
                            <div className="button__small-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailInput;
