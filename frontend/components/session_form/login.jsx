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

            <div className="splash-container">
                <img className="splash-background" src={window.home} alt=""/>
                <div className='overlay-card'>
                    <div className="login-form-container">
                        
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <h1>Sign In</h1>
                            {/* <label>Email: */}
                                <input type="email"
                                            value={this.state.email}
                                            onChange={this.updateField('email')}
                                            placeholder="Email"
                                        />
                            {/* </label> */}

                            {/* <label>Password: */}
                                <input type="password"
                                            value={this.state.password}
                                            onChange={this.updateField('password')}
                                            placeholder="Password"
                                        />
                            {/* </label> */}

                            {this.showErrors()}
                            <input type="submit" value='Sign In' />
                        </form>
                    </div>
                    
                </div>
            </div>

        )
    }
};

export default LoginForm;