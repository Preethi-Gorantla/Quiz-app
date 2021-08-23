import React, { useState ,useRef,useEffect,useReducer,useContext} from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state,action) =>{
  if(action.type === "USER_INPUT")
  {
      return {value:action.val,isValid:action.val.includes('@')}
  }
  if(action.type === "INPUT_BLUR")
  {
    return {value:state.value,isValid:state.value.includes('@')}
  }
};

const passwordReducer = (state,action) => {
  if(action.type === "USER_INPUT")
  {
    return {value:action.val,isValid:action.val.trim().length>6}
  }
  if(action.type === "INPUT_BLUR")
  {
    return {value:state.value,isValid:state.value.trim().length>6}
  }
};

const Login = (props) => {

  const [emailState,dispatchEmail]= useReducer(emailReducer,{value:"",isValid:undefined});
  const [passwordState,dispatchPswd] = useReducer(passwordReducer,{value:"",isValid:undefined});
  const [formIsValid, setFormIsValid] = useState(false);
  const {isValid: emailIsValid} = emailState;
  const {isValid:passwordIsValid} = passwordState;

  useEffect(() =>{
    const identifier = setTimeout(() => {
    console.log("check for validity");
    setFormIsValid(
    emailState.isValid && passwordState.value.trim().length > 6);
  },500);
  return () => {console.log("clean up");
                clearTimeout(identifier);
  }},[emailIsValid ,passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT",val:event.target.value});
    
  };

  const passwordChangeHandler = (event) => {
    dispatchPswd({type:"USER_INPUT",val:event.target.value});
    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
   dispatchEmail({type:"INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchEmail({type:"INPUT_BLUR",})
  };
  const emailInputRef = useRef();
  const passwordInputRef=useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
    authCtx.onLogin(emailState.value, passwordState.value);
    }
    else if(!emailIsValid){
        emailInputRef.current.activate();
    }else{
        passwordInputRef.current.activate();
    }  
  };
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} id="email" label="E-Mail" type="email" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
        <Input ref={passwordInputRef} id="password" label="Password" type="password" isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
