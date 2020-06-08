import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Bottom, SearchWrapper} from './style';
import {Iconfont} from "../../statics/iconfont/iconfont";
import {CSSTransition} from "react-transition-group";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: true
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }

    render() {
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
                        <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
                            <NavSearch className={this.state.focused ? 'focused' : ''}
                                       onFocus={this.handleInputFocus}
                                       onBlur={this.handleInputBlur}
                            >
                            </NavSearch>
                            <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60d;</span>
                        </CSSTransition>
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

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;
