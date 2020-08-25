import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.email,
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
        debugger
        this.props.processForm(this.state)
            .then(() => this.props.history.push('/browse'))
    }

    updateField(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    showErrors() {
        return (
            <div>
                {this.props.errors}
            </div>
        )
    }

    render() {
        // debugger
        return (
            <div className="user-form">
                {this.showErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <br />
                    {this.state.email}

                    <br />
                    <label>Password:
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.updateField('password')}
                        />
                    </label>

                    <br />
                    <input type="submit" value='Sign Up' />
                </form>
            </div>
        )
    }
};

export default SignupForm;