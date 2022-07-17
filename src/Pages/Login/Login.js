import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <div
          class="site-blocks-cover overlay inner-page-cover"
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div class="container">
            <div class="row align-items-center justify-content-center text-center">
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <h1 class="text-white">Login / Register</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container" data-aos="fade-up">
          <div class="row justify-content-center">
            <div class="col-md-5 mb-5">
              <h3 class="mb-5">Register</h3>
              <form action="#" method="post" class="bg-white">
                <div class="">
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_fname" class="text-black">
                        Username <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_fname"
                        name="c_fname"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_email" class="text-black">
                        Email <span class="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="c_email"
                        name="c_email"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_pass" class="text-black">
                        Password <span class="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="c_pass"
                        name="c_pass"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_repass" class="text-black">
                        Re-type Password <span class="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="c_repass"
                        name="c_repass"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-lg-12">
                      <input
                        type="submit"
                        class="btn btn-primary btn-lg"
                        value="Register"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-5 mb-5">
              <h3 class="mb-5">Login</h3>
              <form action="#" method="post" class="bg-white">
                <div class="">
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_uname" class="text-black">
                        Username <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_uname"
                        name="c_uname"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_password" class="text-black">
                        Password <span class="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="c_password"
                        name="c_password"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-lg-12">
                      <input
                        type="submit"
                        class="btn btn-primary btn-lg"
                        value="Login"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
