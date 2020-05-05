import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    componentDidMount() {

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(() => console.log('success'))
    }

    updateField(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        return (
            <div>
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

                    <input type="submit" value={this.props.type === 'Sign Up' ? 'Sign Up' : 'Sign In'} />
                </form>
            </div>
        )
    }
};

export default SessionForm;