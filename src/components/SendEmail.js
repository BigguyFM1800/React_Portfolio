

const SendEmail = () => {

  return (
    
    <>
    <section className="flex flex-col w-96">
    <form action="https://formsubmit.co/fm.raphalalani29@gmail.com" method="POST">
        <input type="text" placeholder="Firstname" name="firstname" class="input input-bordered input-primary w-96 max-w-7xl my-4" required/>
        <input type="text" placeholder="Lastname" name="lastname" class="input input-bordered input-primary w-full max-w-7xl my-4" required/>
        <input type="email" placeholder="Email" name="email" class="input input-bordered input-primary w-full max-w-7xl my-4" required/>
        <input type="hidden" name="_subject" value="React Portfolio Website Submission"></input>
        <textarea name="message" class="textarea textarea-primary w-full max-w-7xl my-4" rows="5" placeholder="Meassage" required></textarea>
        <button type="submit" class="btn btn-outline sendemail-btn w-full">Button</button>
    </form> 
    </section>
    </>
  );
};

export default SendEmail;