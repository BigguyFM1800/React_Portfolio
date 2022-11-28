

const BasicExample = () => {
    const handleSubmit = () => {

    }

    const handleChangeInput = () => {

    }

  return (
    <section className="contact-section">
        <div className="box">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="wrapper">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <div className="contact-wrap w-100 p-lg-5 p-4">
                                    <h3 className="mb-4">Send me an email</h3>
                                    <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="firstname" placeholder="Firstname" onChange={handleChangeInput}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="lastname" placeholder="Lastname" onChange={handleChangeInput}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="firstname" placeholder="Email" onChange={handleChangeInput}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea type="text" className="form-control" placeholder="Message" onChange={handleChangeInput}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default BasicExample;