import React, { useState, useEffect, useRef} from "react"

function Newsletter(){

    // reflect if user has submitted an email 
    const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);
    
    // ref to access the "animationend" event in the DOM 
    const emailConfirmRef = useRef(null);
    
    // ref to handle email confirmation animation outside of useEffect 
    const animationRef = useRef(null);

    // execute on first component render 
    useEffect(() => {
        // add animationend listener to email confirmation
        const emailConfirm = emailConfirmRef.current;
        const handleAnimationEnd = () =>  animationRef.current();
        const emailConfirmListener = emailConfirm.addEventListener("animationend", handleAnimationEnd);
        // clean up 
        return () => emailConfirm.removeEventListener('animationend', emailConfirmListener);
    },[]);

    // execute every render 
    useEffect(() => {
        animationRef.current = toggleEmailAnimation
    });

    // handle email animation 
    const toggleEmailAnimation = () => setShowEmailConfirmation(false)

    // handle user email submission 
    const handleSubmit = (e) => {
        // prevent page refresh 
        e.preventDefault(); 
        // get email 
        const emailInput = e.target[0];
        // would send email to for server-side handling here 
        // *************************************************
        // clear email field 
        emailInput.value = "";
        // show confirmation to user
        setShowEmailConfirmation(true);
    }

    return(
        <section id="newsletter" aria-label="Sign up for Citron Cafe's newsletter">
            <h2>keep in touch.</h2>
            <p>receive our weekly newsletter to know about our menu specials and launches.</p>
            <form onSubmit={handleSubmit} >
                <label for="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="your email"
                    disabled={showEmailConfirmation}
                    required
                />
                <label for="submit">Submit</label>
                <input 
                    type="submit" 
                    id="submit" 
                    value="join"
                    disabled={showEmailConfirmation}
                />
            </form>
                <p  
                    ref={emailConfirmRef}
                    className={showEmailConfirmation ? "email-animation" : ""}
                    id="email-confirmation"
                    role="status"
                    >Your email has been received. Thanks for joining!
                </p> 
        </section>
    )
}
export default Newsletter