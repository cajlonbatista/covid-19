import React from "react";
import {Menu} from "antd";
import "./Menu.css";
import { HomeOutlined, WarningOutlined, GlobalOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
export default class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            current: "home"
        }
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    render(){
        return(
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu">
                <Menu.Item key="home" icon={<HomeOutlined/>}>
                    <Link to="/">Brasil</Link>
                </Menu.Item>
                <Menu.Item key="mundo" icon={<GlobalOutlined />}>
                    <Link to="/world">Mundo</Link>
                </Menu.Item>
                <Menu.Item key="covid" icon={<WarningOutlined />}>
                    <Link to="/covid-19">Dicas</Link>
                </Menu.Item>
            </Menu>
        );
    }
}