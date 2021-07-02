import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text} from "../elements"



const Post = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape="circle" src={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding = "16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}/>
                </Grid>
                <Grid padding= "16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            <div>user profile / user name / insert_dt</div>
            <div>contents</div>
            <div>image</div>
            <div>comment cnt</div>
            </Grid>
        </React.Fragment>
    )
}


Post.defaultProps = {
  user_info : {
      user_name : "jong",
      user_profile : "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
  },
  image_url: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
  contents: "고양이네요!",
  comment_cnt : 10,
  insert_dt: "2021-07-02 14:53:00",
};
export default Post;
