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
        this.revealEmailField = this.revealEmailField.bind(this);
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
        // debugger
        if (this.props.errors.length === 0) return;
        return (
            <div className="errors">
                {this.props.errors.map(error => {
                    return (
                        <div>{error}</div>
                    )
                })}
            </div>
        )
    }

    revealEmailField() {
        if (this.props.errors.length === 0 || !this.props.errors[0].includes("Email")) {
            return this.state.email;
        } else {
            return (
                <input type="text"
                    id="signup-info"
                    value={this.state.email}
                    placeholder="Enter another email"
                    onChange={this.updateField("email")}
                    />
            )
        }

    }

    render() {
        // debugger
        return (
            <div className="signup-form">
                {this.showErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <br />
                    {/* {this.state.email} */}
                    {this.revealEmailField()}

                    <br />
                        <br />
                        <input type="password"
                            id="signup-info"
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