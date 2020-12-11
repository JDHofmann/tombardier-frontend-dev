import React from 'react' 

export const AdminForm = props => {
    return(
        <form 
            className="login-form"
            onSubmit={props.handleSubmit}
        >
            { props.account ? 
            <legend className="login-legend">Update Admin Account</legend>
            :
            <legend className="login-legend">Admin Login</legend>
             }
            <label
                className="lgin-label lgin-row"
                htmlFor="login-email"
            >email</label>
            <input
                type="email"
                name="email"
                placeholder="email"
                title="Please provide a valid email address"
                value={props.email}
                onChange={props.handleChange}
                id="login-email"
                className="lgin-input lgin-row"
            ></input>
            <label
                className="lgin-label lgin-row"
                htmlFor="login-password"
            >{props.account ? "new password"
            : "password"}</label>
            <input
                type="password"
                name="password"
                placeholder="password"
                value={props.password}
                title="Please provide a password with at least 1 number"
                onChange={props.handleChange}
                id="login-password"
                className="lgin-input lgin-row"
            ></input>
            <button
                className="update"
                type="submit"
            >{props.account ? "Update Account"
            : "Login"}</button>
        </form>
    )
}