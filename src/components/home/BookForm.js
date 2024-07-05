import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { navigate } from "gatsby";
import "../../assets/css/clinic/contact.css";
import CryptoJS from "crypto-js";
import { base_url } from "../../Utilities/Constants";
import CustomPhoneInput from "./CustomPhoneInput";

export default function BookForm({ queryData }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, SetisLoading] = useState(false);
  const [Otp, setOtp] = useState("");
  const [otpVerification, setOtpVerification] = useState(false);
  const [EncryptedOtp, setEncryptedOtp] = useState("");
  //ip address state
  const [ipAddress, setIpAddress] = useState("");
  const [statusId, setStatusId] = useState("");
  const [errorMessageOtp, setErrorMessageOtp] = useState("");
  const [phone, setPhone] = useState("+91");

  console.log("ipAddress", ipAddress);

  //get ip address
  useEffect(() => {
    const fetchIpInfo = async () => {
      try {
        const response = await axios.get("https://geolocation-db.com/json/");
        setIpAddress(response?.data?.IPv4);
      } catch (error) {
        console.error("Error fetching IP information:", error);
      }
    };

    fetchIpInfo();
  }, []);

  const handleFormSubmit = async (values, formik) => {
    SetisLoading(true);

    try {
      if (values.otp === "" && values.phone_number !== "") {
        const randomNum = Math.floor(1000 + Math.random() * 9000).toString();
        const otp = randomNum;
        const encryptedOtp = CryptoJS.AES.encrypt(
          randomNum,
          "otpSecret"
        ).toString();
        localStorage.setItem("otp", encryptedOtp);

        const response = await axios.post(
          `${base_url}/varam_register`,
          {
            name: values.fullname,
            email: values.email,
            country_code: phone,
            mobile: values.phone_number,
            otp: otp,
            ip: ipAddress,
            message: values.message,
            source: queryData ? queryData.utm_source : "direct",
            medium: queryData ? queryData.utm_medium : "direct",
            campaign: queryData ? queryData.utm_campaign : "direct",
          },
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization:
                "3d32444a96d5a1516ab7b916f39ac793ed14735f7da6ab9a709c94d19a6d4062291615ce6cd83155b6267d0637e020838cda46e6a88456a312f7e5d611ca3a2f",
            },
          }
        );
        if (queryData) {
          window.populateHiddenFields(
            queryData.utm_source,
            queryData.utm_medium,
            queryData.utm_campaign
          );
        }
        formik.resetForm();

        console.log("response", response);

        if (response.status === 200) {
          SetisLoading(false);
          setOtp(otp);
          setOtpVerification(true);
          if (queryData) {
            window.populateHiddenFields(
              queryData.utm_source,
              queryData.utm_medium,
              queryData.utm_campaign
            );
          }
          formik.resetForm();
          const id = response.data.id;
          console.log("ID:", id);
          setStatusId(id);
        } else if (response.status === 201) {
          navigate("/thankyou");
        }
      }
    } catch (err) {
      SetisLoading(false);
      console.log("err", err);
      if (err.response && err.response.status === 409) {
        setErrorMessage(err.response.data.error.message);
      }
    }
    // const otp = generateOTP();
    // const encryptedOtp = CryptoJS.AES.encrypt(otp, "otpSecret").toString();
    // localStorage.setItem("otp", encryptedOtp);
    // setOtp(otp);
    // setEncryptedOtp(encryptedOtp);
    // setOtpVerification(true);
  };
  const handleOTPSubmit = async (enteredOTP) => {
    try {
      const storedEncryptedOtp = localStorage.getItem("otp");
      const decryptedBytes = CryptoJS.AES.decrypt(
        storedEncryptedOtp,
        "otpSecret"
      );
      const storedOTP = decryptedBytes.toString(CryptoJS.enc.Utf8);

      if (enteredOTP === storedOTP) {
        const response = await axios.post(
          `${base_url}/varam_status_update`,
          {
            id: statusId,
          },
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization:
                "3d32444a96d5a1516ab7b916f39ac793ed14735f7da6ab9a709c94d19a6d4062291615ce6cd83155b6267d0637e020838cda46e6a88456a312f7e5d611ca3a2f",
            },
          }
        );
        console.log("0001", response);
        if (response.status === 201) {
          navigate("/thankyou");
        }
      } else {
        setErrorMessageOtp("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("error", error);
      setErrorMessageOtp("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <>
      <div className="contactFormSection">
        <h2 className="form-header">BOOK AN APPOINTMENT</h2>
        <div className="contact__form">
          <Formik
            initialValues={{
              fullname: "",
              email: "",
              country_code: "",
              phone_number: "",
              otp: "",
              message: "",
              source: queryData ? queryData.utm_source : "direct",
              medium: queryData ? queryData.utm_medium : "direct",
              campaign: queryData ? queryData.utm_campaign : "direct",
            }}
            enableReinitialize
            validateOnBlur={true}
            validateOnChange={true}
            validationSchema={yup.object({
              fullname: yup
                .string()
                .required("Name is Required")
                .matches(/^[A-Za-z\s]+$/, "Name should contain only letters"),
              email: yup
                .string()
                .required("Email is Required")
                .email("Invalid email address"),
              phone_number: yup
                .string()
                .required("Phone is Required")
                .matches(/^\d{10}$/, "Invalid Phone Number"),
              message: yup.string().required("Message is Required"),
            })}
            onSubmit={handleFormSubmit}
            // onSubmit={async (values, formik) => {
            //   SetisLoading(true);
            //   const formData = new FormData();
            //   formData.append("name", values.fullname);
            //   formData.append("email", values.email);
            //   formData.append("mobile", values.phone_number);
            //   formData.append(
            //     "source",
            //     queryData ? queryData.utm_source : "direct"
            //   );
            //   formData.append(
            //     "medium",
            //     queryData ? queryData.utm_medium : "direct"
            //   );
            //   formData.append(
            //     "campaign",
            //     queryData ? queryData.utm_campaign : "direct"
            //   );

            //   try {
            //     const submitResponse = await axios
            //       .post
            //       // "https://noblerobotic.prodmirror.com/index.php",
            //       // "https://mgmcancerinstitute.in/backend/clinicb.php",
            //       // formData,
            //       // // {
            //       // //   name: values.fullname,
            //       // //   email: values.email,
            //       // //   mobile: values.phone_number,
            //       // //   source: queryData ? queryData.utm_source : "direct",
            //       // //   medium: queryData ? queryData.utm_medium : "direct",
            //       // //   campaign: queryData ? queryData.utm_campaign : "direct",
            //       // // },
            //       // {
            //       //   headers: {
            //       //     Accept: "*/*",
            //       //     "Content-Type": "application/formData",
            //       //     Authorization:
            //       //       "628928790b0f445e82ed0857895ab9b47ad90d0ce17eec0eacad367f2b1a755ea99bcc965535d81f7c2e069e9f32c00f440395f9689805bd507a247605486354",
            //       //   },
            //       // }
            //       ();
            //     setOtp(generateOTP());
            //     setOtp(generateOTP());
            //     setEncryptedOtp(
            //       CryptoJS.AES.encrypt(otp, "otpSecret").toString()
            //     );
            //     setOtpVerification(true);
            //     if (queryData) {
            //       window.populateHiddenFields(
            //         queryData.utm_source,
            //         queryData.utm_medium,
            //         queryData.utm_campaign
            //       );
            //     }
            //     formik.resetForm();

            //     // if (submitResponse.data.status_code === 201) {
            //     //   SetisLoading(false);
            //     //   setOtp(generateOTP());
            //     //   setOtp(generateOTP());
            //     //   setEncryptedOtp(
            //     //     CryptoJS.AES.encrypt(otp, "otpSecret").toString()
            //     //   );
            //     //   setOtpVerification(true);
            //     //   if (queryData) {
            //     //     window.populateHiddenFields(
            //     //       queryData.utm_source,
            //     //       queryData.utm_medium,
            //     //       queryData.utm_campaign
            //     //     );
            //     //   }
            //     //   formik.resetForm();
            //     // }
            //   } catch (err) {
            //     SetisLoading(false);
            //     console.log("err", err);
            //     if (err.response && err.response.status === 401) {
            //       setErrorMessage("Email and Phone Already Registered");
            //     }
            //   }
            // }}
          >
            {(formik) => {
              return !otpVerification ? (
                <div className="form-wrapper">
                  <div className="row cgpinputs">
                    <div className="col-md-12">
                      <div className="bannerInput">
                        <input
                          type="text"
                          name="fullname"
                          id="fullname"
                          className="form-control"
                          onChange={formik.handleChange("fullname")}
                          onBlur={formik.handleBlur("fullname")}
                          placeholder="Name: "
                        />

                        {formik.touched.fullname && formik.errors.fullname && (
                          <p className="err">{formik.errors.fullname}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bannerInput flexRow mb-2">
                        <CustomPhoneInput
                          defaultCountry="IN"
                          value={phone}
                          name="country_code"
                          id="country_code"
                          onChange={(phone) => setPhone(phone)}
                          readOnly={true}
                          className="countrycode__input"
                        />
                        <input
                          type="tel"
                          name="phone_number"
                          id="phone_number"
                          className="form-control phon-input mb-0"
                          maxLength={10}
                          onBlur={formik.handleBlur("phone_number")}
                          placeholder="Mobile:"
                          onKeyDown={(e) => {
                            // Allow numeric characters and the backspace key
                            if (
                              !/[\d\b]/.test(e.key) &&
                              e.key !== "Delete" &&
                              e.key !== "Backspace"
                            ) {
                              e.preventDefault();
                            }
                          }}
                          onChange={(e) => {
                            // Limit input to 10 digits
                            const numericValue = e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10);
                            formik.setFieldValue("phone_number", numericValue);
                          }}
                        />
                      </div>
                      {formik.touched.phone_number &&
                        formik.errors.phone_number && (
                          <p className="err">{formik.errors.phone_number}</p>
                        )}
                    </div>
                    <div className="col-md-12">
                      <div className="bannerInput">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          onChange={formik.handleChange("email")}
                          onBlur={formik.handleBlur("email")}
                          placeholder="Email:"
                        />

                        {formik.touched.email && formik.errors.email && (
                          <p className="err">{formik.errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bannerInput">
                        <textarea
                          placeholder="Mesaage"
                          rows={3}
                          name="message"
                          id="message"
                          className="form-control"
                          onChange={formik.handleChange("message")}
                          onBlur={formik.handleBlur("message")}
                        />

                        {formik.touched.message && formik.errors.message && (
                          <p className="err">{formik.errors.message}</p>
                        )}
                      </div>
                    </div>

                    <input
                      type="hidden"
                      id="input_4_17"
                      name="source"
                      value=""
                    />
                    <input
                      type="hidden"
                      id="input_4_19"
                      name="medium"
                      value=""
                    />
                    <input
                      type="hidden"
                      id="input_4_20"
                      name="campaign"
                      value=""
                    />
                    <div className="col-12 ">
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-lg formSubmit__btn"
                          onClick={formik.handleSubmit}
                          disabled={isLoading} // Disable the button when isLoading is true
                        >
                          {isLoading ? "Submitting..." : "SUBMIT"}
                        </button>
                      </div>
                      <div>
                        {errorMessage && (
                          <p className="err text-center pb-4 pt-4">
                            {errorMessage}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bannerInput">
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      value={formik.values.otp}
                      onChange={(e) => {
                        formik.setFieldValue("otp", e.target.value);
                      }}
                      className="form-control"
                      placeholder="Enter Otp"
                    />
                  </div>
                  <button
                    className="btn btn-lg formSubmit__btn"
                    onClick={() => handleOTPSubmit(formik.values.otp)}
                  >
                    Submit OTP
                  </button>
                  <div>
                    {errorMessageOtp && (
                      <p className="err text-center pb-4">{errorMessageOtp}</p>
                    )}
                  </div>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}
