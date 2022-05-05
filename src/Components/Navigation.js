import "./Navigation.css";
import Button from "@mui/material/Button";

export default function Navigation() {
  const clickHandler = (event) => {
    event.preventDefault();
    console.log("Hello from MUI Btn");
  };
  return (
    <div>
      <Button onClick={clickHandler} variant="contained">
        Hello world
      </Button>
    </div>
  );
}
