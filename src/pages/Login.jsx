import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  CameraAlt as CameraAltIcon,
  TurnedInNotTwoTone,
} from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/styledComponent.jsx";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  const [avatarUrl, setAvatarUrl] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [avatarError, setAvatarError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleAvatar = (file) => {
    if (file) {
      const validExtensions = [".jpg", ".jpeg", ".png"];
      const isValidExtension = validExtensions.some((ext) =>
        file.name.toLowerCase().endsWith(ext)
      );
      if (!isValidExtension) {
        setAvatar("");
        setAvatarError("Invalid Image")
      } else {
        setAvatar(file);
        setAvatarError("")
        const reader = new FileReader();
        reader.onload = () => {
          setAvatarUrl(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const userNameValidator = (name) => {
    if (!name) {
      setUsernameError("");
      return;
    }

    const pattern = /^[a-zA-Z0-9_@]+$/;

    if (pattern.test(name)) {
      setUsernameError("");
    } else {
      setUsernameError(
        'Usernames should only consist of letters (A-Z, a-z), numbers (0-9), underscores (_), and the "@" symbol.'
      );
    }
  };

  const passwordValidator = (password) => {
    if (!password) {
      setPasswordError("");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password should contain at least 8 characters");
      return;
    }

    let errors = [];

    if (!/[A-Z]/.test(password)) {
      errors.push("1 uppercase character");
    }

    if (!/[a-z]/.test(password)) {
      errors.push("1 lowercase character");
    }

    if (!/\d/.test(password)) {
      errors.push("1 digit");
    }

    if (!/[@$!%*?&]/.test(password)) {
      errors.push("1 special character");
    }

    if (errors.length === 0) {
      setPasswordError("");
    } else {
      setPasswordError("Password should contain at least " + errors.join(", "));
    }
  };

  return (
    <div
      style={{
        background: "rgb(84,58,233)",
        background:
          "linear-gradient(13deg, rgba(84,58,233,1) 0%, rgba(47,98,213,1) 46%, rgba(0,255,248,1) 100%)",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10vh 0",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>

                <Typography sx={{ marginTop: "1rem", textAlign: "center" }}>
                  Or
                </Typography>
                <Button
                  sx={{ marginTop: "1rem", border: "1px solid blue" }}
                  variant="secondary"
                  fullWidth
                  onClick={() => setIsLogin((val) => !val)}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSignUp}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatarUrl}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      ":hover": {
                        bgcolor: "rgba(0, 0, 0, 0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        multiple={false}
                        onChange={(e) => handleAvatar(e.target.files[0])}
                      />
                    </>
                  </IconButton>
                </Stack>
                {avatarError && (
                  <Typography
                    color="error"
                    varient="caption"
                    sx={{ textAlign: "center" }}
                  >
                    {avatarError}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value),
                      userNameValidator(e.target.value);
                  }}
                />
                {usernameError && (
                  <Typography
                    color="error"
                    varient="caption"
                    sx={{ fontSize: "0.8rem" }}
                  >
                    {usernameError}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    passwordValidator(e.target.value);
                  }}
                />
                {passwordError && (
                  <Typography
                    color="error"
                    varient="caption"
                    sx={{ fontSize: "0.8rem" }}
                  >
                    {passwordError}
                  </Typography>
                )}
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Sign Up
                </Button>

                <Typography sx={{ marginTop: "1rem", textAlign: "center" }}>
                  Or
                </Typography>
                <Button
                  sx={{ marginTop: "1rem", border: "1px solid blue" }}
                  variant="secondary"
                  color="primary"
                  fullWidth
                  onClick={() => setIsLogin((val) => !val)}
                >
                  Login in Insted
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
