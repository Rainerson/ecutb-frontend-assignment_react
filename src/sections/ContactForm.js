import React, { useState } from 'react'

const ContactForm = () => {

    const [contactForm, setContactForm] = useState({ name: '', email: '', comment: '' })
    const [formErrors, setFormErrors] = useState({})
    const regex_email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const [canSubmit, setCanSubmit] = useState(false)


    // returnerar en error lista
    const validate = (values) => {
        const errors = {}

        if (!values.name)
            errors.name = "You must enter a name"
        if (values.name.length < 3)
            errors.name = "A name must be more than 2 characters"
        if (/\d/.test(values.name))
            errors.name = "A name cannot contain numbers"

        if (!values.email)
            errors.email = "You must enter an email"
        else if (!regex_email.test(values.email))
            errors.email = "You must enter a valid email adress"

        if (!values.comment)
            errors.comment = "You must enter a comment"
        if (values.comment.length < 5)
            errors.comment = "A comment must be more than 5 characters"


        return errors
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setContactForm({ ...contactForm, [id]: value })

    }

    
    const handleNumber = (e) => {
        const errors = {}

        if (/\d/.test(e.target.value)) {
            errors.name  = "Name cannot contain numbers"
            e.target.style.color = "red"}
        else 
        e.target.style.color = "var(--color-dark)"                
        
        setFormErrors(errors)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = contactForm.name
        const email = contactForm.email
        const comments = contactForm.comment


        // Stoppar in kontaktformuläret i validate
        // "Set:ar" de errors som finns i formErrors som skrivs ut till användaren
        setFormErrors(validate(contactForm))

        const errors = validate(contactForm)

        if (errors.name && errors.email && errors.comment) {
            console.log("Fel finns")
        } else {

            let json = JSON.stringify({ name, email, comments })
            console.log(json)

            fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: json
            })
                .then(res => {
                    console.log(res.status)

                    if (res.status === 200) {
                        setCanSubmit(true)
                    } else
                        setCanSubmit(false)
                })


        }
    }


    return (
        <>

            <div className="form-div">
                <div className="container">
                    <p>Come in Contact with Us</p>

                    {
                        canSubmit ? (<div className='d-flex justify-content-center align-items-center'>Thank you for your comment!</div>)
                            :
                            (
                                <>

                                    <form onSubmit={handleSubmit} noValidate>
                                        <div>
                                            <input id="name" onKeyUp={handleNumber} type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange}></input>
                                            <div id="name-error" className="error">{formErrors.name}</div>
                                        </div>

                                        <div>
                                            <input id="email" type="email" placeholder="Your mail" value={contactForm.email} onChange={handleChange}></input>
                                            <div id="email-error" className="error">{formErrors.email}</div>
                                        </div>

                                        <div className="textarea">
                                            <textarea id="comment"placeholder="Comment" value={contactForm.comment} onChange={handleChange}></textarea>
                                            <div id="comment-error" className="error">{formErrors.comment}</div>
                                        </div>

                                        <button type="submit" className="btn-theme">
                                            <span className="corner-topLeft"></span>
                                            <span className="corner-bottomRight"></span>
                                            Send
                                        </button>

                                    </form>

                                </>
                            )
                    }

                </div>
            </div>

        </>
    )
}

export default ContactForm