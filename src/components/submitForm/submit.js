import { Box } from "@mui/material";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { mainStyle } from "../headerSection/HeaderSection";

export default function SubmitForm() {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {};

  return (
    <>
      <div style={{ color: "white", transition: "0.3s ease" }}>
        <Box
          sx={{ width: 480, height: "100%" }}
          role="presentation"
          onClick={(e) => ToggleSidebar(false)}
          className="fixed right-0 top-0 bg-white"
        >
          <div className="flex flex-col h-screen p-4">
            <div className="flex justify-end">
              <button className="text-md font-bold text-black">X</button>
            </div>
            <div className="flex flex-col items-left space-y-4 text-black">
              <h1 className="text-4xl font-bold pt-7">Get Eleiko Product Updates</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <h4>Email *</h4>
                  <Form.Control
                    type="text"
                    //value={user}
                    id="userName"
                    name="userName"
                    //onChange={(e) => setUser(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group>
                  <h4>Equipment for *</h4>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <br />
                <Form.Group>
                  <h4>First name</h4>
                  <Form.Control
                    type="password"
                    //value={password2}
                    id="password"
                    name="password"
                    //onChange={(e) => setPassword2(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group>
                  <h4>Last name</h4>
                  <Form.Control
                    type="password"
                    //value={password2}
                    id="password"
                    name="password"
                    //onChange={(e) => setPassword2(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group>
                  <h4>Preferred language</h4>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <br />
                <Form.Group>
                  <h4>Country</h4>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Sign up for newsletter" />
                </Form.Group>
                <br />
                <br />
                <br />
                <button
                  className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] border-transparent hover:opacity-75 text-white flex-grow sm:flex-none"
                  style={mainStyle}
                  onClick={() => {}}
                >
                  <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[40px] mt-[2px]">
                    Submit
                  </span>
                </button>
              </Form>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
