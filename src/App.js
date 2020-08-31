//Standard Imports
import React from 'react';
import './App.css';

//Import ant-d for design and react router for routing
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Import Static Components
import Stepdose from './components/step-dose.component.js';
import Flatdose from './components/flat-dose.component.js';
import Weightdose from './components/weight-based.component.js';
import Home from './components/home.component.js';

import Excipientexposure from './components/excipient-exposure.component.js';
import Minimumps20 from './components/minimum-ps20.component.js'
import RelevantAAPH from './components/relevant-aaph.component.js'


const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return(
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Home
                <Link to='/' />
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                Weight-Based Dosing
                <Link to='/weightdose' />
              </Menu.Item>
              <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                Flat Dosing
                <Link to='/flatdose' />
              </Menu.Item>
              <Menu.Item key="4" icon={<UploadOutlined />}>
                Step-Dosing
                <Link to='/stepdose' />
              </Menu.Item>
              <Menu.Item key="5" icon={<UploadOutlined />}>
                Excipient Exposure
                <Link to='/excipient-exposure' />
              </Menu.Item>
              <Menu.Item key="6" icon={<UploadOutlined />}>
                Minimum PS20
                <Link to='/minimum-ps20' />
              </Menu.Item>
              <Menu.Item key="7" icon={<UploadOutlined />}>
                Relevant AAPH
                <Link to='/relevant-aaph' />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            
            >
              <Route exact path='/' component={Home} />
              <Route path='/stepdose' component={Stepdose} />
              <Route path='/flatdose' component={Flatdose} />
              <Route path='/weightdose' component={Weightdose} />
              <Route path='/excipient-exposure' component={Excipientexposure} />
              <Route path='/minimum-ps20' component={Minimumps20} />
              <Route path='/relevant-aaph' component={RelevantAAPH} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }



}

export default App;
