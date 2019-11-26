import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import TextFields from '../form/index'

export default class CreateIssue extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeProject = this.onChangeProject.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeSeverity = this.onChangeSeverity.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            project: '',
            subject: '',
            severity: [],
            status: [],
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeProject(e) {
        this.setState({
            project: e.target.value
        });
    }

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        });
    }

    onChangeSeverity(e) {
        this.setState({
            severity: e.target.value
        });
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const issue = {
            username: this.state.username,
            project: this.state.project,
            subject: this.state.subject,
            severity: this.state.severity,
            status: this.state.status,
            date: this.state.date
        }
        console.log(issue);

        axios.post('http://localhost:5000/issues/add', issue)
          .then(res => console.log(res.data))

        window.location = '/';
    }
    render() {
        return (
            <div>
                <p>Create Issue component</p>
                <TextFields />
            </div>
        )
    }
}