import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/appSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
   const dispatch = useDispatch();

   const signIn = () => {
      auth
         .signInWithPopup(provider)
         .then((result) => {
            dispatch(
               login({
                  username: result.user.displayName,
                  profilePic: result.user.photoURL,
                  id: result.user.uid,
               })
            );
         })
         .catch((error) => alert(error.message));
   };
   return (
      <div className='Login'>
         <div className='login_container'>
            <img
               src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX//AD///8AAAD//wDv7AD18gDW1tb8/Py9uwCXl5f4+Pg9PT3y7wDn5AD69wDi4uLu7u5paWmopgCwrgCnp6fJyckqKQBZWVnc3NxFRADh3gDV0gC4tgDAwMBjYgCmpAAuLi60tLRMTEyJhwCcmgAhISHDwQAWFQBbWgCQkJDLyQAYGBifn5+IiIg+Pj6TkQAiIQBRUAAmJiZycAB9ewB5eXk7OgBtawBUVFQNDAAyMQBmZmZKSQBfXgAfHgB9fX0tLAD1PNSGAAAJbElEQVR4nO2daVsivRKG6a5mX2yURVkURBkRd1HH5cz4/3/VseElqaQDNHQ25sr9WZI8ZqtUVdKZjMPhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcBgAlphuiHwWsrKVYEGllvmXhEZSqt3D2elJy1/S+jqdHXar/4LIHw2V3vOrL+b1uZDdb5UAwdkqdUtOzip7qxFqhf9tkLfgdJzZR42QPftIpG8+XA9r+6YR4OxXYn0Rfw73aqwCFLaSN+d9vD8aoXO1vcAfTqv7IfFngO6kL+JoHyRCVtiBg5dGPxd6C8Jcv1EfiP7szf4VB7rxFeZu0ix5cUrNyV3sb1sdyyXGl5hy8UCgbslBMdaV11ZLhCOuub+ba+QtaP7mftOzWCK/xrSPN+qLOOY02rvewCE7Pjf3H+lHdqza2oswZppZzCcW6Hn5IvPbrpUSoYPbeJlsgKKhOkW/fg8slAgVvE18bqkvoo1+/2Hhvgh4o5/sINDzblEJz9YphAvUvJudBHoenoy2LajMJNxVICvRsqkIX7RptzsL9Ly/tJhTqxRiW2aXRYaClpuCTRJrdB19EhnZySnRTePDtCoEXmbW2dlJOLZzsZGxyiyZ0MKsUYgM7rvUAr08tVGtmYnwTdqUS6/Qa5LSTixRCNeS1tEl9DBlyYEfZlK7EHfivR0Ka2SQlqUI9DwyE09Ma5sDXfIvH0pS2CAlWuFBhXvSHkkCvRIp8dAKheTY1Jal0DtfFmnHIYr8wxvSFN4si3wwLS7DnJvCzU1PyAEpM2u+E+mxIqXNjaH299gChcTqlrPdLyCHKAuWGjhdNibNyZeHnIRHFigk+/1QokKyIz5aoJAsCnJMtgXEcGuZV0g3i7RnXww9BxtXCIGCzQJvF+YVku3wUt5m4Xkh2S6yxhUSu3uwTSRmE6WnZbHGbW96/JXgwECUl8UaPwTTkNq5VIUkwm880EYD93IVni+LNR7Wpwp/O4W7KTRuev/DCpdJ6eoVGsl+j1K3C73Do951TdFaSudh9rp3dNgba00KB+hSF6mvWCFl1NGlEbrC3DxF+yHmVM/2vyq5UpFNw6Ij4AaCAapAoTA309fh54fRiqolW96rFPoXiiWiOBOPRFfbz+npcmU9ig1VWFmxP5V5Ag5X16PWr8FlH7LI9GIcrKlHaWQY0CWRabteP1elEOUr+NPzer2N8vpURoZRIM1vzKdd2Kc5PttmIyZSOL1tzkd/SCNuKo/9aCvsk8bk+/85qGV6E3OLIutNukAPSd0KjXF4XlbCGjClm7KCeXjXYPcfYgQo9INTD34skHbclClQWB4JuSkMKgK5bdcXtUoxZJi+6ejDoQGFDR19uGIe6kHLPKQbvv5hStdShVs+3g/lLiybQTaASjc4oHvLMre/zeRoxV9KrTZ8r0le6sVmkEWj2PsGf1BVbZmniXUc4KsYr4pPT+z5UE833jB1qvbVoByviDv1C84B65Q6U+/GOGUq9IuKBbJXvvyZelcUZDiJdzJPTTzHZe0CM9iyUd6NE64mXdk1sbuwZTWz8YB3uOnLbIfOCVe3CiNuyNXxqDOkD5kL5RL7XA26H86A6hfbAJn+4IgSW/yV/qts/OMQya81J6OJC38/MvIqCFSvFCrEg/TN1F1EwEEM2cspOkxcGHzWBTn5JQv08rRok7kKNdIKmQnCC9o2KERb/1C6QnokNHiFDR5IK+QfFWn46cNcwgl1TL1IF+h5n6R0U5dJ8SsKsveKCLojPhi6dYEi+nJj+EvoyclMxj52aKjoQmbTN5GDCVlavyoPOO3EdwMvgeCXPlS5TpFtqv+FBWyw/VUk0PNeaCW6L8zilIWpzDQTFpySoXfLgB6qWmWQBp/zdZo2zKtsKjZ7Sh3VpC+ZlvFEDZQK9PI4OUrXG2DMc0LKo2xM7pB6h3ekL8MkJ6rZ6zGMR2qm/jAMAeNI1BGawZE1/6uiOPTELKLqgxYLWM93QWU3QoV16O/2aNn23DK1zpSdNH46kH2bVE8PRrC9+KenpBsh5srXGeXmYmyP8tP2Aap8xElvvgkfxHiuytUIVT5//VJvKobn5aZcC2YSAzWQiaWvn+tKUqCEsQsKI1ndKMhel/m4QHJuY+2Qc/SP3yAZqDdkxDSf+KbIOFLFAr7+X9mBtOSUXuRLhCpXZFn3EsOS4yPfqdcbYD9RMdW5CYppsArTOnDYx4H9ojqHRXJKrIWTshOZKyQT/VuEmBCvqimPxSh3RlueXhJCGntLmUREp+GTaVEcZONIORFpFtuluT1CBPXfpMxrR6mIbZsk5ukoTXkhEWd2G7mCIAafNNJabtBChQ2GVuwWQ7zrf6fe8Vmj7WmiO0ef53jCGqfpfajAZXf5g6I5uy0X+6SJhLfAIHjwY9SHBs6Hw3q8IS0ZzkXovMdL9v1PvUeo5qeoEb/kpLVDVdCLUUfq2z7ygu774UGWIwMyvBdqgdqoEyZ2LJwzk/jJPeg+iqrQNRmFd9cf5WYvAIwFGnU5FPl04Uif/O/QAXRjY1WXV7/IVzxT85ALQK3HdqSuichOw8deTV1wBiAooJ6calKI4sDP40BxCBEARxD1xGboIH0NtLylhN1v543mcahuX8yHx83GOa1O140L/nLXfMCWP2+L/VDG2aMU9ou3n2U+TuErvabOKRzHK18KbU9yabo0n5u0BdL+Q9/7e8BfCmK4fNn18JF7Wf3wjq/4AjCnsLOuIf5Wn82jNFe8fkXQeu8pFszg+b1tP+bam4rU+83AtY8NLXjZxmoNxbY1RneyN3S/N7YpeYyjsbGslv4sYYDe2vUmImGcKrdpAvonhm52Qacwer46+XgQOgHmJBiqofh0O+fP9+vj26in7cFEgcbIiKplK0FQ7fYuZqKPqd+u1xjGQ9e+//1837uuBkElm60ZeNlzldKI2ngU78+X1Ze9c4IFZjaugZk3SxMRPdnKux/nXz2Om3Olg2J8/p0U7NTF8KOxFWu5P6jfEBs9sqdvRN/lflCTziUfqN3HWz/nchCxyjQbWfh51VVAIPRcrUXrZfT0/AxV0cK6mu99GaAUqPFX9tdxsUcDlALZVdORZ2TBN492AiB7IVhWOVoX2b0boAjIjN/W6nsbK3QN6gGgUpj9Eqr7NStU9l3enMj8Cnr3Vy1q0L23ru57gaV22W4szMyg043oBNZanWmx2aJ2OBwOh8PhcDgcDofD4XA4HA6Hw+FwODbyf0uOxQmFSjIlAAAAAElFTkSuQmCC
           '
               alt=''
            />
            <Button variant='outlined' onClick={signIn}>
               Sign In
            </Button>
         </div>
      </div>
   );
}

export default Login;
