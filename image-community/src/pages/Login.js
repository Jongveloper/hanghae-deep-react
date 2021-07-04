import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCooke, deleteCookie, setCookie } from "../shared/Cookie";

import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPWD] = React.useState("");
  const login = () => {

    console.log(id);
    
    // aa_aa@aa.com
    let _reg = /^[0-9a0zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;
    
    console.log(_reg.test(id));

    if(id ==="" || pwd === ""){
      // window.alert("아이디 혹은 비밀번호가 공란입니다. 입력해주세요!")
      return;
    }
    if(!emailCheck(id)){
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    dispatch(userActions.loginFB(id, pwd));

  };


  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Input
          placeholder="아이디를 입력해주세요"
          label="아이디"
          _onChange={(e) => {
            setId(e.target.value);
          }}
        />

        <Grid padding="16px 0px">
          <Input
            placeholder="패스워드를 입력해주세요"
            type="password"
            label="패스워드"
            _onChange={(e) => {
              setPWD(e.target.value);
            }}
          />
        </Grid>
        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인햇어!");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
