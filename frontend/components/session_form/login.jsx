import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        return (
            <div className="login-form">
                {this.showErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Email: 
                        <input type="email" 
                            value={this.state.email} 
                            onChange={this.updateField('email')}
                            />
                    </label>

                    <label>Password: 
                        <input type="password" 
                            value={this.state.password} 
                            onChange={this.updateField('password')}
                            />
                    </label>

                    <input type="submit" value='Sign In' />
                </form>
            </div>
        )
    }
};

export default LoginForm;