import React from "react";

const Header = () => {
  const apiKey = "ADSNfuAiMRbRpMT9P6Y94aAppKl5BSqM";
  var myHeaders = new Headers();
  myHeaders.append("apikey", apiKey);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    "https://api.apilayer.com/currency_data/change?start_date={start_date}&end_date={end_date}",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return <div>Header</div>;
};

export default Header;
