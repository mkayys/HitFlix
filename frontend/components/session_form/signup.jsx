import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // email: this.props.location.email,
            email: localStorage.getItem('email'),
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
        this.showErrors = this.showErrors.bind(this);
        
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        
        this.props.processForm(this.state)
            .then(() => {
                localStorage.removeItem('email');
                this.props.history.push('/browse')
            })
    }

    updateField(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    showErrors() {
        return (
            <div className="errors">
                {this.props.errors}
            </div>
        )
    }

    render() {
        // debugger
        return (
            <div className="signup-form">
                {this.showErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <br />
                    {this.state.email}

                    <br />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            placeholder="Enter your password"
                            onChange={this.updateField('password')}
                        />

                    <br />
                    <input type="submit" value='SIGN UP' />
                </form>
            </div>
        )
    }
};

export default SignupForm;