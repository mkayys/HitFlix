export const signup = (user) => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    })
);

export const signin = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const signout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)