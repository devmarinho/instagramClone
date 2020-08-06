import React from 'react';
import ProfilePhotoImage from '../../assets/foto.png'
import MediaImage from '../../assets/logo512.png';
 import { Container,
    Header,
    Icons,
    Button,
    Description,
    ExternalIcons,
    ProfileInfo,
    ProfilePhoto,
    ProfileDescription,
    MediaContent, 
    Comments,
    CommentIcon,
    LikeIcon,
    SettingsIcon,
    ShareIcon, 
    SaveIcon} from './styles';

const Posts: React.FC = () => {



  return (
      <Container>
          <Header>
              <ProfileInfo>
                <ProfilePhoto src={ProfilePhotoImage}/>
                <ProfileDescription>
                    <p>pedromarinh_</p>
                    <span>Fortaleza, Ceará</span>
                </ProfileDescription>
              </ProfileInfo>
                <SettingsIcon/>
          </Header>
          <MediaContent src={MediaImage}/>
          <Icons>
              <ExternalIcons>
                <LikeIcon/>
                <CommentIcon/>
                <ShareIcon/>
              </ExternalIcons>
                <SaveIcon/>
         </Icons>
          <Description>
              <p>pedromarinh_ </p>
              <span>Um código, 1001 utilidades.</span>
          </Description>
          <Comments/>

      </Container>
  )
}

export default Posts;