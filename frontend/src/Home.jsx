import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const { data: { key } } = await axios.get("http://www.localhost:8800/api/getkey")
    const {
      data: { order },
    } = await axios.post("http://localhost:8800/api/checkout", {
      amount,
    });
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "sns",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:8800/api/paymentverification",
      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  const razor = new window.Razorpay(options);
  razor.open();

  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems="center"
        justifyContent="center"
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxtYWNib29rfGVufDB8fHx8MTY4NzUxMjcwOA&ixlib=rb-4.0.3&q=80&w=1080"
          }
          checkoutHandler={checkoutHandler}
        />

        <Card
          amount={60000}
          img={
            "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGlwaG9uZXxlbnwwfHx8fDE2ODc1MTI3MTU&ixlib=rb-4.0.3&q=80&w=1080"
          }
          checkoutHandler={checkoutHandler}
        />

        <Card
          amount={40000}
          img={
            "https://images.unsplash.com/photo-1593642634443-44adaa06623a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHBsYXlzdGF0aW9uJTIwNXxlbnwwfHx8fDE2ODc1MTI3MjA&ixlib=rb-4.0.3&q=80&w=1080"
          }
          checkoutHandler={checkoutHandler}
        />

        <Card
          amount={7000}
          img={
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          }
          checkoutHandler={checkoutHandler}
        />

        <Card
          amount={120000}
          img={
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
