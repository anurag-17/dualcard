import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";
import { useAlert } from "react-alert";
import { Loader } from "../component/Loader";

export const Register = () => {
  const { loading, isAuthenticated, user, error} = useSelector(
    (state) => state.user
  );
  // const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setInputvalue({ ...inputvalue, [name]: value });
    console.log(inputvalue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("username", inputvalue.username);
    myForm.set("email", inputvalue.email);
    myForm.set("password", inputvalue.password);
    dispatch(register(inputvalue));

    setInputvalue({
      username: "",
      email: "",
      password: "",
    });

    if (error) {
     alert(error.message)
    }
  };
  useEffect(() => {
    if (error) {
      alert.error(error.message);
    } else if (isAuthenticated) {
      alert.success("Signup Successfull");
    }
  }, [error, alert, isAuthenticated, navigate]);

  if (localStorage.getItem("nftuser")) {
    navigate("/DuelSomeone");
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <div className={styles.signup_container}>
              <div className={styles.signup_form_container}>
                <div className={styles.left}>
                  <h1>Welcome Back</h1>
                  <Link to="/login">
                    <button type="button" className={styles.white_btn}>
                      Login
                    </button>
                  </Link>
                </div>
                <div className={styles.right}>
                  <form
                    className={styles.form_container}
                    onSubmit={handleSubmit}
                  >
                    <h1>Create Account</h1>
                    <input
                      type="name"
                      placeholder="username"
                      name="username"
                      onChange={handleChange}
                      value={inputvalue.username}
                      required
                      className={styles.input}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={inputvalue.email}
                      required
                      className={styles.input}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      value={inputvalue.password}
                      required
                      className={styles.input}
                    />

                    <button type="submit" className={styles.green_btn}>
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
};
