import { DotsThreeHorizontal as Settings,Heart as Like, LocationArrowOutline,Chat1,Bookmark } from '../../styles/Icons';
import styled, {css} from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    margin-bottom: 30px;
    max-width: 100%;
    background: #FAFAFA;
    @media (max-width: 639px){
        border: 0;
    }
`;

export const Header = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    align-items: center;
    padding: 16px;
    justify-content: space-between;

`;
const iconCSS = css`
    width: 28px;
    height: 28px;
    margin-right: 8px;
    curso:pointer;
    
`;
export const Icons = styled.div`
margin:4px 0px 0px;
display: flex;
justify-content: space-between;
align-items: center;

padding: 0px 16px;
width: 100%;


> div {
    cursor: pointer;
    
}
`;
export const ProfilePhoto = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;
export const MediaContent = styled.img`
    width: 100%;
    height: min(285px, max(175px,41vw));

`;
export const Comments = styled.div``;
export const CommentIcon = styled(Chat1)`${iconCSS}`;
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    margin-right: -5px;
    height: 40px;
    padding: 8px;
    cursor: pointer;
    
`;
export const LikeIcon = styled(Like)`${iconCSS}
    &,
    > svg, path {
        width: 24px;
        stroke: black;
        stroke-width: 6;
        fill: red;
        
        :active{
            
            fill: red; 
        }
        
    }


`; 
export const SettingsIcon = styled(Settings)`
    align-self: center;
    width: 16px;
    height: 16px;
    fill: rgb(38, 38, 38);
    
    
`;
export const ShareIcon = styled(LocationArrowOutline)`${iconCSS}
width: 32px;
height: 32px;`; 
export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    `;
export const ProfileDescription = styled.div`
    margin-left:12px;
    
    > p{
        
        color: black;
        font-size: 14px;
        font-weight:600;
        
    }
    > span{
        color: rgba(var(--gray),1);
        font-size: 12px;
        margin-top: 10px;

    }
`; 
export const SaveIcon = styled(Bookmark)`${iconCSS}
margin-right: -5px;

`;
export const ExternalIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Description = styled.div`
    display: flex;
    align-items: center;
    margin-left: 12px;
    padding: 0px 16px;

    > p {
        font-weight: 600;
        
    }

    > span {
        margin-left: 2px;
        font-weight: inherit;
    }

`;
