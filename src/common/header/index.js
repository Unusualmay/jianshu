import React from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Bottom,
    SearchInfo,
    SearchWrapper,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
}
    from './style';
import {Iconfont} from "../../statics/iconfont/iconfont";
import {CSSTransition} from "react-transition-group";
import {connect} from 'react-redux';
import {actionCreators} from './store'

const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>

                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
}
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Iconfont/>
            <Logo/>
            <Nav>
                <NavItem className='left active'>
                    <span className="iconfont">&#xe60c;</span>
                    首页
                </NavItem>
                <NavItem className='left'>
                    <span className="iconfont">&#xe6db;</span>
                    下载App
                </NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition in={props.focused} timeout={200} classNames="slide">
                        <NavSearch className={props.focused ? 'focused' : ''}
                                   onFocus={props.handleInputFocus}
                                   onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60d;</span>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Bottom className='writing'>
                    <span className="iconfont">&#xe708;</span>
                    写文章
                </Bottom>
                <Bottom className='reg'>注册</Bottom>
            </Addition>
        </HeaderWrapper>
    )
}
// class Header extends Component {
//     render() {
//         return (
//             <HeaderWrapper>
//                 <Iconfont/>
//                 <Logo/>
//                 <Nav>
//                     <NavItem className='left active'>
//                         <span className="iconfont">&#xe60c;</span>
//                         首页
//                     </NavItem>
//                     <NavItem className='left'>
//                         <span className="iconfont">&#xe6db;</span>
//                         下载App
//                     </NavItem>
//                     <NavItem className='right'>登录</NavItem>
//                     <NavItem className='right'>
//                         <span className="iconfont">&#xe636;</span>
//                     </NavItem>
//                     <SearchWrapper>
//                         <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
//                             <NavSearch className={this.props.focused ? 'focused' : ''}
//                                        onFocus={this.props.handleInputFocus}
//                                        onBlur={this.props.handleInputBlur}
//                             >
//                             </NavSearch>
//                             <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60d;</span>
//                         </CSSTransition>
//                     </SearchWrapper>
//
//                 </Nav>
//                 <Addition>
//                     <Bottom className='writing'>
//                         <span className="iconfont">&#xe708;</span>
//                         写文章
//                     </Bottom>
//                     <Bottom className='reg'>注册</Bottom>
//                 </Addition>
//             </HeaderWrapper>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
        // state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = actionCreators.searchFocus()
            dispatch(action)
        },
        handleInputBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
