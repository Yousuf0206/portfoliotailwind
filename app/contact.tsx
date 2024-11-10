import React from 'react'

const Contact=() => {
  return (
 <div>   
<main >
<h1>Contact Me</h1>
<p>If you would like to get in touch, please reach out through the form below.</p>

<form className= "form">
<label htmlFor="name">Name:</label>
<input type="text" id="name" name="name" />
<br />
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" />
<br />
<label htmlFor="message">Message:</label>
<textarea id="message" name="message" />
<br />
<input type="submit" value="Send" />
</form>
</main>
</div>
)
}
export default Contact