export default function ValidateInfo(values) {
    let errors = {}

    if(!values.name.trim()) {
        errors.name = "Name required"
    }


    if(!values.email) {
        errors.email = "Email required"
    }else if(!/^[A-Z0-9._%+-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalide"
    }

    if(!values.password) {
        errors.password = "Password is required"
    } else if(values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }

    if(!values.lastname.trim()) {
        errors.lastname = "lastname required"
    }



    return errors
}