import React, { useEffect, useState } from "react";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeUser } from "../../store/user/actions";
import { Container, Form, Col, Button } from "react-bootstrap";
import { appLoading } from "../../store/appState/actions";

export default function Profiel() {
  const [frontName, setFrontName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [totaalToto, setTotaalToto] = useState();
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  if (!user.email) return dispatch(appLoading());

  console.log("What is user?", user.id);

  // console.log(
  //   "What is my passing body?",
  //   userName,
  //   email,
  //   frontName,
  //   lastName,
  //   phone,
  //   totaalToto,
  //   password
  // );

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      changeUser(
        user.id,
        userName,
        user.email,
        frontName,
        lastName,
        phone,
        totaalToto
        // password
      )
    );
    setPassword("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Profiel</h1>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>Voornaam</Form.Label>
          <Form.Control
            defaultValue={user.frontName}
            type="text"
            onChange={(event) => setFrontName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Achternaam</Form.Label>
          <Form.Control
            defaultValue={user.lastName}
            type="text"
            onChange={(event) => setLastName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control
            defaultValue={user.username}
            type="text"
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Emailadres</Form.Label>
          <Form.Control defaultValue={user.email} type="email" required />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Telefoonnummer</Form.Label>
          <Form.Control
            defaultValue={user.phoneNumber}
            type="tel"
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicToto">
          <Form.Label>Ik doe mee met de totaaltoto</Form.Label>
          <Form.Control
            defaultChecked={user.totaalToto}
            type="checkbox"
            onChange={(event) => setTotaalToto(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Wachtwoord</Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Wachtwoord"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sla mijn profiel op
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
