const { sign } = require("jsonwebtoken");

exports.createAccessToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
  };
  return sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "20m",
  });
};

exports.createEmailVerificationToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  return sign(payload, process.env.EMAIL_VERIFICATION_TOKEN_SECRET, {
    expiresIn: "10m",
  });
};

exports.sendAccessToken = (accessToken, res) => {
  res.status(200).send({
    accessToken,
  });
};
