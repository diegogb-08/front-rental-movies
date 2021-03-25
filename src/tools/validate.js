import validateSpanishID from './validate-spanish-id';

export default function validate(fields, context = 'register') {
    let errors = {};
    if (context=='login')
    for (let key in fields) {
        switch (key) {
            case 'email':
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(fields[key]) )
                errors[key] = {status: 'error', help: 'Please introduce a valid email.'};
            break;
            case 'password':
                if(fields[key] == '')
                errors[key] = {status: 'error', help: 'Please, introduce your password.'};
            break;
        }
    }
    else
    for (let key in fields) {
        switch (key) {
            case 'email':
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(fields[key]) )
                    errors[key] = {status: 'error', help: 'Please introduce a valid email.'};
            break;
            case 'name' :
                if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'Only letters are allowed in the Name field.'};
            break;
            case 'lastname' :
                if(! /^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'Only letters are allowed in the Surname field.'};
            break;
            case 'address':
                if(fields[key] == '')
                errors[key] = {status: 'error', help: 'Please provide your address.'};
            break;
            case 'phone' :
                if(! /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(fields[key])
                    && ! /^(\+34|0034|34)?[ -]*(8|9)[ -]*([0-9][ -]*){8}/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'Please provide a valid landline or mobile phone.'};
            break;
            case 'born' :
                if(! /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/.test(fields[key])
                    /*&& ! /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(fields[key])*/)
                    errors[key] = {status: 'error', help: 'Please enter a date like dd-mm-yyyy.'};
            break;
            case 'nif' :
                if(!validateSpanishID(fields[key])?.valid)
                    errors[key] = {status: 'error', help: 'Please provide a valid NIF, NIE or CIF.'};
            break;
            case 'password' :
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(fields[key]))
                    errors[key] = {status: 'error', help: 'The password must contain at least 8 characters, uppercase, lowercase, a number and some special character.'};
            break;
            case 'passwordValidation' :
                if(fields[key] == '' || fields[key] != fields.password)
                    errors[key] = {status: 'error', help: 'The password does not match the original.'};
            break;
        }
    }
    return errors;
}