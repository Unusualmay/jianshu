import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width:100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;
export const Nav = styled.div`
    height: 56px;
    width: 960px;
    margin: 0px auto;
   
`;

export const NavItem = styled.div`
    height: 56px;
    line-height: 56px;
    padding: 0 15px;
    &.left {
        float: left;
    }
    &.right {
        float: right;      
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        top: 13px;
        width: 30px;
        line-height:30px;
        border-radius: 15px;
        text-align: center;
        &.focused{
            background: #777;
        }
    }
    
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    height:38px;
    width:160px;
    padding: 0px 20px;
    border-radius: 19px;
    margin-top:9px;
    border: none;
    outline: none;
    background: #eee;
    box-sizing: border-box;
    &::placeholder {
        color: #999;
        font-size: 14px;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }   
`;

export const Addition = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    height: 56px;
`;

export const Bottom = styled.div`
    float: right;
    height: 38px;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0px 20px;
    border: 1px solid #ec6149;
    border-radius: 19px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`
