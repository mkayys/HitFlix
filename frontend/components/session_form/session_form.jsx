import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {

    }

    handleSubmit(e) {
        e.preventDefault();
        
    }

    updateField(field) {
        this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email: 
                        <input type="email" 
                            value={this.state.email} 
                            onChange={() => this.handleChange('email')}
                            />
                    </label>

                    <label>Password: 
                        <input type="password" 
                            value={this.state.password} 
                            onChange={() => this.handleChange('password')}
                            />
                    </label>

                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
};

export default SessionForm;