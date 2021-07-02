import React from "react";
import { Text, Input, Grid, Button } from "../elements";
const Login = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Input
          placeholder="아이디를 입력해주세요"
          label="아이디"
          _onChange={() => {
            console.log("아이디 입력했오!");
          }}
        />

        <Grid padding="16px 0px">
          <Input
            placeholder="패스워드를 입력해주세요"
            label="패스워드"
            _onChange={() => {
              console.log("비밀번호입력했오!");
            }}
          />
        </Grid>
        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인햇어!");
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
