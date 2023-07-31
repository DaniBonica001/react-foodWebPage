import PizzaLeft from "../assets/pizzaLeft.jpg";
import { useForm } from "react-hook-form";
import '../styles/Contact.css'

function Contact() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data) => {};
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name..."
            {...register("name")}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter email..."
            {...register("email")}
          />
          <label htmlFor="name">Message</label>
          <textarea
            rows="6"
            type="text"
            placeholder="Enter message..."
            required
            {...register("message")}
          />
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
